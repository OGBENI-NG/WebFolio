import React from 'react';

const CustomSVG = ({className, theme }) => {
  return (
      <svg 
      className={`${className} transition-[1s]`} 
      viewBox="0 0 297 369" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d={`M258.307 22.4743C8.70902 -107.44 333.068 
        388.483 303.82 283.73C274.573 
        178.978 -29.9035 315.634 51.3084 364.749C132.52 
        413.863 -30.7084 18.3093 5.79493 103.493C42.2982 
        188.676 507.904 152.389 258.307 22.4743Z`} 
        fill={`${theme === 'light' ? '#2b7f4f' : '#06C156'}  `} 
        fillOpacity={`${theme === 'light' ? '0.18' : '0.18'} `}
      />
    </svg>
  );
};

export default CustomSVG;
