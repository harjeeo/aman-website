import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

const priceOf = (price) => Number(price.replace(/\D/g, ''))

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false)

  const addItem = (product, { size, qty = 1 } = {}) => {
    const key = `${product.id}-${size ?? 'default'}`
    setItems((prev) => {
      const existing = prev.find((i) => i.key === key)
      if (existing) {
        return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + qty } : i))
      }
      return [
        ...prev,
        { key, id: product.id, name: product.name, price: product.price, variant: product.variant, size, qty },
      ]
    })
    setOpen(true)
  }

  const removeItem = (key) => setItems((prev) => prev.filter((i) => i.key !== key))

  const updateQty = (key, qty) =>
    setItems((prev) => prev.map((i) => (i.key === key ? { ...i, qty: Math.max(1, qty) } : i)))

  const totalCount = items.reduce((sum, i) => sum + i.qty, 0)
  const totalPrice = items.reduce((sum, i) => sum + priceOf(i.price) * i.qty, 0)

  const value = useMemo(
    () => ({ items, addItem, removeItem, updateQty, open, setOpen, totalCount, totalPrice }),
    [items, open, totalCount, totalPrice],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext)
}
