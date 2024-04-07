import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function AnimateSections({ children, className }) {
  const { ref, inView } = useInView({
    threshold: 0.2
  });

  // Only update when `inView` changes

  return (
    <div
      ref={ref}
      className={`${className} opacity-0 ${inView ? 'animate-fadeInUp opacity-100' : 'animate-fadeOut'}`}
    >
      {children}
    </div>
  );
}
