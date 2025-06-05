
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const StarField = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create stars
    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.width = Math.random() * 3 + 1 + 'px';
      star.style.height = star.style.width;
      star.style.animationDelay = Math.random() * 3 + 's';
      container.appendChild(star);
    }

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const stars = container.querySelectorAll('.star');
      
      stars.forEach((star, index) => {
        const speed = (index % 3 + 1) * 0.5;
        star.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      container.innerHTML = '';
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      {/* Floating planets */}
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-600 opacity-30 floating"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-600 opacity-25 floating"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ animationDelay: '2s' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 opacity-20 floating"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ animationDelay: '4s' }}
      />
    </div>
  );
};

export default StarField;
