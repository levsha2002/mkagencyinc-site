import { getConsent } from '@/lib/consent';

// The whole text is inside the <label>, so tapping the words toggles the box
// (previously the checkbox sat outside any label on the product forms).
export default function ConsentCheckbox({
  id,
  lang,
  checked,
  onChange,
  className = 'consent',
  style,
}: {
  id: string;
  lang: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
}) {
  const c = getConsent(lang);
  return (
    <label className={className} htmlFor={id} style={style}>
      <input
        id={id}
        type="checkbox"
        required
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span>
        {c.body} {c.privacyPrefix}{' '}
        <a href={c.privacyHref} target="_blank" rel="noopener" style={{ textDecoration: 'underline' }}>
          {c.privacyLabel}
        </a>
        .
      </span>
    </label>
  );
}
