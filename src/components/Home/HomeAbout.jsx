import React from 'react'
import CustomSVG from '../CustomSvg'
import { NavLink } from 'react-router-dom'

export default function HomeAbout({theme, themeColor, bodyTxt}) {
  return (
    <div className='relative pb-[150px] -z-[0] px-4'>
      <div className='absolute w-full -top-[50px] -right-[85px] -z-[1]'>
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
