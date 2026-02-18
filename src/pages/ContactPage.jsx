import React, { useState } from 'react'
import Breadcrumb from '../components/UI/Breadcrumb'
import { useToast } from '../context/ToastContext'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const { showToast } = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    showToast('Your message has been sent! We\'ll get back to you within 24 hours.')
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px] pb-10 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-4 sm:gap-6 lg:gap-8">

          {/* Info Card */}
          <div className="bg-white shadow-sm border border-gray-100 rounded p-5 sm:p-8 lg:p-10">
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center text-white text-base sm:text-lg">📞</div>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-black mb-1.5 sm:mb-2">Call To Us</h3>
              <p className="text-xs sm:text-sm text-black mb-2 sm:mb-3">We are available 24/7, 7 days a week.</p>
              <p className="text-xs sm:text-sm text-black">Phone: +8801611112222</p>
            </div>

            <div className="border-t border-gray-200 pt-6 sm:pt-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center text-white text-base sm:text-lg">✉️</div>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-black mb-1.5 sm:mb-2">Write To Us</h3>
              <p className="text-xs sm:text-sm text-black mb-2 sm:mb-3">Fill out our form and we will contact you within 24 hours.</p>
              <p className="text-xs sm:text-sm text-black mb-1">Emails: customer@exclusive.com</p>
              <p className="text-xs sm:text-sm text-black">Emails: support@exclusive.com</p>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white shadow-sm border border-gray-100 rounded p-4 sm:p-6 lg:p-10">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <input 
                  className="w-full border border-gray-300 rounded px-3 sm:px-4 h-10 sm:h-12 text-sm sm:text-base outline-none focus:border-primary" 
                  placeholder="Your Name *" 
                  value={form.name} 
                  onChange={e => setForm({ ...form, name: e.target.value })} 
                  required 
                />
                <input 
                  type="email" 
                  className="w-full border border-gray-300 rounded px-3 sm:px-4 h-10 sm:h-12 text-sm sm:text-base outline-none focus:border-primary" 
                  placeholder="Your Email *" 
                  value={form.email} 
                  onChange={e => setForm({ ...form, email: e.target.value })} 
                  required 
                />
                <input 
                  type="tel" 
                  className="w-full border border-gray-300 rounded px-3 sm:px-4 h-10 sm:h-12 text-sm sm:text-base outline-none focus:border-primary" 
                  placeholder="Your Phone *" 
                  value={form.phone} 
                  onChange={e => setForm({ ...form, phone: e.target.value })} 
                  required 
                />
              </div>
              <textarea
                className="w-full border border-gray-300 rounded px-3 sm:px-4 h-40 sm:h-52 resize-none mb-4 sm:mb-6 pt-3 text-sm sm:text-base outline-none focus:border-primary"
                placeholder="Your Message"
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
              />
              <div className="flex justify-end">
                <button 
                  type="submit" 
                  className="bg-primary text-white w-full sm:w-auto px-8 sm:px-14 py-3 sm:py-4 rounded text-sm sm:text-base font-medium hover:bg-primary-hover transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
