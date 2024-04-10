import React from 'react';
import AnimateSections from './AnimateSections';

export default function WorkItem({ item, layoutTheme, themeColor, hoverColor, className, target }) {

  return (
    <div className={`${className}`}>
      <AnimateSections>
        <div className="w-full h-[250px]">
          <img className="w-full h-full" src={item.image} alt={item.alt} />
        </div>
        <div className={`flex items-center py-3 px-4 text-xl ${layoutTheme} backdrop-blur-[100px] font-bold ${themeColor}`}>
          <a href={item.liveApp} target='_blank' className={hoverColor} title="work-name">
            {item.name}
          </a>
          <a href={item.gitRepository} target='_blank' 
            className="ml-auto text-brand hover:text-brand/50" title="github-link">
            {item.gitIcon({ size: 40 })}
          </a>
        </div>
      </AnimateSections>
    </div>
  );
}
