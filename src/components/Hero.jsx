

import GradientText from './GradientText.jsx'

export default function Hero(props) {
  return (
    <header className="hero" id="top">
      <div>
        <h1>
          <GradientText
            colors={['#6d4aff', '#a24bff', '#4f46e5', '#c026d3']}
            animationSpeed={6.5}
            variant="flow"
            glow={0}
          >
            I design interfaces and build them to last.
          </GradientText>
        </h1>
        <p className="lead">
          Front-end developer and UX/UI designer. I take products from first sketch to
          shipped code, so what you approve in Figma is what people use.
        </p>
        <div className="btns">
          <a className="btn main" href="#work">See my work</a>
          <a className="btn ghost" href="#contact">Get in touch</a>
        </div>
      </div>
    </header>
  )
}
