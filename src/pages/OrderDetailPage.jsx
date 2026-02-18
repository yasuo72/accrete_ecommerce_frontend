import React from 'react'
import { useParams, Link } from 'react-router-dom'
import AccountSidebar from '../components/UI/AccountSidebar'
import { sampleOrders } from '../data/mockData'

const statusColors = {
  Delivered: 'bg-green-100 text-green-800',
  Shipped: 'bg-blue-100 text-blue-800',
  Processing: 'bg-yellow-100 text-yellow-800',
  Cancelled: 'bg-red-100 text-red-800',
}

const steps = ['Order Placed', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered']

export default function OrderDetailPage() {
  const { id } = useParams()
  const order = sampleOrders.find(o => o.id === id) || sampleOrders[0]
  const stepIndex = { 'Processing': 1, 'Shipped': 2, 'Delivered': 4, 'Cancelled': 0 }[order.status] ?? 0

  return (
    <div className="max-w-[1200px] mx-auto px-[88px] pb-20 pt-6">
      <div className="flex gap-20">
        <AccountSidebar />
        <div className="flex-1">
          <Link to="/account/orders" className="text-sm text-gray-500 hover:text-primary flex items-center gap-1 mb-6">← Back to Orders</Link>

          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-semibold text-primary">{order.id}</h2>
              <p className="text-sm text-gray-500 mt-1">Placed on {order.date}</p>
            </div>
            <span className={`text-sm font-semibold px-4 py-1.5 rounded-full ${statusColors[order.status] || 'bg-gray-100'}`}>{order.status}</span>
          </div>

          <div className="grid grid-cols-[1fr_360px] gap-8">
            {/* Items */}
            <div className="bg-white rounded-lg shadow-card p-6">
              <h3 className="font-semibold mb-4">Order Items</h3>
              <div className="space-y-4">
                {order.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0">
                    <div className="w-[72px] h-[72px] bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                      <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-base">{item.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                    </div>
                    <span className="text-base font-semibold text-primary">${item.price * item.qty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-card p-6">
                <h3 className="font-semibold mb-4">Order Summary</h3>
                {[{ l: 'Subtotal', v: `$${order.total}` }, { l: 'Shipping', v: 'Free' }, { l: 'Total', v: `$${order.total}` }].map(({ l, v }, i) => (
                  <div key={l} className={`flex justify-between py-3 ${i < 2 ? 'border-b border-gray-100' : 'font-bold'}`}>
                    <span className="text-sm">{l}</span><span className="text-sm">{v}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-lg shadow-card p-6">
                <h3 className="font-semibold mb-3">Payment Method</h3>
                <p className="text-sm text-gray-600">Cash on delivery</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          {order.status !== 'Cancelled' && (
            <div className="mt-8 bg-white rounded-lg shadow-card p-6">
              <h3 className="font-semibold mb-6">Order Status</h3>
              <div className="flex items-center">
                {steps.map((step, i) => (
                  <React.Fragment key={step}>
                    <div className="flex flex-col items-center flex-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all
                        ${i <= stepIndex ? 'bg-primary text-white' : 'bg-white border-2 border-gray-200 text-gray-400'}`}>
                        {i < stepIndex ? '✓' : i + 1}
                      </div>
                      <p className={`text-xs mt-2 text-center ${i <= stepIndex ? 'text-black font-medium' : 'text-gray-400'}`}>{step}</p>
                    </div>
                    {i < steps.length - 1 && (
                      <div className={`h-0.5 flex-1 -mt-5 ${i < stepIndex ? 'bg-primary' : 'bg-gray-200'}`} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
