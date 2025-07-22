import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorType, setCursorType] = useState('default');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      if (e.target.matches('button, a, .cursor-pointer')) {
        setIsHovering(true);
        setCursorType(e.target.dataset.cursor || 'hover');
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.matches('button, a, .cursor-pointer')) {
        setIsHovering(false);
        setCursorType('default');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-200 ease-out ${
          isHovering ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      >
        <div className="w-2 h-2 bg-white rounded-full mix-blend-difference" />
      </div>

      {/* Hover cursor */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-300 ease-out ${
          isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
        }}
      >
        <div className={`w-10 h-10 rounded-full border-2 ${
          cursorType === 'red' ? 'border-metadesign-red' : 'border-white'
        } mix-blend-difference`} />
      </div>
    </>
  );
};

export default CustomCursor;