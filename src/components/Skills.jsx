import { skillGroups } from '../data.js'

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="head">
          <h2>What I bring</h2>
          <p>Comfortable on both sides of the handoff.</p>
        </div>
        <div className="skills">
          {skillGroups.map((g) => (
            <div className={g.alt ? 'box alt' : 'box'} key={g.title}>
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
