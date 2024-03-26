import React, { useEffect, useState } from 'react'
import CustomSVG from './Home/CustomSvg'


export default function Intro({switchIllustration, theme, themeColor, frameLogo}) {

  const textsEl = [
    {text: 'Frontend Developer', color: "text-green-500"},
    {text: 'Creative Designer', color: "text-red-500"},
    {text: 'Freelancer', color: "text-pink-500"},

  ]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    const typingTxt = () => {
      const currentWord = textsEl[currentWordIndex];

      if (isDeleting) {
        setDisplayedText(currentWord.text.substring(0, currentIndex - 1));
        setCurrentIndex(prevIndex => prevIndex - 1);

        if (currentIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex(prevWordIndex => (prevWordIndex + 1) % textsEl.length);
        }
      } else {
        setDisplayedText(currentWord.text.substring(0, currentIndex + 1));
        setCurrentIndex(prevIndex => prevIndex + 1);

        if (currentIndex === currentWord.text.length) {
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(typingTxt, 120);
    return () => clearTimeout(timer);
  }, [currentWordIndex, currentIndex, isDeleting]);
  

  return (
    <section className='pt-[135px] w-full transition-all relative z-[0]'>
      <div  className='block absolute -z-[3] right-0 top-0 '>
      <CustomSVG width="297" height="369" theme={theme} />
      </div>
    
      <div className='px-5'>
        <h1 className='text-brand transition-[.5s] font-OpenSan text-[30px] 
          font-bold leading-relaxed'
        >
            Hello 
            <span className={`${themeColor}`}>I’m Adeolu Miracle, </span>
            <span className={`${textsEl[currentWordIndex].color} transition-all`}>
              {`${displayedText} |`}
            </span>
        </h1>
        <p className={`text-xl pt-6 w-[315px] font-medium
          ${theme === "light" ? "text-secondary" : "text-secondaryDark"} `}
        >
          I am a frontend developer with a passion 
          for creating intuitive and user-friendly
          web interfaces.
        </p>
      </div>
      <img 
        src={switchIllustration} 
        alt="illustration" 
        className={`pt-8 `}
      />
    </section>
  )
}
