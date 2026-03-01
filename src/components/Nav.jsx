export default function Nav() {
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
      </nav>
    </header>
  )
}
