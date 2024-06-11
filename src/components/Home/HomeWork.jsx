import React from 'react';
import { NavLink } from 'react-router-dom';
import WorkItem from '../WorkItems';
import CustomButton from '../CustomButton';

export default function SelectedWork({
  highLightTxtOne,
  layoutTheme,
  hoverColor,
  themeColor,
  bodyTxt,
  toggleDescription,
  openId,
  highLightTxt,
  bodyPadding,
  theme,
  brandColor,
  firebaseData,
}) {

  const SelectedWorkEl = firebaseData.slice(2, 5);

  return (
    <div className={`mt-[20px] lg:overflow-hidden ${bodyPadding}`}>
      <h2 className={`${highLightTxt}`}>
        Work
        <span className={highLightTxtOne}>What I have made</span>
      </h2>
      <div className='relative -z-[0] mt-5 lg:mt-7 lg:grid lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-3 lg:gap-4 xl:gap-5'>
        {SelectedWorkEl.map((item, index) => (
          <WorkItem 
            key={item.id} 
            item={item} 
            layoutTheme={layoutTheme} 
            hoverColor={hoverColor}
            themeColor={themeColor}
            className={ `
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
      <div className='pt-5 lg:py-12 relative z-[2]'>
        <NavLink to="works" className={`lg:w-max lg:m-auto lg:block`}>
          <CustomButton 
            title='more-works-btn'
            theme={theme}
            className={` lg:px-12 text-lg md:text-2xl lg:text-lg py-2 md:py-3 lg:py-1`}
          >
            More works
          </CustomButton>
        </NavLink>
      </div>
    </div>
  );
}
