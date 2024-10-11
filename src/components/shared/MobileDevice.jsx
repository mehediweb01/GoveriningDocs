import { navItems } from './../lib/db/index'
import Logo from './Logo'
const MobileDevice = ({ isOpen }) => {
  return (
    <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-white overflow-y-auto p-6 z-50">
      <div className="flex justify-between items-center">
        <Logo>Governing Docs</Logo>
        <button
          className="bg-gradient-primary text-white rounded-md px-2 py-0 font-bold text-base font-space-grotesk"
          onClick={isOpen}
        >
          &times;
        </button>
      </div>
      <div className="flex flex-col space-y-4 mt-4">
        {navItems.map((item, i) => (
          <li key={i} className="inline-block px-4">
            <a
              href={item.href}
              className="font-nunito-sans font-base leading-5 text-secondary"
            >
              {item.label}
            </a>
          </li>
        ))}
      </div>
    </div>
  )
}

export default MobileDevice
