"use client";

import React, { useState, useRef } from 'react';

export default function MagneticButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - buttonCenterX;
    const distanceY = e.clientY - buttonCenterY;
    
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDistance = window.innerWidth / 3;
    
    if (distance < maxDistance) {
      const strength = 0.3;
      setPosition({
        x: distanceX * strength,
        y: distanceY * strength
      });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div 
      className="flex w-full items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black"
      onMouseMove={handleMouseMove}
    >
      <div className="text-center">
        <h1 className="text-white text-4xl font-bold mb-4">Magnetic Button</h1>
        <p className="text-gray-300 mb-12">Move your cursor near the button</p>
        
        <button
          ref={buttonRef}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: 'transform 0.2s ease-out'
          }}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xl font-semibold rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300"
        >
          Click Me
        </button>
      </div>
    </div>
  );
}