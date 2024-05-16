
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import WorkItem from '../WorkItems'
import CustomButton from '../CustomButton';


export default function SelectedWork({
  data,
  highLightTxtOne,
  layoutTheme,
  hoverColor,
  themeColor,
  bodyTxt,
  toggleDescription,
  openId,
  highLightTxt,
  bodyPadding,
  theme

  }) {

  const SelectedWorkEl = data.workEl.slice(2, 6);

  return (
    <div className={`mt-[20px] relative z-[10]  lg:overflow-hidden ${bodyPadding}`}>
      
      <h2 className={`${highLightTxt}`}>
        Work
        <span className={highLightTxtOne}>What i have made</span>
      </h2>
      
      <div className='mt-5 lg:overflow-hidden lg:mt-7 lg:grid lg:grid-cols-2 lg:gap-6 xl:gap-8'>
        {SelectedWorkEl.map((item, index) => (
          <WorkItem 
            key={item.id} 
            item={item} 
            layoutTheme={layoutTheme} 
            hoverColor={hoverColor}
            themeColor={themeColor}
            className={ `${index === SelectedWorkEl.length - 1 ? 'py-0' : 'pb-7 lg:pb-0'}`}
            bodyTxt={bodyTxt}
            openId={openId}
            toggleDescription={toggleDescription}
          />
        ))}
      </div>
      <div className='pt-5 lg:pt-12 relative z-[2]'>
        <NavLink to="works" className={`lg:w-max lg:m-auto lg:block`}>
          <CustomButton 
            tittle='submit'
            theme={theme}
            className={` lg:px-12 text-lg md:text-2xl lg:text-lg py-2`}
          >
            More works
          </CustomButton>
        </NavLink>
      </div>
    </div>
  );
}
