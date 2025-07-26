import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageTransition from './PageTransition';
import ScrollAnimations from './ScrollAnimations';

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  // Extended project data based on existing WorkPage projects
  const projectsData = {
    1: {
      id: 1,
      title: 'Brand Identity System',
      client: 'Premium Coffee Co.',
      category: 'Brand Identity',
      year: '2024',
      description: 'Comprehensive brand identity design for a premium coffee brand',
      image: 'https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxicmFuZCUyMGlkZW50aXR5fGVufDB8fHx8MTc1MzQ1MzUwMnww&ixlib=rb-4.1.0&q=85',
      tags: ['Branding', 'Identity', 'Packaging'],
      
      // Video for header
      video: 'https://ik.imagekit.io/67mog36hf/smari%20creatives/POR_CD_23_Video_2_short.mp4?updatedAt=1753469409835',
      
      // Project details for sidebar
      sector: 'Coffee & Beverage',
      services: [
        'Brand strategy',
        'Positioning',
        'Brand portfolio and architecture',
        'Brand identity systems (CIV)',
        'Interaction and experience design (UI/UX)',
        'Web design',
        'Sustainable brand design'
      ],
      
      // Main content
      subtitle: 'Transformation by Design',
      heroDescription: 'In 2024, the specialty coffee industry was experiencing a renaissance, and Premium Coffee Co. recognized the opportunity to redefine its role as a premium coffee provider. During the post-pandemic recovery, the company\'s commitment to quality and sustainability came into sharp focus. Yet, despite being a leading specialty coffee company, its brand lacked the cohesion and clarity to reflect its essential role in the coffee ecosystem.',
      
      mainContent: `This realization sparked a bold initiative to transform Premium Coffee Co.'s brand and align it with its purpose: "creating exceptional coffee experiences." Partnering with Smari Creatives, the process began with strategic work to simplify a complex business structure and unify its multiple product lines under a single, cohesive brand. A flexible brand architecture construct guided the business structure set-up, and this strategic foundation paved the way for a new identity that would resonate with diverse audiences, and position the company for its next chapter.`
    }
  };

  useEffect(() => {
    const foundProject = projectsData[parseInt(projectId)];
    setProject(foundProject);
  }, [projectId]);

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-white pt-32 px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-light text-gray-900">Project not found</h1>
            <Link to="/work" className="text-red-600 hover:text-red-800 mt-4 inline-block">
              ← Back to Work
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Full-Width Video Header */}
        <div className="relative w-full h-96 overflow-hidden">
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src={project.video} type="video/mp4" />
            {/* Fallback gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500"></div>
          </video>
          
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/70 via-pink-600/70 to-orange-500/70"></div>
          
          {/* Header Content */}
          <div className="relative z-10 flex items-center justify-between px-8 py-6 h-full">
            <div className="flex items-center">
              <h1 className="text-white text-3xl font-light">{project.client}</h1>
            </div>
            <Link 
              to="/work"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="flex">
          {/* Left Sidebar */}
          <div className="w-1/4 bg-white p-8 border-r border-gray-200">
            <div className="space-y-8">
              {/* Sector */}
              <div>
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">
                  Sector
                </h3>
                <p className="text-gray-900 text-lg">
                  {project.sector}
                </p>
              </div>
              
              {/* Services */}
              <div>
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                  Services
                </h3>
                <div className="space-y-2">
                  {project.services.map((service, index) => (
                    <p key={index} className="text-gray-900 text-sm leading-relaxed">
                      {service}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-8">
            <div className="max-w-4xl text-left">
              {/* Project Title */}
              <h1 className="text-8xl font-bold text-gray-900 mb-6 text-left">
                {project.client}
              </h1>
              
              {/* Subtitle */}
              <h2 className="text-5xl font-bold text-gray-900 mb-16 text-left">
                {project.subtitle}
              </h2>
              
              {/* Main Description */}
              <div className="space-y-8 text-2xl text-gray-700 leading-relaxed text-left">
                <p>{project.heroDescription}</p>
                <p>{project.mainContent}</p>
              </div>
              
              {/* Additional Content Sections */}
              <div className="mt-20 space-y-16">
                <ScrollAnimations>
                  <div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-8 text-left">
                      Transformative Strategy
                    </h3>
                    <div className="space-y-6 text-xl text-gray-700 leading-relaxed text-left">
                      <p>
                        The transformation of {project.client}'s brand was guided by a clear vision: to simplify its complex product structure and reflect its leadership in specialty coffee innovation. Our strategic approach focused on aligning the brand's visual and verbal identity with its purpose, while clarifying its structure to ensure a cohesive and unified presence.
                      </p>
                      <p>
                        By emphasizing clarity, accessibility, and a consistent voice, the new strategy created a brand that resonates with diverse stakeholders — from coffee enthusiasts and retail partners to employees and suppliers — while ensuring the company could continue to adapt and thrive in an evolving industry.
                      </p>
                    </div>
                  </div>
                </ScrollAnimations>
                
                <ScrollAnimations>
                  <div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-8 text-left">
                      Transformative Branding
                    </h3>
                    <div className="space-y-6 text-xl text-gray-700 leading-relaxed text-left">
                      <p>
                        The new {project.client} brand is a vibrant, modular system that reflects the company's inspiring purpose and ambition. Central to the design is the wordmark, which prioritizes simplicity and clarity while projecting confidence and approachability. The distinctive Coffee Brown color is a trustworthy tone, and anchors a dynamic palette of warm colors, complemented by dynamic gradients that convey a sense of craftsmanship and warmth.
                      </p>
                    </div>
                  </div>
                </ScrollAnimations>
                
                {/* Image Gallery */}
                <ScrollAnimations>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxicmFuZCUyMGlkZW50aXR5fGVufDB8fHx8MTc1MzQ1MzUwMnww&ixlib=rb-4.1.0&q=85"
                        alt="Brand identity"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBicmFuZGluZ3xlbnwwfHx8fDE3NTM0NTM1MDJ8MA&ixlib=rb-4.1.0&q=85"
                        alt="Coffee branding"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxjb2ZmZWUlMjBicmFuZGluZ3xlbnwwfHx8fDE3NTM0NTM1MDJ8MA&ixlib=rb-4.1.0&q=85"
                        alt="Coffee design"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </ScrollAnimations>
                
                {/* Quote Section */}
                <ScrollAnimations>
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <blockquote className="text-2xl font-light text-gray-900 italic">
                      "The refreshed brand embodies innovation and stands apart in the specialty coffee industry. Each brand element—type, color, imagery, and graphics—brings to life the energy of a brand on its quest for the perfect cup."
                    </blockquote>
                  </div>
                </ScrollAnimations>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-3xl font-light text-gray-900 mb-12">Awards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Brand Impact Awards 2024
                </h3>
                <p className="text-gray-600">
                  Best Brand Development (Food & Beverage)
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Design Excellence Awards 2024
                </h3>
                <p className="text-gray-600">
                  Best Implementation of a Brand Development Project
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-black text-white py-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-light mb-4">Need more details?</h3>
                <div className="space-y-2">
                  <p className="text-lg">Creative Director</p>
                  <p className="text-gray-300">Smari Creatives</p>
                  <div className="mt-4 space-y-1">
                    <a href="mailto:hello@smaricreatives.com" className="text-red-400 hover:text-red-300 transition-colors">
                      hello@smaricreatives.com
                    </a>
                    <br />
                    <a href="tel:+1-555-123-4567" className="text-red-400 hover:text-red-300 transition-colors">
                      +1 555 123 4567
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-light mb-8">Related work</h3>
                <div className="space-y-6">
                  <Link 
                    to="/work/2"
                    className="block group"
                  >
                    <div className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src="https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5fGVufDB8fHx8MTc1MzQ1MzUwMnww&ixlib=rb-4.1.0&q=85"
                          alt="Creative Magazine"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white group-hover:text-red-400 transition-colors">
                          Creative Magazine
                        </h4>
                        <p className="text-gray-400 text-sm">
                          Brand Identity
                        </p>
                      </div>
                    </div>
                  </Link>
                  
                  <Link 
                    to="/work/3"
                    className="block group"
                  >
                    <div className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src="https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXNpZ258ZW58MHx8fHwxNzUzNDUzNTA5fDA&ixlib=rb-4.1.0&q=85"
                          alt="Tech Startup"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white group-hover:text-red-400 transition-colors">
                          Tech Startup
                        </h4>
                        <p className="text-gray-400 text-sm">
                          Digital Design
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                
                <Link 
                  to="/work"
                  className="inline-block mt-8 text-red-400 hover:text-red-300 transition-colors"
                >
                  See all projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectDetailPage;