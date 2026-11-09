import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FilterIcon, ArrowDown01Icon, Cancel01Icon, ShoppingCart01Icon } from 'hugeicons-react'
import { exploreTabs, allProducts } from '../data/products'
import { useCart } from '../context/CartContext'
import PlaceholderImage from '../components/PlaceholderImage'
import FilterDrawer from '../components/FilterDrawer'

const types = [...new Set(allProducts.map((p) => p.variant))]
const typeLabel = (type) => type.charAt(0).toUpperCase() + type.slice(1)
const priceOf = (price) => Number(price.replace(/\D/g, ''))
const priceBounds = {
  min: Math.min(...allProducts.map((p) => priceOf(p.price))),
  max: Math.max(...allProducts.map((p) => priceOf(p.price))),
}

const sortOptions = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A to Z' },
]

const defaultFilters = { categories: [], types: [], priceMax: priceBounds.max }

function ProductCard({ product }) {
  const { addItem } = useCart()
  return (
    <article className="group">
      <Link to={`/product/${product.id}`} className="relative block aspect-[3/4] overflow-hidden rounded-2xl">
        <PlaceholderImage label={product.name} variant={product.variant} tone="dark" />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            addItem(product, { qty: 1 })
          }}
          aria-label={`Add ${product.name} to cart`}
          className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white opacity-0 transition-opacity group-hover:opacity-100"
        >
          <ShoppingCart01Icon size={18} />
        </button>
      </Link>
      <Link to={`/product/${product.id}`} className="mt-3 flex items-center justify-between">
        <h3 className="font-display text-lg text-white">{product.name}</h3>
        <span className="text-sm font-medium text-white/70">{product.price}</span>
      </Link>
      <p className="mt-0.5 text-xs uppercase tracking-[0.1em] text-white/50">{product.category}</p>
    </article>
  )
}

export default function Shop() {
  const [filters, setFilters] = useState(defaultFilters)
  const [sortBy, setSortBy] = useState('relevance')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)

  const products = useMemo(() => {
    let list = allProducts.filter((p) => priceOf(p.price) <= filters.priceMax)
    if (filters.categories.length) list = list.filter((p) => filters.categories.includes(p.category))
    if (filters.types.length) list = list.filter((p) => filters.types.includes(p.variant))

    list = [...list]
    if (sortBy === 'price-asc') list.sort((a, b) => priceOf(a.price) - priceOf(b.price))
    if (sortBy === 'price-desc') list.sort((a, b) => priceOf(b.price) - priceOf(a.price))
    if (sortBy === 'name-asc') list.sort((a, b) => a.name.localeCompare(b.name))

    return list
  }, [filters, sortBy])

  const chips = [
    ...filters.categories.map((c) => ({ key: `cat-${c}`, label: c, remove: () => removeCategory(c) })),
    ...filters.types.map((t) => ({ key: `type-${t}`, label: typeLabel(t), remove: () => removeType(t) })),
    ...(filters.priceMax < priceBounds.max
      ? [{ key: 'price', label: `Under $${filters.priceMax}`, remove: () => setFilters((f) => ({ ...f, priceMax: priceBounds.max })) }]
      : []),
  ]

  const removeCategory = (cat) =>
    setFilters((f) => ({ ...f, categories: f.categories.filter((c) => c !== cat) }))
  const removeType = (type) => setFilters((f) => ({ ...f, types: f.types.filter((t) => t !== type) }))

  return (
    <>
      <section className="bg-mid py-16 text-center md:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/70">Verde Wear</p>
        <h1 className="font-display mt-3 text-4xl text-white md:text-5xl">Shop All</h1>
        <p className="mx-auto mt-3 max-w-md px-6 text-[15px] leading-relaxed text-white/70">
          Considered essentials in durable, natural fabrics — browse the full collection.
        </p>
      </section>

      <section className="bg-dark py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:border-white"
            >
              <FilterIcon size={16} />
              All Filters
            </button>

            <div className="flex items-center gap-5">
              <span className="text-sm text-white/60">{products.length} items</span>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setSortOpen((o) => !o)}
                  className="inline-flex items-center gap-2 text-sm text-white"
                >
                  <span className="text-white/60">Sort by:</span>
                  <span className="font-semibold">{sortOptions.find((o) => o.value === sortBy).label}</span>
                  <ArrowDown01Icon size={16} />
                </button>

                {sortOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setSortOpen(false)} aria-hidden="true" />
                    <div className="absolute right-0 top-full z-20 mt-2 w-48 overflow-hidden rounded-xl border border-white/15 bg-mid shadow-xl">
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            setSortBy(option.value)
                            setSortOpen(false)
                          }}
                          className={`block w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-white/10 ${
                            sortBy === option.value ? 'text-white' : 'text-white/70'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {chips.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
              {chips.map((chip) => (
                <button
                  key={chip.key}
                  type="button"
                  onClick={chip.remove}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/30 px-3 py-1.5 text-xs text-white"
                >
                  {chip.label}
                  <Cancel01Icon size={12} />
                </button>
              ))}
              <button
                type="button"
                onClick={() => setFilters(defaultFilters)}
                className="text-xs font-semibold uppercase tracking-[0.1em] text-white/60 underline-offset-2 hover:text-white hover:underline"
              >
                Clear All
              </button>
            </div>
          )}

          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <FilterDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onApply={(draft) => {
          setFilters(draft)
          setDrawerOpen(false)
        }}
        categories={exploreTabs}
        types={types.map((t) => ({ value: t, label: typeLabel(t) }))}
        priceBounds={priceBounds}
        initialFilters={filters}
      />
    </>
  )
}
