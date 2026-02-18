import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreditCard, Truck, X } from 'lucide-react'
import Breadcrumb from '../components/UI/Breadcrumb'
import { useCart } from '../context/CartContext'

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const navigate = useNavigate()
  const [payment, setPayment] = useState('cash')
  const [form, setForm] = useState({ firstName: '', company: '', street: '', apt: '', city: '', phone: '', email: '', saveInfo: true })
  const prevTotalRef = useRef(total)
  const [totalFlashKey, setTotalFlashKey] = useState(0)

  useEffect(() => {
    if (prevTotalRef.current !== total) {
      setTotalFlashKey(k => k + 1)
      prevTotalRef.current = total
    }
  }, [total])

  const steps = useMemo(() => ([
    { label: 'Cart', active: true },
    { label: 'Details', active: true },
    { label: 'Payment', active: false },
    { label: 'Confirm', active: false },
  ]), [])

  const handleOrder = (e) => {
    e.preventDefault()
    const orderId = 'ORD-' + Date.now().toString().slice(-6)
    clearCart()
    navigate(`/order-confirmation/${orderId}`)
  }

  return (
    <div>
      <Breadcrumb items={[
        { label: 'Account', to: '/account' }, { label: 'My Account', to: '/account' },
        { label: 'Product', to: '/products' }, { label: 'View Cart', to: '/cart' }, { label: 'CheckOut' }
      ]} />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px] pb-10 sm:pb-16 lg:pb-20">
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between gap-2">
            {steps.map((s, idx) => (
              <div key={s.label} className="flex-1">
                <div className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${s.active ? 'bg-primary animate-pulse' : 'bg-gray-300'}`} />
                  <span className={`text-xs sm:text-sm ${s.active ? 'text-black font-semibold' : 'text-gray-400'}`}>{s.label}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div className={`h-[3px] rounded-full mt-2 ${steps[idx + 1].active ? 'bg-primary' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6 sm:mb-10">Billing Details</h1>
        <form onSubmit={handleOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-20">
            {/* Left - Form */}
            <div className="space-y-4 sm:space-y-6">
              {[
                { label: 'First Name*', key: 'firstName', required: true },
                { label: 'Company Name', key: 'company' },
                { label: 'Street Address*', key: 'street', required: true },
                { label: 'Apartment, floor, etc. (optional)', key: 'apt' },
                { label: 'Town/City*', key: 'city', required: true },
                { label: 'Phone Number*', key: 'phone', type: 'tel', required: true },
                { label: 'Email Address*', key: 'email', type: 'email', required: true },
              ].map(({ label, key, type = 'text', required }) => (
                <div key={key}>
                  <label className="block text-sm sm:text-base text-black mb-1.5 sm:mb-2">{label}</label>
                  <input type={type} required={required} value={form[key]}
                    onChange={e => setForm({ ...form, [key]: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 sm:px-4 h-10 sm:h-12 text-sm sm:text-base outline-none focus:border-primary transition-colors input-focus-glow" />
                </div>
              ))}
              <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                <input type="checkbox" checked={form.saveInfo} onChange={e => setForm({ ...form, saveInfo: e.target.checked })}
                  className="w-4 sm:w-5 h-4 sm:h-5 accent-primary" />
                <span className="text-xs sm:text-sm lg:text-base">Save this information for faster check-out next time</span>
              </label>
            </div>

            {/* Right - Summary */}
            <div className="bg-gray-50 lg:bg-transparent rounded-lg p-4 sm:p-6 lg:p-0">
              {/* Items */}
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                {items.map(item => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-4">
                      <div className="w-12 h-12 sm:w-[54px] sm:h-[54px] bg-gray-100 rounded flex items-center justify-center flex-shrink-0 relative">
                        <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[10px] rounded-full flex items-center justify-center">{item.qty}</span>
                      </div>
                      <span className="text-xs sm:text-sm lg:text-base truncate max-w-[120px] sm:max-w-none">{item.name}</span>
                    </div>
                    <span className="text-xs sm:text-sm lg:text-base font-medium">${item.price * item.qty}</span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-2 sm:space-y-4 mb-4 sm:mb-6">
                {[{ l: 'Subtotal:', v: `$${total}` }, { l: 'Shipping:', v: 'Free' }, { l: 'Total:', v: `$${total}` }].map(({ l, v }, i) => (
                  <div key={l} className={`flex justify-between py-2 sm:py-4 ${i < 2 ? 'border-b border-gray-200' : ''}`}>
                    <span className="text-xs sm:text-sm lg:text-base">{l}</span>
                    <span key={totalFlashKey} className={`text-xs sm:text-sm lg:text-base ${i === 2 ? 'font-bold text-lg sm:text-xl rounded px-2 -mx-2 total-flash' : ''}`}>{v}</span>
                  </div>
                ))}
              </div>

              {/* Payment */}
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <label className="flex items-center justify-between cursor-pointer p-3 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <input type="radio" name="payment" value="bank" checked={payment === 'bank'} onChange={() => setPayment('bank')} className="accent-primary w-4 h-4" />
                    <span className="text-xs sm:text-sm lg:text-base">Bank</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <CreditCard size={16} className="text-gray-400" />
                    <CreditCard size={16} className="text-gray-400" />
                    <CreditCard size={16} className="text-gray-400" />
                  </div>
                </label>
                <label className="flex items-center gap-2 sm:gap-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <input type="radio" name="payment" value="cash" checked={payment === 'cash'} onChange={() => setPayment('cash')} className="accent-primary w-4 h-4" />
                  <Truck size={18} className="text-gray-500" />
                  <span className="text-xs sm:text-sm lg:text-base">Cash on delivery</span>
                </label>
              </div>

              {/* Coupon */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 sm:mb-6">
                <input type="text" placeholder="Coupon Code"
                  className="flex-1 border border-gray-300 rounded px-3 sm:px-5 h-10 sm:h-14 text-sm sm:text-base outline-none focus:border-primary input-focus-glow" />
                <button type="button" className="bg-primary text-white px-6 sm:px-9 h-10 sm:h-14 rounded text-sm sm:text-base font-medium hover:bg-primary-hover transition-colors btn-tactile btn-shadow-lift btn-primary-glow">Apply Coupon</button>
              </div>

              <button type="submit" className="w-full bg-primary text-white px-8 sm:px-12 py-3 sm:py-4 rounded text-sm sm:text-base font-medium hover:bg-primary-hover transition-colors btn-tactile btn-shadow-lift btn-primary-glow">Place Order</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
