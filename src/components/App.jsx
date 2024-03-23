import React, { useEffect, useState } from 'react';
import logo from '../asset/img/🦆 icon _code_.svg'
import logoIllustration from '../asset/img/intro-illtra.svg'
import Header from './Header';
import Intro from './Intro';
import Footer from './Footer';

export default function App() {
  return(
    <div className='bg-mainBg h-screen'>
      <Header 
        logo={logo}
      />
      <Intro
        logoIllustration={logoIllustration} 
      />
      <Footer/>
    </div>
  )
}
