import { 
      RiContactsBook2Line, RiHome3Line, RiTwitterXFill, RiFacebookFill,
      RiHome3Fill, RiUser6Line, RiUser6Fill,  
      RiContactsBook2Fill, RiGithubFill } from "react-icons/ri"
import { IoBriefcase, IoBriefcaseOutline, 
      IoLogoLinkedin, IoLocationOutline} from "react-icons/io5"
import {FaRegEnvelope} from "react-icons/fa"
import { MdOutlineLocalPhone } from "react-icons/md"
import landingPageImg from "./asset/img/landing-page.png"
import shortlyUrl from "./asset/img/shortly.png"
import productPageImg from "./asset/img/product-page.png"
import ageCalculatorImg from "./asset/img/age-calculator.png"
import calculator from "./asset/img/calcu.png"
import commentSection from "./asset/img/comment.png"
import jobLister from "./asset/img/job-list.png"
import todo from "./asset/img/todo-main.png"

const generateUniqueId = (() => {
      const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min)
      return () => {
        const timestamp = new Date().getTime() // Get current timestamp in milliseconds
        const randomNum = getRandomNumber(1000, 9999) // Generate a 4-digit random number
        return `${timestamp}-${randomNum}`
      }
})()
    
  
const data = {
      workEl: [
            {
                  id: generateUniqueId(),
                  isShow: false,
                  description: `Being a learner in the field of front-end development motivates me to stay abreast of the trends. I enjoy exploring tools and methods that enable me to create interfaces that engage users effectively. With a rooted passion for innovation and a commitment`,
                  name: 'Manage-landing-page',
                  liveApp: 'https://velvety-brioche-957d1f.netlify.app/',
                  image: landingPageImg,
                  gitRepository: 'https://github.com/OGBENI-NG/manage-landing-page-master',
                  alt: 'landing-page-img',
                  type: 'recent'
            },
            {
                  id: generateUniqueId(),
                  isShow: false,
                  description: `Being a learner in the field of front-end development motivates me to stay abreast of the trends. I enjoy exploring tools and methods that enable me to create interfaces that engage users effectively. With a rooted passion for innovation and a commitment`,
                  name: 'Shortly-URL',
                  liveApp: 'https://moonlit-twilight-1225c8.netlify.app/',
                  image: shortlyUrl, 
                  gitRepository: 'https://github.com/OGBENI-NG/url-shortening-api-master',
                  alt: 'shortly-url-img',
                  type: 'recent'
            },
            {
                  id: generateUniqueId(),
                  isShow: false,
                  description: `Being a learner in the field of front-end development motivates me to stay abreast of the trends. I enjoy exploring tools and methods that enable me to create interfaces that engage users effectively. With a rooted passion for innovation and a commitment`,
                  name: 'Product page',
                  type: "web",
                  image: productPageImg,
                  liveApp: 'https://ornate-biscuit-723ae1.netlify.app/',
                  gitRepository: 'https://github.com/OGBENI-NG/e-commerce-product-page',
                  alt: 'product-page-img'
            },
            {
                  id: generateUniqueId(),
                  isShow: false,
                  description: `Being a learner in the field of front-end development motivates me to stay abreast of the trends. I enjoy exploring tools and methods that enable me to create interfaces that engage users effectively. With a rooted passion for innovation and a commitment`,
                  name: 'Age calculator',
                  type: "web",
                  image: ageCalculatorImg,
                  liveApp: 'https://age-calculator-by-ade.netlify.app/',
                  gitRepository: 'https://github.com/OGBENI-NG/age-calculator-app-main',
                  alt: 'age-calculator-img'
            },
            {
                  id: generateUniqueId(),
                  isShow: false,
                  description: `Being a learner in the field of front-end development motivates me to stay abreast of the trends. I enjoy exploring tools and methods that enable me to create interfaces that engage users effectively. With a rooted passion for innovation and a commitment`,
                  name: 'Dyn calculator',
                  type: "web",
                  image: calculator,
                  liveApp: 'https://age-calculator-by-ade.netlify.app/',
                  gitRepository: 'https://github.com/OGBENI-NG/age-calculator-app-main',
                  alt: 'dyn-calculator-img'
            },
            {
                  id: generateUniqueId(),
                  isShow: false,
                  description: `Being a learner in the field of front-end development motivates me to stay abreast of the trends. I enjoy exploring tools and methods that enable me to create interfaces that engage users effectively. With a rooted passion for innovation and a commitment`,
                  name: 'Job listing',
                  type: "recent",
                  image: jobLister,
                  liveApp: ' https://rad-panda-9b4e17.netlify.app/',
                  gitRepository: 'https://github.com/OGBENI-NG/job-listings',
                  alt: 'job-listings-img',
            },
            {
                  id: generateUniqueId(),
                  isShow: false,
                  description: `Being a learner in the field of front-end development motivates me to stay abreast of the trends. I enjoy exploring tools and methods that enable me to create interfaces that engage users effectively. With a rooted passion for innovation and a commitment`,
                  name: 'Todo main',
                  type: "web",
                  image: todo,
                  liveApp: 'https://jade-genie-7c9245.netlify.app/',
                  gitRepository: 'https://github.com/OGBENI-NG/todo-app-main',
                  alt: 'todo-img'
            },
            {
                  id: generateUniqueId(),
                  isShow: false,
                  description: `Being a learner in the field of front-end development motivates me to stay abreast of the trends. I enjoy exploring tools and methods that enable me to create interfaces that engage users effectively. With a rooted passion for innovation and a commitment`,
                  name: 'Interactive comment section',
                  type: "web",
                  image: commentSection,
                  liveApp: 'https://comments-section-adeolu.netlify.app/',
                  gitRepository: 'https://github.com/OGBENI-NG/interactive-comments-section-main',
                  alt: 'comments-section-img'
            },

      ],
      navBarEl: [
            
            {
                  name: 'Home',
                  icon: RiHome3Line,
                  isTrue: false,
                  isFocusedIcon: RiHome3Fill,
                  alt: "home-icon",
                  id: generateUniqueId()   
            },
            {
                  name: 'Works',
                  icon: IoBriefcaseOutline,
                  isTrue: false,
                  isFocusedIcon: IoBriefcase,
                  alt: "work-icon",
                  id: generateUniqueId()
            },
            {
                  name: 'About',
                  icon: RiUser6Line,
                  isTrue: false,
                  isFocusedIcon: RiUser6Fill,
                  alt: "about-icon",
                  id: generateUniqueId()
            },
            {
                  name: 'Contact',
                  icon: RiContactsBook2Line,
                  isTrue: false,
                  isFocusedIcon: RiContactsBook2Fill,
                  alt: "contact-icon",
                  id: generateUniqueId()    
            },
            
            
      ],
      footerEl: [
            {
                  name: 'Lagos, NG',
                  type: 'info',
                  id: generateUniqueId(),
                  iconN: IoLocationOutline
            },
            {
                  name: '+2348146432387',
                  type: 'info',
                  id: generateUniqueId(),
                  iconN: MdOutlineLocalPhone

            },
            {
                  name: 'adeolumiracle@yahoo.com',
                  type: 'info',
                  id: generateUniqueId(),
                  iconN: FaRegEnvelope
            },
            {
                  icon: RiTwitterXFill,
                  type: 'icon',
                  id: generateUniqueId(),
                  live: 'x.com/miracleadeolu'
            },
            {
                  icon: IoLogoLinkedin,
                  type: 'icon',
                  id: generateUniqueId(),
                  live: 'https://www.linkedin.com/in/adeolu-miracle-998047259/'
            },
            {
                  icon: RiGithubFill,
                  type: 'icon',
                  id: generateUniqueId(),
                  live: 'https://github.com/OGBENI-NG'
            },
            {
                  icon: RiFacebookFill,
                  type: 'icon',
                  id: generateUniqueId(),
                  live: 'https://www.facebook.com/profile.php?id=100090510967232&mibextid=AEUHqQ'
            },
      ]
}

export default data
    