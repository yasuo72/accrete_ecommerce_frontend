import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import { useToast } from '../../context/ToastContext'
import StarRating from './StarRating'

export default function ProductCard({ product, alwaysShowCart = false }) {
  const { addToCart } = useCart()
  const { toggle, isWishlisted } = useWishlist()
  const { showToast } = useToast()
  const navigate = useNavigate()
  const [imgLoaded, setImgLoaded] = useState(false)
  const prevWishRef = useRef(isWishlisted(product.id))
  const [wishAnimKey, setWishAnimKey] = useState(0)
  const preloadedRef = useRef(false)

  useEffect(() => {
    const current = isWishlisted(product.id)
    if (prevWishRef.current !== current) {
      setWishAnimKey(k => k + 1)
      prevWishRef.current = current
    }
  }, [isWishlisted, product.id])

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product)
    showToast(`"${product.name}" added to cart`)
  }

  const handleWishlist = (e) => {
    e.preventDefault()
    toggle(product)
    showToast(isWishlisted(product.id) ? 'Removed from wishlist' : 'Added to wishlist')
  }

  const handleMouseEnter = () => {
    // Preload product detail page on hover
    if (!preloadedRef.current) {
      preloadedRef.current = true
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = `/products/${product.id}`
      document.head.appendChild(link)
    }
  }

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-card card-lift" onMouseEnter={handleMouseEnter}>
      {/* Image Container */}
      <Link to={`/products/${product.id}`}>
        <div className="relative h-[200px] bg-gray-100 flex items-center justify-center overflow-hidden">
          {!imgLoaded && (
            <div className="absolute inset-0 skeleton" aria-hidden="true" />
          )}
          <img
            src={product.image}
            alt={product.name}
            onLoad={() => setImgLoaded(true)}
            className={`max-w-[80%] max-h-[80%] object-contain img-zoom transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Badge */}
          {product.badge === 'sale' && (
            <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded">-{product.discount}%</span>
          )}
          {product.badge === 'new' && (
            <span className="absolute top-3 left-3 bg-[#00FF66] text-black text-xs font-semibold px-2.5 py-1 rounded">NEW</span>
          )}

          {/* Hover Actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <button
              onClick={handleWishlist}
              className={`w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center shadow hover:text-primary transition-colors btn-tactile btn-shadow-lift ${wishAnimKey ? 'heart-pulse' : ''}`}
              key={wishAnimKey}
            >
              {isWishlisted(product.id) ? '♥' : '♡'}
            </button>
            <button
              type="button"
              className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center shadow hover:text-primary transition-colors btn-tactile btn-shadow-lift"
              aria-label="View product"
            >
              👁
            </button>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className={`absolute bottom-0 left-0 right-0 h-10 bg-black text-white text-sm font-medium hover:bg-primary btn-tactile
              transition-all duration-200
              ${alwaysShowCart ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0'}`}
          >
            Add To Cart
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-3">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-base font-medium text-black hover:text-primary transition-colors truncate">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-base font-bold text-primary">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
          )}
        </div>
        <div className="flex items-center gap-1 mt-1.5">
          <StarRating rating={product.rating} size="sm" />
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>
        {/* Color Swatches */}
        {product.colors?.length > 0 && (
          <div className="flex gap-1.5 mt-2">
            {product.colors.map((c, i) => (
              <div key={i} className="w-3.5 h-3.5 rounded-full border border-gray-300" style={{ backgroundColor: c }} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
