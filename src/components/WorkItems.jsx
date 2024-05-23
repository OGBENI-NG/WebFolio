import React from 'react';
import { FaChevronDown, FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

export default function WorkItem({ item, layoutTheme, themeColor,
  className, bodyTxt, openId, toggleDescription, brandColor }) {

    const linkIconsStyle = `text-[37px] md:text-[50px] lg:text-3xl xl:text-2xl`

  return (
    <div className={`${className}`}>
      <section className={`overflow-hidden shadow-sm rounded-lg`}>
        <div className="w-full h-full ">
          <img 
            className="w-full h-full object-cover" 
            src={item.image}
            alt={item.alt} />
        </div>
        <div className={`flex items-center p-5 md:p-6 text-xl 
          md:text-2xl lg:px-6 lg:pb-2 lg:pt-3
          ${layoutTheme} font-bold ${themeColor} lg:text-lg`}
        >
          <p>
            {item.name}
          </p>
          <div className='flex items-center ml-auto gap-4 lg:hidden'>
            <button 
              title='toggle'
              className={`bg-brand/5 ${brandColor} shadow-[0px_0px_3px_2px_#2b7f4f]
                text-brand p-[10px] md:p-[12px] lg:p-[6px] rounded-full`} 
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
          <div className='p-4 md:p-6 lg:pt-0 lg:pb-4 lg:px-6'>
            <p className={`text-base md:text-[24px]
              md:leading-[1.4] tracking-normal md:tracking-wide
              lg:text-[14px] lg:leading-[1.6] xl:text-[13px]
              ${bodyTxt}`}
            >
              {item.description}
            </p>
            <div className='flex items-center gap-x-4 md:gap-x-6 pt-4 md:pt-8 lg:pt-5'>
              <a href={item.gitRepository} target='_blank' 
                className={`${brandColor} hover:text-brand/70`} title="github-link">
              <FaGithub className={linkIconsStyle}/>
              </a>
              <a href={item.liveApp} target='_blank' 
                className={`${brandColor} hover:text-brand/70`} title="work-link">
              <FiExternalLink className={linkIconsStyle}/>
              </a>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}
