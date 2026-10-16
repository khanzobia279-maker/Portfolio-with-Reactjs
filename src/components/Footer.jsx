import GitHubIcon from '../assets/images/github.svg.png'
import InstagramIcon from '../assets/images/insta.svg'
import LinkedInIcon from '../assets/images/linkedin.svg'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: LinkedInIcon },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: InstagramIcon },
  { label: 'GitHub', href: 'https://github.com', icon: GitHubIcon },
]

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <>
      <div className="mx-auto h-px max-w-375 bg-white opacity-10" />

      <footer className="bg-[#111827] py-12 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <p className="text-sm text-gray-300">
              Building bold digital experiences for brands and businesses.
            </p>
          </div>

          <div>
            <h2 className="mb-5 font-medium">Services</h2>
            <ul className="flex flex-col gap-2 text-base lg:text-lg">
              <li>Frontend Crafting</li>
              <li>Creative AI Making</li>
              <li>Tech Adventuring</li>
              <li>Web &amp; App Building</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5 font-medium">Availability</h2>
            <ul className="flex flex-col gap-2 text-base lg:text-lg">
              <li>Mon - Fri: 9:00 - 5:00</li>
              <li>24/7 WhatsApp &amp; Email</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5 font-medium">Contact</h2>
            <ul className="flex flex-col gap-2 text-base lg:text-lg">
              <li>
                <a href="mailto:khanzobia279@gmail.com">
                  khanzobia279@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923032727297">+92 3032727297</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="mx-auto h-px max-w-375 bg-white opacity-10" />


      <div className="main-container grid gap-3 py-6 md:grid-cols-2 lg:py-8">
        <div className="text-base lg:text-lg">
          © {currentYear} | All rights reserved
        </div>
        <nav
          aria-label="Social media"
          className="flex justify-center gap-3 md:justify-end"
        >
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="rounded-full p-1 transition-opacity hover:opacity-70"
            >
              <img src={icon} alt="" width="30" height="30" />
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}

export default Footer
