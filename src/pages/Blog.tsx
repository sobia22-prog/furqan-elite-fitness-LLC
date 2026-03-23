import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/Layout/SEO';
import { blogsData } from '../data/mockData';
import { Calendar, User, ArrowRight } from 'lucide-react';

import PageHero from '../components/Layout/PageHero';
import Button from '../components/UI/Button';

const Blog: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="Fitness Blog & Insights | Furqan Transformation Hub LLC Dubai"
        description="Read articles on fat loss, muscle building, and mindset written by Elite Trainer Furqan."
      />

      <PageHero
        title="Elite"
        highlightedText="Insights"
        subtitle="Actionable science-driven nutrition advice, training tactics, and mindset strategies."
      />

      <section className="py-24 bg-dark -mt-16 md:-mt-32 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.map((post: any, index: number) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl border border-border/50 hover:border-primary/50 overflow-hidden flex flex-col h-full group hover-scale shadow-lg"
              >
                {/* Image Area */}
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-black px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md shadow-glow">
                    Training
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-muted mb-4 uppercase tracking-widest font-semibold border-b border-border/50 pb-4">
                    <span className="flex items-center gap-1"><Calendar size={14} className="text-primary" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={14} className="text-primary" /> Furqan</span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                  </h2>

                  <p className="text-muted leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>

                  <a
                    href={`/blog/${post.id}`}
                    className="mt-auto inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wide hover:text-white transition-colors text-sm group-hover:underline underline-offset-4"
                  >
                    Read Full Article <ArrowRight size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
