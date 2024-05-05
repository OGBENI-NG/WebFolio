import React from 'react'
import data from '../../data'
import WorkItem from '../WorkItems'
import CustomButton from '../CustomButton';

export default function Work(
  {
    openId, themeColor, 
    toggleDescription, 
    layoutTheme, highLightTxtOne, 
    bodyTxt, highLightTxt, bodyPadding, }
  ) {

  const workItems = data.workEl.map(item => (
    <WorkItem
      key={item.id} 
      item={item} 
      layoutTheme={layoutTheme} 
      themeColor={themeColor}
      className={`pb-7 md:mt-5`}
      bodyTxt={bodyTxt}
      openId={openId}
      toggleDescription={toggleDescription}
    />
  ))
  return (
    <section className={`py-[110px] px-4 pb-[130px] ${bodyPadding}`}>
      <h1 className={`${highLightTxt} text-center pb-5`}>
      Works
       <span className={`${highLightTxtOne} block`}> What i have made</span>
      </h1>
      <div>
        {workItems}
      </div>
      <a href="https://github.com/OGBENI-NG" target="_blank">
        <CustomButton className={`w-full py-2`}>
          More work on github
        </CustomButton>
      </a>
    </section>
  )
}
