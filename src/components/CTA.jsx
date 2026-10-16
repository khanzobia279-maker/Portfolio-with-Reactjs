import { useRef } from 'react'
import GradientButton from '../components/GradientButton'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const CTA = () => {
    const ctaRef = useRef(null)

    useGSAP(() => {
      gsap.from(ctaRef.current, {
        backgroundColor: '#fff',
        color: '#000',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'center bottom',
          end: '60% bottom',
          scrub: 1,
        },
      })
    }, { scope: ctaRef })

    return (
      <section id="contact" ref={ctaRef}>
        <div className="main-container flex h-full flex-col items-center justify-center gap-8 py-20 lg:py-28">
          <h2 className="max-w-6xl text-center text-2xl leading-tight lg:text-5xl">
            Freelance projects, collaborations and full-time opportunities. Let&apos;s get acquainted
          </h2>
          <GradientButton
            text="Book a Call"
            link="mailto:khanzobia279@gmail.com"
          />
        </div>
      </section>
    )
}

export default CTA
