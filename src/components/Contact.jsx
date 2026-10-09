import { profile } from '../data.js'

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="cta">
          <h2>Have a product that needs design and code?</h2>
          <p>I am open to freelance projects and full-time roles.</p>
          <div className="btns" style={{ justifyContent: 'center' }}>
            <a className="btn main" href={`mailto:${profile.email}`}>Email me</a>
          </div>
          <div className="details">
            <span>{profile.location}</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </div>
        </div>
        <footer>
          <span>{profile.footer}</span>
          <span>
            {profile.links.map((l, i) => (
              <span key={l.label}>
                {i > 0 && <>&nbsp; </>}
                <a
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {l.label}
                </a>
              </span>
            ))}
          </span>
        </footer>
      </div>
    </section>
  )
}
