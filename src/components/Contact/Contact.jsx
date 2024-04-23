import React,{useState} from 'react'
import ContactForm from '../ContactForm'

export default function Contact(
  {data, bodyTxt, themeColor, theme, inputFields, borderStyle}) {

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
      className={`${bodyTxt} text-lg font-semibold flex flex-col items-center gap-2`}
    >
      <span className=''>{info.iconN({size: 20})}</span>
      <span >{info.name}</span>
    </div>
  ))

  const iconEl = data.footerEl.filter(icon => icon.type === "icon")
  const renderLinksIcon = iconEl.map(iconEl => (
    <div 
      key={iconEl.id} 
      className={`
      ${theme === "light" ? 'bg-darkest/10 text-darkest' : ' bg-lightest/10 text-lightest '}
        p-3 rounded-full`}
    >
      <a href={iconEl.live} target='_blank'>{iconEl.icon({size: 25})}</a>
    </div>
  ))

  return (
    <section className='py-[145px] text-center px-4'>
      
      <h1 className='text-[30px] font-bold text-brand'>Contact us</h1>
      <p className={`${bodyTxt} font-medium w-[230px] pt-4 m-auto`}>
        Any question or remarks? Just write us a message!
      </p>

      <div className={`p-[6px] rounded-[7px] mt-10 
        ${theme === 'light' ? 'bg-light' : 'bg-dark'}`}
      >
        <div className={`overflow-hidden p-6 rounded-[5px] 
          ${theme === 'light' ? 'bg-lightest' : 'bg-darkest'}`}
        >
          <h2 className={`text-xl font-bold pb-2 ${themeColor}`}>Contact information</h2>
          <p className={`${bodyTxt} font-medium`}>Say something to start a live chat!</p>
          <div>
          <div className='flex flex-col items-center justify-center gap-8 py-12 '>
            {renderHeroContact}
          </div>
          <div className='flex items-center justify-center pt-6 gap-8'>
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
          className={`pt-8 pb-6 px-[14px] ${theme === 'light' ? 'bg-transparent' :'bg-dark/5'}`}
          showTitle={false}
          btnStyle={`bg-darkest border-darkest shadow-darkest/40 hover:text-lightest`}
        />
      </div>
    </section>
  )
}
