import React, { useEffect, useState } from 'react'
import logo from '../asset/img/🦆 icon _code_.svg'
import logoIllustration from '../asset/img/intro-illtra.svg'
import Header from './Header'
import Intro from './Intro'
import Footer from './Footer'
import data from '../data'

export default function App() {

  const [footerItems, setFooterItems] = useState(data.footerEl)

  const handleIconClick = (id) => {
    const updatedItems = footerItems.map(item => {
      if (item.id === id) {
        return { ...item, isTrue: true }
      } else {
        return { ...item, isTrue: false }
      }
    })
    setFooterItems(updatedItems)
  }

  return(
    <div className='bg-mainBg h-screen'>
      <Header 
        logo={logo}
      />
      <Intro
        logoIllustration={logoIllustration} 
      />
      <Footer 
        footerItems={footerItems}
        handleIconClick={handleIconClick}
      />
    </div>
  )
}
