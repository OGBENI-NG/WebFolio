import React from 'react';
import { FaChevronDown, FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

export default function WorkItem({ item, layoutTheme, themeColor,
   className, bodyTxt, openId, toggleDescription, brandColor, theme }) {
  

  const linkIconsStyle = `text-[25px] md:text-[40px] lg:text-2xl xl:text-base`;

  return (
    <div className={`${className}`}>
      <section className={`overflow-hidden shadow-sm rounded-lg`}>
        <div className="w-full h-full">
          <img
            className={`w-full h-full object-cover`}
            src={item.imageUrl}
            alt={item.name}
            loading="lazy"
          />
        </div>
        <div className={`flex items-center p-5 md:p-6 text-xl md:text-2xl lg:px-5 xl:px-4 lg:pb-2 lg:pt-3 ${layoutTheme} font-bold ${themeColor} lg:text-lg`}>
          <p>{item.name}</p>
          <div className='flex items-center ml-auto gap-4 lg:hidden'>
            <button
              title='toggle'
              className={`bg-brand/5 ${brandColor} shadow-[0px_0px_3px_2px_#2b7f4f] text-brand p-[10px] md:p-[12px] lg:p-[6px] rounded-full`}
              onClick={() => toggleDescription(item.id)}>
              <FaChevronDown
                className={`transition-[1s] text-lg md:text-2xl ${openId === item.id ? '-rotate-360' : 'rotate-180'}`}
              />
            </button>
          </div>
        </div>
        <div className={`${layoutTheme} rounded-b-lg shadow-md ${openId === item.id ? 'animate-fadeInDown lg:block' : 'hidden lg:block'} overflow-hidden`}>
          <div className='p-4 md:p-6 lg:pt-0 lg:pb-4 lg:px-5 xl:px-4'>
            <p className={`h-[90px] md:h-[130px] lg:h-[90px] text-base md:text-[24px] md:leading-[1.4] tracking-normal md:tracking-wide lg:text-[14px] lg:leading-[1.6] xl:text-[13px] ${bodyTxt}`}>
              {item.description}
            </p>
            <div className='flex items-center gap-x-2 pt-8 md:pt-8 lg:pt-5 '>
              <div className='flex items-center gap-x-4 md:gap-5 lg:gap-3'>
                <a href={item.gitRepository} target='_blank' className={`${brandColor} hover:text-brand/70`} title="github-link">
                  <FaGithub className={linkIconsStyle} />
                </a>
                <a href={item.liveApp} target='_blank' className={`${brandColor} hover:text-brand/70`} title="work-link">
                  <FiExternalLink className={linkIconsStyle} />
                </a>
              </div>
              <div className='ml-auto '>
                <div className='flex items-center flex-wrap justify-end gap-[8px] xl:gap-[6px]'>
                  {item.tools.map((tool, index) => (
                    <span 
                      key={index} 
                      className={`py-[2px] px-[5px] w-auto text-[14px] font-semibold
                        lg:text-[10px] xl:text-[8px] 
                        rounded-[3px] ${theme === 'light' ? 'bg-brand/10 text-brand ' :'text-brandDark bg-brandDark/15'}`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

              </div>
             
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
