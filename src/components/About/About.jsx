import React from 'react';
import myPics from '../../asset/img/hero.png'; // Importing the hero image
import CustomButton from '../CustomButton'; // Importing the CustomButton component
import { NavLink } from 'react-router-dom'; // Importing NavLink for routing
import WorkItem from '../WorkItems'; // Importing the WorkItem component

// Define the About functional component
export default function About(
  {
    bodyTxt,
    themeColor,
    layoutTheme,
    openId,
    toggleDescription,
    bodyPadding,
    theme,
    brandColor,
    firebaseData,
    borderColor
  }
) {

  // Filter recent work from firebaseData
  const recentWork = firebaseData.filter(work => work.type === "recent");

  // CSS styles for the article
  const articleStyle = `
    py-3 md:py-4 text-center md:leading-[1.6] md:text-[20px] md:text-left
    lg:text-[14px] lg:w-[700px] xl:w-[750px] lg:leading-[1.7]
  `;

  // CSS styles for the span text
  const spanTxt = `${brandColor} font-bold`;

  return (
    <section 
      className={`${bodyTxt}  tracking-wider leading-snug ${bodyPadding}
      font-semibold flex flex-col items-center justify-center py-[120px] lg:pt-[80px] px-4`}
    >
      <div className={`lg:flex lg:justify-center lg:gap-8 lg:w-[700px] lg:pb-8 xl:w-[750px]`}>
        {/* Hero Image */}
        <img 
          src={myPics} 
          alt="hero-pics" 
          className={`w-[200px] h-[200px] lg:w-[220px] lg:h-[228px] mb-8 m-auto md:ml-0
          rounded-full xl:h-[205px] md:rounded-xl border-[1.5px] lg:rounded-md lg:border-none 
          lg:drop-shadow-xl lg:m-0 ${borderColor} leading-relaxed`}
        />
        {/* About Text */}
        <article className={` lg:py-0 lg:-mt-1 ${articleStyle} `}>
          Hello, my name is <span className={spanTxt}>Adeolu Miracle</span>. I work as a Frontend Developer with a passion, for creating user-friendly interfaces. I started my coding journey in 2018. Have since been fascinated by the process of crafting visually appealing web experiences. Throughout my learning experience, I've focused on mastering languages like <span className={spanTxt}>HTML, CSS, and JavaScript </span> which are essential for building top-notch web applications. In addition to these skills, I've delved into technologies such as 
          <span className={spanTxt}>React, Tailwind CSS, and Firebase and even dabbled in artificial intelligence (AI)</span>
        </article>
      </div>
      {/* Additional Text */}
      <article className={articleStyle}>
        to add innovative features to my projects. Prioritizing design principles is crucial for me to ensure that users have interactions across different devices. Tools like Figma also play a role in my work as they help me design user interfaces with attention to detail.
      </article>
      {/* Additional Text */}
      <article className={articleStyle}>
        Being a learner in the field of front-end development motivates me to stay abreast of the trends. I enjoy exploring tools and methods that enable me to create interfaces that engage users effectively. With a rooted passion for innovation and a commitment to excellence, I approach each project with zeal. Strive to deliver high-quality solutions that go above and, beyond expectations.
      </article>
      {/* Recent Works */}
      <h1 className={`text-2xl md:text-4xl underline 
        font-bold pt-10 md:pb-3 md:py-12 lg:text-lg ${themeColor}`}
      >
        Recent Works
      </h1>
      <div className='mt-4 md:mt-6 lg:grid lg:grid-cols-2 xxl:grid-cols-3 xl:grid-cols-3 lg:gap-4 xl:gap-4'>
        {/* Mapping recent work items */}
        {recentWork.map((work, index) => (
          <WorkItem 
            key={work.id} 
            item={work} 
            layoutTheme={layoutTheme} 
            themeColor={themeColor}
            bodyTxt={bodyTxt}
            openId={openId}
            toggleDescription={toggleDescription}
            brandColor={brandColor}
            className={`pb-7 lg:pb-0 ${index > 1 ? 'lg:hidden xl:block xxl:block' : ''}`}
            theme={theme}
          />
        ))}
      </div>
      {/* Navigation Button */}
      <NavLink to="/" className='w-full lg:w-max lg:mt-12'>
        <CustomButton 
          theme={theme} 
          className={`text-lg md:text-2xl lg:text-lg py-2 md:py-3 lg:py-1 lg:px-12`}
        >
          Go back home
        </CustomButton>
      </NavLink>
    </section>
  )
}
