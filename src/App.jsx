import Navbar    from './components/Navbar'
import Hero       from './components/Hero'
import FlavourStrip from './components/FlavourStrip'
import Story      from './components/Story'
import BentoGrid  from './components/BentoGrid'
import Lookbook   from './components/Lookbook'
import Subscribe  from './components/Subscribe'
import Footer     from './components/Footer'
import SmoothScroll from './components/SmoothScroll'

export default function App() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <FlavourStrip />
        <Story />
        <BentoGrid />
        <Lookbook />
        <Subscribe />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
