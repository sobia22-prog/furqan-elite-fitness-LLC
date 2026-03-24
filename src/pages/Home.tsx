import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import ServicesSection from '../components/Home/ServicesSection';
import SuccessStoriesSection from '../components/Home/SuccessStoriesSection';
import PricingSection from '../components/Home/PricingSection';
import CalculatorSection from '../components/Home/CalculatorSection';
import MapSection from '../components/Contact/MapSection';
import SEO from '../components/Layout/SEO';
import AssessmentForm from '../components/Home/AssessmentForm';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="Furqan Transformation Hub LLC | VIP Personal Training Dubai"
        description="Book a free assessment with Furqan Transformation Hub LLC. Transforming bodies and building elite mindsets through personal training and online coaching."
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AssessmentForm id="assessment" />
      <SuccessStoriesSection />
      <CalculatorSection />
      <PricingSection />
      <MapSection />
    </div>
  );
};

export default Home;
