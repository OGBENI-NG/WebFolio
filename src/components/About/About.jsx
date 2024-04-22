import React from 'react'
import myPics from '../../asset/img/my-pics.png'
import CustomButton from '../CustomButton'
import { NavLink } from 'react-router-dom'
import WorkItem from '../WorkItems'


export default function About({bodyTxt, data, themeColor, layoutTheme, openId, toggleDescription}) {

  const recentWork = data.workEl.filter(work => work.type === "recent")

  const articleStyle = `py-3 text-center`
  
  const spanTxt = `text-brand font-bold`
  return (
    <section 
      className={`${bodyTxt} tracking-wider 
      font-semibold flex flex-col items-center justify-center py-[120px] px-5`}
    >
      <div>
        <img 
          src={myPics} 
          alt="hero-pics" 
          className='w-[200px] h-[200px] mb-8 m-auto rounded-full border-[1.5px] border-brand'
        />
        <article className={articleStyle}>
        Hello, my name is <span className={spanTxt}>Adeolu Miracle</span>. I work as a Frontend Developer with a passion, for creating user-friendly interfaces. I started my coding journey in 2018. Have since been fascinated by the process of crafting visually appealing web experiences. Throughout my learning experience, I've focused on mastering languages like <span className={spanTxt}>HTML, CSS, and JavaScript </span> which are essential for building top-notch web applications.
        </article>
      </div>
      <article className={articleStyle}>
      In addition to these skills, I've delved into technologies such as <span className={spanTxt}>React, Tailwind CSS, and Firebase and even dabbled in artificial intelligence (AI)</span> to add innovative features to my projects. Prioritizing design principles is crucial for me to ensure that users have interactions across different devices. Tools like Figma also play a role in my work as they help me design user interfaces with attention to detail.
      </article>
      <article className={articleStyle}>
      Being a learner in the field of front-end development motivates me to stay abreast of the trends. I enjoy exploring tools and methods that enable me to create interfaces that engage users effectively. With a rooted passion for innovation and a commitment to excellence, I approach each project with zeal. Strive to deliver high-quality solutions that go above and, beyond expectations.
      </article>
      <h1 className='text-2xl font-bold pt-10 text-left'>Recent Works</h1>
      <div className='mt-4'>
        {recentWork.map(work => (
          <WorkItem 
            key={work.id} 
            item={work} 
            layoutTheme={layoutTheme} 
            themeColor={themeColor}
            bodyTxt={bodyTxt}
            openId={openId}
            toggleDescription={toggleDescription}
            className={`pb-7`}
          />
        ))}
      </div>
      <NavLink to="/" className='w-full'>
        <CustomButton className="w-full py-2">
          Go back home
        </CustomButton>
      </NavLink>
    </section>
  )
}
