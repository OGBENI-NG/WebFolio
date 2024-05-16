import React from 'react'
import myPics from '../../asset/img/my-pics.png'
import CustomButton from '../CustomButton'
import { NavLink } from 'react-router-dom'
import WorkItem from '../WorkItems'


export default function About(
  {
    bodyTxt,
    data,
    themeColor,
    layoutTheme,
    openId,
    toggleDescription,
    bodyPadding,
    theme
  }
) {

  const recentWork = data.workEl.filter(work => work.type === "recent")

  const articleStyle = `py-3 md:py-4 text-center md:text-[24px] md:text-left
    lg:text-[15px] lg:w-[700px] lg:max-w-[700px] lg:leading-[1.7]`
  
  const spanTxt = `text-brand font-bold`
  return (
    <section 
      className={`${bodyTxt}  tracking-wider leading-snug ${bodyPadding}
      font-semibold flex flex-col items-center justify-center py-[120px] lg:pt-[80px] px-4`}
    >
      <div className={`lg:flex lg:justify-center lg:gap-8 lg:w-[700px] lg:pb-8`}>
        <img 
          src={myPics} 
          alt="hero-pics" 
          className={`w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] mb-8 m-auto md:ml-0
          rounded-full md:rounded-xl border-[1.5px] lg:rounded-md lg:border-none 
          lg:drop-shadow-lg lg:mb-0 border-brand leading-relaxed`}
        />
        <article className={` lg:py-0 lg:-mt-1 ${articleStyle} `}>
        Hello, my name is <span className={spanTxt}>Adeolu Miracle</span>. I work as a Frontend Developer with a passion, for creating user-friendly interfaces. I started my coding journey in 2018. Have since been fascinated by the process of crafting visually appealing web experiences. Throughout my learning experience, I've focused on mastering languages like <span className={spanTxt}>HTML, CSS, and JavaScript </span> which are essential for building top-notch web applications.
        </article>
      </div>
      <article className={articleStyle}>
      In addition to these skills, I've delved into technologies such as 
      <span className={spanTxt}>React, Tailwind CSS, and Firebase and even dabbled in artificial intelligence (AI)</span> to add innovative features to my projects. Prioritizing design principles is crucial for me to ensure that users have interactions across different devices. Tools like Figma also play a role in my work as they help me design user interfaces with attention to detail.
      </article>
      <article className={articleStyle}>
      Being a learner in the field of front-end development motivates me to stay abreast of the trends. I enjoy exploring tools and methods that enable me to create interfaces that engage users effectively. With a rooted passion for innovation and a commitment to excellence, I approach each project with zeal. Strive to deliver high-quality solutions that go above and, beyond expectations.
      </article>
      <h1 className='text-2xl md:text-4xl underline 
        font-bold pt-10 md:pb-3 md:py-12 text-brand lg:text-lg'
      >
        Recent Works
      </h1>
      <div className='mt-4 md:mt-6 lg:grid lg:grid-cols-2 lg:gap-6 xl:gap-8'>
        {recentWork.map(work => (
          <WorkItem 
            key={work.id} 
            item={work} 
            layoutTheme={layoutTheme} 
            themeColor={themeColor}
            bodyTxt={bodyTxt}
            openId={openId}
            toggleDescription={toggleDescription}
            className={`pb-7 lg:pb-0`}
          />
        ))}
      </div>
      <NavLink to="/" className='w-full lg:w-max lg:mt-12'>
        <CustomButton theme={theme} className={`text-lg md:text-2xl lg:text-lg py-2 md:py-3 lg:py-2 lg:px-12`}>
          Go back home
        </CustomButton>
      </NavLink>
    </section>
  )
}
