import React from 'react'
import data from '../data'



export default function Footer() {

  const footerData = data.footerEl.map(item => (
    <div key={item.id} className='flex flex-col items-center'>
      <div className='text-primary'>{item.icon({ size: 35})}</div>
      <span>{item.name}</span>
    </div>
  ))
  
  return (
    <footer className='flex items-center justify-between py-2
        px-5 fixed bottom-0 right-0 left-0 bg-white text-primary
        backdrop-blur-[100px] border-t-[1.5px] border-borderColor

      '
      >
        {footerData}
    </footer>
  )
}
