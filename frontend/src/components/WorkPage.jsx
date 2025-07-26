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
    },
    {
      id: 9,
      title: 'Restaurant Brand Identity',
      client: 'Artisan Kitchen',
      category: 'Brand Identity',
      description: 'Complete brand identity and interior design for upscale dining experience',
      image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw1fHxyZXN0YXVyYW50JTIwYnJhbmRpbmd8ZW58MHx8fHwxNzUzNDUzNTA5fDA&ixlib=rb-4.1.0&q=85',
      tags: ['Restaurant', 'Interior', 'Hospitality'],
      year: '2024'
    },
    {
      id: 10,
      title: 'Corporate Website Redesign',
      client: 'Global Consulting',
      category: 'Digital Design',
      description: 'Modern website redesign with focus on professional service presentation',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw2fHx3ZWJzaXRlJTIwZGVzaWdufGVufDB8fHx8MTc1MzQ1MzUwOXww&ixlib=rb-4.1.0&q=85',
      tags: ['Corporate', 'Website', 'Professional'],
      year: '2024'
    },
    {
      id: 11,
      title: 'Sustainable Product Packaging',
      client: 'EcoTech Solutions',
      category: 'Packaging',
      description: 'Eco-friendly packaging design with biodegradable materials and minimal waste',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw3fHxlY28lMjBwYWNrYWdpbmd8ZW58MHx8fHwxNzUzNDUzNTA5fDA&ixlib=rb-4.1.0&q=85',
      tags: ['Sustainable', 'Eco-friendly', 'Innovation'],
      year: '2024'
    },
    {
      id: 12,
      title: 'Healthcare App Interface',
      client: 'MedTech Innovations',
      category: 'Digital Design',
      description: 'Intuitive mobile app design for healthcare professionals and patients',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw4fHxoZWFsdGhjYXJlJTIwYXBwfGVufDB8fHx8MTc1MzQ1MzUwOXww&ixlib=rb-4.1.0&q=85',
      tags: ['Healthcare', 'Mobile', 'Medical'],
      year: '2024'
    },
    {
      id: 13,
      title: 'Art Gallery Exhibition',
      client: 'Modern Art Museum',
      category: 'Brand Identity',
      description: 'Visual identity and exhibition design for contemporary art showcase',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw5fHxhcnQlMjBnYWxsZXJ5fGVufDB8fHx8MTc1MzQ1MzUwOXww&ixlib=rb-4.1.0&q=85',
      tags: ['Exhibition', 'Culture', 'Visual Arts'],
      year: '2024'
    },
    {
      id: 14,
      title: 'Smart Home Platform',
      client: 'IoT Solutions',
      category: 'Digital Design',
      description: 'Complete user experience design for smart home management system',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxMHx8c21hcnQlMjBob21lfGVufDB8fHx8MTc1MzQ1MzUwOXww&ixlib=rb-4.1.0&q=85',
      tags: ['IoT', 'Smart Home', 'Technology'],
      year: '2024'
    },
    {
      id: 15,
      title: 'Fashion Brand Campaign',
      client: 'Urban Style Co.',
      category: 'Strategy',
      description: 'Multi-channel brand campaign strategy for emerging fashion label',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxMXx8ZmFzaGlvbiUyMGJyYW5kfGVufDB8fHx8MTc1MzQ1MzUwOXww&ixlib=rb-4.1.0&q=85',
      tags: ['Fashion', 'Campaign', 'Multi-channel'],
      year: '2024'
    },
    {
      id: 16,
      title: 'Educational Platform Design',
      client: 'LearnTech Academy',
      category: 'Digital Design',
      description: 'Comprehensive e-learning platform with focus on user engagement',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxMnx8ZWR1Y2F0aW9uJTIwcGxhdGZvcm18ZW58MHx8fHwxNzUzNDUzNTA5fDA&ixlib=rb-4.1.0&q=85',
      tags: ['Education', 'E-learning', 'Platform'],
      year: '2024'
    },
    {
      id: 17,
      title: 'Wine Label Collection',
      client: 'Vineyard Estates',
      category: 'Packaging',
      description: 'Premium wine label design series with artisanal typography and illustrations',
      image: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxM3x8d2luZSUyMGxhYmVsfGVufDB8fHx8MTc1MzQ1MzUwOXww&ixlib=rb-4.1.0&q=85',
      tags: ['Wine', 'Artisanal', 'Typography'],
      year: '2024'
    },
    {
      id: 18,
      title: 'Startup Pitch Deck',
      client: 'TechVenture Inc.',
      category: 'Strategy',
      description: 'Compelling investor presentation design with data visualization and storytelling',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxNHx8cGl0Y2glMjBkZWNrfGVufDB8fHx8MTc1MzQ1MzUwOXww&ixlib=rb-4.1.0&q=85',
      tags: ['Startup', 'Presentation', 'Investment'],
      year: '2024'
    },
    {
      id: 19,
      title: 'Music Festival Branding',
      client: 'Summer Beats Festival',
      category: 'Brand Identity',
      description: 'Complete festival identity including stage design, merchandise, and digital assets',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxNXx8bXVzaWMlMjBmZXN0aXZhbHxlbnwwfHx8fDE3NTM0NTM1MDl8MA&ixlib=rb-4.1.0&q=85',
      tags: ['Music', 'Festival', 'Entertainment'],
      year: '2024'
    },
    {
      id: 20,
      title: 'Banking App Redesign',
      client: 'Future Bank',
      category: 'Digital Design',
      description: 'Modern banking app with enhanced security features and intuitive user flows',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxNnx8YmFua2luZyUyMGFwcHxlbnwwfHx8fDE3NTM0NTM1MDl8MA&ixlib=rb-4.1.0&q=85',
      tags: ['Banking', 'Security', 'Finance'],
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
            <div className="space-y-24">
              {/* First Large Card at Top */}
              <ScrollAnimations delay={0}>
                <Link to={`/work/${projects[0].id}`}>
                  <div className="group cursor-pointer py-8" data-cursor="red">
                    <div 
                      className="relative overflow-hidden rounded-lg bg-gray-100 mx-auto"
                      style={{ 
                        width: '100%', 
                        maxWidth: '1400px',
                        height: '600px',
                        aspectRatio: '7/3'
                      }}
                    >
                      <img
                        src={projects[0].image}
                        alt={projects[0].title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full text-black font-medium text-lg">
                          View Case Study
                        </div>
                      </div>
                    </div>

                    {/* Project Info - Outside Card */}
                    <div className="mt-8 px-4">
                      <div className="flex justify-between items-start">
                        <p className="text-2xl font-semibold text-black">
                          {projects[0].client}
                        </p>
                        <div className="flex flex-wrap gap-2 justify-end">
                          {projects[0].tags.map((tag) => (
                            <span key={tag} className="text-lg text-gray-700 font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollAnimations>

              {/* First Two Project Cards - Split from Original Large Card */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 lg:gap-32 py-12">
                {/* First Half of Original Large Card */}
                <ScrollAnimations delay={100}>
                  <Link to={`/work/${projects[1].id}`}>
                    <div className="group cursor-pointer py-8" data-cursor="red">
                      <div 
                        className="relative overflow-hidden rounded-lg bg-gray-100 mx-auto"
                        style={{ 
                          width: '100%', 
                          maxWidth: '700px',
                          height: '600px',
                          aspectRatio: '7/6'
                        }}
                      >
                        <img
                          src={projects[1].image}
                          alt={projects[1].title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full text-black font-medium text-lg">
                            View Case Study
                          </div>
                        </div>
                      </div>

                      {/* Project Info - Outside Card */}
                      <div className="mt-8 px-4">
                        <div className="flex justify-between items-start">
                          <p className="text-2xl font-semibold text-black">
                            {projects[1].client}
                          </p>
                          <div className="flex flex-wrap gap-2 justify-end">
                            {projects[1].tags.map((tag) => (
                              <span key={tag} className="text-lg text-gray-700 font-medium">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollAnimations>

                {/* Second Half of Original Large Card */}
                <ScrollAnimations delay={200}>
                  <Link to={`/work/${projects[2].id}`}>
                    <div className="group cursor-pointer py-8" data-cursor="red">
                      <div 
                        className="relative overflow-hidden rounded-lg bg-gray-100 mx-auto"
                        style={{ 
                          width: '100%', 
                          maxWidth: '700px',
                          height: '600px',
                          aspectRatio: '7/6'
                        }}
                      >
                        <img
                          src={projects[2].image}
                          alt={projects[2].title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full text-black font-medium text-lg">
                            View Case Study
                          </div>
                        </div>
                      </div>

                      {/* Project Info - Outside Card */}
                      <div className="mt-8 px-4">
                        <div className="flex justify-between items-start">
                          <p className="text-2xl font-semibold text-black">
                            {projects[2].client}
                          </p>
                          <div className="flex flex-wrap gap-2 justify-end">
                            {projects[2].tags.map((tag) => (
                              <span key={tag} className="text-lg text-gray-700 font-medium">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollAnimations>
              </div>

              {/* Second Two Project Cards - Split from Original Second Large Card */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 lg:gap-32 py-12">
                {/* First Half of Second Large Card */}
                <ScrollAnimations delay={300}>
                  <Link to={`/work/${projects[3].id}`}>
                    <div className="group cursor-pointer py-8" data-cursor="red">
                      <div 
                        className="relative overflow-hidden rounded-lg bg-gray-100 mx-auto"
                        style={{ 
                          width: '100%', 
                          maxWidth: '700px',
                          height: '600px',
                          aspectRatio: '7/6'
                        }}
                      >
                        <img
                          src={projects[3].image}
                          alt={projects[3].title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full text-black font-medium text-lg">
                            View Case Study
                          </div>
                        </div>
                      </div>

                      {/* Project Info - Outside Card */}
                      <div className="mt-8 px-4">
                        <div className="flex justify-between items-start">
                          <p className="text-2xl font-semibold text-black">
                            {projects[3].client}
                          </p>
                          <div className="flex flex-wrap gap-2 justify-end">
                            {projects[3].tags.map((tag) => (
                              <span key={tag} className="text-lg text-gray-700 font-medium">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollAnimations>

                {/* Second Half of Second Large Card */}
                <ScrollAnimations delay={400}>
                  <Link to={`/work/${projects[4].id}`}>
                    <div className="group cursor-pointer py-8" data-cursor="red">
                      <div 
                        className="relative overflow-hidden rounded-lg bg-gray-100 mx-auto"
                        style={{ 
                          width: '100%', 
                          maxWidth: '700px',
                          height: '600px',
                          aspectRatio: '7/6'
                        }}
                      >
                        <img
                          src={projects[4].image}
                          alt={projects[4].title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full text-black font-medium text-lg">
                            View Case Study
                          </div>
                        </div>
                      </div>

                      {/* Project Info - Outside Card */}
                      <div className="mt-8 px-4">
                        <div className="flex justify-between items-start">
                          <p className="text-2xl font-semibold text-black">
                            {projects[4].client}
                          </p>
                          <div className="flex flex-wrap gap-2 justify-end">
                            {projects[4].tags.map((tag) => (
                              <span key={tag} className="text-lg text-gray-700 font-medium">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollAnimations>
              </div>

              {/* Third Large Card - Whole Big Card */}
              <ScrollAnimations delay={500}>
                <div className="group cursor-pointer py-8" data-cursor="red">
                  <div 
                    className="relative overflow-hidden rounded-lg bg-gray-100 mx-auto"
                    style={{ 
                      width: '100%', 
                      maxWidth: '1400px',
                      height: '600px',
                      aspectRatio: '7/3'
                    }}
                  >
                    <img
                      src={projects[5].image}
                      alt={projects[5].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full text-black font-medium text-lg">
                        View Case Study
                      </div>
                    </div>
                  </div>

                  {/* Project Info - Outside Card */}
                  <div className="mt-8 px-4">
                    <div className="flex justify-between items-start">
                      <p className="text-2xl font-semibold text-black">
                        {projects[5].client}
                      </p>
                      <div className="flex flex-wrap gap-2 justify-end">
                        {projects[5].tags.map((tag) => (
                          <span key={tag} className="text-lg text-gray-700 font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimations>

              {/* Fourth Large Card - Whole Big Card */}
              <ScrollAnimations delay={600}>
                <div className="group cursor-pointer py-8" data-cursor="red">
                  <div 
                    className="relative overflow-hidden rounded-lg bg-gray-100 mx-auto"
                    style={{ 
                      width: '100%', 
                      maxWidth: '1400px',
                      height: '600px',
                      aspectRatio: '7/3'
                    }}
                  >
                    <img
                      src={projects[6].image}
                      alt={projects[6].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full text-black font-medium text-lg">
                        View Case Study
                      </div>
                    </div>
                  </div>

                  {/* Project Info - Outside Card */}
                  <div className="mt-8 px-4">
                    <div className="flex justify-between items-start">
                      <p className="text-2xl font-semibold text-black">
                        {projects[6].client}
                      </p>
                      <div className="flex flex-wrap gap-2 justify-end">
                        {projects[6].tags.map((tag) => (
                          <span key={tag} className="text-lg text-gray-700 font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimations>
            </div>
          </div>
        </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default WorkPage;