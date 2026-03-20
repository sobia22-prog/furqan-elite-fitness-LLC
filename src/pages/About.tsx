import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/Layout/SEO';
import AboutSection from '../components/Home/AboutSection';
import PageHero from '../components/Layout/PageHero';
import Button from '../components/UI/Button';

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="About Furqan | Certified Elite Personal Trainer in Dubai"
        description="Learn more about Furqan, his certifcations, and 10+ years of fitness experience in Dubai."
      />

      <PageHero
        title="Behind The"
        highlightedText="Brand"
        subtitle="My mission is to help 1,000 busy professionals in Dubai reclaim their health, confidence, and physical potential."
      />

      {/* Reduced Top Padding for AboutSection when following Hero */}
      <div className="-mt-16 md:-mt-32">
        <AboutSection />
      </div>

      {/* Philosophy Section - UNIQUE to About Page */}
      {/* Philosophy Section */}
      <section className="pb-16 bg-dark relative overflow-hidden">
        {/* Decor */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 blur-3xl rounded-full z-0 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Elite <span className="text-primary">Formula</span></h2>
            <p className="text-muted text-lg">I don't believe in generic, cookie-cutter plans. True transformation requires a scientific, personalized approach to training, recovery, and nutrition.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-xl border border-border/50 hover:border-primary/50 flex flex-col items-center text-center transition-colors group"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mindset Priming</h3>
              <p className="text-muted">Fitness begins in the mind. I help you break down limiting beliefs before we even touch a dumbbell.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-8 rounded-xl border border-border/50 hover:border-primary/50 flex flex-col items-center text-center transition-colors group"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Scientific Loading</h3>
              <p className="text-muted">We utilize progressive overload and precise biomechanics customized specifically for your body type.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 rounded-xl border border-border/50 hover:border-primary/50 flex flex-col items-center text-center transition-colors group"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Metabolic Fuel</h3>
              <p className="text-muted">No starvation diets. You will learn to fuel your body with foods you actually enjoy while stripping fat.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - UNIQUE style for About Page */}
      <section className="py-8 bg-gradient-to-b border-t border-border/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-12 py-4 rounded-3xl relative overflow-hidden"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white relative z-10 leading-tight">
              Ready to build your ultimate physique <span className="text-primary italic">under elite guidance?</span>
            </h2>
            <Button
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Journey Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
