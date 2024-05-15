import React from 'react';
import AnimateSections from './AnimateSections';
import { FaChevronDown, FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

export default function WorkItem({ item, layoutTheme, themeColor,
  className, bodyTxt, openId, toggleDescription }) {

    const linkIconsStyle = `text-[37px] md:text-[50px] lg:text-4xl`

  return (
    <div className={`${className}`}>
      <AnimateSections>
        <section className={`overflow-hidden shadow-sm rounded-lg`}>
          <div className="relative w-full aspect-w-16 aspect-h-9">
            <img 
              className="w-full h-full object-cover" 
              src={item.image}
              alt={item.alt} />
          </div>
          <div className={`flex items-center p-5 md:p-6 text-xl md:text-2xl
            lg:p-4 
            ${layoutTheme} font-bold ${themeColor} lg:text-lg`}
          >
            <p>
              {item.name}
            </p>
            <div className='flex items-center ml-auto gap-4 lg:hidden'>
              <button 
                title='toggle'
                className='bg-brand/5 shadow-[0px_0px_3px_2px_#2b7f4f]
                 text-brand p-[10px] md:p-[12px] lg:p-[6px] rounded-full' 
                onClick={() => toggleDescription(item.id)}> {/* Pass item.id to toggleDescription */}
                <FaChevronDown 
                  className={`transition-[1s] text-lg md:text-2xl 
                  ${openId === item.id ? '-rotate-360' : 'rotate-180'}`}/>
              </button>
            </div>
          </div>
          {/* Render description only if isShow is true */}
          <div className={`${layoutTheme} rounded-b-lg shadow-md
            ${openId === item.id ? 'animate-fadeInDown lg:block' : 'hidden lg:block'} overflow-hidden`}
          >
            <div className='p-4 md:p-6 lg:pb-5 lg:pt-2 lg:px-4'>
              <p className={`font-semibold text-base md:text-[24px]
                md:leading-[1.4] tracking-normal md:tracking-wide lg:text-base
                xl:text-[14px]
                ${bodyTxt}`}
              >
                {item.description}
              </p>
              <div className='flex items-center gap-x-4 md:gap-x-6 pt-4 md:pt-8 lg:pt-5'>
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
