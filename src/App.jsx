import Faq from './components/Home/FAQ';
import Headers from './components/Home/Header'
import Partners from './components/Home/Partners'
import ProblemSolutions from './components/Home/ProblemSolution'
import Reviews from './components/Home/Reviews'
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Headers />
      <ProblemSolutions />
      <Reviews />
      <Partners />
      <Faq />
      <Footer />
    </>
  )
}

export default App
