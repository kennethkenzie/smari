import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
    { name: 'Offices', path: '/offices' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="flex items-center justify-between px-6 sm:px-8 py-4 sm:py-6">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-white text-2xl sm:text-3xl font-light tracking-wider hover:opacity-80 transition-all duration-300 transform hover:scale-105 z-50"
          data-cursor="red"
        >
          Smari Creatives
        </Link>

        {/* Main Navigation - Desktop */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
          {navigationItems.map((item, index) => (
            <Link 
              key={item.name}
              to={item.path} 
              className="relative text-white text-base xl:text-lg font-light hover:opacity-80 transition-all duration-300 group animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
              data-cursor="red"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-metadesign-red transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          
          {/* Language Selector - Desktop */}
          <div className="relative animate-fadeInUp" style={{ animationDelay: '600ms' }}>
            <button 
              onClick={() => setLanguageOpen(!languageOpen)}
              className="text-white text-base xl:text-lg font-light hover:opacity-80 transition-all duration-300 flex items-center group"
              data-cursor="red"
            >
              En
              <svg className={`ml-1 w-4 h-4 transform transition-all duration-300 ${languageOpen ? 'rotate-180 text-metadesign-red' : 'group-hover:text-metadesign-red'}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            <div className={`absolute top-full right-0 mt-2 transform transition-all duration-300 ${
              languageOpen 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
            }`}>
              <div className="bg-white rounded-lg shadow-xl py-2 w-20 border border-gray-200 glass-morph">
                <button 
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-metadesign-red hover:text-white transition-all duration-200"
                  data-cursor="red"
                >
                  En
                </button>
                <button 
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-metadesign-red hover:text-white transition-all duration-200"
                  data-cursor="red"
                >
                  De
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white hover:text-metadesign-red transition-colors duration-300 transform hover:scale-110 z-50"
          data-cursor="red"
        >
          <svg 
            className={`w-6 h-6 transform transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-md transform transition-all duration-500 ${
        mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`} style={{ top: 0 }}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navigationItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-white text-2xl font-light hover:text-metadesign-red transition-all duration-300 transform hover:scale-110 ${
                mobileMenuOpen ? 'animate-fadeInUp' : ''
              }`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Mobile Language Selector */}
          <div className="flex items-center space-x-6 mt-12">
            <button 
              className={`text-white text-xl font-light hover:text-metadesign-red transition-colors duration-300 ${
                mobileMenuOpen ? 'animate-fadeInUp' : ''
              }`}
              style={{ animationDelay: '800ms' }}
            >
              En
            </button>
            <span className="text-white/30">|</span>
            <button 
              className={`text-white text-xl font-light hover:text-metadesign-red transition-colors duration-300 ${
                mobileMenuOpen ? 'animate-fadeInUp' : ''
              }`}
              style={{ animationDelay: '900ms' }}
            >
              De
            </button>
          </div>
        </div>
      </div>

      {/* Navigation line animation */}
      <div className={`h-px bg-gradient-to-r from-transparent via-metadesign-red to-transparent transition-opacity duration-500 ${
        scrolled ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </nav>
  );
};

export default Navigation;