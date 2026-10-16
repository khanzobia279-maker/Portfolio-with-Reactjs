import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link, useLocation } from 'react-router-dom'

gsap.registerPlugin(useGSAP)

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const navbarRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  const goHome = () => {
    setMenuOpen(false)
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  useGSAP(() => {
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -40,
      duration: 0.6,
      ease: 'power2.out',
    })
  }, { scope: navbarRef })

  return (
    <>
    <nav
      ref={navbarRef}
      className="fixed top-0 z-30 w-full mix-blend-difference"
    >
      <div className="main-container flex items-center justify-between py-6">
        <Link
          to="/"
          onClick={goHome}
          aria-label="Zobia Khan home"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white text-lg font-bold tracking-tight text-black transition-transform hover:scale-105"
        >
          ZK
        </Link>
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="flex cursor-pointer flex-col gap-1.5"
        >
          <span className={`inline-block h-0.5 w-10 origin-center bg-white transition-all duration-300 lg:w-12 ${menuOpen ? 'translate-y-1 rotate-45' : ''}`} />
          <span className={`inline-block h-0.5 w-10 origin-center bg-white transition-all duration-300 lg:w-12 ${menuOpen ? '-translate-y-1 -rotate-45' : ''}`} />
        </button>
      </div>
    </nav>
    {/* full screen menu */}
<div className={`fixed inset-0 z-20 flex flex-col items-center justify-center gap-8 bg-black text-white transition-transform duration-500 ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}>
  <Link to="/" onClick={goHome} className='menu-link'>Home</Link>
  <Link to="/projects" onClick={() => setMenuOpen(false)} className='menu-link'>Projects</Link>
  <Link to="/#contact" onClick={() => setMenuOpen(false)} className='menu-link'>Contact</Link>

</div>

</>
  )
}

export default Navbar
