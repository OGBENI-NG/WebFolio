import React from 'react';
import AnimateSections from './AnimateSections';
import { FaChevronDown, FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

export default function WorkItem({ item, layoutTheme, themeColor,
  className, bodyTxt, openId, toggleDescription }) {

  return (
    <div className={`${className} `}>
      <AnimateSections>
        <section className={`overflow-hidden shadow-sm rounded-lg`}>
          <div className="w-full h-[250px]">
            <img className="w-full h-full" src={item.image} alt={item.alt} />
          </div>
          <div className={`flex items-center p-5 text-xl  
            ${layoutTheme} font-bold ${themeColor}`}
          >
            <p>
              {item.name}
            </p>
            <div className='flex items-center ml-auto gap-4'>
              <button 
                className='bg-brand/5 shadow-[0px_0px_3px_2px_#38bdf8]
                 text-brand p-[10px] rounded-full' 
                onClick={() => toggleDescription(item.id)}> {/* Pass item.id to toggleDescription */}
                <FaChevronDown className={`transition-all  duration-500 text-lg
                  ${openId === item.id ? '-rotate-360' : 'rotate-180'}`}/>
              </button>
            </div>
          </div>
          {/* Render description only if isShow is true */}
          <div className={`transition-all duration-500 ${layoutTheme} 
          ${openId === item.id ? 'h-[310px] rounded-b-lg shadow-md' : 'h-[0] opacity-0 rounded-none'}`}>
            <div className='px-5'>
              <p className={` 
                font-semibold text-lg rounded-b-full ${bodyTxt}`}>
                {item.description}
              </p>
              <div className='flex items-center gap-x-4 pt-6'>
                <a href={item.gitRepository} target='_blank' 
                  className="text-brand hover:text-brand/50" title="github-link">
                <FaGithub className='text-[37px]'/>
                </a>
                <a href={item.liveApp} target='_blank' 
                  className=" text-brand hover:text-brand/50" title="github-link">
                <FiExternalLink className='text-[37px]'/>
                </a>
              </div>
            </div>
          </div>
         
        </section>
      </AnimateSections>
    </div>
  )
}
