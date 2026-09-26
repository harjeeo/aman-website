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
    links: ['Contact Us', 'Blog', 'Our Story'],
  },
  {
    title: 'Follow Us',
    links: [],
  },
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
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#top" className="text-sm text-white/60 transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Verde Wear. All rights reserved.</p>
          <p>Designed for everyday wear.</p>
        </div>
      </div>
    </footer>
  )
}
