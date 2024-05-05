
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

  const SelectedWorkEl = data.workEl.slice(2, 5);

  return (
    <div className={`mt-[20px] relative z-[10]  ${bodyPadding}`}>
      
      <h2 className={`${highLightTxt}`}>
        Work
        <span className={highLightTxtOne}>What i have made</span>
      </h2>
      
      <div className='mt-5'>
        {SelectedWorkEl.map((item, index) => (
          <WorkItem 
            key={item.id} 
            item={item} 
            layoutTheme={layoutTheme} 
            hoverColor={hoverColor}
            themeColor={themeColor}
            className={`transition-[.5s] ${index === SelectedWorkEl.length - 1 ? 'py-0' : 'pb-7'}`}
            bodyTxt={bodyTxt}
            openId={openId}
            toggleDescription={toggleDescription}
          />
        ))}
      </div>
      <div className='pt-5 relative z-[2]'>
        <NavLink to="works">
          <CustomButton 
            tittle='submit'
            theme={theme}
          >
            More works
          </CustomButton>
        </NavLink>
      </div>
    </div>
  );
}
