import React from 'react'




export default function Footer({footerItems, handleIconClick}) {

  const footerData = footerItems.map(item => (
    <div 
      key={item.id} 
      onClick={() => handleIconClick(item.id)}
      className='flex flex-col items-center font-Solway'
    >
      <div className={`${item.isTrue ? 'text-brand' : 'text-primary'}  transition-all `}>
        {item.isTrue ? item.isFocusedIcon({ size: 35 }) : item.icon({ size: 35 })}
      </div>
      <span className='text-base font-semibold'>{item.name}</span>
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
