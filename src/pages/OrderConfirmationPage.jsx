import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function OrderConfirmationPage() {
  const { id } = useParams()

  return (
    <div className="max-w-[1200px] mx-auto px-[88px] py-20">
      <div className="flex flex-col items-center text-center">
        {/* Checkmark */}
        <div className="w-20 h-20 mb-6 check-bounce">
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <circle cx="32" cy="32" r="30" fill="#DB4444" />
            <path
              d="M18 34 L28 44 L46 22"
              fill="none"
              stroke="#ffffff"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="check-draw"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-black mb-2">Your Order is Confirmed!</h1>
        <p className="text-base text-gray-500 max-w-lg leading-relaxed mb-10">
          Thank you for your purchase. We've received your order and will process it shortly.
        </p>

        {/* Order Box */}
        <div className="w-full max-w-xl border border-gray-200 rounded-lg overflow-hidden text-left mb-10">
          <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
            <span className="font-bold text-black">Order #{id}</span>
            <span className="text-sm text-gray-500">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="px-6 py-4 space-y-4">
            <div className="flex justify-between py-4 border-b border-gray-100">
              <span className="text-sm text-gray-500">Subtotal:</span>
              <span className="text-sm font-medium">$1,750.00</span>
            </div>
            <div className="flex justify-between py-4 border-b border-gray-100">
              <span className="text-sm text-gray-500">Shipping:</span>
              <span className="text-sm">Free</span>
            </div>
            <div className="flex justify-between py-4">
              <span className="font-bold">Total:</span>
              <span className="font-bold">$1,750.00</span>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-gray-200 flex items-center gap-3 text-sm text-gray-500">
            <span className="text-xl">🚚</span>
            Estimated delivery: 3–5 business days
          </div>
        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link to="/products" className="btn-primary px-10 py-4 rounded text-base btn-tactile btn-shadow-lift btn-primary-glow">Continue Shopping</Link>
          <Link to="/account/orders" className="btn-outline px-10 py-4 rounded text-base btn-tactile btn-shadow-lift">View Order Details</Link>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          A confirmation email has been sent to <span className="font-medium text-black">your@email.com</span>
        </p>
      </div>
    </div>
  )
}
