import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/Layout/SEO';
import { servicesData } from '../data/mockData';
import { Dumbbell, Smartphone, Moon, Users } from 'lucide-react';

import PageHero from '../components/Layout/PageHero';
import Button from '../components/UI/Button';

const iconMap: Record<string, React.ElementType> = {
  Dumbbell,
  Smartphone,
  Moon,
  Users
};

const Services: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="Elite Training Services | Furqan Elite Fitness LLC Dubai"
        description="Explore our elite personal training, online coaching, and specialized Ramadan body transformation programs."
      />

      <PageHero
        title="Our Elite"
        highlightedText="Programs"
        subtitle="No matter your starting point or your lifestyle constraints, there is a tailored protocol here designed exclusively for you."
      />

      <section className="py-24 bg-dark -mt-16 md:-mt-24 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {servicesData.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-card p-8 md:p-10 rounded-2xl border border-border flex flex-col h-full shadow-lg group hover:border-primary/50 transition-colors duration-500 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none"></div>

                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 bg-darker border border-border rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                      {IconComponent && <IconComponent size={32} />}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                    </div>
                  </div>

                  <p className="text-muted text-lg mb-10 leading-relaxed flex-grow">{service.description}</p>

                  <div className="grid grid-cols-2 gap-6 mb-10 p-6 bg-darker rounded-xl border border-border/50">
                    <div>
                      <span className="block text-xs uppercase tracking-widest text-primary mb-1">Duration</span>
                      <span className="font-bold text-white text-sm">{service.duration}</span>
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-widest text-primary mb-1">Investment</span>
                      <span className="font-bold text-white text-sm">{service.priceRange}</span>
                    </div>
                    <div className="col-span-2 border-t border-border/50 pt-4 mt-2">
                      <span className="block text-xs uppercase tracking-widest text-primary mb-1">Expected Results</span>
                      <span className="font-bold text-white text-sm">{service.resultsExpected}</span>
                    </div>
                  </div>

                  <Button
                    href={`https://wa.me/971501234567?text=Hi Furqan, I'm interested in the ${service.title} program`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    fullWidth
                    className="mt-auto"
                  >
                    Apply Now
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
