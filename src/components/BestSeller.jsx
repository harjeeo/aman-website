import { StarIcon, ShoppingCart01Icon } from 'hugeicons-react'
import { bestSeller } from '../data/products'
import PlaceholderImage from './PlaceholderImage'

export default function BestSeller() {
  return (
    <section id="best-seller" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <span className="inline-block rounded-full bg-honey px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream">
              Best Seller
            </span>
            <div className="mt-4 aspect-[4/5] overflow-hidden rounded-3xl">
              <PlaceholderImage label={bestSeller.name} />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {Array.from({ length: bestSeller.galleryCount }).map((_, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-xl">
                  <PlaceholderImage tone="honey" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="font-display text-3xl font-semibold text-charcoal md:text-4xl">{bestSeller.name}</h2>
            <p className="mt-2 text-2xl font-medium text-honey-dark">{bestSeller.price}</p>

            <div className="mt-4 flex items-center gap-2">
              <div className="flex text-honey">
                {Array.from({ length: bestSeller.rating }).map((_, i) => (
                  <StarIcon key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm text-stone">({bestSeller.reviewCount} reviews)</span>
            </div>

            <hr className="my-6 border-charcoal/10" />

            <dl className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <dt className="font-semibold uppercase tracking-[0.12em] text-charcoal">Colour:</dt>
                <dd className="text-stone">{bestSeller.color}</dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="font-semibold uppercase tracking-[0.12em] text-charcoal">In Stock:</dt>
                <dd className="text-stone">{bestSeller.stock} pieces available</dd>
              </div>
            </dl>

            <button
              type="button"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-charcoal py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-honey-dark sm:w-auto sm:px-10"
            >
              <ShoppingCart01Icon size={18} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
