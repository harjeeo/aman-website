import PlaceholderImage from './PlaceholderImage'

export default function Hero() {
  return (
    <section id="top" className="bg-mist pt-8 pb-16 md:pt-12 md:pb-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl sm:aspect-[16/10] md:aspect-[21/9]">
          <PlaceholderImage tone="sage" decorative className="scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-charcoal/10" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-mint">New Season</p>
            <h1 className="font-display mt-3 max-w-2xl text-4xl leading-[1.1] text-cream md:text-6xl">
              Clothing built for movement, made to last.
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-cream/80">
              Considered essentials in durable, natural fabrics — cut for everyday wear, designed to outlast trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
