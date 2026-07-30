// Hidden field that real people never see and never fill, but automated
// submitters populate because they fill every input they find. The server
// treats any non-empty value as a bot and silently discards the submission.
//
// Named "company" rather than something obviously decoy-like, positioned
// off-screen rather than display:none (some bots skip hidden inputs), and
// marked aria-hidden + tabIndex -1 so it is invisible to screen readers and
// unreachable by keyboard.
export default function Honeypot() {
  return (
    <input
      type="text"
      name="company"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      defaultValue=""
      style={{
        position: 'absolute',
        left: '-9999px',
        width: 1,
        height: 1,
        opacity: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
