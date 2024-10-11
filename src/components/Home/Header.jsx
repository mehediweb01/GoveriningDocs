import SectionTitle from '../common/SectionTitle'
import Button from '../common/button'
import Container from './../common/container'

const Headers = () => {
  return (
    <div>
      <Container className="lg:p-20 p-6">
        <div className="flex lg:flex-row flex-col-reverse justify-center items-center">
          <div className="space-y-3 w-full lg:max-w-[733px]">
            <SectionTitle className="lg:max-w-[593px] mt-5 capitalize">
              Simplify your real estate document analysis
            </SectionTitle>
            <p className="font-nunito-sans font-medium lg:font-semibold text-base lg:text-xl lg:leading-7 leading-5 text-secondary lg:max-w-[519px]">
              Streamline, Automate, and Secure Your Business Documents with Ai
              GoverningDocs
            </p>
            <Button>Get Started Today</Button>
          </div>
          <div>
            <img src="/Img/Header-Image.png" alt="header image" />
          </div>
        </div>
      </Container>
      <img
        src="Img/Vector 1.png"
        alt=""
        className="absolute -top-[180px] left-0 overflow-hidden z-[-1] lg:block hidden"
      />
      <img
        src="Img/Vector 2.png"
        alt=""
        className="absolute top-[170px] left-0 overflow-hidden z-[-1] rotate-45 lg:block hidden"
      />
    </div>
  )
}

export default Headers
