import Headers from './components/Home/Header'
import ProblemSolutions from './components/Home/ProblemSolution'
import Reviews from './components/Home/Reviews';
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Headers />
      <ProblemSolutions />
      <Reviews />
      <Footer />
    </>
  )
}

export default App
