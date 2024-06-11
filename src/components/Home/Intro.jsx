import React, { useEffect, useState } from 'react';
import CustomSVG from '../CustomSvg'; // Importing custom SVG component
import logoIllustration from '../../asset/img/intro-illtra.svg'; // Importing logo illustration image
import CustomButton from '../CustomButton'; // Importing custom button component
import { NavLink } from 'react-router-dom'; // Importing NavLink from react-router-dom for navigation

export default function Intro({ bodyPadding, bodyTxt, theme, themeColor, brandColor }) {

  // State to manage image dimensions
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  // Effect to update image dimensions on component mount
  useEffect(() => {
    const img = new Image();
    img.src = logoIllustration;
    img.onload = () => {
      setImageDimensions({ width: img.width, height: img.height });
    };
  }, []);

  // Array of texts to display with corresponding colors
  const textsEl = [
    { text: 'Frontend Engineer', color: 'text-pink-500' },
    { text: 'Creative Developer', color: 'text-red-500' },
    { text: 'Freelancer', color: '#0B5AF1' },
  ];

  // State variables for managing the typing effect
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Index of the current word
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the current character
  const [isDeleting, setIsDeleting] = useState(false); // Flag for deleting state
  const [displayedText, setDisplayedText] = useState(''); // Text currently displayed

  // Effect to handle typing and deleting text effect
  useEffect(() => {
    // Function to handle the typing and deleting effect
    const typingTxt = () => {
      const currentWord = textsEl[currentWordIndex]; // Get the current word object

      if (isDeleting) {
        // Handle deleting effect
        setDisplayedText(currentWord.text.substring(0, currentIndex - 1));
        setCurrentIndex((prevIndex) => prevIndex - 1);

        // If fully deleted, move to the next word
        if (currentIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prevWordIndex) => (prevWordIndex + 1) % textsEl.length);
        }
      } else {
        // Handle typing effect
        setDisplayedText(currentWord.text.substring(0, currentIndex + 1));
        setCurrentIndex((prevIndex) => prevIndex + 1);

        // If fully typed, start deleting
        if (currentIndex === currentWord.text.length) {
          setIsDeleting(true);
        }
      }
    };

    // Set a timer for the typing effect
    const timer = setTimeout(typingTxt, 130);
    return () => clearTimeout(timer); // Clear the timer on cleanup
  }, [currentWordIndex, currentIndex, isDeleting]);

  return (
    <article
      className={`pt-[135px] md:pt-[100px] lg:pt-[80px] 
      w-full relative z-[0] ${bodyPadding}`}
    >
      {/* Background Custom SVG */}
      <div className='block absolute -z-[5] right-0 top-0 md:-top-10 md:-right-10
       lg:-right-36'>
        <CustomSVG
          className={`w-[297px] h-[369px] md:w-[520px] md:h-[520px]`}
          theme={theme}
        />
      </div>
      
      <section className='lg:grid lg:grid-cols-2 lg:gap-14'>
        {/* Text Section */}
        <div className={`lg:pt-6 xl:pt-10`}>
          <h1
            className={`${brandColor} font-OpenSan text-[30px]
            md:text-[40px] lg:text-[30px] ${themeColor}
            font-bold leading-relaxed md:leading-normal`}
          >
            Hello I'm
            <span className={`block ${brandColor}`}>Adeolu Miracle,</span>
            <span className={`${textsEl[currentWordIndex].color}`}>
              {`${displayedText}`} <span className='animate-pulse'>|</span>
            </span>
          </h1>
          <p
            className={`text-xl md:text-[28px] md:w-[470px] 
            pt-6 md:pt-12 w-[315px] font-medium
           ${bodyTxt} md:leading-[1.456] lg:text-[16px] lg:w-[340px] lg:pt-6`}
          >
            I am a frontend developer with a passion for creating intuitive and
            user-friendly web interfaces.
          </p>
        <div className='flex gap-6 items-center py-8 lg:py-4'>
          <NavLink to="works">
            <CustomButton theme={theme} className={`py-2 px-5 w-max `}>
              See my works
            </CustomButton>
          </NavLink>
          <NavLink 
            to='contact' 
            className={`w-max py-2  px-5 border-[1px] rounded-md shadow-lg
            ${theme === 'light' 
              ?`bg-transparent text-darkest shadow-darkest/30 hover:shadow-brand/50
              hover:border-brand
              border-darkest hover:bg-brand hover:text-lightest/95`
              :`bg-transparent text-white border-lightest shadow-lightest/30
                hover:bg-lightest/90 hover:text-black/95
              `}`
            }>
            <button>
              Get in touch
            </button>
          </NavLink>
        </div>
        </div>
        
        {/* Image Section */}
        <div className='-order-1  w-full max-w-[500px] h-auto aspect-auto'>
          <img
            src={logoIllustration}
            width={imageDimensions.width}
            height={imageDimensions.height}
            sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
            loading="lazy"
            alt='illustration'
            className={`pt-8 md:pt-12 lg:pt-0  h-full w-full `}
          />
        </div>
      </section>
    </article>
  );
}
