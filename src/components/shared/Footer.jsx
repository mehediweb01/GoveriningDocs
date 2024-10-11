import Container from './../common/container'
import { navItems, socialIcons } from './../lib/db/index'
import Logo from './Logo'

const Footer = () => {
  return (
    <>
      <Container className="flex flex-col bg-white rounded-full py-5 px-[30px] ">
        <div className="flex lg:flex-row flex-col justify-between md:items-center items-start lg:gap-0 gap-3 ">
          <Logo>Ai GoverningDocs</Logo>
          <div className='flex lg:flex-row justify-center items-start flex-col'>
            {navItems.map((item, i) => (
              <li
                key={i}
                className="inline-block px-2 hover:font-semibold transition-all duration-300"
              >
                <a
                  href={item.href}
                  className="font-nunito-sans font-base leading-5 text-secondary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </div>
          <div className="flex justify-between items-center space-x-2">
            {socialIcons.map(({ img, url }, i) => (
              <a
                href={url}
                key={i}
                target="_blank"
                className="bg-gradient-secondary rounded-full size-9 flex justify-center items-center"
              >
                <img src={img} alt="" />
              </a>
            ))}
          </div>
        </div>
        <div className="text-center p-5 mt-5 md:mt-[56px] lg:mt-[106px]">
          <p className="sm:text-lg text-sm leading-5 text-[#111111] border-t border-[#E0E0E0] pt-5">
            Ai GoverningDocs 2024. All Rights Reserved.
          </p>
        </div>
      </Container>
    </>
  )
}

export default Footer
