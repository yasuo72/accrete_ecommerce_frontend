import React, { useState } from 'react'
import AccountSidebar from '../components/UI/AccountSidebar'
import { useToast } from '../context/ToastContext'

const sampleCards = [
  { id: 1, brand: 'Visa', last4: '4242', expiry: '12/27', isDefault: true },
  { id: 2, brand: 'Mastercard', last4: '8888', expiry: '06/26', isDefault: false },
]

export default function PaymentOptionsPage() {
  const [cards, setCards] = useState(sampleCards)
  const [showModal, setShowModal] = useState(false)
  const { showToast } = useToast()

  return (
    <div className="max-w-[1200px] mx-auto px-[88px] pb-20 pt-6">
      <div className="flex gap-20">
        <AccountSidebar />
        <div className="flex-1 bg-white rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold text-primary">Payment Options</h2>
            <button onClick={() => setShowModal(true)} className="btn-primary px-6 py-2.5 rounded text-sm">+ Add New Card</button>
          </div>

          <div className="space-y-4 mb-10">
            {cards.map(card => (
              <div key={card.id} className={`border-2 rounded-lg p-6 flex items-center gap-5 relative transition-all
                ${card.isDefault ? 'border-primary' : 'border-gray-200'}`}>
                {card.isDefault && (
                  <span className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">Default</span>
                )}
                <div className="w-14 h-9 bg-white border border-gray-200 rounded flex items-center justify-center text-xl">
                  {card.brand === 'Visa' ? '💳' : '💳'}
                </div>
                <div>
                  <p className="font-semibold text-base text-black">•••• •••• •••• {card.last4}</p>
                  <p className="text-sm text-gray-500 mt-0.5">Expires {card.expiry}</p>
                </div>
                <div className="flex gap-4 ml-auto pr-16">
                  <button className="text-sm hover:text-primary transition-colors">Edit</button>
                  <button onClick={() => { setCards(c => c.filter(x => x.id !== card.id)); showToast('Card removed') }}
                    className="text-sm text-primary hover:text-primary-hover">Delete</button>
                  {!card.isDefault && (
                    <button onClick={() => { setCards(c => c.map(x => ({ ...x, isDefault: x.id === card.id }))); showToast('Default card updated') }}
                      className="text-sm text-gray-500 hover:text-primary">Set Default</button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Other Payment Methods</h3>
            <div className="flex gap-3">
              {['bKash', 'Nagad', 'Cash on Delivery'].map(m => (
                <div key={m} className="border border-gray-200 rounded-lg px-5 h-14 flex items-center justify-center text-sm font-medium cursor-pointer hover:border-primary transition-colors">
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-[400] flex items-center justify-center">
          <div className="bg-white rounded-xl p-10 w-[500px] shadow-modal">
            <div className="flex justify-between mb-6">
              <h3 className="text-xl font-bold">Add New Card</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-black text-2xl">×</button>
            </div>
            {/* Visual Card */}
            <div className="h-44 rounded-xl mb-8 p-6 relative text-white overflow-hidden" style={{ background: 'linear-gradient(135deg,#434343,#000)' }}>
              <span className="text-3xl absolute top-6 left-6">⬛</span>
              <p className="absolute bottom-12 left-6 text-lg tracking-widest">•••• •••• •••• ••••</p>
              <p className="absolute bottom-6 left-6 text-sm">Card Holder</p>
              <p className="absolute bottom-6 right-6 text-sm">MM/YY</p>
            </div>
            <div className="space-y-4">
              <input className="input-base" placeholder="Card Number" />
              <input className="input-base" placeholder="Cardholder Name" />
              <div className="grid grid-cols-2 gap-4">
                <input className="input-base" placeholder="MM / YY" />
                <input type="password" className="input-base" placeholder="CVV" />
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-8">
              <button onClick={() => setShowModal(false)} className="btn-outline px-6 py-3 rounded">Cancel</button>
              <button onClick={() => { setShowModal(false); showToast('Card added!') }}
                className="btn-primary px-10 py-3 rounded">Add Card</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
