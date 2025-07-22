import React, { useState, useEffect } from 'react';

const VideoCarousel = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

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

  // Preload images
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = videos[currentVideo].thumbnail;
  }, [currentVideo, videos]);

  const goToVideo = (index) => {
    setCurrentVideo(index);
    setIsPlaying(false);
    setImageLoaded(false);
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
    setImageLoaded(false);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
    setImageLoaded(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-900">
      {/* Full Background Video Display */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out group"
        style={{ 
          backgroundImage: `url(${videos[currentVideo].thumbnail})`,
          opacity: imageLoaded ? 1 : 0
        }}
      >
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/30"></div>
        
        {/* Play Button - Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlay}
            className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:bg-white/20 group-hover:opacity-100"
            data-cursor="red"
          >
            {isPlaying ? (
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Video Info - Bottom Left */}
        <div className="absolute bottom-8 left-8 right-8 text-white transform transition-all duration-500">
          <div className="space-y-3">
            <h3 className="text-3xl lg:text-4xl font-light leading-tight">
              {videos[currentVideo].title}
            </h3>
            <p className="text-white/90 text-xl font-light leading-relaxed max-w-lg">
              {videos[currentVideo].description}
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <span className="text-white/70 text-base">{videos[currentVideo].duration}</span>
              <span className="text-white/70">•</span>
              <span className="text-white/70 text-base">HD Quality</span>
              <span className="text-white/70">•</span>
              <span className="text-white/70 text-base uppercase tracking-wider">Our Work</span>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevVideo}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/40 hover:scale-110"
          data-cursor="red"
        >
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextVideo}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/40 hover:scale-110"
          data-cursor="red"
        >
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Fallback content when image is loading */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-16 h-16 border-4 border-metadesign-red border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-lg font-light">Loading...</p>
          </div>
        </div>
      )}

      {/* Navigation Dots - Bottom Center */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center space-x-4 z-20">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToVideo(index)}
            className={`relative overflow-hidden transition-all duration-300 rounded-full ${
              index === currentVideo 
                ? 'w-16 h-4 bg-metadesign-red shadow-lg' 
                : 'w-4 h-4 bg-white/30 hover:bg-white/60'
            }`}
            data-cursor="red"
          >
            {index === currentVideo && (
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Video Counter - Bottom Right */}
      <div className="absolute bottom-8 right-8 text-white/80 text-base font-light z-20">
        <div className="bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
          {String(currentVideo + 1).padStart(2, '0')} / {String(videos.length).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;