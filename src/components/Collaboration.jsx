import { ArrowRight02Icon } from 'hugeicons-react'
import PlaceholderImage from './PlaceholderImage'

const tiles = [
  { caption: 'Trail Jacket', variant: 'jacket', tone: 'dark', aspect: 'aspect-[4/5]' },
  { caption: 'Trail Sneaker', variant: 'sneaker', tone: 'mid', aspect: 'aspect-[4/3]' },
  { caption: 'Trail Cap', variant: 'cap', tone: 'dark', aspect: 'aspect-[4/3]' },
]

function Tile({ caption, variant, tone, aspect }) {
  return (
    <div className={`relative ${aspect} overflow-hidden rounded-2xl`}>
      <PlaceholderImage variant={variant} tone={tone} decorative />
      <div className="absolute inset-0 bg-dark/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <a
          href="#explore"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-dark/80 py-1.5 pl-3 pr-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white shadow-md backdrop-blur transition-colors hover:bg-dark"
        >
          {caption}
          <ArrowRight02Icon size={14} />
        </a>
      </div>
    </div>
  )
}

export default function Collaboration() {
  const [main, top, bottom] = tiles

  return (
    <section className="bg-mid py-14">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div className="mb-8 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">In Collaboration With</p>
          <h2 className="font-display mt-1 text-2xl text-white md:text-3xl">Atlas Trail Co.</h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <Tile {...main} />

          <div className="grid gap-3 md:gap-4">
            <Tile {...top} />
            <Tile {...bottom} />
          </div>
        </div>
      </div>
    </section>
  )
}
