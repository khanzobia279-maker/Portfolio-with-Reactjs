import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {
  const aboutRef = useRef(null)

  useGSAP(() => {
    SplitText.create('.about-text', {
      type: 'lines, chars',
      onSplit(self) {
        gsap.set(self.chars, { opacity: 0.25 })
        return gsap.to(self.chars, {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 70%',
            end: 'center center',
            scrub: 1,
          },
        })
      },
    })
  }, { scope: aboutRef })

  return (
    <>
      <div ref={aboutRef} className='relative z-10 h-screen rounded-tl-[60px] rounded-tr-[60px] bg-white'>
        <div className='about-text main-container py-4 lg:py-12 h-full flex justify-center items-center font-heading text-black text-2xl md:text-3xl xl:text-5xl leading-tight'>
          As a modern frontend developer and tech innovator, I bridge the gap 
          between complex engineering and exceptional user experience. I build 
          high-performance, scalable web applications using cutting-edge 
          architectures, ensuring every digital product is technically optimized, 
          visually striking, and built for the future of the web.
        </div>
      </div>
    </>
  )
}

export default About;
