import React from 'react'
import AccountSidebar from '../components/UI/AccountSidebar'

export function MyReturnsPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-[88px] pb-20 pt-6">
      <div className="flex gap-20">
        <AccountSidebar />
        <div className="flex-1 bg-white rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-10">
          <h2 className="text-xl font-semibold text-primary mb-8">My Returns</h2>
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] bg-gray-100 px-4 py-3 rounded mb-2 text-sm font-semibold">
            {['Order', 'Product', 'Return Reason', 'Status', 'Action'].map(h => <span key={h}>{h}</span>)}
          </div>
          <div className="flex flex-col items-center py-20 text-center">
            <span className="text-5xl mb-4">📦</span>
            <h3 className="text-lg font-bold mb-2">No returns yet</h3>
            <p className="text-sm text-gray-500">You haven't returned any items.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function MyCancellationsPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-[88px] pb-20 pt-6">
      <div className="flex gap-20">
        <AccountSidebar />
        <div className="flex-1 bg-white rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-10">
          <h2 className="text-xl font-semibold text-primary mb-8">My Cancellations</h2>
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] bg-gray-100 px-4 py-3 rounded mb-2 text-sm font-semibold">
            {['Order', 'Date Cancelled', 'Reason', 'Refund Status'].map(h => <span key={h}>{h}</span>)}
          </div>
          <div className="flex flex-col items-center py-20 text-center">
            <span className="text-5xl mb-4">🚫</span>
            <h3 className="text-lg font-bold mb-2">No cancellations</h3>
            <p className="text-sm text-gray-500">You haven't cancelled any orders.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
