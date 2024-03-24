import React from 'react'

export default function SelectedWork({data, themeColor}) {

  const SelectedWorkEl = data.workEl.slice(0, 3)
  const renderSelectedWork = SelectedWorkEl.map(item => (
    <div key={item.id} className='py-3'>
      <div>
        <img src={item.image} alt="" />
      </div>
      <div className={`flex items-center py-3 px-5 text-2xl
       bg-white/10 backdrop-blur-[100px] font-medium ${themeColor}`}
      >
        <a 
          href={item.live} 
          target='_blank'
        >
          {item.name}
        </a>
        <a 
          href={item.gitRepository} 
          target='_blank'
          className='ml-auto text-brand'
        >
          {item.gitIcon({size: 35})}
        </a>
      </div>
    </div>
  ))

  return (
    <section className='pb-[130px]'>
      <h2 className={`${themeColor} py-10 font-Solway text-3xl font-bold text-center`}>
        Work
      </h2>
      {renderSelectedWork}
    </section>
  )
}
