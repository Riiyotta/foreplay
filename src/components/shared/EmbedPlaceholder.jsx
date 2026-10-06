/* Third-party embeds (Cal.com, Senja, Wistia, YouTube) are not loaded in this replica.
   This renders a same-size frame with a label and a link out to the real embed.
   Size it with className (e.g. "h-[480px] w-full"). theme: 'dark' | 'light'. */
export default function EmbedPlaceholder({ label, href, linkLabel = 'Open', theme = 'dark', className = '', children }) {
  const dark = theme === 'dark'
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden text-center ${
        dark ? 'bg-solid-900 text-neutral-100 shadow-ring-neutral-600-inset' : 'bg-solid-25 text-solid-500 shadow-ring-card-inset'
      } ${className}`}
    >
      {children}
      <div className="text-label-m">{label}</div>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-label-s underline underline-offset-2 ${dark ? 'text-neutral-0' : 'text-solid-900'}`}
        >
          {linkLabel} ↗
        </a>
      )}
    </div>
  )
}
