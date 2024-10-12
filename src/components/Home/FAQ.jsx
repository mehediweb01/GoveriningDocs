import { useState } from 'react'
import SectionTitle from '../common/SectionTitle'
import Container from '../common/container'
import { faqData } from '../lib/db'
import FaqCard from './FaqCard'

const Faq = () => {
  const [Active, setActive] = useState(1)
  const handleChange = index => {
    Active === index ? setActive(-1) : setActive(index)
  }
  return (
    <section className="relative">
      <Container className="mb-10 mt-20">
        <SectionTitle className="text-center" gradient="Asked Questions">
          Frequently
        </SectionTitle>
        <div>
          {faqData.map((qa, i) => (
            <FaqCard
              key={i}
              onClick={() => handleChange(i)}
              isActive={Active === i}
              {...qa}
            />
          ))}
        </div>
      </Container>
      <img
        src="/Img/Vector 2.png"
        alt="vector"
        className="absolute md:block hidden -top-[100px] left-0 z-[-999999999]"
      />
    </section>
  )
}

export default Faq
