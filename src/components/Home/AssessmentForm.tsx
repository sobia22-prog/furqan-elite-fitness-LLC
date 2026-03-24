import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitAssessment } from '../../api/assessments';
import Button from '../UI/Button';
import { User, Activity, Target, ShieldCheck } from 'lucide-react';

const AssessmentForm: React.FC<{ id?: string }> = ({ id }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: 'Male',
    currentWeight: '',
    height: '',
    fitnessGoal: 'Fat Loss',
    activityLevel: 'Sedentary',
    injuries: 'None',
    commitment: '9/10 - Extremely Ready'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) {
      nextStep();
      return;
    }

    setStatus('loading');
    try {
      const data = await submitAssessment({
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phone,
        fitnessGoal: formData.fitnessGoal,
        currentWeight: formData.currentWeight,
        formDetails: {
          age: formData.age,
          gender: formData.gender,
          height: formData.height,
          activityLevel: formData.activityLevel,
          injuries: formData.injuries,
          commitment: formData.commitment,
          source: 'Free Assessment Form'
        }
      });

      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Assessment submission error:', error);
      setStatus('error');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6 text-primary">
              <User size={24} />
              <h3 className="text-xl font-bold uppercase tracking-widest">Personal Identification</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="w-full bg-darker border border-border/80 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="w-full bg-darker border border-border/80 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Phone / WhatsApp</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+971..." className="w-full bg-darker border border-border/80 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} className="w-full bg-darker border border-border/80 rounded-md px-4 py-3 text-white">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6 text-primary">
              <Activity size={24} />
              <h3 className="text-xl font-bold uppercase tracking-widest">Body Metrics</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Age</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} required placeholder="e.g. 30" className="w-full bg-darker border border-border/80 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Current Weight (kg)</label>
                <input type="number" name="currentWeight" value={formData.currentWeight} onChange={handleChange} required placeholder="e.g. 85" className="w-full bg-darker border border-border/80 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Height (cm)</label>
                <input type="number" name="height" value={formData.height} onChange={handleChange} required placeholder="e.g. 180" className="w-full bg-darker border border-border/80 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Activity Level</label>
                <select name="activityLevel" value={formData.activityLevel} onChange={handleChange} className="w-full bg-darker border border-border/80 rounded-md px-4 py-3 text-white">
                  <option>Sedentary (No Exercise)</option>
                  <option>Light (1-3 days/week)</option>
                  <option>Moderate (3-5 days/week)</option>
                  <option>Intense (Daily)</option>
                </select>
              </div>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6 text-primary">
              <Target size={24} />
              <h3 className="text-xl font-bold uppercase tracking-widest">Transformation Goals</h3>
            </div>
            <div>
              <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Primary Fitness Goal</label>
              <select name="fitnessGoal" value={formData.fitnessGoal} onChange={handleChange} className="w-full bg-darker border border-border/80 rounded-md px-4 py-3 text-white mb-6">
                <option>Fat Loss</option>
                <option>Muscle Gain</option>
                <option>Body Recomposition</option>
                <option>Maximum Strength</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Known Injuries / Constraints</label>
              <textarea name="injuries" value={formData.injuries} onChange={handleChange} rows={3} placeholder="Tell me about any physical limitations..." className="w-full bg-darker border border-border/80 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" />
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6 text-primary">
              <ShieldCheck size={24} />
              <h3 className="text-xl font-bold uppercase tracking-widest">Final Commitment</h3>
            </div>
            <div>
              <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">How ready are you to start?</label>
              <select name="commitment" value={formData.commitment} onChange={handleChange} className="w-full bg-darker border border-border/80 rounded-md px-4 py-3 text-white mb-6">
                <option>9/10 - Extremely Ready</option>
                <option>7/10 - Motivated but busy</option>
                <option>5/10 - Thinking about it</option>
              </select>
            </div>
            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-white text-sm italic">"By submitting this assessment, you are taking the first step towards an elite physique. I will personally review your data and reach out."</p>
              <p className="text-primary font-bold mt-2">— Furqan</p>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-dark relative overflow-hidden" id={id}>
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-widest"
          >
            Elite <span className="text-primary">Assessment</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg"
          >
            Answer a few questions for a tailored training and nutrition strategy.
          </motion.p>
        </div>

        <div className="bg-card rounded-2xl border border-border shadow-2xl relative overflow-hidden">
          {/* Progress Bar */}
          <div className="h-1 bg-darker w-full">
            <motion.div 
              className="h-full bg-primary" 
              initial={{ width: '0%' }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck size={48} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 uppercase">Assessment Received!</h3>
                  <p className="text-muted text-lg mb-8 max-w-md mx-auto">Elite metrics received. I am analyzing your data and will contact you via WhatsApp/Email shortly.</p>
                  <Button onClick={() => {setStep(1); setStatus('idle');}}>Fill Another</Button>
                </motion.div>
              ) : (
                <form key={step} onSubmit={handleSubmit} className="min-h-[350px] flex flex-col justify-between">
                  <div>
                    {renderStep()}
                  </div>

                  <div className="flex justify-between items-center mt-12 pt-8 border-t border-border/50">
                    <div className="text-xs font-bold text-muted uppercase tracking-widest">Step {step} of {totalSteps}</div>
                    <div className="flex gap-4">
                      {step > 1 && (
                        <Button type="button" variant="outline" size="sm" onClick={prevStep}>
                          Back
                        </Button>
                      )}
                      <Button type="submit" size="sm" disabled={status === 'loading'}>
                        {step === totalSteps ? (status === 'loading' ? 'Analyzing...' : 'Submit Assessment') : 'Next Step'}
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentForm;
