import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from './PageTransition';
import ScrollAnimations from './ScrollAnimations';
import './WorkPage.css';

const WorkPage = () => {
  useEffect(() => {
    // Update sidebar height to match page content height
    const updateSidebarHeight = () => {
      const pageHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      
      const sidebar = document.querySelector('.red-sidebar-full-height');
      if (sidebar) {
        sidebar.style.setProperty('--page-height', pageHeight + 'px');
        sidebar.style.height = pageHeight + 'px';
      }
    };

    // Update on mount and resize
    updateSidebarHeight();
    window.addEventListener('resize', updateSidebarHeight);
    
    // Use MutationObserver to detect content changes
    const observer = new MutationObserver(updateSidebarHeight);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });

    return () => {
      window.removeEventListener('resize', updateSidebarHeight);
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Brand Identity System',
      client: 'Premium Coffee Co.',
      category: 'Brand Identity',
      description: 'Comprehensive brand identity design for a premium coffee brand',
      image: 'https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxicmFuZCUyMGlkZW50aXR5fGVufDB8fHx8MTc1MzQ1MzUwMnww&ixlib=rb-4.1.0&q=85',
      tags: ['Branding', 'Identity', 'Packaging'],
      year: '2024'
    },
    {
      id: 2,
      title: 'Editorial Design System',
      client: 'Creative Magazine',
      category: 'Brand Identity',
      description: 'Modern editorial design system with bold typography and yellow accents',
      image: 'https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5fGVufDB8fHx8MTc1MzQ1MzUwMnww&ixlib=rb-4.1.0&q=85',
      tags: ['Editorial', 'Typography', 'Layout'],
      year: '2024'
    },
    {
      id: 3,
      title: 'Digital Interface Design',
      client: 'Tech Startup',
      category: 'Digital Design',
      description: 'Clean and intuitive interface design for a modern tech platform',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXNpZ258ZW58MHx8fHwxNzUzNDUzNTA5fDA&ixlib=rb-4.1.0&q=85',
      tags: ['UI/UX', 'Interface', 'Mobile'],
      year: '2024'
    },
    {
      id: 4,
      title: 'Design Strategy Workshop',
      client: 'Innovation Labs',
      category: 'Strategy',
      description: 'Strategic design thinking and ideation process for product development',
      image: 'https://images.unsplash.com/photo-1613759612065-d5971d32ca49?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxicmFuZCUyMGlkZW50aXR5fGVufDB8fHx8MTc1MzQ1MzUwMnww&ixlib=rb-4.1.0&q=85',
      tags: ['Strategy', 'Workshop', 'Innovation'],
      year: '2024'
    },
    {
      id: 5,
      title: 'E-commerce Platform',
      client: 'Retail Brand',
      category: 'Digital Design',
      description: 'Complete digital commerce experience with focus on user conversion',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHx3ZWIlMjBkZXNpZ258ZW58MHx8fHwxNzUzNDUzNTA5fDA&ixlib=rb-4.1.0&q=85',
      tags: ['E-commerce', 'UX', 'Conversion'],
      year: '2024'
    },
    {
      id: 6,
      title: 'Premium Packaging Design',
      client: 'Luxury Goods',
      category: 'Packaging',
      description: 'Elegant packaging design for luxury coffee products with premium finishes',
      image: 'https://images.unsplash.com/photo-1633533446213-a438ff5f0629?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxicmFuZCUyMGlkZW50aXR5fGVufDB8fHx8MTc1MzQ1MzUwMnww&ixlib=rb-4.1.0&q=85',
      tags: ['Packaging', 'Luxury', 'Premium'],
      year: '2024'
    },
    {
      id: 7,
      title: 'Design System Development',
      client: 'Software Company',
      category: 'Digital Design',
      description: 'Comprehensive design system and component library for scalable products',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ258ZW58MHx8fHwxNzUzNDUzNTA5fDA&ixlib=rb-4.1.0&q=85',
      tags: ['Design System', 'Components', 'Scalability'],
      year: '2024'
    },
    {
      id: 8,
      title: 'Mobile App Design',
      client: 'FinTech Startup',
      category: 'Digital Design',
      description: 'User-centered mobile application design with focus on accessibility',
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXNpZ258ZW58MHx8fHwxNzUzNDUzNTA5fDA&ixlib=rb-4.1.0&q=85',
      tags: ['Mobile', 'FinTech', 'Accessibility'],
      year: '2024'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white relative">
        {/* Red sidebar extending to full page height */}
        <div className="red-sidebar-full-height">
          <div className="red-sidebar-content">
            <div className="red-sidebar-text">
              Work
            </div>
          </div>
        </div>

        {/* Main content container */}
        <div className="work-content">
        {/* Hero Section - Split Screen Layout */}
        <div className="flex flex-col lg:flex-row">
          {/* Mobile Red Section */}
          <div className="w-full bg-metadesign-red lg:hidden flex items-end justify-center pb-16 pt-32 h-[50vh]">
            <div className="text-white text-xl font-light tracking-wider">
              Work
            </div>
          </div>

          {/* Right Side - Dark Purple/Navy with Video */}
          <div className="w-full lg:w-full bg-gradient-to-br from-purple-900 to-indigo-900 relative flex items-center justify-center px-8 lg:px-16 py-16 lg:py-0 h-[50vh] lg:h-[70vh] mt-0">
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>
            
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-purple-900/70 z-10"></div>
            
            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 z-20">
              <div className="text-white text-6xl lg:text-9xl font-bold tracking-wider">
                smari
              </div>
            </div>
            
            {/* Main Content */}
            <div className="relative z-30 text-white max-w-lg">
              <ScrollAnimations>
                <h1 className="text-3xl lg:text-5xl xl:text-6xl font-light leading-tight mb-6 lg:mb-8">
                  Creativity with the power to transform
                </h1>
                <p className="text-lg lg:text-xl leading-relaxed opacity-90">
                  See how the work we have done for our clients and partners across industries, 
                  regions, and markets has shaped their future and set them up for long-term 
                  sustainable success.
                </p>
              </ScrollAnimations>
            </div>
          </div>
        </div>

        {/* Work Section Header */}
        <div className="py-8 px-8 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimations>
              <div className="mb-12">
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-black mb-6 text-left">
                  Our Work
                </h2>
              </div>
            </ScrollAnimations>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="px-8 lg:px-16 pb-32 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {/* First Project Card - Large Landscape */}
              <ScrollAnimations delay={0}>
                <div className="group cursor-pointer" data-cursor="red">
                  {/* First Project Image - Landscape View */}
                  <div 
                    className="relative overflow-hidden rounded-lg bg-gray-100 mx-auto"
                    style={{ 
                      width: '100%', 
                      maxWidth: '1280px',
                      height: '720px',
                      aspectRatio: '16/9'
                    }}
                  >
                    <img
                      src={projects[0].image}
                      alt={projects[0].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                    
                    {/* Project Labels at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex justify-between items-end text-white">
                        <div>
                          <h4 className="text-lg font-medium">{projects[0].client}</h4>
                        </div>
                        <div className="text-right">
                          <p className="text-sm opacity-90">{projects[0].tags.join(', ')}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full text-black font-medium text-lg">
                        View Case Study
                      </div>
                    </div>
                  </div>

                  {/* Project Info - Outside Card */}
                  <div className="mt-6">
                    <div className="flex justify-between items-start">
                      {/* Client - Left */}
                      <p className="text-2xl font-semibold text-black">
                        {projects[0].client}
                      </p>
                      
                      {/* Tags - Right */}
                      <div className="flex flex-wrap gap-2 justify-end">
                        {projects[0].tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-lg text-gray-700 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimations>

              {/* Alternating Pattern: 2 Medium Cards, then 1 Large Landscape Card */}
              {Array.from({ length: Math.ceil((projects.length - 1) / 3) }, (_, groupIndex) => (
                <div key={groupIndex} className="space-y-16">
                  {/* Two Medium Cards */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                    {projects.slice(1 + groupIndex * 3, 3 + groupIndex * 3).map((project, index) => (
                      <ScrollAnimations key={project.id} delay={(index + 1 + groupIndex * 3) * 100}>
                        <div className="group cursor-pointer" data-cursor="red">
                          {/* Project Image */}
                          <div className="relative aspect-[4/3] mb-8 overflow-hidden rounded-lg bg-gray-100">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                            
                            {/* Project Labels at Bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                              <div className="flex justify-between items-end text-white">
                                <div>
                                  <h4 className="text-lg font-medium">{project.client}</h4>
                                </div>
                                <div className="text-right">
                                  <p className="text-sm opacity-90">{project.tags.join(', ')}</p>
                                </div>
                              </div>
                            </div>
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                              <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full text-black font-medium text-lg">
                                View Case Study
                              </div>
                            </div>
                          </div>

                          {/* Project Info - Outside Card */}
                          <div className="mt-6">
                            <div className="flex justify-between items-start">
                              {/* Client - Left */}
                              <p className="text-lg font-semibold text-black">
                                {project.client}
                              </p>
                              
                              {/* Tags - Right */}
                              <div className="flex flex-wrap gap-2 justify-end">
                                {project.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-sm text-gray-700 font-medium"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollAnimations>
                    ))}
                  </div>

                  {/* Large Landscape Card (if more projects available) */}
                  {projects[3 + groupIndex * 3] && (
                    <ScrollAnimations delay={(3 + groupIndex * 3) * 100}>
                      <div className="group cursor-pointer" data-cursor="red">
                        {/* Large Landscape Project Image */}
                        <div 
                          className="relative overflow-hidden rounded-lg bg-gray-100 mx-auto"
                          style={{ 
                            width: '100%', 
                            maxWidth: '1280px',
                            height: '720px',
                            aspectRatio: '16/9'
                          }}
                        >
                          <img
                            src={projects[3 + groupIndex * 3].image}
                            alt={projects[3 + groupIndex * 3].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                          
                          {/* Project Labels at Bottom */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <div className="flex justify-between items-end text-white">
                              <div>
                                <h4 className="text-lg font-medium">{projects[3 + groupIndex * 3].client}</h4>
                              </div>
                              <div className="text-right">
                                <p className="text-sm opacity-90">{projects[3 + groupIndex * 3].tags.join(', ')}</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full text-black font-medium text-lg">
                              View Case Study
                            </div>
                          </div>
                        </div>

                        {/* Project Info - Outside Card */}
                        <div className="mt-6">
                          <div className="flex justify-between items-start">
                            {/* Client - Left */}
                            <p className="text-lg font-semibold text-black">
                              {projects[3 + groupIndex * 3].client}
                            </p>
                            
                            {/* Tags - Right */}
                            <div className="flex flex-wrap gap-2 justify-end">
                              {projects[3 + groupIndex * 3].tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-sm text-gray-700 font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimations>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-black px-8 lg:px-16 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimations>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-light text-white mb-6">
                Ready to create something bold?
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed">
                Let's discuss your next project and bring your vision to life.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-metadesign-red text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                data-cursor="red"
              >
                Start Your Project
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollAnimations>
          </div>
        </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default WorkPage;