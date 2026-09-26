import { PlayCircleIcon, ArrowRight02Icon } from 'hugeicons-react'
import PlaceholderImage from './PlaceholderImage'

export default function ProductVideo() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Replace with the real product video embed / <video> source */}
          <div className="relative aspect-video overflow-hidden rounded-3xl">
            <PlaceholderImage label="Product Video" variant="hoodie" tone="charcoal" />
            <button
              type="button"
              aria-label="Play video"
              className="absolute inset-0 flex items-center justify-center bg-charcoal/20 transition-colors hover:bg-charcoal/30"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-cream/90 text-charcoal shadow-lg">
                <PlayCircleIcon size={40} />
              </span>
            </button>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-dark">In the Studio</p>
            <h2 className="font-display mt-3 text-3xl text-charcoal md:text-4xl">
              See the Everyday Hoodie in motion
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-stone">
              Brushed organic cotton fleece, reinforced seams, and a relaxed fit built to move with you — see why
              it's become our most-loved everyday layer.
            </p>
            <a
              href="#best-seller"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-charcoal transition-colors hover:text-brand-dark"
            >
              Shop the Everyday Hoodie
              <ArrowRight02Icon size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
