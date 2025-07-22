import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimations from './ScrollAnimations';
import TypewriterEffect from './TypewriterEffect';
import VideoCarousel from './VideoCarousel';

const EnhancedHomepage = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typewriterStarted, setTypewriterStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Start typewriter effect after component mounts
    setTimeout(() => setTypewriterStarted(true), 1000);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

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
      {/* Animated Background Elements - Only on Desktop */}
      {!isMobile && (
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
      )}

      {/* Main Split Screen Layout */}
      <div className="flex flex-col lg:flex-row min-h-screen relative z-10">
        {/* Left Side - Red */}
        <div className="w-full lg:w-1/2 bg-metadesign-red flex flex-col justify-center items-start px-6 sm:px-12 lg:px-16 py-16 lg:py-0 relative group overflow-hidden">
          {/* Parallax Background Effect - Desktop Only */}
          {!isMobile && (
            <div 
              className="absolute inset-0 opacity-10 transition-transform duration-1000"
              style={{
                transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px) scale(1.1)`,
                background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
              }}
            />
          )}
          
          <ScrollAnimations animation="slideInLeft" delay={500}>
            <div className="max-w-lg relative z-20">
              <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-light leading-tight mb-8 lg:mb-12 overflow-hidden">
                {typewriterStarted ? (
                  <TypewriterEffect
                    text="We create bold brands that make an impact"
                    delay={50}
                    className="inline-block"
                  />
                ) : (
                  <span className="opacity-0">We create bold brands that make an impact</span>
                )}
              </h1>
              
              <ScrollAnimations animation="fadeInUp" delay={2500}>
                <div className="flex items-center group cursor-pointer" data-cursor="red">
                  <span className="text-white text-sm sm:text-lg font-light tracking-widest uppercase transition-all duration-300 group-hover:tracking-[0.2em]">
                    ABOUT US
                  </span>
                  <div className="ml-4 lg:ml-6 h-px bg-white w-12 lg:w-16 transition-all duration-500 group-hover:w-16 lg:group-hover:w-24"></div>
                  <div className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
                    <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </ScrollAnimations>
            </div>
          </ScrollAnimations>

          {/* Floating Geometric Elements - Desktop Only */}
          {!isMobile && (
            <>
              <div className="absolute top-1/4 right-10 w-8 h-8 border border-white/20 rotate-45 animate-pulse"></div>
              <div className="absolute bottom-1/3 right-20 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
            </>
          )}
        </div>

        {/* Right Side - Full Video Carousel Overlay */}
        <div className="w-full lg:w-1/2 relative overflow-hidden">
          <ScrollAnimations animation="slideInRight" delay={800}>
            <VideoCarousel />
          </ScrollAnimations>
        </div>
      </div>

      {/* Enhanced Side Navigation Buttons - Desktop Only */}
      {!isMobile && (
        <>
          <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40">
            <button 
              onClick={() => openPanel('about')}
              className="group bg-metadesign-red text-white px-6 lg:px-8 py-3 lg:py-4 transform -rotate-90 origin-left hover:bg-red-600 transition-all duration-500 font-light text-base lg:text-lg tracking-wider hover:scale-105 hover:shadow-2xl"
              style={{ transformOrigin: 'left center' }}
              data-cursor="red"
            >
              <span className="flex items-center">
                About
                <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-90">
                  <svg className="w-3 lg:w-4 h-3 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </span>
            </button>
          </div>

          <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40">
            <button 
              onClick={() => openPanel('work')}
              className="group bg-gray-900 text-white px-6 lg:px-8 py-3 lg:py-4 transform rotate-90 origin-right hover:bg-gray-800 transition-all duration-500 font-light text-base lg:text-lg tracking-wider hover:scale-105 hover:shadow-2xl border border-white/20"
              style={{ transformOrigin: 'right center' }}
              data-cursor="red"
            >
              <span className="flex items-center">
                Work
                <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -rotate-90">
                  <svg className="w-3 lg:w-4 h-3 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </span>
            </button>
          </div>
        </>
      )}

      {/* Mobile Menu Buttons */}
      {isMobile && (
        <div className="fixed bottom-20 left-0 right-0 z-40 px-6">
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => openPanel('about')}
              className="bg-metadesign-red text-white px-6 py-3 rounded-full font-light text-sm tracking-wider hover:bg-red-600 transition-all duration-300 shadow-lg"
            >
              About Us
            </button>
            <button 
              onClick={() => openPanel('work')}
              className="bg-gray-900 text-white px-6 py-3 rounded-full font-light text-sm tracking-wider hover:bg-gray-800 transition-all duration-300 border border-white/20 shadow-lg"
            >
              Our Work
            </button>
          </div>
        </div>
      )}

      {/* Enhanced Side Panels with Mobile Responsiveness */}
      {/* About Panel */}
      <div className={`fixed inset-y-0 left-0 w-full lg:w-1/2 bg-metadesign-red transform transition-all duration-700 ease-out z-30 ${
        showAbout ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-6 sm:p-12 lg:p-16 pt-24 lg:pt-32 relative overflow-hidden overflow-y-auto">
          {/* Close button */}
          <button 
            onClick={() => setShowAbout(false)}
            className="absolute top-6 lg:top-8 right-6 lg:right-8 text-white hover:opacity-70 text-2xl z-50 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:scale-110"
            data-cursor="red"
          >
            ×
          </button>

          {/* Background decoration - Desktop Only */}
          {!isMobile && (
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-white/10 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
          )}
          
          {showAbout && (
            <>
              <div className="animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-light mb-6 lg:mb-8">About Smari Creatives</h2>
              </div>
              
              <div className="text-white text-lg sm:text-xl font-light leading-relaxed space-y-6">
                <div className="animate-fadeInUp" style={{ animationDelay: '400ms' }}>
                  <p>We are a creative agency specializing in bold brand experiences that make a lasting impact. Our team combines strategic thinking with innovative design to help brands stand out in today's competitive landscape.</p>
                </div>
                <div className="animate-fadeInUp" style={{ animationDelay: '600ms' }}>
                  <p>From brand identity to digital campaigns, we craft compelling narratives that resonate with audiences and drive meaningful engagement.</p>
                </div>
                <div className="animate-fadeInUp" style={{ animationDelay: '800ms' }}>
                  <p>Let's create something extraordinary together and make your brand the best it can be.</p>
                </div>
              </div>
              
              <div className="mt-8 lg:mt-12 animate-fadeInUp" style={{ animationDelay: '1000ms' }}>
                <Link 
                  to="/about" 
                  className="group text-white text-base lg:text-lg border-b border-white pb-1 hover:border-white/50 transition-all duration-300 inline-flex items-center"
                  data-cursor="red"
                >
                  Learn more about us
                  <div className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
                    <svg className="w-3 lg:w-4 h-3 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <div className={`fixed inset-y-0 right-0 w-full lg:w-1/2 bg-gray-900 transform transition-all duration-700 ease-out z-30 ${
        showWork ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-6 sm:p-12 lg:p-16 pt-24 lg:pt-32 relative overflow-hidden overflow-y-auto">
          {/* Close button */}
          <button 
            onClick={() => setShowWork(false)}
            className="absolute top-6 lg:top-8 left-6 lg:left-8 text-white hover:opacity-70 text-2xl z-50 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:scale-110"
            data-cursor="red"
          >
            ×
          </button>

          {/* Background decoration - Desktop Only */}
          {!isMobile && (
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-metadesign-red/10 to-transparent rounded-full -translate-y-48 -translate-x-48"></div>
          )}
          
          {showWork && (
            <>
              <div className="animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-light mb-6 lg:mb-8">Our Work</h2>
              </div>
              
              <div className="text-white text-lg sm:text-xl font-light leading-relaxed space-y-6 lg:space-y-8">
                <div className="animate-fadeInUp border-l-2 border-metadesign-red pl-6 py-4 transition-all duration-300 hover:border-l-4 hover:pl-8" style={{ animationDelay: '400ms' }}>
                  <h3 className="text-xl lg:text-2xl mb-2">Brand Identity Design</h3>
                  <p className="opacity-80">Creating memorable brand experiences that resonate with your audience</p>
                </div>
                <div className="animate-fadeInUp border-l-2 border-gray-600 pl-6 py-4 transition-all duration-300 hover:border-metadesign-red hover:border-l-4 hover:pl-8" style={{ animationDelay: '600ms' }}>
                  <h3 className="text-xl lg:text-2xl mb-2">Digital Campaigns</h3>
                  <p className="opacity-80">Strategic campaigns that drive engagement and conversion</p>
                </div>
                <div className="animate-fadeInUp border-l-2 border-gray-600 pl-6 py-4 transition-all duration-300 hover:border-metadesign-red hover:border-l-4 hover:pl-8" style={{ animationDelay: '800ms' }}>
                  <h3 className="text-xl lg:text-2xl mb-2">Creative Strategy</h3>
                  <p className="opacity-80">Innovative strategies that set your brand apart</p>
                </div>
              </div>
              
              <div className="mt-8 lg:mt-12 animate-fadeInUp" style={{ animationDelay: '1000ms' }}>
                <Link 
                  to="/work" 
                  className="group text-white text-base lg:text-lg border-b border-white pb-1 hover:border-white/50 transition-all duration-300 inline-flex items-center"
                  data-cursor="red"
                >
                  View all projects
                  <div className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
                    <svg className="w-3 lg:w-4 h-3 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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