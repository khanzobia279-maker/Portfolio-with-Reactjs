import CTA from '../components/CTA'
import About from '../sections/About'
import Hero from '../sections/Hero'
import Marquee from '../sections/Marquee'
import Services from '../sections/Services'
import Work from '../sections/Work'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <Marquee />
      <CTA />
    </>
  )
}

export default Home
