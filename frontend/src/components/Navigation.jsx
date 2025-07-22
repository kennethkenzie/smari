import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <Link to="/" className="text-white text-3xl font-light tracking-wider hover:opacity-80 transition-opacity duration-300">
          MetaDesign
        </Link>

        {/* Main Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          <Link to="/about" className="text-white text-lg font-light hover:opacity-80 transition-opacity duration-300">
            About
          </Link>
          <Link to="/work" className="text-white text-lg font-light hover:opacity-80 transition-opacity duration-300">
            Work
          </Link>
          <Link to="/offices" className="text-white text-lg font-light hover:opacity-80 transition-opacity duration-300">
            Offices
          </Link>
          <Link to="/careers" className="text-white text-lg font-light hover:opacity-80 transition-opacity duration-300">
            Careers
          </Link>
          <Link to="/contact" className="text-white text-lg font-light hover:opacity-80 transition-opacity duration-300">
            Contact
          </Link>
          <Link to="/metatalks" className="text-white text-lg font-light hover:opacity-80 transition-opacity duration-300">
            MetaTalks
          </Link>
          
          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={() => setLanguageOpen(!languageOpen)}
              className="text-white text-lg font-light hover:opacity-80 transition-opacity duration-300 flex items-center"
            >
              En
              <svg className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${languageOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {languageOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg py-2 w-20">
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">En</button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">De</button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;