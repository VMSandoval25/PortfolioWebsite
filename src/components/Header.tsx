import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? 'header-scrolled' : 'header-unscrolled'}`}>
        {/* Logo */}
        <div className={`logo ${scrolled ? 'logo-scrolled uppercase' : 'logo-unscrolled uppercase'}`}>
          Victor
        </div>

        {/* Desktop Nav */}
        <nav className={`desktop-nav ${scrolled ? 'desktop-nav-scrolled' : 'desktop-nav-unscrolled'}`}>
          <a href="#background" className="nav-link uppercase">background</a>
          <a href="#about" className="nav-link uppercase">about</a>
          <a href="#experience" className="nav-link uppercase">experience</a>
          <a href="#projects" className="nav-link uppercase">projects</a>
          <a
            href="#contact"
            className={scrolled ? 'contact-btn-scrolled uppercase' : 'contact-btn-unscrolled uppercase'}
          >
            Let's Contact
          </a>
        </nav>

        {/* Mobile Nav Icon */}
        <button
          className={`mobile-toggle ${scrolled ? 'mobile-toggle-scrolled' : 'mobile-toggle-unscrolled'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>
      </header>

      {/* ✅ Moved this OUTSIDE header */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#background" onClick={() => setMenuOpen(false)} className="mobile-link uppercase">background</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="mobile-link uppercase">about</a>
          <a href="#experience" onClick={() => setMenuOpen(false)} className="mobile-link uppercase">experience</a>
          {/* <a href="#projects" onClick={() => setMenuOpen(false)} className="mobile-link">projects</a> */}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="mobile-contact uppercase">
            Let's Contact
          </a>
        </div>
      )}
    </>
  );
}
