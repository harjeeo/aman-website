import { ArrowRight02Icon } from 'hugeicons-react'
import PlaceholderImage from './PlaceholderImage'

export default function Collaboration() {
  return (
    <section className="bg-deep py-14">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div className="relative grid grid-cols-2 gap-3 md:gap-4">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl">
            <PlaceholderImage label="Collaboration Piece" variant="jacket" tone="sage" />
          </div>

          <div className="grid gap-3 md:gap-4">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <PlaceholderImage label="Collaboration Detail" variant="sneaker" tone="green" />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <PlaceholderImage label="Collaboration Detail" variant="cap" tone="mint" />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="pointer-events-auto flex flex-col items-center rounded-2xl bg-cream/95 px-6 py-5 text-center shadow-xl backdrop-blur">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-brand-dark">In Collaboration With</p>
              <h2 className="font-display mt-1 text-2xl text-charcoal md:text-3xl">Atlas Trail Co.</h2>
              <a
                href="#explore"
                className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-brand-dark"
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
