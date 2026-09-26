import { useState } from 'react'
import {
  Search01Icon,
  FavouriteIcon,
  UserCircleIcon,
  ShoppingCart01Icon,
  Menu01Icon,
  Cancel01Icon,
} from 'hugeicons-react'

const links = [
  { label: 'Home', href: '#top' },
  { label: 'Shop', href: '#explore' },
  { label: 'Collection', href: '#collection' },
  { label: 'Contact Us', href: '#contact-us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-sand/70 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-display text-2xl font-semibold tracking-wide text-charcoal">
          Verde <span className="text-brand">Wear</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium uppercase tracking-[0.18em] text-charcoal/80 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <button type="button" aria-label="Search" className="text-charcoal/80 transition-colors hover:text-brand">
            <Search01Icon size={22} />
          </button>
          <button type="button" aria-label="Wishlist" className="text-charcoal/80 transition-colors hover:text-brand">
            <FavouriteIcon size={22} />
          </button>
          <button type="button" aria-label="Profile" className="text-charcoal/80 transition-colors hover:text-brand">
            <UserCircleIcon size={22} />
          </button>
          <button type="button" aria-label="Cart" className="relative text-charcoal/80 transition-colors hover:text-brand">
            <ShoppingCart01Icon size={22} />
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] font-semibold text-cream">
              2
            </span>
          </button>
        </div>

        <button
          type="button"
          className="text-charcoal md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <Cancel01Icon size={24} /> : <Menu01Icon size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-sand/70 bg-cream px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium uppercase tracking-[0.18em] text-charcoal/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex items-center gap-6 border-t border-sand/70 pt-5">
            <Search01Icon size={22} />
            <FavouriteIcon size={22} />
            <UserCircleIcon size={22} />
            <ShoppingCart01Icon size={22} />
          </div>
        </div>
      )}
    </header>
  )
}
