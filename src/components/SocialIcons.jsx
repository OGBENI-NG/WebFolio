import React from 'react';

// Define a reusable component named SocialIcons
// It accepts props: icons (array of icon elements), className (additional CSS classes), and iconSize (size of the icons)
const SocialIcons = ({ icons, className, iconSize }) => {
  return (
    <>
      {icons.map((iconEl) => (
         // Map through each icon element in the icons array
        // Use the iconEl.id as the key for each element
        <div key={iconEl.id} className={`${className}`}>
          <a href={iconEl.live} aria-label='link-icon' className={`text-3xl md:text-5xl lg:text-[30px] ${iconSize}`} target='_blank'>
            <iconEl.icon />
          </a>
        </div>
      ))}
    </>
  );
};

export default SocialIcons;
