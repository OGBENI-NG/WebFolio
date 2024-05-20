import React from 'react';

// Define the reusable component
const SocialIcons = ({ icons, className, iconSize }) => {
  return (
    <>
      {icons.map((iconEl) => (
        <div key={iconEl.id} className={`${className}`}>
          <a href={iconEl.live} className={`text-3xl md:text-5xl lg:text-[30px] ${iconSize}`} target='_blank'>
            <iconEl.icon />
          </a>
        </div>
      ))}
    </>
  );
};

export default SocialIcons;
