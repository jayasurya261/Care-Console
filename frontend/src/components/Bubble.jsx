import React from 'react';

const Bubble = ({ size, position, delay, duration }) => {
  return (
    <div
      className={`absolute bg-blue-300 rounded-full bubble`}
      style={{
        width: size,
        height: size,
        left: position.left,
        top: position.top,
        animationDelay: delay,
        animationDuration: duration,
      }}
    />
  );
};

const BubbleMovement = () => {
  const bubbles = [
    { size: '40px', position: { left: '10%', top: '90%' }, delay: '0s', duration: '10s' },
    { size: '50px', position: { left: '30%', top: '95%' }, delay: '-2s', duration: '12s' },
    { size: '60px', position: { left: '50%', top: '100%' }, delay: '-4s', duration: '14s' },
    { size: '70px', position: { left: '70%', top: '110%' }, delay: '-6s', duration: '16s' },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {bubbles.map((bubble, index) => (
        <Bubble
          key={index}
          size={bubble.size}
          position={bubble.position}
          delay={bubble.delay}
          duration={bubble.duration}
        />
      ))}
    </div>
  );
};

export default BubbleMovement;
