import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimations from './ScrollAnimations';
import TypewriterEffect from './TypewriterEffect';

const EnhancedHomepage = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typewriterStarted, setTypewriterStarted] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Start typewriter effect after component mounts
    setTimeout(() => setTypewriterStarted(true), 1000);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const openPanel = (panel) => {
    if (panel === 'about') {
      setShowAbout(true);
      setShowWork(false);
    } else {
      setShowWork(true);
      setShowAbout(false);
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-metadesign-red/5 to-transparent rounded-full transition-transform duration-[3000ms] ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.3}px)`,
            left: '10%',
            top: '20%',
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-radial from-white/5 to-transparent rounded-full transition-transform duration-[4000ms] ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * 0.4}px)`,
            right: '15%',
            bottom: '25%',
          }}
        />
      </div>

      {/* Main Split Screen Layout */}
      <div className="flex h-screen relative z-10">
        {/* Left Side - Red */}
        <div className="w-1/2 bg-metadesign-red flex flex-col justify-center items-start px-16 relative group overflow-hidden">
          {/* Parallax Background Effect */}
          <div 
            className="absolute inset-0 opacity-10 transition-transform duration-1000"
            style={{
              transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px) scale(1.1)`,
              background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
            }}
          />
          
          <ScrollAnimations animation="slideInLeft" delay={500}>
            <div className="max-w-lg relative z-20">
              <h1 className="text-white text-7xl font-light leading-tight mb-12 overflow-hidden">
                {typewriterStarted ? (
                  <TypewriterEffect
                    text="We make businesses the best they can be"
                    delay={50}
                    className="inline-block"
                  />
                ) : (
                  <span className="opacity-0">We make businesses the best they can be</span>
                )}
              </h1>
              
              <ScrollAnimations animation="fadeInUp" delay={2500}>
                <div className="flex items-center group cursor-pointer" data-cursor="red">
                  <span className="text-white text-lg font-light tracking-widest uppercase transition-all duration-300 group-hover:tracking-[0.2em]">
                    ABOUT US
                  </span>
                  <div className="ml-6 h-px bg-white w-16 transition-all duration-500 group-hover:w-24"></div>
                  <div className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </ScrollAnimations>
            </div>
          </ScrollAnimations>

          {/* Floating Geometric Elements */}
          <div className="absolute top-1/4 right-10 w-8 h-8 border border-white/20 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-20 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        </div>

        {/* Right Side - Black */}
        <div className="w-1/2 bg-black flex flex-col justify-center items-start px-16 relative group overflow-hidden">
          {/* Parallax Background Effect */}
          <div 
            className="absolute inset-0 opacity-5 transition-transform duration-1000"
            style={{
              transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px) scale(1.05)`,
              background: 'linear-gradient(45deg, rgba(242,2,28,0.1) 0%, transparent 50%)',
            }}
          />

          <ScrollAnimations animation="slideInRight" delay={800}>
            <div className="max-w-lg relative z-20">
              <h2 className="text-white text-7xl font-light leading-tight mb-8">
                Creativity with the power to transform
              </h2>
              
              <ScrollAnimations animation="fadeInUp" delay={1200}>
                <div className="flex items-center mb-12 group cursor-pointer" data-cursor="red">
                  <span className="text-white text-lg font-light tracking-widest uppercase transition-all duration-300 group-hover:tracking-[0.2em]">
                    OUR WORK
                  </span>
                  <div className="ml-6 h-px bg-white w-16 transition-all duration-500 group-hover:w-24"></div>
                  <div className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </ScrollAnimations>
              
              {/* Enhanced Case Study */}
              <ScrollAnimations animation="fadeInUp" delay={1500}>
                <div className="mt-16 group cursor-pointer transform transition-all duration-500 hover:translate-x-4" data-cursor="red">
                  <div className="relative overflow-hidden">
                    <div className="flex items-center justify-between p-6 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10 group-hover:border-metadesign-red/50">
                      <div>
                        <span className="text-white text-2xl font-light mb-2 block">Cencora</span>
                        <span className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">
                          Healthcare Brand Transformation
                        </span>
                      </div>
                      <div className="flex items-center text-metadesign-red">
                        <span className="text-sm font-light mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          View Case
                        </span>
                        <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimations>
            </div>
          </ScrollAnimations>

          {/* Floating Geometric Elements */}
          <div className="absolute top-1/3 left-10 w-6 h-6 border border-metadesign-red/30 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-16 w-1 h-1 bg-metadesign-red rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Enhanced Side Navigation Buttons */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40">
        <button 
          onClick={() => openPanel('about')}
          className="group bg-metadesign-red text-white px-8 py-4 transform -rotate-90 origin-left hover:bg-red-600 transition-all duration-500 font-light text-lg tracking-wider hover:scale-105 hover:shadow-2xl"
          style={{ transformOrigin: 'left center' }}
          data-cursor="red"
        >
          <span className="flex items-center">
            About
            <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-90">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </span>
        </button>
      </div>

      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40">
        <button 
          onClick={() => openPanel('work')}
          className="group bg-black text-white px-8 py-4 transform rotate-90 origin-right hover:bg-gray-800 transition-all duration-500 font-light text-lg tracking-wider hover:scale-105 hover:shadow-2xl border border-white/20"
          style={{ transformOrigin: 'right center' }}
          data-cursor="red"
        >
          <span className="flex items-center">
            Work
            <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -rotate-90">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </span>
        </button>
      </div>

      {/* Enhanced Side Panels with Staggered Animations */}
      {/* About Panel */}
      <div className={`fixed inset-y-0 left-0 w-1/2 bg-metadesign-red transform transition-all duration-700 ease-out z-30 ${
        showAbout ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-16 pt-32 relative overflow-hidden">
          {/* Close button */}
          <button 
            onClick={() => setShowAbout(false)}
            className="absolute top-8 right-8 text-white hover:opacity-70 text-2xl z-50 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:scale-110"
            data-cursor="red"
          >
            ×
          </button>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-white/10 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
          
          {showAbout && (
            <>
              <div className="animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                <h2 className="text-white text-5xl font-light mb-8">About MetaDesign</h2>
              </div>
              
              <div className="text-white text-xl font-light leading-relaxed space-y-6">
                <div className="animate-fadeInUp" style={{ animationDelay: '400ms' }}>
                  <p>We are a creative brand consultancy. We've been collaborating with leading organizations to solve brand and business challenges since 1979.</p>
                </div>
                <div className="animate-fadeInUp" style={{ animationDelay: '600ms' }}>
                  <p>Our approach combines strategic thinking with creative excellence to create meaningful connections between brands and people.</p>
                </div>
                <div className="animate-fadeInUp" style={{ animationDelay: '800ms' }}>
                  <p>From brand strategy to digital experiences, we help businesses become the best they can be.</p>
                </div>
              </div>
              
              <div className="mt-12 animate-fadeInUp" style={{ animationDelay: '1000ms' }}>
                <Link 
                  to="/about" 
                  className="group text-white text-lg border-b border-white pb-1 hover:border-white/50 transition-all duration-300 inline-flex items-center"
                  data-cursor="red"
                >
                  Learn more about us
                  <div className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Work Panel */}
      <div className={`fixed inset-y-0 right-0 w-1/2 bg-black transform transition-all duration-700 ease-out z-30 ${
        showWork ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-16 pt-32 relative overflow-hidden">
          {/* Close button */}
          <button 
            onClick={() => setShowWork(false)}
            className="absolute top-8 left-8 text-white hover:opacity-70 text-2xl z-50 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:scale-110"
            data-cursor="red"
          >
            ×
          </button>

          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-metadesign-red/10 to-transparent rounded-full -translate-y-48 -translate-x-48"></div>
          
          {showWork && (
            <>
              <div className="animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                <h2 className="text-white text-5xl font-light mb-8">Our Work</h2>
              </div>
              
              <div className="text-white text-xl font-light leading-relaxed space-y-8">
                <div className="animate-fadeInUp border-l-2 border-metadesign-red pl-6 py-4 transition-all duration-300 hover:border-l-4 hover:pl-8" style={{ animationDelay: '400ms' }}>
                  <h3 className="text-2xl mb-2">Cencora</h3>
                  <p className="opacity-80">Brand transformation for a leading healthcare company</p>
                </div>
                <div className="animate-fadeInUp border-l-2 border-gray-600 pl-6 py-4 transition-all duration-300 hover:border-metadesign-red hover:border-l-4 hover:pl-8" style={{ animationDelay: '600ms' }}>
                  <h3 className="text-2xl mb-2">Deutsche Telekom</h3>
                  <p className="opacity-80">Digital brand experience redesign</p>
                </div>
                <div className="animate-fadeInUp border-l-2 border-gray-600 pl-6 py-4 transition-all duration-300 hover:border-metadesign-red hover:border-l-4 hover:pl-8" style={{ animationDelay: '800ms' }}>
                  <h3 className="text-2xl mb-2">Volkswagen</h3>
                  <p className="opacity-80">Brand strategy and identity development</p>
                </div>
              </div>
              
              <div className="mt-12 animate-fadeInUp" style={{ animationDelay: '1000ms' }}>
                <Link 
                  to="/work" 
                  className="group text-white text-lg border-b border-white pb-1 hover:border-white/50 transition-all duration-300 inline-flex items-center"
                  data-cursor="red"
                >
                  View all projects
                  <div className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnhancedHomepage;