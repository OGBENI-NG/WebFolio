import React from 'react';

// Define the ContactInfo functional component
export default function ContactInfo({ info, bodyTxt, className }) {
  return (
    <>
      {info.map(infoData => (
        <div 
          key={infoData.id} 
          className={`${bodyTxt} text-lg md:text-[1.7rem] lg:text-base xl:text-[14px]
            font-semibold flex items-center gap-2 md:gap-3 ${className}`
          }
        >
          {/* Render the icon component */}
          <infoData.iconN className='text-lg md:text-2xl lg:text-xl xl:text-lg'/>
          {/* Render the name associated with the contact info */}
          <span>{infoData.name}</span>
        </div>
      ))}
    </>
  );
}
