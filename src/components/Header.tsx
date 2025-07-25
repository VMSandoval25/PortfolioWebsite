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
        <div className={`logo ${scrolled ? 'logo-scrolled' : 'logo-unscrolled'}`}>
          Victor
        </div>

        {/* Desktop Nav */}
        <nav className={`desktop-nav ${scrolled ? 'desktop-nav-scrolled' : 'desktop-nav-unscrolled'}`}>
          <a href="#background" className="nav-link">background</a>
          <a href="#experience" className="nav-link">experience</a>
          {/* <a href="#projects" className="nav-link">projects</a> */}
          <a
            href="#contact"
            className={scrolled ? 'contact-btn-scrolled' : 'contact-btn-unscrolled'}
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
          <a href="#background" onClick={() => setMenuOpen(false)} className="mobile-link">background</a>
          <a href="#experience" onClick={() => setMenuOpen(false)} className="mobile-link">experience</a>
          {/* <a href="#projects" onClick={() => setMenuOpen(false)} className="mobile-link">projects</a> */}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="mobile-contact">
            Let's Contact
          </a>
        </div>
      )}
    </>
  );
}
