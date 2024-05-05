import React, { useEffect, useState } from 'react'
import CustomSVG from '../CustomSvg'


export default function Intro({bodyPadding, switchIllustration, bodyTxt, theme, themeColor}) {

  const textsEl = [
    {text: 'Frontend Developer', color: "text-green-500"},
    {text: 'Creative Designer', color: "text-red-500"},
    {text: 'Freelancer', color: "#0B5AF1"},

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
    <article className={`pt-[135px] md:pt-[110px] w-full relative z-[0] ${bodyPadding}`}>
      <div  className='block absolute -z-[3] right-0 top-0 md:-top-10 md:-right-10'>
        <CustomSVG 
          className={`w-[297px] h-[369px] md:w-[520px] md:h-[520px]`} 
          theme={theme} 
        />
      </div>
    
      <section className={``}>
        <h1 className='text-brand font-OpenSan text-[30px]
          md:text-[40px]
          font-bold leading-relaxed md:leading-normal'
        >
            Hello 
            <span className={`${themeColor}`}>I’m Adeolu Miracle, </span>
            <span className={`${textsEl[currentWordIndex].color}`}>
              {`${displayedText} |`}
            </span>
        </h1>
        <p className={`text-xl md:text-[28px] md:w-[470px] pt-6 md:pt-12 w-[315px] font-medium ${bodyTxt} md:leading-[1.456]`}
        >
          I am a frontend developer with a passion 
          for creating intuitive and user-friendly
          web interfaces.
        </p>
      </section>
      <img 
        src={switchIllustration} 
        alt="illustration" 
        className={`pt-8 md:pt-12 w-full`}
      />
    </article>
  )
}
