import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../UI/Button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Client Portal', path: '/portal' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav style={{ backgroundColor: 'var(--color-bg-darker)', borderBottom: '1px solid var(--color-border)' }} className="sticky z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="FTH Logo"
            className="object-contain"
            style={{ maxHeight: '44px', width: 'auto' }}
          />
          <div className="flex flex-col justify-center leading-none">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-primary opacity-90 -mb-1">
              Furqan
            </span>
            <span className="text-sm md:text-lg font-extrabold uppercase tracking-widest text-white">
              Transformation
            </span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              Hub LLC
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-muted hover:text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Button
            href="https://wa.me/971501234567"
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-darker border-t border-border absolute w-full left-0 py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-muted'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
