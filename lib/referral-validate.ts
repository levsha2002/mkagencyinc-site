// Validation + normalisation for /api/referral-lead. Pure functions (no I/O),
// so they can be unit-tested without a server, database or email provider.
import {
  LANGS,
  LANG_NAME_EN,
  PARTNER_TYPES,
  PARTNER_TYPE_EN,
  isEmail,
  normalizeUsPhone,
  pickLang,
  type Lang,
  type PartnerType,
} from '@/lib/referral-program';

const str = (v: unknown, max = 200) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

/** A row for the shared `leads` table plus the extra detail lines used in the
 *  email / Telegram alert. */
export type ReferralLead = {
  kind: 'referral' | 'partner';
  /** leads.insurance_type */
  insuranceType: string;
  /** leads.source: 'referral' | 'partner' */
  source: 'referral' | 'partner';
  /** leads.name / phone / email: the person the agency should contact */
  name: string;
  phone: string;
  email: string;
  /** leads.lang: the language to use with that person */
  lang: Lang;
  /** leads.message: human-readable summary of every field */
  message: string;
  /** label/value rows for notifications */
  details: Array<[string, string]>;
};

export type ValidationResult = { ok: boolean; error?: string; lead?: ReferralLead };

function fmtPhone(d: string) {
  return d ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}` : '';
}

export function validateReferralBody(b: Record<string, unknown>): ValidationResult {
  if (!b || typeof b !== 'object') return { ok: false, error: 'invalid body' };
  // Server-side consent guard: never trust the frontend alone.
  if (b.consent !== true || !str(b.consent_text, 3000)) return { ok: false, error: 'consent required' };

  const pageLang = pickLang(str(b.lang, 5));

  if (b.kind === 'referral') {
    const referrerName = str(b.referrer_name);
    const referrerContactRaw = str(b.referrer_contact);
    const friendName = str(b.friend_name);
    const friendPhone = normalizeUsPhone(b.friend_phone);
    const friendLang = str(b.friend_lang, 5) as Lang;
    if (!referrerName || !friendName) return { ok: false, error: 'missing fields' };
    if (!friendPhone) return { ok: false, error: 'invalid friend phone' };
    const referrerPhone = normalizeUsPhone(referrerContactRaw);
    if (!referrerPhone && !isEmail(referrerContactRaw)) return { ok: false, error: 'invalid referrer contact' };
    if (!LANGS.includes(friendLang)) return { ok: false, error: 'invalid language' };
    const referrerContact = referrerPhone ? fmtPhone(referrerPhone) : referrerContactRaw.toLowerCase();

    const details: Array<[string, string]> = [
      ['Referred by', referrerName],
      ['Referrer contact', referrerContact],
      ['Friend prefers', LANG_NAME_EN[friendLang]],
      ['Consent', "Given by the referrer on the friend's behalf. Confirm with the friend on the first call."],
    ];
    return {
      ok: true,
      lead: {
        kind: 'referral',
        insuranceType: 'Referral',
        source: 'referral',
        name: friendName,
        phone: fmtPhone(friendPhone),
        email: '',
        lang: friendLang,
        message: `Referral from ${referrerName} (${referrerContact}). Friend prefers ${LANG_NAME_EN[friendLang]}. Page language: ${pageLang}.`,
        details,
      },
    };
  }

  if (b.kind === 'partner') {
    const businessName = str(b.business_name);
    const businessType = str(b.business_type, 40) as PartnerType;
    const name = str(b.name);
    const phone = normalizeUsPhone(b.phone);
    const emailRaw = str(b.email);
    const langs = (Array.isArray(b.languages) ? b.languages : []).filter((l): l is Lang =>
      LANGS.includes(l as Lang)
    );
    if (!businessName || !name) return { ok: false, error: 'missing fields' };
    if (!PARTNER_TYPES.includes(businessType)) return { ok: false, error: 'invalid business type' };
    if (!phone) return { ok: false, error: 'invalid phone' };
    if (emailRaw && !isEmail(emailRaw)) return { ok: false, error: 'invalid email' };
    const langsText = langs.length ? langs.map((l) => LANG_NAME_EN[l]).join(', ') : 'not specified';

    const details: Array<[string, string]> = [
      ['Business', businessName],
      ['Business type', PARTNER_TYPE_EN[businessType]],
      ['Languages served', langsText],
      ['Terms shown', 'No referral fees, gifts or payments of any kind'],
    ];
    return {
      ok: true,
      lead: {
        kind: 'partner',
        insuranceType: 'Referral partner',
        source: 'partner',
        name,
        phone: fmtPhone(phone),
        email: emailRaw.toLowerCase(),
        lang: pageLang,
        message: `Partner interest: ${businessName} (${PARTNER_TYPE_EN[businessType]}). Languages served: ${langsText}.`,
        details,
      },
    };
  }

  return { ok: false, error: 'invalid kind' };
}
