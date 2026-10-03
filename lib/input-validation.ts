// Native (HTML pattern) validation for phone and ZIP inputs on lead forms.
//
// Several forms only had `required` on the phone field, so "12" or a 1-digit
// ZIP went through: the agency got an unusable lead and Google Ads still
// counted a conversion (it fires on the API's OK). CoverageCheckForm and the
// referral forms already check this in JS; these props give the other forms
// the same rule with no extra state.
//
// PHONE: a US number = 10 digits, optionally preceded by a leading 1/+1; any
// punctuation or spaces allowed. Same rule as CoverageCheckForm.
// ZIP: exactly 5 digits.
// Patterns avoid characters that need escaping in the `v`-flag regex mode
// browsers now use for the pattern attribute.
export const PHONE_PATTERN = '[^0-9]*(1[^0-9]*)?([0-9][^0-9]*){10}';
export const ZIP_PATTERN = '[0-9]{5}';

const PHONE_TITLE: Record<string, string> = {
  en: 'Enter a 10-digit phone number, e.g. (305) 555-0123',
  es: 'Ingrese un número de teléfono de 10 dígitos, p. ej. (305) 555-0123',
  ru: 'Введите 10-значный номер телефона, например (305) 555-0123',
};
const ZIP_TITLE: Record<string, string> = {
  en: 'Enter a 5-digit ZIP code',
  es: 'Ingrese un código postal de 5 dígitos',
  ru: 'Введите 5-значный почтовый индекс (ZIP)',
};

export function phoneInputProps(lang: string) {
  return { pattern: PHONE_PATTERN, title: PHONE_TITLE[lang] || PHONE_TITLE.en };
}

export function zipInputProps(lang: string) {
  return { pattern: ZIP_PATTERN, title: ZIP_TITLE[lang] || ZIP_TITLE.en };
}
