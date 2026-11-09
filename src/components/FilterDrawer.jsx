import { useState } from 'react'
import { Cancel01Icon } from 'hugeicons-react'

function Checkbox({ label, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 py-1.5 text-sm text-white">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-white/40 bg-transparent accent-white"
      />
      {label}
    </label>
  )
}

export default function FilterDrawer({ open, onClose, onApply, categories, types, priceBounds, initialFilters }) {
  const [draft, setDraft] = useState(initialFilters)
  const [prevOpen, setPrevOpen] = useState(open)

  if (open !== prevOpen) {
    setPrevOpen(open)
    if (open) setDraft(initialFilters)
  }

  const toggle = (key, value) => {
    setDraft((prev) => {
      const list = prev[key].includes(value) ? prev[key].filter((v) => v !== value) : [...prev[key], value]
      return { ...prev, [key]: list }
    })
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-dark/70 transition-opacity ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`fixed inset-y-0 left-0 z-[70] flex w-full max-w-sm flex-col bg-mid text-white shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="All filters"
      >
        <div className="flex items-center justify-between border-b border-white/15 px-6 py-5">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em]">All Filters</h2>
          <button type="button" onClick={onClose} aria-label="Close filters" className="text-white">
            <Cancel01Icon size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          <div className="border-b border-white/15 pb-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70">Categories</h3>
            <div className="mt-3">
              {categories.map((cat) => (
                <Checkbox
                  key={cat}
                  label={cat}
                  checked={draft.categories.includes(cat)}
                  onChange={() => toggle('categories', cat)}
                />
              ))}
            </div>
          </div>

          <div className="border-b border-white/15 py-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70">Price Range</h3>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span>${priceBounds.min}</span>
              <span>${draft.priceMax}</span>
            </div>
            <input
              type="range"
              min={priceBounds.min}
              max={priceBounds.max}
              value={draft.priceMax}
              onChange={(e) => setDraft((prev) => ({ ...prev, priceMax: Number(e.target.value) }))}
              className="mt-2 w-full accent-white"
            />
          </div>

          <div className="py-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70">Type</h3>
            <div className="mt-3 grid grid-cols-2">
              {types.map((type) => (
                <Checkbox
                  key={type.value}
                  label={type.label}
                  checked={draft.types.includes(type.value)}
                  onChange={() => toggle('types', type.value)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 border-t border-white/15 px-6 py-5">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-full border-2 border-white/40 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:border-white"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onApply(draft)}
            className="flex-1 rounded-full border-2 border-white bg-white py-3 text-xs font-semibold uppercase tracking-[0.15em] text-dark transition-colors hover:bg-white/90"
          >
            Apply
          </button>
        </div>
      </div>
    </>
  )
}
