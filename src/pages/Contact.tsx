import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/UI/Button';
import SEO from '../components/Layout/SEO';
import PageHero from '../components/Layout/PageHero';
import { MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';
import MapSection from '../components/Contact/MapSection';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="Contact Furqan Elite Fitness | VIP Personal Training Dubai"
        description="Get in touch to book a consultation or inquire about our premium fitness programs."
      />

      <PageHero
        title="Start Your"
        highlightedText="Journey"
        subtitle="Leave a message or reach out directly. My team responds within 24 hours."
      />

      <section className="min-h-[70vh] bg-dark relative flex items-center justify-center py-24 -mt-16 md:-mt-32 z-10">
        <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-primary/5 blur-3xl rounded-full z-0 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Contact Details */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-widest">Connect <span className="text-primary">Directly</span></h2>
                <p className="text-muted text-lg mb-12 leading-relaxed max-w-xl">
                  Reach out through any of these channels for immediate inquiries or to schedule a consultation at your convenience.
                </p>
              </motion.div>

              <div className="space-y-6">
                {[
                  { icon: Phone, title: 'Phone / WhatsApp', value: '+971 50 123 4567', link: 'https://wa.me/971501234567' },
                  { icon: Mail, title: 'Email Inquiry', value: 'info@furqanelitefitness.com', link: 'mailto:info@furqanelitefitness.com' },
                  { icon: MapPin, title: 'Location', value: 'VIP Partner Gyms & Home Sessions', subValue: 'Dubai, UAE' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (i + 1) }}
                    className="flex gap-6 items-start p-4 hover:bg-card/50 rounded-xl transition-colors border border-transparent hover:border-border/50 group"
                  >
                    <div className="w-14 h-14 bg-darker rounded-lg border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h3 className="uppercase tracking-widest text-xs font-bold text-muted mb-1">{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} className="text-xl font-bold text-white hover:text-primary transition-colors cursor-pointer">
                          {item.value}
                        </a>
                      ) : (
                        <div>
                          <p className="text-xl font-bold text-white leading-tight">{item.value}</p>
                          {item.subValue && <p className="text-muted text-sm mt-1">{item.subValue}</p>}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 border-border/20 flex gap-4"
              >
                <a href="#" className="w-12 h-12 bg-darker rounded-xl flex items-center justify-center text-muted hover:text-primary border border-border hover:border-primary transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-darker rounded-xl flex items-center justify-center text-muted hover:text-primary border border-border hover:border-primary transition-all duration-300">
                  <MessageCircle size={20} />
                </a>
              </motion.div>
            </div>

            {/* Email Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-card p-10 md:p-14 pb-8 rounded-2xl border border-border/50 shadow-2xl relative lg:mt-0"
            >

              <div className="text-center mb-8 mt-6">
                <h2 className="text-2xl font-bold text-white mb-2">Send an Inquiry</h2>
                <p className="text-muted text-sm">Fill out the details below for a customized consultation.</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">First Name</label>
                    <input type="text" placeholder="John" className="w-full bg-darker border border-border/80 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-muted/20" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full bg-darker border border-border/80 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-muted/20" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-darker border border-border/80 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-muted/20" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Primary Goal Focus</label>
                  <div className="relative">
                    <select className="w-full bg-darker border border-border/80 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none text-muted">
                      <option>Fat Loss & Toning</option>
                      <option>Muscle Gain & Strength</option>
                      <option>Recomposition (Lose Fat/Build Muscle)</option>
                      <option>Corporate Fitness / Group</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Your Current Challenge / Message</label>
                  <textarea rows={4} placeholder="Tell me about your fitness journey..." className="w-full bg-darker border border-border/80 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-muted/20"></textarea>
                </div>

                <Button
                  type="submit"
                  fullWidth
                  className="mt-4 shadow-gold"
                  onClick={(e) => { e.preventDefault(); alert('Email forwarding setup required.'); }}
                >
                  Submit Inquiry
                </Button>

                <div className="pt-6 text-center">
                  <p className="text-muted text-xs">I personally respond to all inquiries within 24 business hours.</p>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      <MapSection />
    </div>
  );
};


export default Contact;
