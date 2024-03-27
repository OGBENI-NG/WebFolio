import React from 'react'
import { RiCss3Line, RiHtml5Line, RiJavascriptLine, RiReactjsLine } from 'react-icons/ri'
import { TbBrandTailwind, TbBrandFigma, TbBrandFirebase, TbBrandFramer } from "react-icons/tb";
import CustomSVG from './CustomSvg';




export default function SkillsIcons({themeColor, theme}) {
    const styleIcons = `w-[80px] h-[80px] text-[#455A64]`

    return (
        <section className='py-[120px] transition-all overflow-hidden relative z-0'>
            <div className='absolute w-full top-[20px] -z-[1] -right-[10px]'>
                <CustomSVG width='380px' theme={theme}/>
            </div>
            <div className={`${themeColor} text-center text-2xl font-bold pb-5 font-Solway`}>
                <h1>What i can do</h1>
                <h2>Skills</h2>
            </div>
            <div className='flex items-center flex-wrap justify-center gap-3 '>
                <RiHtml5Line className={styleIcons}/>
                <RiCss3Line className={styleIcons}/>
                <RiJavascriptLine className={styleIcons}/>
                <RiReactjsLine className={styleIcons}/>
                <TbBrandTailwind className={styleIcons}/>
                <TbBrandFigma  className={styleIcons}/>
                <TbBrandFirebase  className={styleIcons}/>
                <TbBrandFramer  className={styleIcons}/>
            </div>
        </section>
    )
}
