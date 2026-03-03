export default function Nav({ theme = 'dark', onToggleTheme }) {
  const links = [
    ['Priorities', '#priorities'],
    ['Workflow', '#workflow'],
    ['Timeline', '#timeline'],
    ['About', '#about'],
    ['Status', '#status']
  ]
  return (
    <header className="nav">
      <strong>4OH4 Bot Team</strong>
      <nav>
        {links.map(([name, href]) => (
          <a key={name} href={href}>{name}</a>
        ))}
        <button type="button" className="theme-toggle" onClick={onToggleTheme}>
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>
    </header>
  )
}
