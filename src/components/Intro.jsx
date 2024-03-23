import React, { useEffect, useState } from 'react'

export default function Intro({logoIllustration}) {
  const words = ["Frontend Developer", "Creative Designer", "Freelancer"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    const typingTxt = () => {
      const currentWord = words[currentWordIndex]

      if (isDeleting) {
        setDisplayedText(currentWord.substring(0, currentIndex - 1))
        setCurrentIndex(prevIndex => prevIndex - 1)

        if (currentIndex === 0) {
          setIsDeleting(false)
          setCurrentWordIndex(prevWordIndex => (prevWordIndex + 1) % words.length) // Fixed modulo operation
        }
      } else {
        setDisplayedText(currentWord.substring(0, currentIndex + 1))
        setCurrentIndex(prevIndex => prevIndex + 1)

        if (currentIndex === currentWord.length) {
          setIsDeleting(true)
        }
      }
    }

    const timer = setTimeout(typingTxt, 120)
    return () => clearTimeout(timer)
  }, [currentWordIndex, currentIndex, isDeleting, words])

  return (
    <section className='pt-[145px] w-full'>
     <div className='px-5'>
      <h1 className='text-brand font-OpenSan text-[32px] font-bold leading-normal'>
          Hello 
          <span className='block text-primary'>I’m Adeolu Miracle, </span>
          <span className='inline-flex text-primary transition'>{`${displayedText} |`}</span>
        </h1>
        <p className='text-xl pt-6 pr-[49px] text-secondary'>
          I am a frontend developer with a passion 
          for creating intuitive and user-friendly
          web interfaces.
        </p>
      </div>
      <img 
        src={logoIllustration} 
        alt="illustration" 
        className=' '
      />
    </section>
  )
}
