import { 
      RiContactsBook2Line, RiHome3Line, RiTwitterXFill, RiFacebookFill,
      RiHome3Fill, RiUser6Line, RiUser6Fill,  
      RiContactsBook2Fill, RiGithubFill, RiDiscordFill } from "react-icons/ri"
import { IoBriefcase, IoBriefcaseOutline, 
      IoLogoLinkedin, IoLocationOutline} from "react-icons/io5"
import {FaRegEnvelope} from "react-icons/fa"
import { MdOutlineLocalPhone } from "react-icons/md"
import beth from "./asset/img/beth.png"
import adam from "./asset/img/adam.png"
import andrew from "./asset/img/andrew.png"

const generateUniqueId = (() => {
      const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min)
      return () => {
        const timestamp = new Date().getTime() // Get current timestamp in milliseconds
        const randomNum = getRandomNumber(1000, 9999) // Generate a 4-digit random number
        return `${timestamp}-${randomNum}`
      }
})()
    
  
const data = {
      
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
      testimonials:[
            {
                  id: generateUniqueId(), 
                  name: 'Andrew Jones', 
                  position: 'Product Developer',
                  img: andrew,
                  review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eveniet minima placeat velit voluptas ipsa in voluptate sed enim.`
            },
            {
                  id: generateUniqueId(), 
                  name: 'Adam Smith', 
                  position: 'Web Designer',
                  img: adam,
                  review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eveniet minima placeat velit voluptas ipsa in voluptate sed enim.`
            },
            {
                  id: generateUniqueId(), 
                  name: 'Lauren White', 
                  position: 'Product Manager',
                  img: beth,
                  review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eveniet minima placeat velit voluptas ipsa in voluptate sed enim.`
            },
      ],
      contactLinkEl: [
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
                  live: 'https://x.com/miracleadeolu'
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
            {
                  icon: RiDiscordFill,
                  type: 'icon',
                  id: generateUniqueId(),
                  live: 'https://discord.com/users/994248077194039366'
            },
      ]
}

export default data
    