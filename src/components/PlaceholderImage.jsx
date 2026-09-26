import GarmentArt from './GarmentArt'

const tones = {
  dark: 'from-dark via-dark/80 to-mid',
  mid: 'from-mid via-mid/80 to-dark',
}

// Editorial-style stand-in tile with a hand-drawn garment icon — swap for real photography.
// Pass `decorative` when the tile sits behind foreground text (hero/video banners) so the
// icon + label don't compete with the overlay copy.
export default function PlaceholderImage({ label, variant = 'tee', tone = 'dark', decorative = false, className = '' }) {
  const bg = tones[tone] ?? tones.dark

  return (
    <div className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br ${bg} ${className}`}>
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, currentColor 0, currentColor 1px, transparent 1px, transparent 16px)',
          color: '#ffffff',
        }}
      />
      {!decorative && (
        <div className="relative flex flex-col items-center gap-3 px-4 text-center">
          <GarmentArt variant={variant} className="h-16 w-16 text-white/70 md:h-20 md:w-20" />
          {label && (
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/70">{label}</span>
          )}
        </div>
      )}
    </div>
  )
}
