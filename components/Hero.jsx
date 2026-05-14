export default function Hero() {
  return (
    <section className="hero section" id="hero">
      <div className="hero-side-note reveal">
        <span>Dreamer</span>
        <span>Designer &amp; Developer</span>
      </div>

      <div className="hero-name-back" aria-hidden="true">MUKTO</div>

      <div className="hero-portrait-wrap reveal">
        <img src="/Images/hero-mukto-trimmed.png" alt="Portrait of WASIF AFNAN MUKTO" />
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to About section">
        <span>Scroll down</span>
      </a>
    </section>
  )
}
