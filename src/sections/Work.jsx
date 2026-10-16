import { useRef } from 'react'
import GradientButton from '../components/GradientButton'
import projects from '../components/ProjectsData'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Work = () => {
  const workRef = useRef(null)
  const projectRef = useRef(null)

  useGSAP(() => {
    const projectTrack = projectRef.current
    const scrollDistance = projectTrack.scrollWidth - window.innerWidth
    if (scrollDistance <= 0) return

    gsap.to(projectTrack, {
      x: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: workRef.current,
        start: 'center center',
        end: () => `+=${scrollDistance}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })
  }, { scope: workRef })

  return (
    <>
      <section ref={workRef} className='bg-white py-24 text-black lg:py-40'>
        {/* title wrapper */}
        <div className="main-container pb-8 lg:pb-12 flex max-md:flex-col gap-6 justify-between items-start md:items-end">
          <div className="max-w-xl">
            <h3 className='mb-3'>Selected Work</h3>
            <p className='text-lg lg:text-xl'>A showcase of my selected projects-designed to inspire, engage, and deliver real results.</p>
          </div>
          <GradientButton text="View Projects" link="#projects" className="btn-light" />
        </div>

{/* project wrapper */}
        <div ref={projectRef} className="main-container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {projects.map(({ id, name, image, link }) => (
            <a key={id} href={link} className='group relative block h-64 w-full min-w-0 overflow-hidden rounded-2xl lg:h-96'>
              <img src={image} alt="" className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105' />
              <span className='absolute right-4 top-4 rounded-full bg-black px-5 py-1 font-heading uppercase leading-[1.4] text-white'>{name}</span>
            </a>

          ))}
        </div>
      </section>
    </>
  )
}

export default Work
