import { ArrowRight02Icon } from 'hugeicons-react'
import PlaceholderImage from './PlaceholderImage'

const tiles = [
  { caption: 'Trail Jacket', variant: 'jacket', tone: 'sage', aspect: 'aspect-[4/5]', labelPos: 'bottom' },
  { caption: 'Trail Sneaker', variant: 'sneaker', tone: 'green', aspect: 'aspect-[4/3]', labelPos: 'top' },
  { caption: 'Trail Cap', variant: 'cap', tone: 'mint', aspect: 'aspect-[4/3]', labelPos: 'bottom' },
]

function Tile({ caption, variant, tone, aspect, labelPos }) {
  const top = labelPos === 'top'
  return (
    <div className={`relative ${aspect} overflow-hidden rounded-2xl`}>
      <PlaceholderImage variant={variant} tone={tone} decorative />
      <div
        className={`absolute inset-0 ${top ? 'bg-gradient-to-b' : 'bg-gradient-to-t'} from-charcoal/60 via-transparent to-transparent`}
      />
      <p
        className={`absolute left-4 text-xs font-medium uppercase tracking-[0.15em] text-cream ${top ? 'top-3' : 'bottom-3'}`}
      >
        {caption}
      </p>
    </div>
  )
}

export default function Collaboration() {
  const [main, top, bottom] = tiles

  return (
    <section className="bg-cream-dark py-14">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div className="relative grid grid-cols-2 gap-3 md:gap-4">
          <Tile {...main} />

          <div className="grid gap-3 md:gap-4">
            <Tile {...top} />
            <Tile {...bottom} />
          </div>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="pointer-events-auto flex flex-col items-center rounded-2xl bg-cream/95 px-6 py-5 text-center shadow-xl backdrop-blur">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-brand-dark">In Collaboration With</p>
              <h2 className="font-display mt-1 text-2xl text-charcoal md:text-3xl">Atlas Trail Co.</h2>
              <a
                href="#explore"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-brand-dark"
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
