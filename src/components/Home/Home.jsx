import React, {useContext} from 'react'
import Intro from './Intro'
import logoIllustration from '../../asset/img/intro-illtra.svg'
import logoIllusDark from '../../asset/img/intro-illus-dark.svg'
import frameLogo from '../../asset/img/frame.svg'
import ThemeContext from '../../UseThemeContext'
import HomeWork from './HomeWork'
import data from '../../data'
import SkillsIcons from './SkillsIcons'
import HomeAbout from './HomeAbout'


export default function Home() {
  const {theme} = useContext(ThemeContext)


  const switchIllustration = theme === "light" 
    ? logoIllustration
    : logoIllusDark
  ;

  const layoutTheme = theme === 'light' 
    ? 'bg-[#E1E1E1] border-borderColor' 
    : 'bg-[#363636] border-[#5F5F5F]'
  ;

  const themeColor = theme === "light" 
    ? "block text-primary" 
    : "block text-primaryDark"
  ;

  const bodyTxt = theme === "light" ? "text-secondary" : "text-secondaryDark"

  const centerTxt = ` ${themeColor} font-Solway text-2xl font-bold w-max`
 

  return (
    <main>
      <Intro 
        switchIllustration={switchIllustration}
        theme={theme}
        themeColor={themeColor}
        frameLogo={frameLogo}
        bodyTxt={bodyTxt}
      />
      <SkillsIcons 
        themeColor={themeColor}
        theme={theme}
      />
      <HomeWork
        data={data}
        themeColor={themeColor}
        layoutTheme={layoutTheme}
        centerTxt={centerTxt}
      />
      <HomeAbout
        theme={theme}
        themeColor={themeColor}
        bodyTxt={bodyTxt}
        centerTxt={centerTxt}
      />
    </main>
  )
}
