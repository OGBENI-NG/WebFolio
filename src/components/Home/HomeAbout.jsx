import React from 'react'
import CustomSVG from '../CustomSvg'
import { NavLink } from 'react-router-dom'
import AnimateSections from '../AnimateSections'


export default function HomeAbout({theme, themeColor, bodyTxt,}) {
  return (
    <div className='relative py-[100px] -z-[0] px-4'>
      <div className='absolute -left-[90px] -top-[100px] -z-[2]' >
        <svg 
          width="251" height="225" viewBox="0 0 251 225" 
          fill="none" xmlns="http://www.w3.org/2000/svg"
        >
        <path d={`M240.869 207.154C202.441 253.542 159.113 192.396 55.7754
           195.458C66.7601 103.24 -28.5858 62.1616 9.84243 15.7727C48.2706
           -30.6162 73.9886 42.5563 194.936 27.4686C195.131 
          111.389 279.297 160.765 240.869 207.154Z`} 
          fill={`${theme === 'light' ? '#CBD5E1' : '#CBD5E1'}  `} 
          fillOpacity={`${theme === 'light' ? '0.17' : '0.0290'} `}
        />
        </svg>
      </div>
      <div className='absolute w-full top-[40px] -right-[90px] -z-[1]'>
        <CustomSVG theme={theme} />
      </div>
      <AnimateSections className=''>
        <h2 className={`text-center text-2xl font-Solway font-bold text-brand`}>
          About me
          <span className={`p-2 ${themeColor}`}>
            I Enjoy Solving Problems With Scalable Solutions
          </span>
        </h2>
      </AnimateSections>
      <AnimateSections>
        <p className={`text-[20px] tracking-wide font-medium border-t-[2px]
         border-brand py-2 px-0 pb-5
        ${bodyTxt} mt-2 text-center backdrop-blur w-full`}>
        My name is <span className='font-bold text-brand/85'>Adeolu Miracle</span> , and I'm a passionate frontend developer based in Lagos, Nigeria. I began my coding journey in 2019, and since then, I've been captivated by the art of creating intuitive and visually appealing user experiences. Over time, I've honed my skills in HTML, CSS, and JavaScript, which form the foundation of any great web application... 
        <NavLink 
          className='pb-1 px-2 leading-none font-semibold text-brand underline bg-brand/10 rounded-lg' 
          to='about'>
            Read More
        </NavLink>
        </p>
      </AnimateSections>
    </div>
  )
}
