import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GradientButton from '../components/GradientButton'
import star from '../assets/images/star-Vector.svg'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Hero = () => {
  const heroRef = useRef(null)

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      })

      gsap.from('.hero-title, .hero-subtitle', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      })
      gsap.from('.gradient-btn', {
        opacity: 0,
        y: 24,
        duration: 0.5,
        delay: 0.6,
        ease: 'power2.out',
      })
      gsap.fromTo(
        '.hero-star',
        {
          scale: 0,
          rotate: 180,
          opacity: 0,
          transformOrigin: 'center center',
        },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 1.3,
          ease: 'back.out(1.7)',
          onComplete: () => {
            gsap.to('.hero-star', {
              rotate: '+=360',
              duration: 20,
              ease: 'none',
              repeat: -1,
            })
          },
        },
      )
    },
    { scope: heroRef },
  )

  return (
    <section ref={heroRef} className="relative overflow-hidden">
      <div className="main-container flex h-screen flex-col items-start max-lg:pt-40 lg:justify-center lg:py-12">
        <h1 className="hero-title text-3xl font-heading font-semibold uppercase lg:text-[3.2vw]">
          John Doe
        </h1>
        <h2 className="hero-subtitle mt-3 mb-6 text-6xl font-heading font-bold leading-none tracking-tight lg:text-[8vw]">
          Web Developer <br />&amp;{' '}
          <span className="text-stroke">Designer</span>
        </h2>
        <GradientButton
          text="Let's Talk"
          link="mailto:johndoe@gmail.com"
          className="gradient-btn"
        />
      </div>
      <img
        className="hero-star absolute top-80 right-[-35%] z-1 h-[48vh] w-auto lg:top-32 lg:right-[-12%] lg:h-[80vh]"
        src={star}
        alt=""
        aria-hidden="true"
      />
    </section>
  )
}

export default Hero
