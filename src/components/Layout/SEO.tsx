import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Furqan Transformation Hub LLC | Premium Personal Trainer in Dubai",
  description = "Achieve your dream physique with Furqan Transformation Hub LLC. Specialized in fat loss, muscle gain, and transformation programs in Dubai.",
  keywords = "Personal Trainer in Dubai, Fitness Coach, Fat Loss Trainer Dubai, Gym Coach UAE, Online Coaching, Ramadan Workout Dubai",
  url = "https://furqanelitefitness.com",
  image = "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
