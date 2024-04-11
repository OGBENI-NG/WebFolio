import React from 'react'
import data from '../../data'
import WorkItem from '../WorkItems'
import CustomButton from '../CustomButton';

export default function Work({theme}) {

  const hoverColor = theme === "light"
    ? "hover:text-primary/60"
    : "hover:text-primaryDark/60"
  ;
  
  const layoutTheme = theme === 'light' 
  ? 'bg-[#E1E1E1] border-slate-900/10' 
  : 'bg-[#1D353F] border-slate-300/10'
  ;
  
  const themeColor = theme === "light" 
  ? "block text-primary" 
  : "block text-primaryDark"
  ;
  const centerTxt = ` ${themeColor} font-Solway text-2xl font-bold w-max`;

  const workItems = data.workEl.map(item => (
    <WorkItem
      key={item.id} 
      item={item} 
      layoutTheme={layoutTheme} 
      hoverColor={hoverColor}
      themeColor={themeColor}
      className={`pb-8`}
    />
  ))
  return (
    <section className='py-[100px] pb-[130px] transition-colors duration-500'>
      <h1 className={`py-8 m-auto ${centerTxt}`}>
       My works <span className='text-brand underline'>Samples</span>
      </h1>
      {workItems}
      <div className='px-4'> 
        <CustomButton className={`w-full py-2`}>
          <a href="https://github.com/OGBENI-NG" target="_blank">More work on github</a>
        </CustomButton>
      </div>
    </section>
  )
}
