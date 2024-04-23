
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import AnimateSections from '../AnimateSections';
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
  highLightTxt

  }) {

  const SelectedWorkEl = data.workEl.slice(2, 5);

  return (
    <div className="px-4 mt-[20px]">
      <AnimateSections>
        <h2 className={`${highLightTxt}`}>
          Work
          <span className={highLightTxtOne}>What i have made</span>
        </h2>
      </AnimateSections>
      <div className='mt-5 relative z-[1]'>
        {SelectedWorkEl.map((item, index) => (
          <WorkItem 
            key={item.id} 
            item={item} 
            layoutTheme={layoutTheme} 
            hoverColor={hoverColor}
            themeColor={themeColor}
            className={`${index === SelectedWorkEl.length - 1 ? 'py-0' : 'pb-7'}`}
            bodyTxt={bodyTxt}
            openId={openId}
            toggleDescription={toggleDescription}
          />
        ))}
      </div>
      <div className='pt-5 relative z-[2]'>
        <NavLink to="works">
          <CustomButton className={`w-full py-2`}>
            More works
          </CustomButton>
        </NavLink>
      </div>
    </div>
  );
}
