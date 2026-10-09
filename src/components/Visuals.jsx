const bars = [45, 70, 55, 90, 60, 80, 100]

export function Dash() {
  return (
    <div className="dash">
      <div className="row">
        {bars.map((h, i) => <i key={i} style={{ height: h + '%' }}></i>)}
      </div>
      <div className="ln"></div>
      <div className="ln s"></div>
    </div>
  )
}

export function Phone() {
  return (
    <div className="phone">
      {[0, 1, 2, 3, 4].map((i) => <i key={i}></i>)}
    </div>
  )
}

export function DesignSystem() {
  return (
    <div className="ds">
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <i key={i}></i>)}
    </div>
  )
}

export const visuals = { dash: Dash, phone: Phone, ds: DesignSystem }
