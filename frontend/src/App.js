import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import EnhancedHomepage from "./components/EnhancedHomepage";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import PageTransition from "./components/PageTransition";

// Enhanced placeholder components with better animations
const About = () => (
  <PageTransition>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-light text-gray-900 mb-8 animate-fadeInUp">About Page</h1>
        <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          <p className="text-xl text-gray-600 leading-relaxed">
            This is where the full About page content would be displayed with rich animations and interactions.
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
        <h1 className="text-6xl font-light text-gray-900 mb-8 animate-fadeInUp">Work Page</h1>
        <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          <p className="text-xl text-gray-600 leading-relaxed">
            Portfolio and case studies would be showcased here with interactive galleries.
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
        <h1 className="text-6xl font-light text-gray-900 mb-8 animate-fadeInUp">Offices Page</h1>
        <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          <p className="text-xl text-gray-600 leading-relaxed">
            Global office locations with interactive maps and contact information.
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
        <h1 className="text-6xl font-light text-gray-900 mb-8 animate-fadeInUp">Careers Page</h1>
        <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          <p className="text-xl text-gray-600 leading-relaxed">
            Join our team - career opportunities and company culture.
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
        <h1 className="text-6xl font-light text-gray-900 mb-8 animate-fadeInUp">Contact Page</h1>
        <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get in touch with our team for collaboration and inquiries.
          </p>
          <p className="text-lg text-gray-500">
            Interactive contact forms and office information coming soon.
          </p>
        </div>
      </div>
    </div>
  </PageTransition>
);

const MetaTalks = () => (
  <PageTransition>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-light text-gray-900 mb-8 animate-fadeInUp">MetaTalks Page</h1>
        <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          <p className="text-xl text-gray-600 leading-relaxed">
            Insights, events, and thought leadership from our design experts.
          </p>
          <p className="text-lg text-gray-500">
            Blog posts, event listings, and video content coming soon.
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
          <Route path="/metatalks" element={<MetaTalks />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;