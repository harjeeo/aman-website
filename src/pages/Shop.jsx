import { useState } from 'react'
import { ShoppingCart01Icon } from 'hugeicons-react'
import { exploreTabs, allProducts } from '../data/products'
import PlaceholderImage from '../components/PlaceholderImage'

const filters = ['All', ...exploreTabs]

function ProductCard({ product }) {
  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
        <PlaceholderImage label={product.name} variant={product.variant} tone="dark" />
        <button
          type="button"
          aria-label={`Add ${product.name} to cart`}
          className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white opacity-0 transition-opacity group-hover:opacity-100"
        >
          <ShoppingCart01Icon size={18} />
        </button>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <h3 className="font-display text-lg text-white">{product.name}</h3>
        <span className="text-sm font-medium text-white/70">{product.price}</span>
      </div>
      <p className="mt-0.5 text-xs uppercase tracking-[0.1em] text-white/50">{product.category}</p>
    </article>
  )
}

export default function Shop() {
  const [active, setActive] = useState('All')

  const products = active === 'All' ? allProducts : allProducts.filter((p) => p.category === active)

  return (
    <>
      <section className="bg-mid py-16 text-center md:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/70">Verde Wear</p>
        <h1 className="font-display mt-3 text-4xl text-white md:text-5xl">Shop All</h1>
        <p className="mx-auto mt-3 max-w-md px-6 text-[15px] leading-relaxed text-white/70">
          Considered essentials in durable, natural fabrics — browse the full collection.
        </p>
      </section>

      <section className="bg-dark py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`rounded-full border-2 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                  active === filter
                    ? 'border-white bg-white text-dark'
                    : 'border-white/30 text-white hover:border-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
