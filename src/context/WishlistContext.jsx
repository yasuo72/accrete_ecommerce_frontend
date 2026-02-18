import React, { createContext, useContext, useState } from 'react'

const WishlistContext = createContext(null)

export function WishlistProvider({ children }) {
  const [items, setItems] = useState([])

  const addToWishlist = (product) => {
    setItems(prev => prev.find(i => i.id === product.id) ? prev : [...prev, product])
  }

  const removeFromWishlist = (id) => setItems(prev => prev.filter(i => i.id !== id))

  const isWishlisted = (id) => items.some(i => i.id === id)

  const toggle = (product) => isWishlisted(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)

  return (
    <WishlistContext.Provider value={{ items, addToWishlist, removeFromWishlist, isWishlisted, toggle, count: items.length }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() { return useContext(WishlistContext) }
