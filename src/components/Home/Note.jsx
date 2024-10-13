
import Button from '../common/button';
import Container from './../common/container';

const Note = () => {
  return (
    <section className='my-[66px]'>
      <Container className="flex lg:flex-row flex-col justify-around items-center bg-gradient-primary max-w-[1184px] rounded-20 lg:h-[314px] md:p-6 p-3 gap-6">
        <div className="max-w-[566px] space-y-5">
          <h1 className="font-space-grotesk font-bold lg:text-[46px] text-4xl leading-10 lg:leading-[64px] text-white">
            Ready to Simplify Your Document Management?
          </h1>

          <p
            className="font-nunito-sans md:font-bold font-semibold  text-base leading-[16px] lg:leading-[22px] text-white 
        tracking-[1px]"
          >
            Sign up today and experience the power of AI-driven legal
            documentation.
          </p>
        </div>
        <div>
          <Button className="bg-white text-secondary font-nunito-sans font-bold text-base leading-5 hover:bg-primary hover:text-white hover:shadow-lg hover:outline-lime-400 hover:outline transition-all duration-300 hover:font-space-grotesk">
            Get Started Now
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default Note
