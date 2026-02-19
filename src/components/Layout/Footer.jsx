import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 sm:pt-16 pb-8 sm:pb-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4 sm:mb-6">Exclusive</h2>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Subscribe</h3>
            <p className="text-sm mb-3 sm:mb-4 text-white/80">Get 10% off your first order</p>
            <div className="flex h-10 sm:h-12">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border border-white rounded-l px-3 sm:px-4 text-sm text-white placeholder-white/50 outline-none focus:border-primary"
              />
              <button className="w-10 sm:w-12 border border-white border-l-0 rounded-r flex items-center justify-center hover:bg-white/10 transition-colors">
                <Send size={16} />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Support</h3>
            <div className="space-y-2 sm:space-y-3 text-sm text-white/80 leading-relaxed">
              <p>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Account</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              {[
                { to: '/account', label: 'My Account' },
                { to: '/log-in', label: 'Login / Register' },
                { to: '/cart', label: 'Cart' },
                { to: '/wishlist', label: 'Wishlist' },
                { to: '/products', label: 'Shop' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-white/80 hover:text-primary transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Quick Link</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              {[
                { to: '/contact', label: 'Privacy Policy' },
                { to: '/contact', label: 'Terms Of Use' },
                { to: '/contact', label: 'FAQ' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="text-white/80 hover:text-primary transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Download App</h3>
            <p className="text-xs text-white/70 mb-3">Save $3 with App New User Only</p>
            <div className="flex gap-3 items-center mb-4 sm:mb-6">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white rounded flex items-center justify-center text-xs sm:text-sm font-bold text-black tracking-wider">
                APP
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <div className="bg-black border border-white/30 rounded px-2 sm:px-3 py-1 text-xs text-white text-center">
                  GET IT ON<br /><span className="font-bold text-sm">Google Play</span>
                </div>
                <div className="bg-black border border-white/30 rounded px-2 sm:px-3 py-1 text-xs text-white text-center">
                  Download on the<br /><span className="font-bold text-sm">App Store</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" aria-label="Facebook" className="p-1 hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter" className="p-1 hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram" className="p-1 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn" className="p-1 hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 sm:pt-5 text-center text-xs sm:text-sm text-white/50">
          Copyright Rimel 2022. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
