import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import EnhancedHomepage from "./components/EnhancedHomepage";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import PageTransition from "./components/PageTransition";
import WorkPage from "./components/WorkPage";

// Enhanced placeholder components with better animations
const About = () => (
  <PageTransition>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-light text-gray-900 mb-8 animate-fadeInUp">About Smari Creatives</h1>
        <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are a bold creative agency specializing in brand experiences that make a lasting impact.
          </p>
          <p className="text-lg text-gray-500">
            Enhanced with smooth page transitions and scroll animations.
          </p>
        </div>
      </div>
    </div>
  </PageTransition>
);

const Work = () => (
  <PageTransition>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-light text-gray-900 mb-8 animate-fadeInUp">Our Work</h1>
        <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          <p className="text-xl text-gray-600 leading-relaxed">
            Creative projects and brand campaigns that drive results and make an impact.
          </p>
          <p className="text-lg text-gray-500">
            Coming soon with advanced hover effects and project showcases.
          </p>
        </div>
      </div>
    </div>
  </PageTransition>
);

const Offices = () => (
  <PageTransition>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-light text-gray-900 mb-8 animate-fadeInUp">Our Offices</h1>
        <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          <p className="text-xl text-gray-600 leading-relaxed">
            Global locations in New York, London, Dubai, and Tokyo.
          </p>
          <p className="text-lg text-gray-500">
            Enhanced with location animations and contact forms.
          </p>
        </div>
      </div>
    </div>
  </PageTransition>
);

const Careers = () => (
  <PageTransition>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-light text-gray-900 mb-8 animate-fadeInUp">Join Our Team</h1>
        <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          <p className="text-xl text-gray-600 leading-relaxed">
            Be part of our creative journey - career opportunities at Smari Creatives.
          </p>
          <p className="text-lg text-gray-500">
            Interactive job listings and application forms coming soon.
          </p>
        </div>
      </div>
    </div>
  </PageTransition>
);

const Contact = () => (
  <PageTransition>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-light text-gray-900 mb-8 animate-fadeInUp">Let's Create Together</h1>
        <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to start your next creative project? Get in touch with our team.
          </p>
          <p className="text-lg text-gray-500">
            Interactive contact forms and office information coming soon.
          </p>
        </div>
      </div>
    </div>
  </PageTransition>
);

const Blog = () => (
  <PageTransition>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-light text-gray-900 mb-8 animate-fadeInUp">Creative Insights</h1>
        <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          <p className="text-xl text-gray-600 leading-relaxed">
            Thoughts, inspiration, and insights from our creative team.
          </p>
          <p className="text-lg text-gray-500">
            Blog posts and creative content coming soon.
          </p>
        </div>
      </div>
    </div>
  </PageTransition>
);

function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 768 && !('ontouchstart' in window));
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <div className={`App relative ${isDesktop ? 'custom-cursor-enabled' : ''}`}>
      <BrowserRouter>
        {isDesktop && <CustomCursor />}
        <Navigation />
        <Routes>
          <Route path="/" element={<EnhancedHomepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;