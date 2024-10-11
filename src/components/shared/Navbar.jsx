import { useEffect, useState } from 'react'
import { navItems } from '../lib/db'
import Button from './../common/button'
import Container from './../common/container'
import Logo from './Logo'
import MobileDevice from './MobileDevice'
const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  const handle = () => {
    setOpen(!isOpen)
  }

  useEffect(() => {
    const bodyClass = document.body.classList
    isOpen ? bodyClass.add('no-scroll') : bodyClass.remove('no-scroll')
  }, [isOpen])

  return (
    <>
      <Container className="flex justify-between items-center bg-white rounded-full py-5 px-[30px] ">
        <div>
          <Logo>GoverningDocs</Logo>
        </div>
        <div className="lg:block hidden">
          <ul>
            {navItems.map((item, i) => (
              <li
                key={i}
                className="inline-block px-4 hover:font-semibold transition-all duration-300"
              >
                <a
                  href={item.href}
                  className="font-nunito-sans font-base leading-5 text-secondary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          {/* mobile device showing 3 dots */}
          <button className="lg:hidden px-2" onClick={handle}>
            <div className="h-1 w-6 mt-1 bg-gradient-primary"></div>
            <div className="h-1 w-6 mt-1 bg-gradient-primary"></div>
            <div className="h-1 w-6 mt-1 bg-gradient-primary"></div>
          </button>
          <Button className="lg:text-base text-sm">Get Started Today</Button>
        </div>
        {isOpen && <MobileDevice isOpen={handle} />}
      </Container>
    </>
  )
}

export default Navbar
