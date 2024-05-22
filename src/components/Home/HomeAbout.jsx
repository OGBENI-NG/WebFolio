import React from 'react'
import CustomSVG from '../CustomSvg'
import { NavLink } from 'react-router-dom'

export default function HomeAbout({
    theme, bodyPadding,
    bodyTxt, highLightTxtOne,
    highLightTxt, brandColor}
  ) {


  return (
    <div className={`py-[80px]  md:py-[130px] lg:py-[100px] ${bodyPadding}`}>
      <div className={`relative z-10 w-full md:w-[470px] lg:w-[550px]  xl:w-[560px] m-auto`
      }>
        <h2 className={`${highLightTxt} text-center `}>
          Who i am
          <span className={`${highLightTxtOne} leading-normal md:leading-snug lg:leading-tight pt-3 md:pt-4`}>
            I Enjoy Solving Problems 
            <span className={`${highLightTxtOne}`}>With Scalable Solutions</span>
          </span>
        </h2>
     
        <p className={`tracking-wide md:tracking-[0.035em] font-bold border-t-[2px] lg:border-t-[1.5px]
         border-brand py-2 pt-4 md:py-6 pb-5 md:leading-snug leading-normal
        ${bodyTxt} text-[16px] md:text-[24px] mt-1 text-center lg:text-[15px] lg:pt-2`}>
          My name is 
          <span 
            className={`'font-bold text-brand ${brandColor}`}> Adeolu Miracle 
          </span> , and I'm a passionate frontend developer based in Lagos, Nigeria. I began my coding journey in 2019, and since then, I've been captivated by the art of creating intuitive and visually appealing user experiences. Over time, I've honed my skills in HTML, CSS, and JavaScript, which form the foundation of any great web application... 
        <NavLink 
          className={`pb-1 px-2 leading-none font-semibold ${brandColor} underline`} 
          to='about'>
            Read More
        </NavLink>
        </p>
      </div>
    </div>
  )
}
