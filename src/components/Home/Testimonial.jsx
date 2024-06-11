import React, { useState, useEffect } from 'react';

export default function Testimonials({
  data,
  layoutTheme,
  theme,
  bodyPadding,
  highLightTxt,
  highLightTxtOne,
}) {
  // State to manage the current displayed testimonial card
  const [currentCard, setCurrentCard] = useState(0);

  // Function to handle dot click event
  function onDotClick(index) {
    setCurrentCard(index);
  }

  // Map testimonials data to JSX elements
  const testimonialsData = data.testimonials.map((item, index) => (
    <div
      key={item.id}
      className={`relative group cursor-pointer rounded-lg mt-7 
        lg:hover:translate-y-1 transition-[1s] hover:text-lightest/80 
        shadow-md
        ${index > 0 &&
          `lg:before:absolute lg:before:content-[''] lg:before:bg-brandDark/50 lg:before:-left-[20px] lg:before:top-0 lg:before:m-0 lg:before:h-[5px] lg:before:w-[24px] lg:before:rounded-lg`
        } 
        ${layoutTheme} 
        ${
          theme === 'light'
          ? 'hover:bg-brand/80 text-mid'
          : 'hover:bg-brandDark/45 text-light/80'
        } 
        ${index === currentCard ? 'block' : 'hidden lg:block'}`
      }
    >
      <div className='flex flex-col gap-8 p-4'>
        <p className={`text-base md:text-lg lg:text-[12px] md:leading-[1.4] 
          tracking-normal md:tracking-wide lg:leading-[1.6] h-[80px] lg:h-[70px]`}
        >
          {item.review}
        </p>
        <div className='flex items-center gap-3'>
          <div className='w-[50px] h-[50px] lg:w-[40px] lg:h-[40px]'>
            <img
              src={item.img}
              alt={`${item.name}-pic`}
              className='h-full w-full object-cover border-2 border-brandDark rounded-full'
            />
          </div>
          <div>
            <p
              className={`text-lg md:text-xl lg:text-lg font-semibold
               ${theme === 'light'
                ? 'text-darkest/80 group-hover:text-darkest'
                : 'text-lightest/80 group-hover:text-lightest'
              }`
              }
            >
              {item.name}
            </p>
            <p className='text-base lg:text-[14px] font-semibold'>{item.position}</p>
          </div>
        </div>
      </div>
    </div>
  ));

  // Effect to handle automatic testimonial card change
  useEffect(() => {
    if (testimonialsData.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentCard((prevCard) => (prevCard + 1) % testimonialsData.length);
      }, 3000);

      return () => clearInterval(intervalId); // Cleanup interval
    }
  }, [testimonialsData.length]);

  return (
    <section className={`${bodyPadding} pt-[130px] pb-[80px] lg:py-[100px]`}>
      <h3 className={`${highLightTxt}`}>
        Testimonials
        <span className={`${highLightTxtOne}`}>
          what my clients have to say
        </span>
      </h3>

      <div className='md:mx-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-x-4 lg:mt-10'>
        {testimonialsData}
      </div>
      {/* Dot navigation for small screens */}
      <div className='flex justify-center mt-4 lg:hidden'>
        {data.testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-[14px] h-[14px] border-2 border-brandDark md:w-[16px] md:h-[16px]  rounded-full mx-1 
              ${index === currentCard
                ? 'bg-brandDark'
                : 'bg-transparent'
              }`
            }
            onClick={() => onDotClick(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}
