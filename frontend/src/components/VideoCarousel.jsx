import React, { useState, useEffect } from 'react';

const VideoCarousel = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Mock video data - in a real app, these would be actual video URLs
  const videos = [
    {
      id: 1,
      title: "Brand Identity Design",
      description: "Creating memorable brand experiences that resonate with your audience",
      thumbnail: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      duration: "2:15"
    },
    {
      id: 2,
      title: "Digital Campaigns",
      description: "Strategic digital campaigns that drive engagement and conversion",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      duration: "1:45"
    },
    {
      id: 3,
      title: "Creative Strategy",
      description: "Innovative strategies that set your brand apart from the competition",
      thumbnail: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      duration: "3:20"
    },
    {
      id: 4,
      title: "Visual Storytelling",
      description: "Compelling narratives through powerful visual communication",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      duration: "2:55"
    }
  ];

  // Auto advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPlaying) {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, videos.length]);

  const goToVideo = (index) => {
    setCurrentVideo(index);
    setIsPlaying(false);
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Main Video Display */}
      <div className="relative flex-1 overflow-hidden rounded-lg group">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out"
          style={{ backgroundImage: `url(${videos[currentVideo].thumbnail})` }}
        >
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20"></div>
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={togglePlay}
              className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:bg-white/30 group-hover:opacity-100"
              data-cursor="red"
            >
              {isPlaying ? (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
              ) : (
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          </div>

          {/* Video Info */}
          <div className="absolute bottom-6 left-6 right-6 text-white transform transition-all duration-500 translate-y-0 group-hover:translate-y-0">
            <div className="space-y-2">
              <h3 className="text-2xl lg:text-3xl font-light leading-tight">
                {videos[currentVideo].title}
              </h3>
              <p className="text-white/80 text-lg font-light leading-relaxed max-w-md">
                {videos[currentVideo].description}
              </p>
              <div className="flex items-center space-x-4 mt-4">
                <span className="text-sm text-white/60">{videos[currentVideo].duration}</span>
                <span className="text-sm text-white/60">•</span>
                <span className="text-sm text-white/60">HD Quality</span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevVideo}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 hover:scale-110"
            data-cursor="red"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextVideo}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 hover:scale-110"
            data-cursor="red"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center justify-center space-x-3 mt-6 px-6">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToVideo(index)}
            className={`relative overflow-hidden transition-all duration-300 rounded-full ${
              index === currentVideo 
                ? 'w-12 h-3 bg-metadesign-red' 
                : 'w-3 h-3 bg-white/30 hover:bg-white/50'
            }`}
            data-cursor="red"
          >
            {index === currentVideo && (
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Video Counter */}
      <div className="flex items-center justify-between mt-4 px-6 text-white/60 text-sm">
        <span>{String(currentVideo + 1).padStart(2, '0')} / {String(videos.length).padStart(2, '0')}</span>
        <span className="uppercase tracking-wider font-light">Our Work</span>
      </div>
    </div>
  );
};

export default VideoCarousel;