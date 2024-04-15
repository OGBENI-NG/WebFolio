import React from 'react'
import { RiCss3Line, RiHtml5Line, RiJavascriptLine, RiReactjsLine } from 'react-icons/ri'
import { TbBrandTailwind, TbBrandFigma, TbBrandFirebase, TbBrandFramer } from "react-icons/tb";
import CustomSVG from '../CustomSvg';
import AnimateSections from '../AnimateSections';




export default function SkillsIcons({highLightTxtOne, theme, highLightTxt}) {
    const styleIcons = `text-[70px] ${theme === 'light' ? 'text-darkest' : 'text-light'}`

    return (
      
        <article className='py-[100px] px-5 transition-all overflow-hidden relative z-0 w-full'>
            <div className='absolute w-full top-[20px] -z-[1] -right-[60px]'>
                <CustomSVG width='380px' theme={theme}/>
            </div>
            <AnimateSections>
                <div className={`${highLightTxt}`}>
                    <h1>
                        Skills
                        <span className={highLightTxtOne}>What i can do</span>
                    </h1>
                </div>
            </AnimateSections>
            <AnimateSections>
                <div className='grid grid-cols-5 gap-x-0 gap-y-2'>
                    <RiHtml5Line className={styleIcons}/>
                    <RiCss3Line className={styleIcons}/>
                    <RiJavascriptLine className={styleIcons}/>
                    <RiReactjsLine className={styleIcons}/>
                    <TbBrandTailwind className={styleIcons}/>
                    <TbBrandFigma  className={styleIcons}/>
                    <TbBrandFirebase  className={styleIcons}/>
                    <TbBrandFramer  className={styleIcons}/>
                </div>
            </AnimateSections>
        </article>
        
    )
}
