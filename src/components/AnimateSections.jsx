import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function AnimateSections({ children, className }) {
  
  const { ref, inView } = useInView({
    threshold: 0.2
  });

  return (
    <div
      ref={ref}
      className={`
        ${className} lg:opacity-0 
        ${inView ? 'lg:animate-fadeInUp lg:opacity-100' : ''}`}
    >
      {children}
    </div>
  );
}
