import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function AnimateSections({ children, className }) {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.4
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]); // Only update when `inView` changes

  return (
    <div
      ref={ref}
      className={`${className} opacity-0 ${isVisible ? 'animate-fadeInUp opacity-100' : 'animate-fadeOut'}`}
    >
      {children}
    </div>
  );
}
