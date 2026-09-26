import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import Explore from './components/Explore'
import ProductVideo from './components/ProductVideo'
import Collaboration from './components/Collaboration'
import BestSeller from './components/BestSeller'
import Services from './components/Services'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <HeroSlider />
        <Explore />
        <ProductVideo />
        <Collaboration />
        <BestSeller />
        <Services />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
