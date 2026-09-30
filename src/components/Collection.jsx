import { ArrowRight02Icon } from 'hugeicons-react'
import collectionImg from '../assets/collection.webp'

export default function Collection() {
  return (
    <section id="collection" className="bg-dark py-16 md:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-10 md:flex-row md:gap-14 md:px-10 md:py-14">
        <div className="aspect-[4/5] w-full max-w-sm shrink-0 overflow-hidden rounded-3xl md:w-1/2">
          <img src={collectionImg} alt="Embroidered dress from the collection" className="h-full w-full object-cover" />
        </div>

        <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/70">The Collection</p>
          <h2 className="font-display mt-3 text-3xl leading-tight text-white md:text-4xl">
            Fabrics chosen first, styles designed around them.
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/70">
            Every piece starts with the material — organic cotton, responsibly sourced wool, recycled fibers — then
            we cut it for how you actually move through your day.
          </p>
          <a
            href="#explore"
            className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10"
          >
            Shop the Collection
            <ArrowRight02Icon size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
