export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#hero" aria-label="WASIF AFNAN MUKTO home">WAM</a>
      <span className="site-header-title">Design by <strong>Mukto</strong></span>
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#social">Connect</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="header-cta" href="#contact">Hire Me</a>
    </header>
  )
}
