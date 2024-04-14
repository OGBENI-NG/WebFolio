
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import AnimateSections from '../AnimateSections';
import WorkItem from '../WorkItems'
import CustomButton from '../CustomButton';


export default function SelectedWork({
  data,
  centerTxt,
  layoutTheme,
  hoverColor,
  themeColor,
  bodyTxt,
  toggleDescription,
  openId

  }) {

  const SelectedWorkEl = data.workEl.slice(2, 5);

  return (
    <div className="mt-[20px] relative z-[1]">
      <AnimateSections>
        <h2 className={`${centerTxt} pb-6 m-auto`}>
          My works <span className='text-brand underline'>Examples</span>
        </h2>
      </AnimateSections>
      {SelectedWorkEl.map((item, index) => (
        <WorkItem 
          key={item.id} 
          item={item} 
          layoutTheme={layoutTheme} 
          hoverColor={hoverColor}
          themeColor={themeColor}
          className={`${index === SelectedWorkEl.length - 1 ? 'pb-0' : 'pb-7'}`}
          bodyTxt={bodyTxt}
          openId={openId}
          toggleDescription={toggleDescription}
        />
      ))}
      <div className='px-4 pt-4'>
        <CustomButton className={`w-full py-2`}>
          <NavLink to="works">
            More works
          </NavLink>
        </CustomButton>
      </div>
      
    </div>
  );
}
