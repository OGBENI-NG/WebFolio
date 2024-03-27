import React from 'react'
import CustomSVG from '../CustomSvg'
import { NavLink } from 'react-router-dom'

export default function HomeAbout({theme, themeColor, bodyTxt}) {
  return (
    <div className='relative py-[150px] -z-[0] px-4 '>
      <div className='absolute -left-[90px] -top-[100px] ' >
        <svg 
          width="251" height="225" viewBox="0 0 251 225" 
          fill="none" xmlns="http://www.w3.org/2000/svg"
        >
        <path d={`M240.869 207.154C202.441 253.542 159.113 192.396 55.7754
           195.458C66.7601 103.24 -28.5858 62.1616 9.84243 15.7727C48.2706
           -30.6162 73.9886 42.5563 194.936 27.4686C195.131 
          111.389 279.297 160.765 240.869 207.154Z`} 
          fill={`${theme === 'light' ? '#E0E0E0' : '#E0E0E0'}  `} 
          fillOpacity={`${theme === 'light' ? '0.54' : '0.13'} `}
        />
        </svg>
      </div>
      <div className='absolute w-full top-[60px] -right-[85px] -z-[1]'>
        <CustomSVG theme={theme} />
      </div>
      <div className='w-[300px]'>
        <h2 className='text-2xl font-Solway font-bold text-brand'>
          About me
          <span className={`py-3 ${themeColor}`}>I Enjoy Solving Problems With Scalable Solutions</span>
        </h2>
      </div>
      <p className={`text-base font-semibold border-l-[2px] border-brand pl-2
       ${bodyTxt} w-[350px] mt-2`}>
      My name is Adeolu Miracle, and I'm a passionate frontend developer based in Lagos, Nigeria. I began my coding journey in 2019, and since then, I've been captivated by the art of creating intuitive and visually appealing user experiences. Over time, I've honed my skills in HTML, CSS, and JavaScript, which form the foundation of any great web application... 
      <NavLink 
        className='pb-1 px-2 leading-none font-semibold text-brand underline bg-brand/15 rounded-lg' 
        to='about'>
          Read More
      </NavLink>
      </p>
    </div>
  )
}