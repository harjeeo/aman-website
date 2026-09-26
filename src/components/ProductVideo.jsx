import { ArrowRight02Icon } from 'hugeicons-react'
import PlaceholderImage from './PlaceholderImage'

export default function ProductVideo() {
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="relative aspect-video overflow-hidden rounded-3xl">
          {/* Fallback art shows until a real video source is added below */}
          <PlaceholderImage tone="charcoal" decorative className="absolute inset-0" />

          {/* Replace src with the real product video file — autoplay requires muted */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/product.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 md:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-mint">In the Studio</p>
            <h2 className="font-display mt-2 max-w-md text-2xl leading-tight text-cream md:text-3xl">
              See the Everyday Hoodie in motion
            </h2>
            <a
              href="#explore"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-cream transition-colors hover:text-mint"
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
