import { FlowerIcon } from 'hugeicons-react'

const tones = {
  sand: 'from-sand via-cream-dark to-sand',
  honey: 'from-honey/25 via-cream-dark to-sand',
  charcoal: 'from-charcoal via-charcoal/90 to-ink',
}

// Self-contained placeholder — swap for real product photography.
export default function PlaceholderImage({ label, tone = 'sand', className = '', dark = false }) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br ${tones[tone]} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, currentColor 0, currentColor 1px, transparent 1px, transparent 14px)',
          color: dark ? '#faf6ef' : '#2a2620',
        }}
      />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <FlowerIcon size={28} className={dark ? 'text-cream/70' : 'text-charcoal/40'} />
        {label && (
          <span
            className={`text-[11px] font-medium uppercase tracking-[0.15em] ${
              dark ? 'text-cream/60' : 'text-charcoal/45'
            }`}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  )
}
