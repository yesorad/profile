import React, { useState, useEffect } from 'react';
import Typing from '../components/Typing';

function TypingContainer() {
  const [pos, setPos] = useState({
    moveX: '',
    moveY: '',
  });

  const [size, setSize] = useState({
    width: '',
    height: '',
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setSize((size) => ({
        ...size,
        width: window.innerWidth,
        height: window.innerHeight,
      }));
      setPos((pos) => ({
        ...pos,
        moveX: `${(size.width / 2 - e.clientX) * 0.1}px`,
        moveY: `${(size.height / 2 - e.clientY) * 0.1}px`,
      }));
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [pos, size]);

  return <Typing moveX={pos.moveX} moveY={pos.moveY} />;
}

export default TypingContainer;
