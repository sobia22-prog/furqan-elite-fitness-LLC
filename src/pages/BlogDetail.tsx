import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Clock, Share2 } from 'lucide-react';
import { fetchPostBySlug, type Post } from '../api/blog';
import SEO from '../components/Layout/SEO';
import Button from '../components/UI/Button';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;
      try {
        const data = await fetchPostBySlug(slug);
        if (data.success) {
          setPost(data.post);
        } else {
          setError('Article not found.');
        }
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Connection error.');
      } finally {
        setLoading(false);
      }
    };
    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-border border-t-primary rounded-full animate-spin"></div>
        <p className="mt-6 text-muted uppercase tracking-widest font-bold animate-pulse">Loading Elite Insights</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-dark flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-bold text-white mb-4 uppercase">Content Not Found</h2>
        <p className="text-muted mb-8">{error || "This article might have been moved or archived."}</p>
        <Link to="/blog">
          <Button variant="outline">Back to Insights</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-dark min-h-screen pb-24">
      <SEO 
        title={`${post.title} | Furqan Elite Blog`}
        description={post.excerpt}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={post.featuredImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 absolute bottom-0 left-0 right-0 pb-12 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block bg-primary text-black px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-md mb-6 shadow-glow">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight leading-tight max-w-4xl">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted text-sm uppercase tracking-widest font-semibold">
              <span className="flex items-center gap-2"><Calendar size={16} className="text-primary" /> {new Date(post.createdAt).toLocaleDateString()}</span>
              <span className="flex items-center gap-2"><User size={16} className="text-primary" /> {post.author?.name || 'Admin'}</span>
              <span className="flex items-center gap-2"><Clock size={16} className="text-primary" /> 5 Min Read</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 max-w-4xl mt-12 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="flex-grow">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose prose-invert prose-lg max-w-none text-muted leading-relaxed"
            >
              {/* This is where real markdown or HTML would be rendered */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </motion.div>

            {/* Post Footer */}
            <div className="mt-16 pt-8 border-t border-border/50 flex flex-wrap justify-between items-center gap-6">
              <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors uppercase font-bold text-sm tracking-widest">
                <ArrowLeft size={18} /> Back to Insights
              </Link>
              <div className="flex items-center gap-4">
                <span className="text-muted text-xs uppercase font-bold tracking-widest">Share Article:</span>
                <button className="text-muted hover:text-primary transition-colors"><Share2 size={18} /></button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
