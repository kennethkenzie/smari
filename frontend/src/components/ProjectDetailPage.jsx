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
      
      // Detailed content structure based on Cencora page
      heroDescription: 'In 2024, the specialty coffee industry was experiencing a renaissance, and Premium Coffee Co. recognized the opportunity to redefine its role as a premium coffee provider. During the post-pandemic recovery, the company\'s commitment to quality and sustainability came into sharp focus. Yet, despite being a leading specialty coffee company, its brand lacked the cohesion and clarity to reflect its essential role in the coffee ecosystem.',
      
      sections: [
        {
          type: 'text',
          title: 'Transformative Strategy',
          content: 'The transformation of Premium Coffee Co.\'s brand was guided by a clear vision: to simplify its complex product structure and reflect its leadership in specialty coffee innovation. Our strategic approach focused on aligning the brand\'s visual and verbal identity with its purpose, while clarifying its structure to ensure a cohesive and unified presence.\n\nBy emphasizing clarity, accessibility, and a consistent voice, the new strategy created a brand that resonates with diverse stakeholders — from coffee enthusiasts and retail partners to employees and suppliers — while ensuring the company could continue to adapt and thrive in an evolving industry.'
        },
        {
          type: 'text',
          title: 'Transformative Branding',
          content: 'The new Premium Coffee Co. brand is a vibrant, modular system that reflects the company\'s inspiring purpose and ambition. Central to the design is the wordmark, which prioritizes simplicity and clarity while projecting confidence and approachability. The distinctive Coffee Brown color is a trustworthy tone, and anchors a dynamic palette of warm colors, complemented by dynamic gradients that convey a sense of craftsmanship and warmth.'
        },
        {
          type: 'image_gallery',
          images: [
            'https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxicmFuZCUyMGlkZW50aXR5fGVufDB8fHx8MTc1MzQ1MzUwMnww&ixlib=rb-4.1.0&q=85',
            'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBicmFuZGluZ3xlbnwwfHx8fDE3NTM0NTM1MDJ8MA&ixlib=rb-4.1.0&q=85',
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxjb2ZmZWUlMjBicmFuZGluZ3xlbnwwfHx8fDE3NTM0NTM1MDJ8MA&ixlib=rb-4.1.0&q=85'
          ]
        },
        {
          type: 'text',
          title: 'Transformation Through Typography',
          content: 'The Premium Coffee Co. custom typeface is a modern, clean, and highly functional font used across the brand. Designed to support multiple applications, it ensures clarity, consistency, and accessibility in both print and digital applications. Its versatility makes it a vital tool for communicating the brand\'s message effectively to diverse audiences.'
        },
        {
          type: 'quote',
          content: 'The refreshed brand embodies innovation and stands apart in the specialty coffee industry. Each brand element—type, color, imagery, and graphics—brings to life the energy of a brand on its quest for the perfect cup.'
        },
        {
          type: 'text',
          title: 'Transforming Every Day',
          content: 'Premium Coffee Co.\'s transformation is ongoing. As the specialty coffee industry evolves, the brand has been carefully designed to adapt to new challenges and embrace emerging opportunities. Its flexibility allows it to scale, integrate new products, and respond to the shifting needs of partners, customers, and the global coffee ecosystem.\n\nWith new initiatives and innovations on the horizon, Premium Coffee Co. is poised to lead the specialty coffee industry into the future while staying true to its core mission: creating exceptional coffee experiences.'
        }
      ],
      
      awards: [
        {
          title: 'Brand Impact Awards 2024',
          subtitle: 'Best Brand Development (Food & Beverage)'
        },
        {
          title: 'Design Excellence Awards 2024',
          subtitle: 'Best Implementation of a Brand Development Project'
        }
      ],
      
      relatedProjects: [2, 3, 4]
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
        {/* Hero Section */}
        <div className="pt-32 pb-16 px-8">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link to="/work" className="text-gray-500 hover:text-gray-700 transition-colors">
                Work
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-900">{project.title}</span>
            </div>
            
            {/* Project Title */}
            <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-4">
              {project.client}
            </h1>
            
            {/* Project Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <span className="text-lg text-gray-600">{project.category}</span>
              <span className="text-lg text-gray-400">•</span>
              <span className="text-lg text-gray-600">{project.year}</span>
              <div className="flex gap-2 ml-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Hero Description */}
            <div className="max-w-4xl">
              <p className="text-xl text-gray-700 leading-relaxed">
                {project.heroDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="px-8 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            {project.sections.map((section, index) => (
              <ScrollAnimations key={index} className="mb-16">
                {section.type === 'text' && (
                  <div className="max-w-4xl">
                    <h2 className="text-3xl font-light text-gray-900 mb-8">
                      {section.title}
                    </h2>
                    <div className="space-y-4">
                      {section.content.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-lg text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                
                {section.type === 'image_gallery' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="aspect-square rounded-lg overflow-hidden">
                        <img 
                          src={image} 
                          alt={`Gallery image ${imgIndex + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                )}
                
                {section.type === 'quote' && (
                  <div className="max-w-4xl">
                    <blockquote className="text-2xl font-light text-gray-900 italic border-l-4 border-red-600 pl-8 py-4">
                      {section.content}
                    </blockquote>
                  </div>
                )}
              </ScrollAnimations>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        {project.awards && (
          <div className="px-8 py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-light text-gray-900 mb-12">Awards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.awards.map((award, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      {award.title}
                    </h3>
                    <p className="text-gray-600">
                      {award.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="px-8 py-16 bg-black text-white">
          <div className="max-w-6xl mx-auto">
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
                  {project.relatedProjects.slice(0, 2).map((relatedId) => {
                    const relatedProject = projectsData[relatedId];
                    return relatedProject ? (
                      <Link 
                        key={relatedId} 
                        to={`/work/${relatedId}`}
                        className="block group"
                      >
                        <div className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src={relatedProject.image} 
                              alt={relatedProject.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-white group-hover:text-red-400 transition-colors">
                              {relatedProject.client}
                            </h4>
                            <p className="text-gray-400 text-sm">
                              {relatedProject.category}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ) : null;
                  })}
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