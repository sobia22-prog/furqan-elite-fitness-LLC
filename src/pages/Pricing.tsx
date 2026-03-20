import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/Layout/SEO';
import PricingSection from '../components/Home/PricingSection';

import PageHero from '../components/Layout/PageHero';

const Pricing: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Packages & Pricing | Furqan Elite Fitness Dubai"
        description="Transparent high-ticket pricing packages for personal training and coaching in Dubai."
      />

      <PageHero 
        title="Elite" 
        highlightedText="Packages"
        subtitle="Choose your commitment level. Your greatest ROI will always be your health."
      />

      {/* Reduced Top Padding for PricingSection when following Hero */}
      <div className="-mt-16 md:-mt-32 relative z-10">
        <PricingSection />
      </div>

      {/* FAQ Overlay for Pricing Page */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Investment <span className="text-primary">FAQ</span></h2>
          </div>

          <div className="space-y-6">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-card p-6 md:p-8 rounded-xl border border-border"
            >
              <h3 className="text-xl font-bold text-white mb-3">Do you offer payment plans?</h3>
              <p className="text-muted leading-relaxed">Yes. We understand that premium coaching is an investment. We offer flexible split-payment options for our 24 and 36 session Transformation packages.</p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="bg-card p-6 md:p-8 rounded-xl border border-border"
            >
              <h3 className="text-xl font-bold text-white mb-3">Where do the training sessions take place?</h3>
              <p className="text-muted leading-relaxed">Sessions are conducted at partnered VIP gyms across Dubai, or we can travel to your private home/building gym depending on your location and selected package.</p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-card p-6 md:p-8 rounded-xl border border-border"
            >
              <h3 className="text-xl font-bold text-white mb-3">Is nutrition included?</h3>
              <p className="text-muted leading-relaxed">Absolutely. Every single package includes personalized macro calculation, meal planning, and supplement guidance designed to augment your specific training protocol.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
