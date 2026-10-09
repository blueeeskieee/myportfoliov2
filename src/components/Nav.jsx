import { profile, navLinks } from '../data.js'

export default function Nav() {
  return (
    <nav aria-label="Main">
      <a className="logo" href="#top"><i></i>{profile.name}</a>
      <ul>
        {navLinks.map((l) => (
          <li key={l.href}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>
    </nav>
  )
}
