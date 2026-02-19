import React from 'react'
import { Link } from 'react-router-dom'
import AccountSidebar from '../components/UI/AccountSidebar'
import { sampleOrders } from '../data/mockData'

const statusColors = {
  Delivered: 'bg-green-100 text-green-800',
  Shipped: 'bg-blue-100 text-blue-800',
  Processing: 'bg-yellow-100 text-yellow-800',
  Cancelled: 'bg-red-100 text-red-800',
  Pending: 'bg-orange-100 text-orange-800',
}

export default function OrderHistoryPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-[88px] pb-20 pt-6">
      <div className="flex gap-20">
        <AccountSidebar />
        <div className="flex-1 bg-white rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-10">
          <h2 className="text-xl font-semibold text-primary mb-8">My Orders</h2>

          {/* Table Header */}
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1.5fr] bg-gray-100 px-4 py-3 rounded mb-2 text-sm font-semibold">
            {['Order', 'Date', 'Status', 'Total', 'Action'].map(h => <span key={h}>{h}</span>)}
          </div>

          <div className="space-y-2">
            {sampleOrders.map(order => (
              <div key={order.id} className="grid grid-cols-[2fr_1fr_1fr_1fr_1.5fr] px-4 py-4 border border-gray-100 dark:border-slate-600 rounded items-center hover:bg-gray-50 dark:hover:bg-[#3d434f] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img src={order.items[0].image} alt="" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{order.id}</p>
                    <p className="text-xs text-gray-500">{order.items.length} item{order.items.length > 1 ? 's' : ''}</p>
                  </div>
                </div>
                <span className="text-sm">{order.date}</span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit ${statusColors[order.status] || 'bg-gray-100 text-gray-700'}`}>
                  {order.status}
                </span>
                <span className="text-sm font-semibold">${order.total.toLocaleString()}</span>
                <div className="flex gap-2">
                  <Link
                    to={`/account/orders/${order.id}`}
                    className="h-8 px-4 border border-black dark:border-slate-500 rounded text-xs font-medium flex items-center hover:bg-black dark:hover:bg-slate-700 hover:text-white transition-all"
                  >
                    View Details
                  </Link>
                  {order.status === 'Delivered' && (
                    <button className="h-8 px-4 bg-primary text-white rounded text-xs font-medium hover:bg-primary-hover transition-colors">
                      Reorder
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {sampleOrders.length === 0 && (
            <div className="flex flex-col items-center py-20 text-center">
              <span className="text-6xl mb-4">📦</span>
              <h3 className="text-xl font-bold mb-2">No orders yet</h3>
              <p className="text-gray-500 mb-6">When you place orders, they'll appear here.</p>
              <Link to="/products" className="btn-primary px-10 py-3 rounded">Start Shopping</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
