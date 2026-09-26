import GarmentArt from './GarmentArt'

const tones = {
  sage: { bg: 'from-sand via-cream-dark to-sand', ink: 'text-charcoal/55' },
  green: { bg: 'from-brand/25 via-brand/10 to-cream-dark', ink: 'text-brand-dark' },
  mint: { bg: 'from-mint/25 via-cream-dark to-sand', ink: 'text-brand-dark' },
  charcoal: { bg: 'from-charcoal via-charcoal/90 to-ink', ink: 'text-mint' },
}

// Editorial-style stand-in tile with a hand-drawn garment icon — swap for real photography.
export default function PlaceholderImage({ label, variant = 'tee', tone = 'sage', className = '' }) {
  const { bg, ink } = tones[tone] ?? tones.sage
  const dark = tone === 'charcoal'

  return (
    <div className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br ${bg} ${className}`}>
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, currentColor 0, currentColor 1px, transparent 1px, transparent 16px)',
          color: dark ? '#f7f8f4' : '#1f2620',
        }}
      />
      <div className="relative flex flex-col items-center gap-3 px-4 text-center">
        <GarmentArt variant={variant} className={`h-16 w-16 md:h-20 md:w-20 ${ink}`} />
        {label && (
          <span className={`text-[11px] font-medium uppercase tracking-[0.15em] ${dark ? 'text-cream/60' : 'text-charcoal/45'}`}>
            {label}
          </span>
        )}
      </div>
    </div>
  )
}
