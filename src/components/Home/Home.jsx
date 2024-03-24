import React, {useContext} from 'react'
import Intro from '../Intro'
import logoIllustration from '../../asset/img/intro-illtra.svg'
import logoIllusDark from '../../asset/img/intro-illus-dark.svg'
import ThemeContext from '../../UseThemeContext'


export default function Home() {
  const {theme} = useContext(ThemeContext)

  const switchIllustration = theme === "light" 
    ? logoIllustration
    : logoIllusDark
  ;

  const themeColor = theme === "light" ?
    "block text-primary" : "block text-primaryDark"
  ;

  return (
    <main>
      <Intro 
        switchIllustration={switchIllustration}
        theme={theme}
        themeColor={themeColor}
      />
    </main>
  )
}
