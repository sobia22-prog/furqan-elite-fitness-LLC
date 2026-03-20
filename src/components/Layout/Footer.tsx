import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darker border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-wide text-primary mb-4">
              Furqan Elite<span className="text-white">Fitness</span>
            </h3>
            <p className="text-muted mb-6">
              Transforming Bodies. Building Elite Mindsets. Premium personal training and online coaching based in Dubai.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              <li><Link to="/about" className="text-muted hover:text-primary transition-colors">About Furqan</Link></li>
              <li><Link to="/services" className="text-muted hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/pricing" className="text-muted hover:text-primary transition-colors">Pricing & Packages</Link></li>
              <li><Link to="/portal" className="text-muted hover:text-primary transition-colors">Client Portal</Link></li>
              <li><Link to="/blog" className="text-muted hover:text-primary transition-colors">Fitness Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Training Programs</h4>
            <ul className="flex flex-col gap-2">
              <li className="text-muted">1-on-1 Personal Training</li>
              <li className="text-muted">Online Coaching</li>
              <li className="text-muted">Ramadan Transformation</li>
              <li className="text-muted">Corporate Wellness</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span className="text-muted">Dubai Marina, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span className="text-muted">+971 50 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span className="text-muted">info@furqanelitefitness.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Furqan Elite Fitness LLC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-sm text-muted hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
