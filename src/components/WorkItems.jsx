import React from 'react';
import AnimateSections from './AnimateSections';
import { FaChevronDown, FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

export default function WorkItem({ item, layoutTheme, themeColor,
  className, bodyTxt, openId, toggleDescription }) {

    const linkIconsStyle = `text-[37px] md:text-[50px]`

  return (
    <div className={`${className} `}>
      <AnimateSections>
        <section className={`overflow-hidden shadow-sm rounded-lg`}>
          <div className="relative w-full aspect-w-16 aspect-h-9">
            <img 
              className="w-full h-full object-cover" 
              loading='lazy' 
              src={item.image}
              alt={item.alt} />
          </div>
          <div className={`flex items-center p-5  md:p-6 text-xl md:text-3xl 
            ${layoutTheme} font-bold ${themeColor}`}
          >
            <p>
              {item.name}
            </p>
            <div className='flex items-center ml-auto gap-4'>
              <button 
                title='toggle'
                className='bg-brand/5 shadow-[0px_0px_3px_2px_#38bdf8]
                 text-brand p-[10px] md:p-[12px] rounded-full' 
                onClick={() => toggleDescription(item.id)}> {/* Pass item.id to toggleDescription */}
                <FaChevronDown className={`transition-all  duration-400 text-lg md:text-2xl
                  ${openId === item.id ? '-rotate-360' : 'rotate-180'}`}/>
              </button>
            </div>
          </div>
          {/* Render description only if isShow is true */}
          <div className={` ${layoutTheme} rounded-b-lg shadow-md
          ${openId === item.id ? 'h-inherit animate-fadeInDown' : 'opacity-0 h-[0px]'} overflow-hidden`}>
            <div className='p-4 md:p-6 transition-all duration-300'>
              <p className={`
                font-semibold text-base md:text-[24px] md:leading-[1.4] tracking-normal md:tracking-wide
                 rounded-b-full ${bodyTxt}`}>
                {item.description}
              </p>
              <div className='flex items-center gap-x-4 md:gap-x-6 pt-4 md:pt-8'>
                <a href={item.gitRepository} target='_blank' 
                  className="text-brand hover:text-brand/50" title="github-link">
                <FaGithub className={linkIconsStyle}/>
                </a>
                <a href={item.liveApp} target='_blank' 
                  className="text-brand hover:text-brand/50" title="work-link">
                <FiExternalLink className={linkIconsStyle}/>
                </a>
              </div>
            </div>
          </div>
         
        </section>
      </AnimateSections>
    </div>
  )
}
