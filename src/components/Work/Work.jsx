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
    ? 'bg-[#E1E1E1] border-borderColor' 
    : 'bg-[#1D353F] border-[#5F5F5F]'
  ;

  const themeColor = theme === "light" 
    ? "block text-primary" 
    : "block text-primaryDark"
  ;

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
    <div className='py-[100px] pb-[130px]'>
      {workItems}
      <div className='px-4'> 
        <CustomButton className={`w-full py-2`}>
          <a href="https://github.com/OGBENI-NG" target='_blank'>More work on github</a>
        </CustomButton>
      </div>
    </div>
  )
}
