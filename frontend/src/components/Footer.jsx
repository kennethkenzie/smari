import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-20">
      <div className="flex">
        {/* Left Footer - Red Side */}
        <div className="w-1/2 bg-metadesign-red px-16 py-6">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-8">
              <Link to="/about" className="text-sm font-light hover:opacity-70 transition-opacity duration-300">
                About
              </Link>
              <Link to="/work" className="text-sm font-light hover:opacity-70 transition-opacity duration-300">
                Work
              </Link>
              <Link to="/offices" className="text-sm font-light hover:opacity-70 transition-opacity duration-300">
                Offices
              </Link>
              <Link to="/metatalks" className="text-sm font-light hover:opacity-70 transition-opacity duration-300">
                MetaTalks
              </Link>
            </div>
          </div>
        </div>

        {/* Right Footer - Black Side */}
        <div className="w-1/2 bg-black px-16 py-6">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-8">
              <Link to="/contact" className="text-sm font-light hover:opacity-70 transition-opacity duration-300">
                Let's talk
              </Link>
              <Link to="/contact" className="text-sm font-light hover:opacity-70 transition-opacity duration-300">
                Contact
              </Link>
              <Link to="/careers" className="text-sm font-light hover:opacity-70 transition-opacity duration-300">
                Join our team
              </Link>
              <Link to="/careers" className="text-sm font-light hover:opacity-70 transition-opacity duration-300">
                Careers
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white hover:opacity-70 transition-opacity duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-white hover:opacity-70 transition-opacity duration-300">
                <span className="sr-only">WeChat</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.033 12.248c-.15 0-.301-.05-.426-.151l-2.607-2.065-2.607 2.065c-.125.101-.276.151-.426.151-.188 0-.376-.076-.509-.227-.243-.276-.216-.698.06-.941L8.567 9.5 6.518 7.92c-.276-.243-.303-.665-.06-.941.243-.276.665-.303.941-.06l2.607 2.065 2.607-2.065c.276-.243.698-.216.941.06.243.276.216.698-.06.941L11.445 9.5l2.049 1.58c.276.243.303.665.06.941-.133.151-.321.227-.509.227z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:opacity-70 transition-opacity duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.017 5.5h-.017c-.298 0-.546-.248-.546-.546s.248-.546.546-.546h.017c.298 0 .546.248.546.546s-.248.546-.546.546zM10 7.5c1.378 0 2.5 1.122 2.5 2.5s-1.122 2.5-2.5 2.5-2.5-1.122-2.5-2.5S8.622 7.5 10 7.5zM10 6.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM14.5 3h-9c-1.378 0-2.5 1.122-2.5 2.5v9c0 1.378 1.122 2.5 2.5 2.5h9c1.378 0 2.5-1.122 2.5-2.5v-9c0-1.378-1.122-2.5-2.5-2.5zM16 14.5c0 .827-.673 1.5-1.5 1.5h-9c-.827 0-1.5-.673-1.5-1.5v-9c0-.827.673-1.5 1.5-1.5h9c.827 0 1.5.673 1.5 1.5v9z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Info */}
      <div className="bg-gray-900 px-16 py-4">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center space-x-8">
            <Link to="/imprint" className="hover:text-gray-200 transition-colors duration-300">
              Imprint
            </Link>
            <Link to="/privacy" className="hover:text-gray-200 transition-colors duration-300">
              Data Privacy
            </Link>
            <button className="hover:text-gray-200 transition-colors duration-300">
              Cookies Settings
            </button>
          </div>
          <div>
            © MetaDesign, part of Publicis Groupe
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;