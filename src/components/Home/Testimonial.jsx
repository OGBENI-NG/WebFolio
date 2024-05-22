import React from 'react'

export default function Testimonials({data, layoutTheme, theme, bodyPadding, 
  highLightTxt, highLightTxtOne, brandColor}) {

  const testimonialsData = data.testimonials.map((item, index) => (
    <div 
      key={item.id}
      className={`group cursor-pointer px-4 py-5 md:p-8 rounded-md mt-7 md:mt-8 
        flex flex-col gap-y-8 lg:gap-y-4 lg:m-0 lg:p-4 
        hover:text-lightest/80 transition-colors duration-300
        ${layoutTheme}  
        ${theme === 'light' 
          ? 'hover:bg-brand/80 text-mid'
          :'hover:bg-brandDark/45 text-light/80'
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
            className={`h-full w-full object-cover border-2 border-brandDark rounded-full`} 
          />
        </div>
        <div>
          <p className={`group-hover:text-blue-500 text-lg md:text-xl lg:text-lg font-bold
          lg:-mb-1 
          ${theme === 'light' 
            ? 'text-darkest/80 group-hover:text-darkest' 
            :'text-lightest/80 group-hover:text-lightest'}`}>{item.name}</p>
          <p className='text-base lg:text-[14px] font-semibold'>{item.position}</p>
        </div>
      </div>
    </div>
  ))
  
  return (
    <section className={`${bodyPadding} pt-[130px]  pb-[80px] lg:py-[80px]`}>
      <h3 className={`${highLightTxt}`}>Testimonials 
        <span className={`${highLightTxtOne}`}>what my clients have says</span>
      </h3>

      <div className='lg:grid lg:grid-cols-3 lg:gap-x-4 lg:mt-5'>
        {testimonialsData}
      </div>

    </section>
  )
}
