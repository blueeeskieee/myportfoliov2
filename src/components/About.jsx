import { about, profile } from '../data.js'
import StarBorder from './StarBorder.jsx'

export default function About() {
  return (
    <section id="about">
      <div className="wrap about">
        <div>
          <StarBorder
            color="#ffffff"
            trailColor="#ffffff"
            duration={5}
            direction="clockwise"
            stars={2}
            thickness={1}
            radius={12}
            glow={0.6}
            className="about-photo-border"
          >
            <img className="about-photo" src={profile.photo} alt={profile.name} />
          </StarBorder>
        </div>
        <div>
          {about.map((para, i) => <p key={i}>{para}</p>)}
        </div>
      </div>
    </section>
  )
}
