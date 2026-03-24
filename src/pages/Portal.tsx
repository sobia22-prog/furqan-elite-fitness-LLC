import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/Layout/SEO';
import PageHero from '../components/Layout/PageHero';
import { FileText, Activity, Lock, TrendingUp } from 'lucide-react';
import Button from '../components/UI/Button';
import { loginUser } from '../api/auth';

const Portal: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const data = await loginUser({ email, password });

      if (data.token) {
        localStorage.setItem('fth_token', data.token);
        alert('Welcome to the Elite Portal! Redirecting...');
        setStatus('idle');
        // window.location.href = '/dashboard';
      } else {
        alert(data.message || 'Access Denied. Please check your credentials.');
        setStatus('error');
      }
    } catch (error) {
      console.error('Login error:', error);
      setStatus('error');
      alert('Connection failed. Please ensure you are online and try again.');
    }
  };

  return (
    <div className="flex flex-col">
      <SEO
        title="VIP Client Portal Login | Furqan Transformation Hub LLC"
        description="Exclusive client portal for progress tracking, diet plans, and workout structures."
      />

      <PageHero
        title="VIP"
        highlightedText="Portal"
        subtitle="Access your customized meal plans, track your progression, and download your latest workout programs."
      />

      <section className="min-h-[60vh] bg-dark relative flex items-center justify-center py-24 -mt-16 md:-mt-32 z-10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Side Info */}
            <div>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-muted text-lg mb-10 leading-relaxed max-w-xl"
              >
                Access your customized meal plans, track your weekly weight progression, and download your latest workout split structures in one centralized dashboard.
              </motion.p>

              <div className="space-y-6">
                {[
                  { icon: FileText, title: 'Centralized Documentation', desc: 'Secure PDF downloads for workouts and nutrition.' },
                  { icon: Activity, title: 'Weekly Check-ins', desc: 'Submit your morning weight, biofeedback, and adjust macros dynamically.' },
                  { icon: TrendingUp, title: 'Progress Tracking', desc: 'Visualize your fat-loss and strength progression through charting.' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex gap-6 items-start p-4 hover:bg-card/50 rounded-xl transition-colors border border-transparent hover:border-border/50 group"
                  >
                    <div className="w-14 h-14 bg-darker rounded-lg border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-xl mb-1">{item.title}</h3>
                      <p className="text-muted leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Login Form Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-card p-10 md:p-14 pb-8 rounded-2xl border border-border/50 shadow-2xl relative"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-2/3 bg-gradient-to-br from-primary to-primary-dark text-black w-24 px-4 py-2 rounded-full font-bold uppercase tracking-widest text-sm text-center border-2 border-black">
                <Lock size={16} className="inline-block mr-2 -mt-1" />
                Login
              </div>

              <div className="text-center mb-8 mt-6">
                <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                <p className="text-muted text-sm">Enter your private credentials to continue.</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6 px-4 md:px-8">
                <div>
                  <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-darker border border-border/80 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-muted/30"
                    placeholder="client@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Password</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-darker border border-border/80 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-muted/30"
                    placeholder="••••••••"
                  />
                  <div className="text-right mt-2">
                    <a href="#" className="text-xs text-primary hover:text-white transition-colors">Forgot Password?</a>
                  </div>
                </div>

                <Button
                  type="submit"
                  fullWidth
                  disabled={status === 'loading'}
                  className="mt-4"
                >
                  {status === 'loading' ? 'Authenticating...' : 'Enter Dashboard'}
                </Button>
                <div className="pt-6 border-t border-border/50 text-center px-4 md:px-8">
                  <p className="text-muted text-sm">Not an elite client yet? <a href="/services" className="text-primary font-bold hover:text-white transition-colors">Apply Today</a></p>
                </div>
              </form>

            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Portal;
