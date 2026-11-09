import { Cancel01Icon, ShoppingBag01Icon, Add01Icon, Remove01Icon, LockIcon } from 'hugeicons-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import GarmentArt from './GarmentArt'

export default function CartDrawer() {
  const { items, open, setOpen, removeItem, updateQty, totalCount, totalPrice } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-dark/70 transition-opacity ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col bg-mid text-white shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-white/15 px-6 py-5">
          <h2 className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
            <ShoppingBag01Icon size={18} />
            {totalCount} {totalCount === 1 ? 'Item' : 'Items'}
          </h2>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close cart" className="text-white">
            <Cancel01Icon size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <p className="mt-10 text-center text-sm text-white/60">Your cart is empty.</p>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4">
                  <div className="flex h-20 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-dark">
                    <GarmentArt variant={item.variant} className="h-9 w-9 text-white/70" />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-base leading-tight text-white">{item.name}</h3>
                      <span className="shrink-0 text-sm text-white">{item.price}</span>
                    </div>
                    {item.size && <p className="mt-0.5 text-xs text-white/60">Size {item.size}</p>}

                    <div className="mt-3 flex items-center gap-4">
                      <div className="inline-flex items-center gap-3 rounded-full border border-white/30 px-3 py-1">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${item.name}`}
                          onClick={() => updateQty(item.key, item.qty - 1)}
                          className="text-white"
                        >
                          <Remove01Icon size={14} />
                        </button>
                        <span className="w-4 text-center text-xs text-white">{item.qty}</span>
                        <button
                          type="button"
                          aria-label={`Increase quantity of ${item.name}`}
                          onClick={() => updateQty(item.key, item.qty + 1)}
                          className="text-white"
                        >
                          <Add01Icon size={14} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-xs text-white/60 underline-offset-2 hover:text-white hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-white/15 px-6 py-5">
            <p className="mb-3 text-xs text-white/50">Shipping &amp; taxes calculated at checkout</p>
            <Link
              to="/shop"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-white py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white/10"
            >
              <LockIcon size={16} />
              Checkout · ${totalPrice}
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
