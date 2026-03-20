import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';

const CalculatorSection: React.FC = () => {
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    goal: 'Fat Loss',
    gender: 'Male'
  });
  const [result, setResult] = useState<string | null>(null);

  const calculateResult = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.weight || !formData.height) return;

    const w = parseFloat(formData.weight);
    const h = parseFloat(formData.height) / 100; // cm to m
    const bmi = w / (h * h);

    let plan = '';
    if (formData.goal === 'Fat Loss') {
      if (bmi > 25) plan = '12-Week Intensive Fat Shredding Protocol';
      else plan = '8-Week Lean Targeting & Toning Plan';
    } else if (formData.goal === 'Muscle Gain') {
      plan = '12-Week Hypertrophy & Strength Focus';
    } else {
      plan = '10-Week Recomposition (Lose Fat, Build Muscle)';
    }

    setResult(plan);
  };

  return (
    <section className="py-24 bg-dark relative border-t border-b border-border">
      <div className="absolute left-0 top-0 w-1/3 h-full bg-primary/5 blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <motion.h2 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              Analyze Your <span className="text-primary">Potential</span>
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted text-lg mb-8 leading-relaxed"
            >
              Curious about how long it will take to reach your dream physique? Use our interactive Transformation Calculator to get a tailored estimate based on your current metrics.
            </motion.p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-muted"><span className="text-primary text-xl">✓</span> Data-driven estimations</li>
              <li className="flex items-center gap-3 text-muted"><span className="text-primary text-xl">✓</span> Personalized program suggestion</li>
              <li className="flex items-center gap-3 text-muted"><span className="text-primary text-xl">✓</span> 100% free insight into your journey</li>
            </ul>
          </div>

          {/* Calculator Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 md:p-10 rounded-2xl border border-border/50 shadow-2xl relative group hover:border-primary/30 transition-colors duration-500"
          >
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary to-primary-dark text-black w-16 h-16 rounded-full flex items-center justify-center font-bold text-3xl shadow-glow group-hover:scale-110 transition-transform duration-300">?</div>
            
            <form onSubmit={calculateResult} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted uppercase tracking-wider mb-2">Weight (kg)</label>
                  <input 
                    type="number" 
                    required
                    value={formData.weight}
                    onChange={(e) => setFormData({...formData, weight: e.target.value})}
                    className="w-full bg-darker border border-border rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-muted/50"
                    placeholder="e.g. 85"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted uppercase tracking-wider mb-2">Height (cm)</label>
                  <input 
                    type="number" 
                    required
                    value={formData.height}
                    onChange={(e) => setFormData({...formData, height: e.target.value})}
                    className="w-full bg-darker border border-border rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-muted/50"
                    placeholder="e.g. 180"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted uppercase tracking-wider mb-2">Primary Goal</label>
                <select 
                  className="w-full bg-darker border border-border rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                  value={formData.goal}
                  onChange={(e) => setFormData({...formData, goal: e.target.value})}
                >
                  <option>Fat Loss</option>
                  <option>Muscle Gain</option>
                  <option>Body Recomposition</option>
                </select>
              </div>

              <Button 
                type="submit" 
                fullWidth
                disabled={!formData.weight || !formData.height}
              >
                Calculate My Plan
              </Button>
            </form>

            {/* Result Display */}
            {result && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-darker rounded-xl border-l-4 border-primary"
              >
                <p className="text-sm text-muted uppercase tracking-wider mb-2">Estimated Pathway</p>
                <p className="text-xl font-bold text-white mb-4">{result}</p>
                <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2">
                  Discuss this plan with Furqan →
                </a>
              </motion.div>
            )}

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
