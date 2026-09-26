// Hand-drawn flat-line garment icons used as stand-in product art.
// Swap PlaceholderImage usages for real product photography whenever it's ready.
const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const garments = {
  tee: (props) => (
    <svg viewBox="0 0 64 64" {...common} {...props}>
      <path d="M22 10 8 18l4 9 6-3v28h28V24l6 3 4-9-14-8c0 4-4 6-8 6s-8-2-8-6Z" />
    </svg>
  ),
  hoodie: (props) => (
    <svg viewBox="0 0 64 64" {...common} {...props}>
      <path d="M20 12c-4 2-9 5-11 9l5 8 5-3v26h26V26l5 3 5-8c-2-4-7-7-11-9" />
      <path d="M24 11c0 4.5 3.5 8 8 8s8-3.5 8-8" />
      <path d="M22 30c3 2 6.5 3 10 3s7-1 10-3" />
    </svg>
  ),
  jacket: (props) => (
    <svg viewBox="0 0 64 64" {...common} {...props}>
      <path d="M24 11 14 16l-5 10 6 4 3-4v26h28V26l3 4 6-4-5-10-10-5" />
      <path d="M27 11c0 5 2 9 5 9s5-4 5-9" />
      <path d="M32 20v32" />
      <path d="M22 34h5M37 34h5" />
    </svg>
  ),
  dress: (props) => (
    <svg viewBox="0 0 64 64" {...common} {...props}>
      <path d="M25 9h14l4 8-5 3 4 32H22l4-32-5-3Z" />
      <path d="M25 9c0 4 3 7 7 7s7-3 7-7" />
    </svg>
  ),
  joggers: (props) => (
    <svg viewBox="0 0 64 64" {...common} {...props}>
      <path d="M20 8h24l1 12-4 26-6 1-3-22-3 22-6-1-4-26Z" />
      <path d="M20 16h24" />
    </svg>
  ),
  cap: (props) => (
    <svg viewBox="0 0 64 64" {...common} {...props}>
      <path d="M14 34c0-10 8-18 18-18s18 8 18 18" />
      <path d="M12 34h40c2 6-2 8-6 8H18c-4 0-8-2-6-8Z" />
      <path d="M32 16v-4" />
    </svg>
  ),
  tote: (props) => (
    <svg viewBox="0 0 64 64" {...common} {...props}>
      <path d="M16 22h32l3 30H13Z" />
      <path d="M24 22v-4a8 8 0 0 1 16 0v4" />
    </svg>
  ),
  sneaker: (props) => (
    <svg viewBox="0 0 64 64" {...common} {...props}>
      <path d="M8 44c0-6 4-9 9-11l6-8 9 3 6-4 12 10c3 2 6 3 6 7v3H8Z" />
      <path d="M23 25v10M32 27v9M41 25v10" />
    </svg>
  ),
  scarf: (props) => (
    <svg viewBox="0 0 64 64" {...common} {...props}>
      <path d="M10 20c8 6 14 6 20 0s16-6 24 2" />
      <path d="M14 24c4 5 4 12 0 17M50 24c-4 5-4 12 0 17" />
    </svg>
  ),
}

export default function GarmentArt({ variant = 'tee', className = '' }) {
  const Icon = garments[variant] ?? garments.tee
  return <Icon className={className} />
}
