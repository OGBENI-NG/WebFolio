import React from 'react'

export default function Testimonials({data, layoutTheme, theme, bodyPadding, highLightTxt, highLightTxtOne, themeColor, bodyTxt}) {

  const testimonialsData = data.testimonials.map((item, index) => (
    <div 
      key={item.id}
      className={`cursor-pointer px-4 py-5 md:p-8 rounded-md mt-7 md:mt-8 
        flex flex-col gap-y-8 lg:gap-y-4 lg:m-0 lg:p-4 
        hover:text-lightest transition-colors duration-300
        ${layoutTheme}  
        ${theme === 'light' 
          ? 'hover:bg-brand/70 text-mid'
          :'hover:bg-brand/50 text-light/80'
        }`
      }
    >
      <p 
        className={`text-base md:text-lg lg:text-[14px] font-semibold 
        md:leading-[1.4] tracking-normal md:tracking-wide
        lg:leading-[1.6]`}
      >
        {item.review}
      </p>
      <div className='flex items-center gap-3'>
        <div className='w-[50px] h-[50px] lg:w-[40px] lg:h-[40px]'>
          <img 
            src={item.img} 
            alt={`${item.name}-pic`}
            className='h-full w-full object-cover border-2 border-brand rounded-full' 
          />
        </div>
        <div>
          <p className={`text-lg md:text-xl lg:text-lg font-bold
          lg:-mb-1 ${theme === 'light' ? 'text-darkest/80' :'text-lightest'}`}>{item.name}</p>
          <p className='text-base lg:text-[14px] font-semibold'>{item.position}</p>
        </div>
      </div>
    </div>
  ))
  
  return (
    <section className={`${bodyPadding} pt-[130px]  pb-[20px] lg:py-[80px]`}>
      <h3 className={`${highLightTxt}`}>Testimonials 
        <span className={`${highLightTxtOne}`}>what my clients have says</span>
      </h3>

      <div className='lg:grid lg:grid-cols-3 lg:gap-x-4 lg:mt-5'>
        {testimonialsData}
      </div>

    </section>
  )
}
