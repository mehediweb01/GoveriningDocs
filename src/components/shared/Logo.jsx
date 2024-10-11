const Logo = ({ children }) => {
  return (
    <div>
      <h1 className="font-space-grotesk lg:font-bold font-semibold lg:text-[40px] md:text-3xl text-base lg:leading-[51px] md:leading-10 leading-6 text-black">
        {children}
      </h1>
    </div>
  )
}

export default Logo
