import { 
      RiContactsBook2Line, RiHome3Line, 
      RiHome2Fill, RiUser6Line, RiUser6Fill,
      RiContactsBook2Fill } from "react-icons/ri";
import { IoBriefcase, IoBriefcaseOutline } from "react-icons/io5";
    
const data = {
      headerEl: [],
      footerEl: [
            
            {
                  name: 'Home',
                  icon: RiHome3Line,
                  isTrue: false,
                  isFocusedIcon: RiHome2Fill,
                  alt: "home-icon",
                  id: 3   
            },
            {
                  name: 'Work',
                  icon: IoBriefcaseOutline,
                  isTrue: false,
                  isFocusedIcon: IoBriefcase,
                  alt: "work-icon",
                  id: 4
            },
            {
                  name: 'About',
                  icon: RiUser6Line,
                  isTrue: false,
                  isFocusedIcon: RiUser6Fill,
                  alt: "about-icon",
                  id: 1
            },
            {
                  name: 'Contact',
                  icon: RiContactsBook2Line,
                  isTrue: false,
                  isFocusedIcon: RiContactsBook2Fill,
                  alt: "contact-icon",
                  id: 2    
            },
            
            
      ],
};

export default data;
    