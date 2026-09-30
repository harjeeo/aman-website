import heroImg from '../assets/hero.webp'

export default function Hero() {
  return (
    <section id="top" className="relative h-[420px] w-full overflow-hidden sm:h-[480px] md:h-[460px]">
      <img src={heroImg} alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-dark/10" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/70">New Season</p>
        <h1 className="font-display mt-3 max-w-2xl text-4xl leading-[1.1] text-white md:text-6xl">
          Clothing built for movement, made to last.
        </h1>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
          Considered essentials in durable, natural fabrics — cut for everyday wear, designed to outlast trends.
        </p>
        <a
          href="#explore"
          className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10"
        >
          Shop Now
        </a>
      </div>
    </section>
  )
}
