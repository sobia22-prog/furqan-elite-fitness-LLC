import React from 'react';
import { motion } from 'framer-motion';
import { pricingPackages } from '../../data/mockData';
import { Check } from 'lucide-react';
import Button from '../UI/Button';

const PricingSection: React.FC = () => {
  return (
    <section className="py-24 bg-darker relative" id="pricing">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide"
          >
            Invest In <span className="text-primary">Yourself</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-lg relative"
          >
            Transparent pricing. Zero hidden fees. High-ticket value with guaranteed elite coaching.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {pricingPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`bg-card rounded-2xl p-8 border ${
                pkg.isPopular ? 'border-primary shadow-glow transform lg:-translate-y-4' : 'border-border hover:border-primary/50 transition-colors duration-300'
              } relative flex flex-col h-full`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-extrabold text-white">AED {pkg.pricePerSession}</span>
                  <span className="text-muted text-lg font-medium">/ session</span>
                </div>
                <p className="text-sm text-primary uppercase tracking-widest font-semibold border border-primary/20 bg-primary/5 inline-block px-4 py-2 rounded-md">
                  Total: AED {pkg.totalPrice} ({pkg.sessions} Sessions)
                </p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={20} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-muted group-hover:text-white transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                href={`https://wa.me/971501234567?text=Hi Furqan, I'm interested in the ${pkg.name}`}
                target="_blank" 
                rel="noopener noreferrer" 
                variant={pkg.isPopular ? 'primary' : 'outline'}
                fullWidth
                className="mt-auto"
              >
                Select Package
              </Button>
            </motion.div>
          ))}
        </div>
        
        {/* High Ticket Justification */}
        <div className="mt-16 text-center max-w-3xl mx-auto border-t border-border pt-12">
          <p className="text-muted italic text-lg leading-relaxed">
            "You are not paying for 60 minutes of my time. You are paying for the years I spent learning how to get you results in those 60 minutes. This is an elite investment in your health, confidence, and longevity."
          </p>
          <p className="text-white font-bold mt-4 uppercase tracking-widest text-sm">— Furqan</p>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
