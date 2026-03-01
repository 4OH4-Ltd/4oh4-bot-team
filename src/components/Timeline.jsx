import { timelineEntries } from '../data/timeline'

export default function Timeline() {
  return (
    <section className="timeline" aria-label="Team timeline">
      {timelineEntries.map((entry, idx) => (
        <article key={`${entry.date}-${idx}`} className="timeline-item">
          <div className="timeline-dot" aria-hidden="true" />
          <div className="timeline-content">
            <p className="timeline-date">{entry.date}</p>
            <h3>{entry.title}</h3>
            <p>{entry.summary}</p>
            {entry.links?.length ? (
              <p className="timeline-links">
                {entry.links.map((l, i) => (
                  <span key={l.href}>
                    {i > 0 ? ' • ' : ''}
                    <a href={l.href}>{l.label}</a>
                  </span>
                ))}
              </p>
            ) : null}
          </div>
        </article>
      ))}
    </section>
  )
}
