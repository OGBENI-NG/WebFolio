import React from 'react'
import { useInView } from 'react-intersection-observer'

export default function Section({children}) {
  const {ref, inView} = useInView({
    threshold: 0.4
  })

  return (
    <section
      ref={ref}
      className={` ${inView ? 'animate-fadeInUp' : 'opacity-100'}`}
    >
      {children}
    </section>
  )
}
