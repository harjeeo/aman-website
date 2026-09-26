import { useEffect, useRef, useState } from 'react'
import { ArrowLeft01Icon, ArrowRight01Icon } from 'hugeicons-react'
import { sliderProducts } from '../data/products'
import PlaceholderImage from './PlaceholderImage'

export default function HeroSlider() {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)

  const scrollToIndex = (next) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[next]
    if (card) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' })
    }
    setIndex(next)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % sliderProducts.length
        scrollToIndex(next)
        return next
      })
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-14 pb-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-honey-dark">New Season</p>
            <h1 className="font-display mt-3 text-4xl leading-[1.1] text-charcoal md:text-6xl">
              Handcrafted pieces, made to be worn every day.
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-stone">
              Small-batch jewelry shaped by hand in our atelier — warm metals, honest materials, quiet detail.
            </p>
            <a
              href="#explore"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-charcoal px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-honey-dark"
            >
              Shop the Collection
            </a>
          </div>

          <div className="flex items-center gap-3 self-end">
            <button
              type="button"
              aria-label="Previous product"
              onClick={() => scrollToIndex((index - 1 + sliderProducts.length) % sliderProducts.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-colors hover:border-honey hover:text-honey"
            >
              <ArrowLeft01Icon size={18} />
            </button>
            <button
              type="button"
              aria-label="Next product"
              onClick={() => scrollToIndex((index + 1) % sliderProducts.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-colors hover:border-honey hover:text-honey"
            >
              <ArrowRight01Icon size={18} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth"
        >
          {sliderProducts.map((product) => (
            <article
              key={product.id}
              className="group w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[24%]"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl transition-transform duration-700 group-hover:scale-105">
                <PlaceholderImage label={product.name} />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <h3 className="font-display text-lg text-charcoal">{product.name}</h3>
                <span className="text-sm font-medium text-honey-dark">{product.price}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {sliderProducts.map((product, i) => (
            <button
              key={product.id}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-6 bg-honey' : 'w-1.5 bg-charcoal/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
