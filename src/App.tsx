import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './App.css';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from '@vercel/analytics/react';

// Lazy loading pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Portal = lazy(() => import('./pages/Portal'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));

const LoadingFallback = () => (
  <div className="min-h-screen bg-dark flex flex-col gap-4 items-center justify-center">
    <div className="w-16 h-16 border-4 border-border border-t-primary rounded-full animate-spin"></div>
    <span className="text-primary uppercase tracking-widest text-sm font-bold animate-pulse">Loading Asset</span>
  </div>
);

function App() {
  return (
    <Router>
      <SpeedInsights />
      <Analytics />
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={
              <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
                <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
                <p className="text-xl text-white mb-8">Page Not Found</p>
                <a href="/" className="bg-primary text-black px-8 py-3 rounded uppercase font-bold text-sm tracking-wider hover:bg-white transition-colors">
                  Go Home
                </a>
              </div>
            } />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
