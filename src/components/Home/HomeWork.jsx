
import React from 'react';
import { NavLink } from 'react-router-dom';
import AnimateSections from '../AnimateSections';
import WorkItem from '../WorkItems'


export default function SelectedWork({
  data,
  linkColor,
  centerTxt,
  layoutTheme,
  hoverColor,
  themeColor,

  }) {
    
  const SelectedWorkEl = data.workEl.slice(0, 3);

  return (
    <div className="mt-[20px] relative z-[1]">
      <AnimateSections>
        <h2 className={`${centerTxt} pb-6 m-auto`}>
          My works Examples
        </h2>
      </AnimateSections>
      {SelectedWorkEl.map((item, index) => (
        <WorkItem 
          key={item.id} 
          item={item} 
          layoutTheme={layoutTheme} 
          hoverColor={hoverColor}
          themeColor={themeColor}
          className={`${index === SelectedWorkEl.length - 1 ? 'pb-0' : 'pb-10'}`}
        />
      ))}
      <NavLink
        to="works"
        className={`${linkColor} bg-red-600 text-mainBg text-lg ml-auto 
        py-3 font-bold block w-max px-4 shadow rounded-bl-md`}
      >
        More works
      </NavLink>
    </div>
  );
}
