import { ProblemSolution } from '../lib/db'
import Container from './../common/container'
import ProblemSolutionCard from './ProblemSolutionCard'
import ProblemSolutionHeader from './ProblemSolutionHeader'

const ProblemSolutions = () => {
  return (
    <Container className="max-w-[1182px] p-6 mt-10">
      <ProblemSolutionHeader />
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-2">
        {ProblemSolution.map((props, i) => (
          <ProblemSolutionCard key={i} {...props} />
        ))}
      </div>
    </Container>
  )
}

export default ProblemSolutions
