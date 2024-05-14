import React from 'react'
import CustomSVG from '../CustomSvg'
import { NavLink } from 'react-router-dom'

export default function HomeAbout({
    theme, bodyPadding,
    bodyTxt, highLightTxtOne,
    highLightTxt, toggle}
  ) {


  return (
    <div className={`relative py-[80px] md:py-[130px] ${bodyPadding}`}>
      <div className={`absolute  -top-[100px] md:-top-[280px] -left-[90px]
       -z-[00] 
        ${toggle 
          ? 'md:-left-[180px] lg:-left-[220px] xl:-left-[210px]'
          : 'md:-left-[280px] lg:-left-[300px] xl:-left-[290px]'
        }`}
      >
        <svg 
          className='w-[251px] h-[225px] md:w-[500px] md:h-[500px]'
          viewBox="0 0 251 225" 
          fill="none" xmlns="http://www.w3.org/2000/svg"
        >
        <path d={`M240.869 207.154C202.441 253.542 159.113 192.396 55.7754
           195.458C66.7601 103.24 -28.5858 62.1616 9.84243 15.7727C48.2706
           -30.6162 73.9886 42.5563 194.936 27.4686C195.131 
          111.389 279.297 160.765 240.869 207.154Z`} 
          fill={`${theme === 'light' ? '#CBD5E1' : '#181748'}  `} 
          fillOpacity={`${theme === 'light' ? '0.18' : '0.55'} `}
        />
        </svg>
      </div>
      <div className={`absolute w-full top-[40px] -right-[90px]
         md:top-[25px] -z-[1]  lg:-top-[0]
         ${toggle 
          ? 'md:-right-[320px] lg:-right-[520px] xl:-right-[830px]' 
          : ' md:-right-[280px] lg:-right-[620px] xl:-right-[830px]'}`}>
        <CustomSVG theme={theme} className={`md:w-[550px]`} />
      </div>
      <div className={`relative -z-0 overflow-hidden  
        ${toggle 
          ? 'md:w-[480px] lg:w-[500px] xl:w-[600px] md:m-auto' 
          : 'md:w-[580px] lg:w-[600px] md:m-auto'}`
      }>
        <h2 className={`${highLightTxt} text-center `}>
          Who i am
          <span className={`${highLightTxtOne} leading-normal md:leading-snug lg:leading-tight pt-3 md:pt-4`}>
            I Enjoy Solving Problems 
            <span className={`${highLightTxtOne}`}>With Scalable Solutions</span>
          </span>
        </h2>
     
        <p className={` tracking-wide md:tracking-[0.035em] font-bold border-t-[2px]
         border-brand py-2 pt-4 md:py-6 pb-5 md:leading-snug leading-normal
        ${bodyTxt} text-[16px] md:text-[24px] mt-1 text-center lg:text-lg`}>
        My name is <span className='font-bold text-brand'>Adeolu Miracle</span> , and I'm a passionate frontend developer based in Lagos, Nigeria. I began my coding journey in 2019, and since then, I've been captivated by the art of creating intuitive and visually appealing user experiences. Over time, I've honed my skills in HTML, CSS, and JavaScript, which form the foundation of any great web application... 
        <NavLink 
          className='pb-1 px-2 leading-none font-semibold text-brand underline bg-brand/10 rounded-lg' 
          to='about'>
            Read More
        </NavLink>
        </p>
      </div>
    </div>
  )
}
