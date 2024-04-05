import React from 'react'
import { useInView } from 'react-intersection-observer'

export default function Section({children}) {
  const {ref, inView} = useInView({
    threshold: 0.5
  })

  return (
    <section
      ref={ref}
      className={` ${inView ? 'animate-fadeInUp' : 'animate-fadeOut'}`}
    >
      {children}
    </section>
  )
}
