import React from 'react';
import { NavLink } from 'react-router-dom';
import WorkItem from '../WorkItems';
import CustomButton from '../CustomButton';

// Define the SelectedWork functional component
export default function SelectedWork({
  highLightTxtOne, // Styling for highlighted text
  layoutTheme, // Layout theme for the work items
  hoverColor, // Color on hover for work items
  themeColor, // Theme color for the work items
  bodyTxt, // Body text color and styling
  toggleDescription, // Function to toggle work item description
  openId, // ID of the open work item
  highLightTxt, // Styling for highlighted text
  bodyPadding, // Padding for the body section
  theme, // Theme of the component
  brandColor, // Brand color for titles and headings
  firebaseData, // Data for the work items
}) {
  // Select the recent works from the firebaseData array
  const SelectedWorkEl = firebaseData.slice(2, 5);

  return (
    <div className={`mt-[20px] lg:overflow-hidden ${bodyPadding}`}>
      {/* Heading section */}
      <h2 className={`${highLightTxt}`}>
        Work
        <span className={highLightTxtOne}>What I Have Made</span>
      </h2>
      {/* Work items section */}
      <div className='relative -z-[0] mt-5 lg:mt-7 lg:grid lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-3 lg:gap-4 xl:gap-5'>
        {/* Map through the selected work items */}
        {SelectedWorkEl.map((item, index) => (
          <WorkItem 
            key={item.id} 
            item={item} 
            layoutTheme={layoutTheme} 
            hoverColor={hoverColor}
            themeColor={themeColor}
            className={`
              ${index === SelectedWorkEl.length - 1 ? 'py-0 ' : 'pb-7 lg:pb-8'} 
              ${index > 1 ? 'lg:hidden xl:block xxl:block' : ''}`
            }
            bodyTxt={bodyTxt}
            openId={openId}
            toggleDescription={toggleDescription}
            brandColor={brandColor}
            theme={theme}
          />
        ))}
      </div>
      {/* More works button */}
      <div className='pt-5 lg:py-12 relative z-[2]'>
        <NavLink to="works" className={`lg:w-max lg:m-auto lg:block`}>
          <CustomButton 
            title='more-works-btn'
            theme={theme}
            className={` lg:px-12 text-lg md:text-2xl lg:text-lg py-2 md:py-3 lg:py-1`}
          >
            More Works
          </CustomButton>
        </NavLink>
      </div>
    </div>
  );
}
