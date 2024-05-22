import React from 'react'

export default function LoadingLogo({className}) {
  return (
    <div className={className}>
      <svg 
        className='w-[280px] h-[220px] animate-logoAnim' 
        viewBox="0 0 311 256" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_325_2)">
          <path d="M154.798 11L114.327 237M154.798 67.5L296 124L124.445 180.5M73.8549 67.5L15 124L73.8549 180.5" 
          stroke="#06C156" 
          strokeWidth="18" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <filter 
            id="filter0_d_325_2" 
            x="0.5"
            y="0.498291" 
            width="310" 
            height="255.003"      
            filterUnits="userSpaceOnUse" 
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_325_2"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_325_2" result="shape"/>
          </filter>
        </defs>
      </svg>

    </div>
  )
}
