import { ArrowRight02Icon } from 'hugeicons-react'
import PlaceholderImage from './PlaceholderImage'

export default function Collaboration() {
  return (
    <section className="bg-cream-dark py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="relative grid grid-cols-2 gap-4 md:gap-6">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl md:aspect-auto">
            <PlaceholderImage label="Collaboration Piece" variant="jacket" tone="sage" />
          </div>

          <div className="grid gap-4 md:gap-6">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl">
              <PlaceholderImage label="Collaboration Detail" variant="sneaker" tone="green" />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-3xl">
              <PlaceholderImage label="Collaboration Detail" variant="cap" tone="mint" />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="pointer-events-auto flex flex-col items-center rounded-3xl bg-cream/90 px-8 py-7 text-center shadow-xl backdrop-blur">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-brand-dark">In Collaboration With</p>
              <h2 className="font-display mt-2 text-3xl text-charcoal md:text-4xl">Atlas Trail Co.</h2>
              <a
                href="#explore"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-brand-dark"
              >
                Discover the Edit
                <ArrowRight02Icon size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
