import WorkItem from './WorkItem.jsx'
import { projects } from '../data.js'

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="head">
          <h2>Selected work</h2>
          <p>Projects where design decisions and front-end craft had to work together.</p>
        </div>
        {projects.map((p) => <WorkItem key={p.title} {...p} />)}
      </div>
    </section>
  )
}
