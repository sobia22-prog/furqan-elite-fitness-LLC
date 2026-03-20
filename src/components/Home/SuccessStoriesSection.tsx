import React from 'react';
import { motion } from 'framer-motion';
import { successStoriesData } from '../../data/mockData';
import Button from '../UI/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SuccessStoriesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  // Responsive items per view
  const [itemsPerView, setItemsPerView] = React.useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = successStoriesData.length;
  const maxIndex = totalItems - itemsPerView;

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  React.useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="py-24 bg-dark relative overflow-hidden" id="success-stories">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 capitalize"
            >
              Real Results. <span className="text-primary italic">Real Transformations.</span>
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted text-lg"
            >
              See what ordinary people achieved with elite coaching and mindset shifts.
            </motion.p>
          </div>

          {/* Slider Controls */}
          <div className="flex gap-4">
            <button 
              onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Slider Viewport */}
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-8"
            animate={{ x: `calc(-${currentIndex * (100 / itemsPerView)}% - ${currentIndex * 2}rem)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {successStoriesData.map((story) => (
              <div 
                key={story.id} 
                className="flex-shrink-0"
                style={{ width: `calc(${100 / itemsPerView}% - ${(8 * (itemsPerView - 1)) / itemsPerView}px)` }}
              >
                <div className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-colors group flex flex-col h-full shadow-lg">
                  {/* Image Container */}
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={story.image} 
                      alt={`${story.name} Transformation`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <h3 className="text-xl font-bold text-white tracking-wide">{story.name}</h3>
                      <span className="bg-primary text-black text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                        {story.result}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-8 relative flex flex-col flex-grow">
                    <span className="absolute top-4 left-6 text-4xl sm:text-6xl text-primary/20 font-serif leading-none">"</span>
                    <p className="text-muted italic relative z-10 mt-6 flex-grow leading-relaxed">
                      {story.quote}
                    </p>
                    
                    {/* 5 Stars */}
                    <div className="flex text-primary mt-8 pt-6 border-t border-border/50 text-sm tracking-widest drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                      ★★★★★
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {successStoriesData.slice(0, maxIndex + 1).map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrentIndex(i); setIsAutoPlaying(false); }}
              className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-12 bg-primary' : 'w-2 bg-border hover:bg-primary/50'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
        >
          <p className="text-xl font-bold text-white mb-6">You could be the next success story.</p>
          <Button
            href="https://wa.me/971501234567"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="shadow-gold"
          >
            Start Your Journey Now
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default SuccessStoriesSection;
