import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { X, ChevronUp, ChevronDown, ArrowLeft, ShoppingBag } from 'lucide-react'
import Breadcrumb from '../components/UI/Breadcrumb'
import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { items, removeFromCart, updateQty, total } = useCart()
  const [coupon, setCoupon] = useState('')
  const [removingIds, setRemovingIds] = useState(() => new Set())
  const prevTotalRef = useRef(total)
  const [totalFlashKey, setTotalFlashKey] = useState(0)
  const prevQtyByIdRef = useRef(new Map())
  const [qtyAnimById, setQtyAnimById] = useState({})

  useEffect(() => {
    if (prevTotalRef.current !== total) {
      setTotalFlashKey(k => k + 1)
      prevTotalRef.current = total
    }
  }, [total])

  useEffect(() => {
    const next = {}
    items.forEach(i => {
      const prev = prevQtyByIdRef.current.get(i.id)
      if (prev != null && prev !== i.qty) {
        next[i.id] = { from: prev, to: i.qty }
      }
      prevQtyByIdRef.current.set(i.id, i.qty)
    })

    if (Object.keys(next).length) {
      setQtyAnimById(prev => ({ ...prev, ...next }))
      const ids = Object.keys(next)
      window.setTimeout(() => {
        setQtyAnimById(prev => {
          const copy = { ...prev }
          ids.forEach(id => { delete copy[id] })
          return copy
        })
      }, 260)
    }
  }, [items])

  const handleRemove = (id) => {
    setRemovingIds(prev => {
      const next = new Set(prev)
      next.add(id)
      return next
    })
    window.setTimeout(() => {
      removeFromCart(id)
      setRemovingIds(prev => {
        const next = new Set(prev)
        next.delete(id)
        return next
      })
    }, 260)
  }

  const totals = useMemo(() => ([
    { label: 'Subtotal:', value: `$${total}` },
    { label: 'Shipping:', value: 'Free' },
    { label: 'Total:', value: `$${total}` },
  ]), [total])

  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Cart' }]} />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px] pb-10 sm:pb-16 lg:pb-20">
        {/* Table Header - Desktop */}
        <div className="hidden lg:grid bg-white shadow-sm border border-gray-100 rounded-lg px-6 py-5 grid-cols-[2fr_1fr_1fr_1fr] gap-4 mb-4">
          {['Product', 'Price', 'Quantity', 'Subtotal'].map(h => (
            <span key={h} className="text-base text-black font-medium">{h}</span>
          ))}
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="text-center py-16 sm:py-24">
            <ShoppingBag className="mx-auto mb-4 text-gray-300" size={64} />
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6 text-sm sm:text-base">Looks like you haven't added anything yet.</p>
            <Link to="/products" className="bg-primary text-white px-6 sm:px-10 py-2 sm:py-3 rounded text-sm sm:text-base inline-block hover:bg-primary-hover transition-colors btn-tactile btn-shadow-lift btn-primary-glow">Continue Shopping</Link>
          </div>
        ) : (
          <>
            <div className="space-y-3 sm:space-y-4">
              {items.map(item => (
                <div key={item.id} className={`bg-white border border-gray-200 rounded-lg p-4 sm:px-6 sm:py-4 ${removingIds.has(item.id) ? 'row-removing' : ''}`}>
                  {/* Desktop Layout */}
                  <div className="hidden lg:grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 items-center">
                    {/* Product */}
                    <div className="flex items-center gap-4">
                      <button onClick={() => handleRemove(item.id)}
                        className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 hover:bg-primary-hover transition-colors btn-tactile">
                        <X size={14} />
                      </button>
                      <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                        <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                      </div>
                      <span className="text-base text-black">{item.name}</span>
                    </div>
                    {/* Price */}
                    <span className="text-base">${item.price}</span>
                    {/* Qty */}
                    <div className="flex items-center border border-gray-300 rounded w-20 h-11">
                      <span className="flex-1 text-center font-medium text-base">
                        {qtyAnimById[item.id] ? (
                          <span className="qty-anim">
                            <span className="qty-old">{String(qtyAnimById[item.id].from).padStart(2, '0')}</span>
                            <span className="qty-new">{String(qtyAnimById[item.id].to).padStart(2, '0')}</span>
                          </span>
                        ) : (
                          String(item.qty).padStart(2, '0')
                        )}
                      </span>
                      <div className="flex flex-col border-l border-gray-300 h-full">
                        <button onClick={() => updateQty(item.id, item.qty + 1)} className="flex-1 flex items-center justify-center text-xs hover:bg-gray-50 border-b border-gray-300 btn-tactile">
                          <ChevronUp size={12} />
                        </button>
                        <button onClick={() => updateQty(item.id, item.qty - 1)} className="flex-1 flex items-center justify-center text-xs hover:bg-gray-50 btn-tactile">
                          <ChevronDown size={12} />
                        </button>
                      </div>
                    </div>
                    {/* Subtotal */}
                    <span className="text-base font-medium">${item.price * item.qty}</span>
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden flex gap-3">
                    {/* Image */}
                    <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                      <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-medium text-black truncate">{item.name}</h3>
                        <button onClick={() => handleRemove(item.id)} className="p-2 text-gray-400 hover:text-primary flex-shrink-0 btn-tactile" aria-label="Remove item">
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-primary font-bold mt-1">${item.price}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-gray-300 rounded h-9">
                          <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-primary btn-tactile">
                            <ChevronDown size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {qtyAnimById[item.id] ? (
                              <span className="qty-anim">
                                <span className="qty-old">{qtyAnimById[item.id].from}</span>
                                <span className="qty-new">{qtyAnimById[item.id].to}</span>
                              </span>
                            ) : (
                              item.qty
                            )}
                          </span>
                          <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-primary btn-tactile">
                            <ChevronUp size={14} />
                          </button>
                        </div>
                        <p className="text-sm"><span className="text-gray-500">Subtotal:</span> <span className="font-bold">${item.price * item.qty}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-6 sm:mt-8 mb-8 sm:mb-10">
              <Link to="/products" className="flex items-center justify-center gap-2 border border-black px-6 sm:px-10 py-2.5 sm:py-3.5 rounded text-sm sm:text-base hover:bg-black hover:text-white transition-colors btn-tactile btn-shadow-lift">
                <ArrowLeft size={16} />
                Return To Shop
              </Link>
              <button className="border border-black px-6 sm:px-10 py-2.5 sm:py-3.5 rounded text-sm sm:text-base hover:bg-black hover:text-white transition-colors btn-tactile btn-shadow-lift">Update Cart</button>
            </div>

            {/* Coupon + Total */}
            <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={coupon}
                  onChange={e => setCoupon(e.target.value)}
                  className="border border-black rounded px-4 sm:px-5 h-11 sm:h-14 w-full sm:w-72 text-sm sm:text-base outline-none focus:border-primary input-focus-glow"
                />
                <button className="bg-primary text-white px-6 sm:px-9 h-11 sm:h-14 rounded text-sm sm:text-base font-medium hover:bg-primary-hover transition-colors btn-tactile btn-shadow-lift btn-primary-glow">Apply Coupon</button>
              </div>

              {/* Cart Total */}
              <div className="border border-gray-300 rounded-lg p-6 sm:p-8 w-full lg:w-[470px]">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-4 sm:mb-6">Cart Total</h3>
                <div className="space-y-3 sm:space-y-4">
                  {totals.map(({ label, value }, i) => (
                    <div key={label} className={`flex justify-between items-center py-3 sm:py-4 ${i < 2 ? 'border-b border-gray-200' : ''}`}>
                      <span className="text-sm sm:text-base">{label}</span>
                      <span key={totalFlashKey} className={`text-sm sm:text-base font-medium ${i === 2 ? 'rounded px-2 -mx-2' : ''} ${i === 2 ? 'total-flash' : ''}`}>{value}</span>
                    </div>
                  ))}
                </div>
                <Link to="/checkout" className="bg-primary text-white block text-center py-3 sm:py-4 rounded mt-4 sm:mt-6 text-sm sm:text-base font-medium hover:bg-primary-hover transition-colors btn-tactile btn-shadow-lift btn-primary-glow">
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
