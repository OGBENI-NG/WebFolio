import React from 'react'

export default function Testimonials({data, layoutTheme, theme, bodyPadding, 
  highLightTxt, highLightTxtOne, brandColor}) {

  const testimonialsData = data.testimonials.map((item, index) => (
    <div 
      key={item.id}
      className={`relative group cursor-pointer px-4 py-5 md:p-8 
        rounded-lg mt-7 md:mt-8 lg:hover:translate-y-1 transition-[1s]
        flex flex-col gap-y-8 lg:gap-y-4 lg:m-0 lg:p-4 
        hover:text-lightest/80
        ${index > 0 && ` before:absolute before:content-[''] before:bg-brand/60 
        before:w-[15px] before:h-[28px] md:before:h-[32px] md:before:-top-[32px]
         before:-top-[28px] before:left-0 before:right-0 before:m-auto
         lg:before:-left-[20px] lg:before:top-0
        lg:before:m-0 lg:before:h-[5px] lg:before:w-[24px] lg:before:rounded-lg
        ${index === 2  && 'lg:rounded-tl-[0]'}
        ${index === 1  && 'lg:rounded-t-[0]'}` }
        ${index === 0   && 'lg:rounded-tr-[0]'}
        ${layoutTheme}  
        ${theme === 'light' 
          ? 'hover:bg-brand/80 text-mid '
          :'hover:bg-brandDark/45 text-light/80'
        }`
      }
    >
      <p 
        className={`text-base md:text-lg lg:text-[14px] 
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
          <p className={`group-hover:text-blue-500 text-lg md:text-xl lg:text-lg font-semibold
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
    <section className={`${bodyPadding} pt-[130px]  pb-[80px] lg:py-[100px]`}>
      <h3 className={`${highLightTxt}`}>Testimonials 
        <span className={`${highLightTxtOne}`}>what my clients have says</span>
      </h3>

      <div className='lg:grid lg:grid-cols-3 lg:gap-x-4 lg:mt-10'>
        {testimonialsData}
      </div>

    </section>
  )
}
