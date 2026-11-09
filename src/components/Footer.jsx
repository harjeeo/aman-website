import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Shop',
    links: ['Tees', 'Hoodies', 'Jackets', 'Joggers'],
  },
  {
    title: 'Collection',
    links: ['Best Sellers', 'New In', 'Bundles', 'Atlas Trail Co.'],
  },
  {
    title: 'Focals',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Blog', href: '/' },
      { label: 'Our Story', href: '/about' },
    ],
  },
  {
    title: 'Follow Us',
    links: [],
  },
]

const legalLinks = [
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Refund & Cancellation Policy', href: '/refund-and-cancellation-policy' },
]

export default function Footer() {
  return (
    <footer className="bg-dark py-14 text-white/80">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-2">
            <p className="font-display text-2xl text-white">Verde Wear</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              Considered clothing in durable, natural fabrics — built for everyday movement.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => {
                  const label = typeof link === 'string' ? link : link.label
                  const href = typeof link === 'string' ? '/shop' : link.href
                  return (
                    <li key={label}>
                      <Link to={href} className="text-sm text-white/60 transition-colors hover:text-white">
                        {label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.href} to={link.href} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center justify-between gap-2 sm:w-full sm:flex-row">
            <p>&copy; {new Date().getFullYear()} Verde Wear. All rights reserved.</p>
            <p>Designed for everyday wear.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
