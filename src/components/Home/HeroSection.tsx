import React from 'react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-darker via-bg-darker/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold uppercase leading-tight mb-6"
          >
            Transforming Bodies. <br />
            <span className="text-primary">Building Elite Mindsets.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted mb-10 max-w-xl"
          >
            Dubai's premium personal training experience. Achieve your dream physique with science-based workouts and elite nutrition plans.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="#assessment" variant="primary">
              Book Free Assessment
            </Button>
            <Button 
              href="https://wa.me/971501234567" 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="outline"
              className="gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              WhatsApp Now
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Social Proof Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-md border-t border-border py-4">
        <div className="container mx-auto px-4 flex flex-wrap justify-around items-center gap-4 text-sm font-semibold uppercase tracking-wider">
          <div className="flex items-center gap-2"><span className="text-primary">★</span> 500+ Transformations</div>
          <div className="flex items-center gap-2"><span className="text-primary">★</span> 10+ Years Experience</div>
          <div className="flex items-center gap-2"><span className="text-primary">★</span> Certified Elite Coach</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
