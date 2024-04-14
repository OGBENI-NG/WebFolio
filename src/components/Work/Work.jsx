import React from 'react'
import data from '../../data'
import WorkItem from '../WorkItems'
import CustomButton from '../CustomButton';

export default function Work(
  {
    openId, themeColor, 
    toggleDescription, 
    layoutTheme, highLightTxtOne, 
    bodyTxt, highLightTxt }
  ) {

  
  

  const workItems = data.workEl.map(item => (
    <WorkItem
      key={item.id} 
      item={item} 
      layoutTheme={layoutTheme} 
      themeColor={themeColor}
      className={`pb-7`}
      bodyTxt={bodyTxt}
      openId={openId}
      toggleDescription={toggleDescription}
    />
  ))
  return (
    <section className='py-[110px] px-5 pb-[130px]'>
      <h1 className={`${highLightTxtOne} text-center m-auto`}>
       What i have made 
       <span className={highLightTxt}>Work</span>
      </h1>
      {workItems}
      <CustomButton className={`w-full py-2`}>
        <a href="https://github.com/OGBENI-NG" target="_blank">More work on github</a>
      </CustomButton>
    </section>
  )
}
