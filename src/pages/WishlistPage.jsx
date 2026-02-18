import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, X, ShoppingBag, ArrowRight } from 'lucide-react'
import Breadcrumb from '../components/UI/Breadcrumb'
import ProductCard from '../components/UI/ProductCard'
import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import { products } from '../data/mockData'

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()
  const { showToast } = useToast()
  const recommended = products.slice(0, 4)

  const moveAllToBag = () => {
    items.forEach(item => addToCart(item))
    showToast(`${items.length} items added to cart`)
  }

  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Wishlist' }]} />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px] pb-10 sm:pb-16 lg:pb-20">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-medium text-black">Wishlist ({items.length})</h2>
          {items.length > 0 && (
            <button onClick={moveAllToBag} className="flex items-center gap-2 border border-black px-6 sm:px-8 py-2.5 sm:py-3 rounded text-sm sm:text-base hover:bg-black hover:text-white transition-colors">
              <ShoppingBag size={16} />
              Move All To Bag
            </button>
          )}
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex flex-col items-center py-16 sm:py-24 text-center">
            <Heart className="text-gray-300 mb-4 sm:mb-6" size={64} />
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Your wishlist is empty</h3>
            <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">Save items you love to your wishlist and shop them anytime.</p>
            <Link to="/products" className="bg-primary text-white px-6 sm:px-10 py-2 sm:py-3 rounded text-sm sm:text-base hover:bg-primary-hover transition-colors">Continue Shopping</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-10 sm:mb-20">
            {items.map(product => (
              <div key={product.id} className="relative bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                {/* Remove Button */}
                <button onClick={() => { removeFromWishlist(product.id); showToast('Item removed from wishlist') }}
                  className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10 w-7 h-7 sm:w-[34px] sm:h-[34px] bg-white rounded-full flex items-center justify-center shadow hover:bg-primary hover:text-white transition-all">
                  <X size={14} />
                </button>
                {/* Image */}
                <Link to={`/products/${product.id}`}>
                  <div className="h-[180px] sm:h-[220px] lg:h-[250px] bg-gray-100 flex items-center justify-center relative overflow-hidden">
                    <img src={product.image} alt={product.name} className="max-w-[80%] max-h-[80%] object-contain" />
                    {product.badge === 'sale' && (
                      <span className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-primary text-white text-[10px] sm:text-xs font-semibold px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded">-{product.discount}%</span>
                    )}
                    {/* Always visible add to cart */}
                    <button
                      onClick={e => { e.preventDefault(); addToCart(product); showToast(`"${product.name}" added to cart`) }}
                      className="absolute bottom-0 left-0 right-0 h-8 sm:h-10 bg-black text-white text-xs sm:text-sm font-medium hover:bg-primary transition-colors"
                    >
                      Add To Cart
                    </button>
                  </div>
                </Link>
                {/* Info */}
                <div className="p-2 sm:p-3">
                  <Link to={`/products/${product.id}`}>
                    <h3 className="text-xs sm:text-sm lg:text-base font-medium text-black hover:text-primary transition-colors truncate">{product.name}</h3>
                  </Link>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs sm:text-sm lg:text-base font-bold text-primary">${product.price}</span>
                    {product.originalPrice && <span className="text-[10px] sm:text-xs lg:text-sm text-gray-400 line-through">${product.originalPrice}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Just For You */}
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-6 sm:mb-8">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-3 sm:w-4 h-8 sm:h-10 bg-primary rounded" />
              <span className="text-lg sm:text-xl font-semibold text-black">Just For You</span>
            </div>
            <Link to="/products" className="flex items-center gap-2 border border-black px-6 sm:px-8 py-2 sm:py-2.5 rounded text-xs sm:text-sm hover:bg-black hover:text-white transition-colors">
              See All
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {recommended.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
