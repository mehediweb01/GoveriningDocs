import SectionTitle from '../common/SectionTitle'
import { Arrow } from '../Icons'

const ProblemSolutionHeader = () => {
  return (
    <div>
      <div className="flex justify-between">
        <SectionTitle gradient="Solution">Problem &</SectionTitle>
        <div className="flex justify-center items-center gap-6">
          <button className="bg-white size-8 lg:size-10 rounded-full text-primary flex justify-center items-center shadow-lg rotate-180">
            <Arrow />
          </button>
          <button className="bg-gradient-primary size-8 lg:size-10 rounded-full flex justify-center items-center shadow-custom text-white">
            <Arrow />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProblemSolutionHeader
