import './Home.css'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import Companies from '../../Components/Companies/Companies'
import Residencies from '../../Components/Residencies/Residencies'
import Value from '../../Components/Value/Value'
import Contact from '../../Components/Contact/Contact'
import GetStarted from '../../Components/GetStarted/GetStarted'
import Footer from '../../Components/Footer/Footer'
import { useRef } from 'react'

function Home() {

  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)

  const handleScroll = (ref) =>{
    ref.current.scrollIntoView({ behavior: 'smooth'})
  }

  return (
    <div className="home">
      <div>
        <div className="white-gradient" />
            <Header handleScroll={handleScroll} ref2={ref2} ref1={ref1} ref3={ref3}/>
            <Hero />
      </div>
      
      <section>
        <Companies />
      </section>

      <section>
        <Residencies />
      </section>

      <section ref={ref1}>
        <Value />
      </section>

      <section ref={ref2}>
        <Contact />
      </section>

      <section ref={ref3}>
        <GetStarted />
      </section>

      <section>
        <Footer />
      </section>

    </div>
  )
}

export default Home