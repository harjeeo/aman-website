import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collection from './components/Collection'
import Explore from './components/Explore'
import ProductVideo from './components/ProductVideo'
import Collaboration from './components/Collaboration'
import Services from './components/Services'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Collection />
        <Explore />
        <ProductVideo />
        <Collaboration />
        <Services />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
