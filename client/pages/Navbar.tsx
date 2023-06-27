import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <a href="#about" className="nav-option">
              About
            </a>
            <a href="#experience" className="nav-option">
              Experience
            </a>
            <a href="#projects" className="nav-option">
              Projects
            </a>
            <a href="#contact" className="nav-option">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

