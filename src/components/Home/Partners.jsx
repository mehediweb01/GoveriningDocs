import SectionTitle from '../common/SectionTitle'
import Container from '../common/container'
import { OurPartners } from '../lib/db'

const Partners = () => {
  return (
    <section className="mx-10 mt-20 mb-8">
      <Container className="bg-[#E6F9FD] max-w-[1276px] px-3 py-[50px] rounded-20">
        <SectionTitle gradient="Partners" className="text-center">
          Our
        </SectionTitle>
        <div className="flex flex-wrap justify-center items-center gap-x-[30px] gap-y-7 pt-10">
          {OurPartners.map(({ img, alt }, i) => (
            <div
              key={i}
              className="border border-[#D6D6D6] px-3 py-2 h-[101px] flex flex-wrap justify-center bg-white rounded-[12px] w-[274px] "
            >
              <img src={img} alt={alt} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Partners
