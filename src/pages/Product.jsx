import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { StarIcon, Add01Icon, Remove01Icon, ShoppingCart01Icon, ArrowLeft02Icon } from 'hugeicons-react'
import { allProducts } from '../data/products'
import PlaceholderImage from '../components/PlaceholderImage'

const sizes = ['S', 'M', 'L', 'XL']

function RelatedCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="aspect-[3/4] overflow-hidden rounded-2xl">
        <PlaceholderImage label={product.name} variant={product.variant} tone="dark" />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <h3 className="font-display text-lg text-white">{product.name}</h3>
        <span className="text-sm font-medium text-white/70">{product.price}</span>
      </div>
    </Link>
  )
}

export default function Product() {
  const { id } = useParams()
  const product = allProducts.find((p) => p.id === id)

  const [size, setSize] = useState(sizes[1])
  const [qty, setQty] = useState(1)

  if (!product) {
    return (
      <section className="bg-dark py-24 text-center">
        <h1 className="font-display text-3xl text-white">Product not found</h1>
        <Link
          to="/shop"
          className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10"
        >
          Back to Shop
        </Link>
      </section>
    )
  }

  const related = allProducts.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4)

  return (
    <>
      <section className="bg-dark py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white">
            <ArrowLeft02Icon size={16} />
            Back to Shop
          </Link>

          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-14">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl">
              <PlaceholderImage label={product.name} variant={product.variant} tone="mid" />
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/60">{product.category}</p>
              <h1 className="font-display mt-2 text-3xl text-white md:text-4xl">{product.name}</h1>
              <p className="mt-2 text-xl font-medium text-white">{product.price}</p>

              <div className="mt-3 flex items-center gap-2">
                <div className="flex text-white">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm text-white/60">(128 reviews)</span>
              </div>

              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">{product.description}</p>

              <hr className="my-6 border-white/15" />

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">Size</p>
                <div className="mt-3 flex gap-2">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSize(s)}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-semibold transition-colors ${
                        size === s ? 'border-white bg-white text-dark' : 'border-white/30 text-white hover:border-white'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">Quantity</p>
                <div className="mt-3 inline-flex items-center gap-4 rounded-full border-2 border-white/30 px-4 py-2">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="text-white"
                  >
                    <Remove01Icon size={18} />
                  </button>
                  <span className="w-4 text-center text-sm text-white">{qty}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQty((q) => q + 1)}
                    className="text-white"
                  >
                    <Add01Icon size={18} />
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10 sm:w-auto sm:px-10"
              >
                <ShoppingCart01Icon size={18} />
                Add to Cart
              </button>

              <p className="mt-4 text-xs text-white/50">In stock, ready to ship in 1–2 business days.</p>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-mid py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <h2 className="font-display text-2xl text-white md:text-3xl">You May Also Like</h2>
            <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
              {related.map((p) => (
                <RelatedCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
