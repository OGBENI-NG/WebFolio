import React from 'react';
import AnimateSections from './AnimateSections';
import { FaChevronDown, FaGithub } from 'react-icons/fa';

export default function WorkItem({ item, layoutTheme, themeColor, hoverColor, 
  className, bodyTxt, openId, toggleDescription }) {

  return (
    <div className={`${className} `}>
      <AnimateSections>
        <section className={`overflow-hidden`}>
          <div className="w-full h-[250px]">
            <img className="w-full h-full" src={item.image} alt={item.alt} />
          </div>
          <div className={`flex items-center p-4 text-xl 
            ${layoutTheme} backdrop-blur font-bold ${themeColor}`}
          >
            <a href={item.liveApp} target='_blank' className={hoverColor} title="work-name">
              {item.name}
            </a>
            <div className='flex items-center ml-auto gap-4'>
              <a href={item.gitRepository} target='_blank' 
                className="ml-auto text-brand hover:text-brand/50" title="github-link">
               <FaGithub className='text-[37px]'/>
              </a>
              <button 
                className='bg-brand/15 text-brand p-[10px] rounded-full' 
                onClick={() => toggleDescription(item.id)}> {/* Pass item.id to toggleDescription */}
                <FaChevronDown className={`transition-all  duration-500 text-lg
                  ${openId === item.id ? '-rotate-360' : 'rotate-180'}`}/>
              </button>
            </div>
          </div>
          {/* Render description only if isShow is true */}
          <div className={`transition-all duration-500  ${layoutTheme}
          ${openId === item.id ? 'h-[235px] rounded-b-[30px]' : 'h-[0] opacity-0 rounded-none'}`}>
            <p className={`p-4 
               font-semibold text-lg rounded-b-full ${bodyTxt}`}>
              {item.description}
            </p>
          </div>
         
        </section>
      </AnimateSections>
    </div>
  )
}
