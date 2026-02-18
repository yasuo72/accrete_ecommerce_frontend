import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, Heart, Truck, RotateCcw } from 'lucide-react'
import Breadcrumb from '../components/UI/Breadcrumb'
import ProductCard from '../components/UI/ProductCard'
import StarRating from '../components/UI/StarRating'
import { products, reviews } from '../data/mockData'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { useToast } from '../context/ToastContext'

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id)) || products[0]
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
  const productReviews = reviews.filter(r => r.productId === product.id)

  const [qty, setQty] = useState(1)
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState('M')
  const [tab, setTab] = useState('description')
  const { addToCart } = useCart()
  const { toggle, isWishlisted } = useWishlist()
  const { showToast } = useToast()

  const handleBuyNow = () => {
    addToCart(product, qty)
    showToast(`${product.name} added to cart`)
  }

  return (
    <div>
      <Breadcrumb items={[
        { label: 'Home', to: '/' },
        { label: product.category, to: `/products?category=${product.category}` },
        { label: product.name }
      ]} />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px] pb-10 sm:pb-16 lg:pb-20">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-10 sm:mb-16">
          {/* Images */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {/* Thumbnails - Horizontal on mobile, vertical on desktop */}
            <div className="flex sm:flex-col gap-3 sm:gap-4 order-2 sm:order-1 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">
              {[product.image, product.image, product.image, product.image].map((img, i) => (
                <div key={i} className="w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 bg-gray-100 rounded flex items-center justify-center overflow-hidden border-2 border-transparent hover:border-primary cursor-pointer transition-all">
                  <img src={img} alt="" className="max-w-[80%] max-h-[80%] object-contain" />
                </div>
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-1 h-[280px] sm:h-[400px] lg:h-[500px] bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden order-1 sm:order-2">
              <img src={product.image} alt={product.name} className="max-w-[80%] max-h-[80%] object-contain" />
              {product.badge === 'sale' && (
                <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-primary text-white text-xs font-semibold px-2 sm:px-2.5 py-1 rounded">-{product.discount}%</span>
              )}
            </div>
          </div>

          {/* Info */}
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-black mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4 flex-wrap">
              <StarRating rating={product.rating} size="md" />
              <span className="text-xs sm:text-sm text-gray-500">({product.reviews} Reviews)</span>
              <div className="w-px h-4 bg-gray-200 hidden sm:block" />
              <span className="text-xs sm:text-sm text-success font-medium">In Stock</span>
            </div>

            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl font-bold text-primary">${product.price}</span>
              {product.originalPrice && <span className="text-base sm:text-lg text-gray-400 line-through">${product.originalPrice}</span>}
            </div>

            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4 sm:mb-6">
              PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
            </p>
            <div className="border-t border-gray-200 mb-4 sm:mb-6" />

            {/* Colors */}
            {product.colors?.length > 0 && (
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <span className="text-sm sm:text-lg font-medium">Colours:</span>
                <div className="flex gap-2">
                  {product.colors.map((c, i) => (
                    <button key={i} onClick={() => setSelectedColor(i)}
                      className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 transition-all ${selectedColor === i ? 'border-white ring-2 ring-primary' : 'border-transparent'}`}
                      style={{ backgroundColor: c }} />
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 flex-wrap">
              <span className="text-sm sm:text-lg font-medium">Size:</span>
              <div className="flex gap-2">
                {['XS', 'S', 'M', 'L', 'XL'].map(s => (
                  <button key={s} onClick={() => setSelectedSize(s)}
                    className={`min-w-[36px] sm:min-w-[40px] h-9 sm:h-10 px-2 sm:px-3 border rounded text-xs sm:text-sm transition-all
                      ${selectedSize === s ? 'border-primary bg-primary text-white' : 'border-gray-200 hover:border-primary hover:text-primary'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="flex items-center border border-gray-200 rounded h-10 sm:h-11">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-8 sm:w-10 h-full flex items-center justify-center hover:bg-gray-50 border-r border-gray-200">
                  <Minus size={16} />
                </button>
                <span className="w-10 sm:w-12 text-center font-medium text-sm sm:text-base">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="w-8 sm:w-10 h-full flex items-center justify-center hover:bg-gray-50 border-l border-gray-200 text-primary">
                  <Plus size={16} />
                </button>
              </div>
              <button onClick={handleBuyNow} className="flex-1 h-10 sm:h-11 bg-primary text-white font-medium rounded text-sm sm:text-base hover:bg-primary-hover transition-colors">
                Buy Now
              </button>
              <button onClick={() => { toggle(product); showToast(isWishlisted(product.id) ? 'Removed from wishlist' : 'Added to wishlist') }}
                className={`w-10 sm:w-11 h-10 sm:h-11 border rounded flex items-center justify-center transition-all
                  ${isWishlisted(product.id) ? 'bg-red-50 border-primary text-primary' : 'border-gray-200 hover:border-primary'}`}>
                <Heart size={18} fill={isWishlisted(product.id) ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Delivery Info */}
            <div className="border border-gray-200 rounded overflow-hidden">
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border-b border-gray-200">
                <Truck className="text-xl sm:text-2xl flex-shrink-0" size={24} />
                <div>
                  <p className="font-bold text-sm sm:text-base mb-1">Free Delivery</p>
                  <p className="text-xs text-black underline cursor-pointer">Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4">
                <RotateCcw className="text-xl sm:text-2xl flex-shrink-0" size={24} />
                <div>
                  <p className="font-bold text-sm sm:text-base mb-1">Return Delivery</p>
                  <p className="text-xs text-black">Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-10 sm:mb-16">
          <div className="flex border-b border-gray-200 mb-6 sm:mb-8 overflow-x-auto">
            {['description', 'reviews', 'shipping'].map(t => (
              <button key={t} onClick={() => setTab(t)}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base capitalize transition-all border-b-2 -mb-px whitespace-nowrap
                  ${tab === t ? 'border-primary text-black font-semibold' : 'border-transparent text-gray-500 hover:text-black'}`}>
                {t === 'reviews' ? `Reviews (${productReviews.length || product.reviews})` : t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          {tab === 'description' && (
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-3xl">
              {product.name} is a high-quality product designed for maximum performance and comfort. 
              This product features premium materials and thoughtful engineering to deliver an exceptional user experience.
              Perfect for everyday use, it combines functionality with style.
            </p>
          )}
          {tab === 'reviews' && (
            <div className="space-y-4 sm:space-y-6 max-w-2xl">
              {productReviews.length > 0 ? productReviews.map(r => (
                <div key={r.id} className="pb-4 sm:pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">{r.author[0]}</div>
                    <div>
                      <p className="font-semibold text-xs sm:text-sm">{r.author}</p>
                      <p className="text-[10px] sm:text-xs text-gray-400">{r.date}</p>
                    </div>
                    {r.verified && <span className="ml-auto text-[10px] sm:text-xs text-success">✓ Verified</span>}
                  </div>
                  <StarRating rating={r.rating} size="sm" />
                  <p className="font-semibold mt-1 sm:mt-2 mb-1 text-sm sm:text-base">{r.title}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{r.body}</p>
                </div>
              )) : <p className="text-gray-500 text-sm sm:text-base">No reviews yet. Be the first to review!</p>}
            </div>
          )}
          {tab === 'shipping' && (
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Free standard shipping on orders over $140. Express delivery available. 
              Ships within 1-2 business days. 30-day free returns.
            </p>
          )}
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-3 sm:w-4 h-8 sm:h-10 bg-primary rounded" />
              <span className="text-primary font-semibold text-sm sm:text-base">Related Items</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
