import React,{useState} from 'react'
import ContactForm from '../ContactForm'

export default function Contact(
  {data, bodyTxt, themeColor, theme, inputFields, borderStyle, bodyPadding}) {

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  

    const handleChange = (e) => {
      const {id, value} = e.target
      setFormData({...formData, [id]: value})
    }
  
    
    const clearFormFields = () => {
      const emptyFormData = Object.fromEntries(Object.keys(formData).map(key => [key, '']));
      setFormData(emptyFormData);
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      clearFormFields();
       
    };

  const heroContact = data.footerEl.filter(infoEl => infoEl.type === "info")
  const renderHeroContact = heroContact.map(info => (
    <div 
      key={info.id} 
      className={`${bodyTxt} text-lg font-semibold flex flex-col items-center gap-1 md:gap-0`}
    >
      <info.iconN/>
      <span >{info.name}</span>
    </div>
  ))

  const iconEl = data.footerEl.filter(icon => icon.type === "icon")
  const renderLinksIcon = iconEl.map(iconEl => (
    <a 
      key={iconEl.id} 
      href={iconEl.live}
      target='_blank'
      className={`
      ${theme === "light" 
        ? 'bg-darkest/10 text-darkest hover:bg-darkest/20' 
        : ' bg-lightest/10 text-lightest hover:bg-lightest/20'
      } p-3 md:p-5 rounded-full`}
    >
      <iconEl.icon className={`text-xl md:text-4xl`}/>
    </a>
  ))

  return (
    <section className={`py-[125px] text-center ${bodyPadding}`}>
      <h1 className='text-[30px] md:text-[40px] font-bold text-brand'>Contact us</h1>
      <p className={`${bodyTxt} md:text-2xl leading-snug font-medium w-[230px] md:w-[400px] pt-4 m-auto`}>
        Any question or remarks? Just write us a message!
      </p>

      <div className={`p-[10px] md:p-[12px] rounded-[7px] mt-10 
        ${theme === 'light' ? 'bg-light' : 'bg-dark'}`}
      >
        <div className={`overflow-hidden p-6 rounded-[5px]
          ${theme === 'light' ? 'bg-lightest' : 'bg-darkest'}`}
        >
          <h2 className={`text-xl md:text-3xl font-bold pb-2 md:pb-3 ${themeColor}`}>Contact information</h2>
          <p className={`${bodyTxt} md:text-2xl font-medium`}>Say something to start a live chat!</p>
          <div>
          <div className='flex flex-col items-center justify-center gap-8 py-12 '>
            {renderHeroContact}
          </div>
          <div className='flex items-center justify-center pt-4 gap-8'>
            {renderLinksIcon}
          </div>
          </div>
        </div>
        <ContactForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          theme={theme}
          borderStyle={borderStyle}
          inputFields={inputFields}
          className={`pt-8 pb-6 px-[14px] md:px-[6px] ${theme === 'light' ? 'bg-transparent' :'bg-dark/5'}`}
          showTitle={false}
        />
      </div>
    </section>
  )
}
