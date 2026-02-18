import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Breadcrumb from '../components/UI/Breadcrumb'
import AccountSidebar from '../components/UI/AccountSidebar'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'

export default function AccountPage() {
  const { user } = useAuth()
  const { showToast } = useToast()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [form, setForm] = useState({
    firstName: user?.firstName || 'Md',
    lastName: user?.lastName || 'Rimel',
    email: user?.email || 'rimel1111@gmail.com',
    address: user?.address || 'Kingston, 5236, United State',
    currentPass: '', newPass: '', confirmPass: '',
  })

  const handleSave = (e) => {
    e.preventDefault()
    showToast('Profile updated successfully!')
  }

  return (
    <div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px]">
        <div className="flex items-center justify-between py-4 sm:py-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
            <a href="/" className="hover:text-primary">Home</a>
            <span>/</span>
            <span className="text-black font-medium">My Account</span>
          </nav>
          <p className="text-xs sm:text-sm">Welcome! <span className="text-primary font-medium">{user?.name || 'Md Rimel'}</span></p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px] pb-10 sm:pb-16 lg:pb-20">
        {/* Mobile Sidebar Toggle */}
        <button 
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden flex items-center gap-2 mb-4 text-sm font-medium text-primary"
        >
          <Menu size={20} />
          Account Menu
        </button>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Mobile Sidebar Drawer */}
        <div className={`fixed left-0 top-0 bottom-0 w-[260px] bg-white z-50 lg:hidden transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-bold text-black">Account Menu</h3>
            <button onClick={() => setSidebarOpen(false)} className="p-1">
              <X size={20} />
            </button>
          </div>
          <div className="p-4">
            <AccountSidebar onLinkClick={() => setSidebarOpen(false)} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-20">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <AccountSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-10">
            <h2 className="text-lg sm:text-xl font-semibold text-primary mb-6 sm:mb-8">Edit Your Profile</h2>
            <form onSubmit={handleSave} className="space-y-4 sm:space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm sm:text-base mb-1.5 sm:mb-2">First Name</label>
                  <input value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} className="w-full border border-gray-300 rounded px-3 sm:px-4 h-10 sm:h-12 text-sm sm:text-base outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm sm:text-base mb-1.5 sm:mb-2">Last Name</label>
                  <input value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} className="w-full border border-gray-300 rounded px-3 sm:px-4 h-10 sm:h-12 text-sm sm:text-base outline-none focus:border-primary" />
                </div>
              </div>
              {/* Email + Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm sm:text-base mb-1.5 sm:mb-2">Email</label>
                  <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-300 rounded px-3 sm:px-4 h-10 sm:h-12 text-sm sm:text-base outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm sm:text-base mb-1.5 sm:mb-2">Address</label>
                  <input value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} className="w-full border border-gray-300 rounded px-3 sm:px-4 h-10 sm:h-12 text-sm sm:text-base outline-none focus:border-primary" />
                </div>
              </div>
              {/* Password */}
              <div>
                <label className="block text-sm sm:text-base mb-3 sm:mb-4">Password Changes</label>
                <div className="space-y-3 sm:space-y-4">
                  <input type="password" placeholder="Current Password" value={form.currentPass} onChange={e => setForm({ ...form, currentPass: e.target.value })} className="w-full border border-gray-300 rounded px-3 sm:px-4 h-10 sm:h-12 text-sm sm:text-base outline-none focus:border-primary" />
                  <input type="password" placeholder="New Password" value={form.newPass} onChange={e => setForm({ ...form, newPass: e.target.value })} className="w-full border border-gray-300 rounded px-3 sm:px-4 h-10 sm:h-12 text-sm sm:text-base outline-none focus:border-primary" />
                  <input type="password" placeholder="Confirm New Password" value={form.confirmPass} onChange={e => setForm({ ...form, confirmPass: e.target.value })} className="w-full border border-gray-300 rounded px-3 sm:px-4 h-10 sm:h-12 text-sm sm:text-base outline-none focus:border-primary" />
                </div>
              </div>
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 sm:gap-8 pt-4">
                <button type="button" className="text-sm sm:text-base font-medium hover:text-primary transition-colors text-center">Cancel</button>
                <button type="submit" className="bg-primary text-white w-full sm:w-[214px] py-3 sm:py-4 rounded text-sm sm:text-base font-medium hover:bg-primary-hover transition-colors">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
