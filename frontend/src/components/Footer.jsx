import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative mt-32">
      {/* Main Footer Section */}
      <div className="flex flex-col lg:flex-row min-h-[40vh] lg:min-h-[50vh]">
        {/* Left Footer - Red Side */}
        <div className="w-full lg:w-1/2 bg-metadesign-red px-8 lg:px-16 py-16 lg:py-24 flex flex-col">
          <div className="flex-1 space-y-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-white text-2xl font-light mb-6">Get in Touch</h3>
                <div className="space-y-4 text-white/80">
                  <p className="text-lg">
                    <span className="block font-medium">Email</span>
                    hello@metadesign.com
                  </p>
                  <p className="text-lg">
                    <span className="block font-medium">Phone</span>
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-8">
                <Link 
                  to="/contact"
                  className="inline-flex items-center bg-white text-metadesign-red px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  data-cursor="red"
                >
                  Start Your Project
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Left Footer Links */}
          <div className="border-t border-white/20 pt-8 mt-8">
            <div className="flex flex-wrap gap-8">
              <Link to="/about" className="text-white text-lg font-light hover:opacity-70 transition-opacity duration-300">
                About
              </Link>
              <Link to="/work" className="text-white text-lg font-light hover:opacity-70 transition-opacity duration-300">
                Work
              </Link>
              <Link to="/offices" className="text-white text-lg font-light hover:opacity-70 transition-opacity duration-300">
                Offices
              </Link>
              <Link to="/metatalks" className="text-white text-lg font-light hover:opacity-70 transition-opacity duration-300">
                MetaTalks
              </Link>
            </div>
          </div>
        </div>

        {/* Right Footer - Black Side */}
        <div className="w-full lg:w-1/2 bg-black px-8 lg:px-16 py-16 lg:py-24 flex flex-col">
          <div className="flex-1 space-y-12">
            {/* Global Offices */}
            <div>
              <h3 className="text-white text-2xl font-light mb-6">Global Offices</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/80">
                <div>
                  <p className="font-medium">Berlin</p>
                  <p className="text-sm text-white/60">Germany</p>
                </div>
                <div>
                  <p className="font-medium">San Francisco</p>
                  <p className="text-sm text-white/60">USA</p>
                </div>
                <div>
                  <p className="font-medium">London</p>
                  <p className="text-sm text-white/60">UK</p>
                </div>
                <div>
                  <p className="font-medium">Beijing</p>
                  <p className="text-sm text-white/60">China</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Footer Links */}
          <div className="border-t border-white/20 pt-8 mt-8">
            <div className="flex flex-wrap gap-8 mb-8">
              <Link to="/contact" className="text-white text-lg font-light hover:opacity-70 transition-opacity duration-300">
                Contact
              </Link>
              <Link to="/careers" className="text-white text-lg font-light hover:opacity-70 transition-opacity duration-300">
                Careers
              </Link>
              <Link to="/careers" className="text-white text-lg font-light hover:opacity-70 transition-opacity duration-300">
                Join Our Team
              </Link>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="text-white hover:text-metadesign-red transition-colors duration-300 transform hover:scale-110"
                data-cursor="red"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#" 
                className="text-white hover:text-metadesign-red transition-colors duration-300 transform hover:scale-110"
                data-cursor="red"
              >
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-white hover:text-metadesign-red transition-colors duration-300 transform hover:scale-110"
                data-cursor="red"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.017 5.5h-.017c-.298 0-.546-.248-.546-.546s.248-.546.546-.546h.017c.298 0 .546.248.546.546s-.248.546-.546.546zM10 7.5c1.378 0 2.5 1.122 2.5 2.5s-1.122 2.5-2.5 2.5-2.5-1.122-2.5-2.5S8.622 7.5 10 7.5zM10 6.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM14.5 3h-9c-1.378 0-2.5 1.122-2.5 2.5v9c0 1.378 1.122 2.5 2.5 2.5h9c1.378 0 2.5-1.122 2.5-2.5v-9c0-1.378-1.122-2.5-2.5-2.5zM16 14.5c0 .827-.673 1.5-1.5 1.5h-9c-.827 0-1.5-.673-1.5-1.5v-9c0-.827.673-1.5 1.5-1.5h9c.827 0 1.5.673 1.5 1.5v9z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#" 
                className="text-white hover:text-metadesign-red transition-colors duration-300 transform hover:scale-110"
                data-cursor="red"
              >
                <span className="sr-only">Dribbble</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017 0 15.551 4.477 20.034 10 20.034s10-4.483 10-10.017C20 4.484 15.523 0 10 0zm6.823 4.608c1.14 1.204 1.877 2.783 1.877 4.59 0 .485-.053.947-.157 1.394-.384-.73-.867-1.204-1.877-1.204s-1.493.474-1.877 1.204c-.104-.447-.157-.909-.157-1.394 0-1.807.737-3.386 1.877-4.59zM10 3.151c3.304 0 6.177 2.139 7.255 5.12-.829-.171-1.699-.171-2.528 0C13.649 5.29 11.304 3.151 10 3.151zm-6.823 1.457C4.316 5.812 5.053 7.391 5.053 9.198c0 .485-.053.947-.157 1.394-.384-.73-.867-1.204-1.877-1.204s-1.493.474-1.877 1.204c-.104-.447-.157-.909-.157-1.394 0-1.807.737-3.386 1.877-4.59zm0 10.784c-1.14-1.204-1.877-2.783-1.877-4.59 0-.485.053-.947.157-1.394.384.73.867 1.204 1.877 1.204s1.493-.474 1.877-1.204c.104.447.157.909.157 1.394 0 1.807-.737 3.386-1.877 4.59zM10 16.869c-3.304 0-6.177-2.139-7.255-5.12.829.171 1.699.171 2.528 0C6.351 14.73 8.696 16.869 10 16.869zm6.823-1.457c1.14-1.204 1.877-2.783 1.877-4.59 0-.485-.053-.947-.157-1.394-.384.73-.867 1.204-1.877 1.204s-1.493-.474-1.877-1.204c-.104.447-.157.909-.157 1.394 0 1.807.737 3.386 1.877 4.59z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="bg-gray-900 px-8 lg:px-16 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-sm text-gray-400">
          <div className="flex flex-wrap items-center gap-8">
            <Link to="/imprint" className="hover:text-gray-200 transition-colors duration-300">
              Imprint
            </Link>
            <Link to="/privacy" className="hover:text-gray-200 transition-colors duration-300">
              Data Privacy
            </Link>
            <button className="hover:text-gray-200 transition-colors duration-300">
              Cookies Settings
            </button>
            <Link to="/terms" className="hover:text-gray-200 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
          <div className="text-center lg:text-right">
            <p>© 2024 MetaDesign, part of Publicis Groupe</p>
            <p className="text-xs text-gray-500 mt-1">Transforming businesses since 1979</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;