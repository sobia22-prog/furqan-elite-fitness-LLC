import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Furqan Elite Trainer" 
                className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-2xl border border-border grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
            {/* Decors */}
            <div className="absolute top-10 -left-10 w-full h-full border-2 border-primary rounded-lg z-0 opacity-50 hidden md:block"></div>
            <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-lg shadow-gold z-20 hidden md:block border border-border">
              <h4 className="text-4xl font-extrabold text-primary mb-1">10+</h4>
              <p className="text-sm text-white font-medium uppercase tracking-wider">Years Experience<br/>in Dubai</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              Meet <span className="text-primary">Furqan</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-muted"
            >
              <p className="text-lg leading-relaxed text-white">
                "Fitness is not just about aesthetics; it's about building a bulletproof mindset that translates into every area of your life."
              </p>
              <p>
                As a fully certified Elite Personal Trainer based in Dubai, I’ve dedicated my life to helping high-performers, busy professionals, and individuals unlock their true physical potential. With over a decade of hands-on experience in the fitness industry, I specialize in sustainable fat loss, lean muscle building, and holistic body transformations.
              </p>
              
              <div className="pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-white mb-2 uppercase tracking-wide">Specializations</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><span className="text-primary">•</span> Fat Loss & Toning</li>
                    <li className="flex items-center gap-2"><span className="text-primary">•</span> Muscle Hypertrophy</li>
                    <li className="flex items-center gap-2"><span className="text-primary">•</span> Ramadan Transformations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 uppercase tracking-wide">Certifications</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><span className="text-primary">✓</span> ISSA Certified Trainer</li>
                    <li className="flex items-center gap-2"><span className="text-primary">✓</span> Sports Nutrition Specialist</li>
                    <li className="flex items-center gap-2"><span className="text-primary">✓</span> REPs UAE Registered</li>
                  </ul>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
