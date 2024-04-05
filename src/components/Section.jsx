import React from 'react'
import { useInView } from 'react-intersection-observer'

export default function Section({children}) {
  const {ref, inView} = useInView({
    threshold: 0.1
  })

  return (
    <section
      ref={ref}
      className={` ${inView ? 'animate-fadeInUp backdrop-blur-[12px]' : 'opacity-100 backdrop-blur-none'}`}
    >
      {children}
    </section>
  )
}
