import React, { useState } from 'react'
import AccountSidebar from '../components/UI/AccountSidebar'
import { useToast } from '../context/ToastContext'
import { sampleAddresses } from '../data/mockData'

export default function AddressBookPage() {
  const [addresses, setAddresses] = useState(sampleAddresses)
  const [showModal, setShowModal] = useState(false)
  const [editAddr, setEditAddr] = useState(null)
  const { showToast } = useToast()

  const handleDelete = (id) => {
    setAddresses(prev => prev.filter(a => a.id !== id))
    showToast('Address deleted')
  }

  const handleSetDefault = (id) => {
    setAddresses(prev => prev.map(a => ({ ...a, isDefault: a.id === id })))
    showToast('Default address updated')
  }

  return (
    <div className="max-w-[1200px] mx-auto px-[88px] pb-20 pt-6">
      <div className="flex gap-20">
        <AccountSidebar />
        <div className="flex-1 bg-white rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold text-primary">Address Book</h2>
            <button onClick={() => { setEditAddr(null); setShowModal(true) }}
              className="btn-primary px-6 py-2.5 rounded text-sm">+ Add New Address</button>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {addresses.map(addr => (
              <div key={addr.id} className={`border-2 rounded-lg p-6 relative cursor-pointer transition-all
                ${addr.isDefault ? 'border-primary' : 'border-gray-200 hover:border-gray-400'}`}>
                {addr.isDefault && (
                  <span className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">Default</span>
                )}
                <p className="text-sm font-bold text-black mb-3">{addr.type}</p>
                <p className="text-sm font-semibold text-black mb-1">{addr.name}</p>
                <p className="text-sm text-gray-500 mb-1">{addr.phone}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{addr.address}<br />{addr.city}, {addr.country}</p>
                <div className="flex gap-4 mt-4">
                  <button onClick={() => { setEditAddr(addr); setShowModal(true) }}
                    className="text-sm hover:text-primary transition-colors">Edit</button>
                  <button onClick={() => handleDelete(addr.id)}
                    className="text-sm text-primary hover:text-primary-hover transition-colors">Delete</button>
                  {!addr.isDefault && (
                    <button onClick={() => handleSetDefault(addr.id)}
                      className="text-sm text-gray-500 hover:text-primary transition-colors">Set as Default</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-[400] flex items-center justify-center">
          <div className="bg-white rounded-xl p-10 w-[560px] shadow-modal">
            <div className="flex items-center justify-between mb-7">
              <h3 className="text-xl font-bold">{editAddr ? 'Edit Address' : 'Add New Address'}</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-black text-2xl w-8 h-8 flex items-center justify-center">×</button>
            </div>
            <div className="flex gap-3 mb-6">
              {['Home', 'Work', 'Other'].map(t => (
                <button key={t} className={`px-5 py-2 border rounded text-sm transition-all
                  ${(editAddr?.type || 'Home') === t ? 'border-primary text-primary bg-red-50' : 'border-gray-200 hover:border-primary'}`}>{t}</button>
              ))}
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input className="input-base" placeholder="First Name" defaultValue={editAddr?.name?.split(' ')[0] || ''} />
                <input className="input-base" placeholder="Last Name" defaultValue={editAddr?.name?.split(' ')[1] || ''} />
              </div>
              <input type="tel" className="input-base" placeholder="Phone Number" defaultValue={editAddr?.phone || ''} />
              <input className="input-base" placeholder="Street Address" defaultValue={editAddr?.address || ''} />
              <div className="grid grid-cols-2 gap-4">
                <input className="input-base" placeholder="City" defaultValue={editAddr?.city || ''} />
                <input className="input-base" placeholder="Country" defaultValue={editAddr?.country || ''} />
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-8">
              <button onClick={() => setShowModal(false)} className="btn-outline px-6 py-3 rounded">Cancel</button>
              <button onClick={() => { setShowModal(false); showToast('Address saved!') }}
                className="btn-primary px-10 py-3 rounded">Save Address</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
