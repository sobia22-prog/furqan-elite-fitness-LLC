import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Smartphone, Moon, Users } from 'lucide-react';
import { servicesData } from '../../data/mockData';
import Button from '../UI/Button';

const iconMap: Record<string, React.ElementType> = {
  Dumbbell,
  Smartphone,
  Moon,
  Users
};

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-darker" id="services">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Elite <span className="text-primary">Programs</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-lg"
          >
            Choose the program that perfectly aligns with your goals and lifestyle.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 relative overflow-hidden group hover-scale flex flex-col h-full"
              >
                {/* Decorative background glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>

                <div className="w-14 h-14 bg-darker rounded-lg border border-border flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                  {IconComponent && <IconComponent size={28} />}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-muted mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 border-b border-border pb-3">
                    <span className="text-primary mt-1 select-none">◆</span>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-muted">Duration</span>
                      <span className="font-semibold text-white">{service.duration}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 border-b border-border pb-3">
                    <span className="text-primary mt-1 select-none">◆</span>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-muted">Investment</span>
                      <span className="font-semibold text-white">{service.priceRange}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 select-none">◆</span>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-muted">Expected Results</span>
                      <span className="font-semibold text-white leading-tight">{service.resultsExpected}</span>
                    </div>
                  </li>
                </ul>

                <Button href="#book" variant="outline" fullWidth className="mt-auto">
                  Book This Program
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
