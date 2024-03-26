import React, {useContext} from 'react'
import Intro from '../Intro'
import logoIllustration from '../../asset/img/intro-illtra.svg'
import logoIllusDark from '../../asset/img/intro-illus-dark.svg'
import frameLogo from '../../asset/img/frame.svg'
import ThemeContext from '../../UseThemeContext'
import SelectedWork from './SelectedWork'
import data from '../../data'
import SkillsIcons from './SkillsIcons'


export default function Home() {
  const {theme} = useContext(ThemeContext)


  const switchIllustration = theme === "light" 
    ? logoIllustration
    : logoIllusDark
  ;

  const layoutTheme = theme === 'light' 
    ? 'bg-[#E1E1E1] border-borderColor' 
    : 'bg-[#363636] border-[#263238] '
  ;

  const themeColor = theme === "light" 
    ? "block text-primary" 
    : "block text-primaryDark"
  ;

  const centerTxt = ` ${themeColor} font-Solway text-2xl font-bold w-max m-auto`
 

  return (
    <main>
      <Intro 
        switchIllustration={switchIllustration}
        theme={theme}
        themeColor={themeColor}
        frameLogo={frameLogo}
      />
      <SkillsIcons 
        themeColor={themeColor}
        theme={theme}
      />
      <SelectedWork
        data={data}
        themeColor={themeColor}
        layoutTheme={layoutTheme}
        centerTxt={centerTxt}
      />
    </main>
  )
}
