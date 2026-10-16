import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const services = [
  {
    title: <>Frontend Crafting <br />&amp; Development</>,
    description:
      'Blending creative design with precise engineering to build beautiful, responsive interfaces. I craft lightning-fast web experiences focused on seamless interactivity and pixel-perfect execution.',
    className: 'bg-black text-white',
    numberClass: 'text-gray-400',
    descriptionClass: 'text-gray-300',
  },
  {
    title: <>Creative AI Making <br />&amp; Digital Design</>,
    description:
      'Merging artificial intelligence with modern design. I use smart AI tools and custom visual workflows to transform abstract ideas into striking, user-centric digital experiences.',
    className: 'bg-[#E9E9F0] text-black',
    numberClass: 'text-gray-500',
    descriptionClass: 'text-gray-600',
  },
  {
    title: <>Tech Adventuring &amp; Digital <br />Optimization</>,
    description:
      'Exploring the future of tech while perfecting the systems of today. I experiment with cutting-edge digital tools and optimize code architecture to build ultra-fast, high-performing web ecosystems.',
    className: 'bg-slate-200 text-black',
    numberClass: 'text-gray-600',
    descriptionClass: 'text-gray-700',
  },
  {
    title: <>Web &amp; App <br />Building</>,
    description:
      'Engineering powerful, scalable digital products from concept to deployment. I build robust web and mobile applications with clean architecture, smooth functionality, and reliable performance.',
    className: 'bg-white text-black',
    numberClass: 'text-gray-600',
    descriptionClass: 'text-gray-700',
  },
]

const Services = () => {
  const servicesRef = useRef(null)

  useGSAP(() => {
    const cards = gsap.utils.toArray('.service-card', servicesRef.current)

    cards.forEach((card) => {
      gsap.fromTo(
        card.querySelector('.service-content'),
        { y: 36, opacity: 0.35 },
        {
          y: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        },
      )
    })
  }, { scope: servicesRef })

  return (
    <section ref={servicesRef} aria-labelledby="services-heading">
      <header className="bg-white py-8 text-black lg:py-12">
        <div className="main-container">
          <h2 id="services-heading" className="font-heading text-2xl font-bold uppercase">
            Services in Detail
          </h2>
        </div>
      </header>

      <div className="relative">
        {services.map(
          ({ title, description, className, numberClass, descriptionClass }, index) => (
            <article
              key={index}
              className={`service-card sticky top-16 min-h-[60vh] py-16 shadow-xl lg:py-20 ${className}`}
              style={{ zIndex: index + 1 }}
            >
              <div className="service-content main-container grid min-h-[calc(60vh-8rem)] grid-cols-1 items-center gap-6 md:grid-cols-2 lg:gap-12">
                <div className="flex flex-col items-baseline gap-4 md:flex-row lg:gap-8">
                  <span className={`font-heading text-lg tracking-wide lg:text-2xl ${numberClass}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-heading text-[8vw] font-bold uppercase leading-none md:text-6xl">
                    {title}
                  </h3>
                </div>
                <p className={`text-lg leading-relaxed lg:text-xl ${descriptionClass}`}>
                  {description}
                </p>
              </div>
            </article>
          ),
        )}
      </div>
    </section>
  )
}

export default Services
