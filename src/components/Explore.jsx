import { useState } from 'react'
import { exploreTabs, exploreProducts } from '../data/products'
import { useReveal } from '../hooks/useReveal'
import PlaceholderImage from './PlaceholderImage'

function ProductCard({ product, delay }) {
  const [ref, visible] = useReveal(0.15)
  return (
    <article
      ref={ref}
      className={visible ? 'reveal-up' : 'opacity-0'}
      style={{ animationDelay: visible ? `${delay}ms` : undefined }}
    >
      <div className="aspect-[3/4] overflow-hidden rounded-2xl">
        <PlaceholderImage label={product.name} variant={product.variant} tone="mint" />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <h3 className="font-display text-lg text-charcoal">{product.name}</h3>
        <span className="text-sm font-medium text-brand-dark">{product.price}</span>
      </div>
    </article>
  )
}

export default function Explore() {
  const [active, setActive] = useState(exploreTabs[0])

  return (
    <section id="explore" className="bg-cream-dark py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-dark">Explore</p>
          <h2 className="font-display mt-2 text-3xl text-charcoal md:text-4xl">Find your everyday fit</h2>
        </div>

        <div className="mt-8 flex items-center justify-center gap-8 border-b border-charcoal/10">
          {exploreTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              className={`relative pb-4 text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
                active === tab ? 'text-charcoal' : 'text-stone hover:text-charcoal'
              }`}
            >
              {tab}
              {active === tab && (
                <span className="absolute inset-x-0 -bottom-px h-[2px] bg-brand" />
              )}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {exploreProducts[active].map((product, i) => (
            <ProductCard key={product.id} product={product} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}
