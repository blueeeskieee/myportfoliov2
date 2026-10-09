import { visuals } from './Visuals.jsx'

export default function WorkItem({ title, image, visual, tags, text, liveUrl }) {
  const Visual = visual ? visuals[visual] : null
  const href = liveUrl || '#contact'
  const label = liveUrl ? 'Live demo' : 'Read the case study'

  return (
    <article className="work">
      <div className="shot" aria-hidden="true">
        {image ? <img src={image} alt="" /> : Visual && <Visual />}
      </div>
      <div>
        <h3>{title}</h3>
        <div className="tags">
          {tags.map((t) => <span key={t}>{t}</span>)}
        </div>
        <p>{text}</p>
        <a
          className="more"
          href={href}
          target={liveUrl ? '_blank' : undefined}
          rel={liveUrl ? 'noreferrer' : undefined}
        >
          {label}
        </a>
      </div>
    </article>
  )
}
