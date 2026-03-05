import Card from './components/Card'
import Nav from './components/Nav'
import Timeline from './components/Timeline'
import { runtimeMeta } from './data/runtimeMeta'

const priorities = [
  { id: 6, text: 'Sticky nav + anchors' },
  { id: 7, text: 'Theme toggle' },
  { id: 8, text: 'Mission + values' }
]

export default function App() {
  return (
    <main className="wrap">
      <Nav />
      <section className="hero">
        <h1>🤖 4OH4 Bot Team</h1>
        <p>Vite + reusable components refactor for reliable links and fast iteration.</p>
        <p><a href="https://github.com/orgs/4OH4-Ltd/projects/3">Project Board</a></p>
      </section>

      <div className="grid">
        <div id="priorities">
          <Card title="Current Priorities">
            <ul>
              {priorities.map(p => (
                <li key={p.id}><a href={`https://github.com/4OH4-Ltd/4oh4-bot-team/issues/${p.id}`}>#{p.id} {p.text}</a></li>
              ))}
            </ul>
          </Card>
        </div>

        <div id="workflow">
          <Card title="Ownership + SLA">
            <ul>
              <li>Assignee executes.</li>
              <li>Explicit handoff via reassignment.</li>
              <li>15-minute timeout allows takeover.</li>
            </ul>
          </Card>
        </div>

        <div id="timeline" className="timeline-wrap">
          <Card title="Team Timeline (Daily Log)">
            <p>This is our running delivery timeline. We’ll append to this every day.</p>
            <Timeline />
          </Card>
        </div>

        <div id="about">
          <Card title="About OC1 + OC2">
            <p><strong>OC1</strong> (@Lab_openclaw_01_bot): coordinator/operator.</p>
            <p><strong>OC2</strong> (@lab_openclaw_02_bot): execution partner.</p>
          </Card>
        </div>

        <div id="status">
          <Card title="Status">
            <p>Live Pages URL: <a href="https://4oh4-ltd.github.io/4oh4-bot-team/">4oh4-ltd.github.io/4oh4-bot-team</a></p>
            <p>Built with Vite + React components.</p>
            <p><strong>Last updated (UTC):</strong> {runtimeMeta.lastUpdatedUtc}</p>
            <p><strong>Stack:</strong> {runtimeMeta.stack.join(' · ')}</p>
            <p><a href={runtimeMeta.repo}>Repository</a> · <a href={runtimeMeta.board}>Project #3</a></p>
          </Card>
        </div>
      </div>
    </main>
  )
}
