import './StarBorder.css'

export default function StarBorder({
  children,
  color = '#ffffff',
  trailColor = '#ffffff',
  duration = 5,
  direction = 'clockwise',
  stars = 2,
  thickness = 1,
  radius = 12,
  glow = 0.6,
  className = '',
  style,
}) {
  const orbitClass = direction === 'counterclockwise' ? 'star-border--counter' : 'star-border--clock'

  return (
    <div
      className={`star-border ${orbitClass} ${className}`.trim()}
      style={{
        '--star-color': color,
        '--star-trail': trailColor,
        '--star-duration': `${duration}s`,
        '--star-thickness': `${thickness}px`,
        '--star-radius': `${radius}px`,
        '--star-glow': glow,
        '--star-count': Math.max(1, stars),
        ...style,
      }}
    >
      <div className="star-border__ring" aria-hidden="true" />
      <div className="star-border__inner">{children}</div>
    </div>
  )
}
