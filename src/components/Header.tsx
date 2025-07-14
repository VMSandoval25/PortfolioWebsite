import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Victor Sandoval<span className="arrow">&gt;</span></div>
      <nav className="nav-links">
        <a href="#about">about</a>
        <a href="#experience">experience</a>
        <a href="#projects">projects</a>
        <a href="#contact" className="contact-button">Let's Contact</a>
      </nav>
    </header>
  )
}
