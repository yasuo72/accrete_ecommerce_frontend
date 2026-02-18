import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function AccountSidebar({ onLinkClick }) {
  const { pathname } = useLocation()

  const isActive = (to) => pathname === to

  const linkClass = (to) => `text-sm transition-colors hover:text-primary ${isActive(to) ? 'text-primary font-medium' : 'text-black'}`

  return (
    <aside className="w-[220px] flex-shrink-0">
      {/* Manage My Account */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-sm sm:text-base font-bold text-black mb-3 sm:mb-4">Manage My Account</h3>
        <ul className="pl-3 sm:pl-4 space-y-2 sm:space-y-3">
          {[
            { to: '/account', label: 'My Profile' },
            { to: '/account/addresses', label: 'Address Book' },
            { to: '/account/payment', label: 'My Payment Options' },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link to={to} onClick={onLinkClick} className={linkClass(to)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* My Orders */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-sm sm:text-base font-bold text-black mb-3 sm:mb-4">My Orders</h3>
        <ul className="pl-3 sm:pl-4 space-y-2 sm:space-y-3">
          {[
            { to: '/account/orders', label: 'Order History' },
            { to: '/account/returns', label: 'My Returns' },
            { to: '/account/cancellations', label: 'My Cancellations' },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link to={to} onClick={onLinkClick} className={linkClass(to)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Wishlist */}
      <div>
        <Link to="/wishlist" onClick={onLinkClick} className="text-sm sm:text-base font-bold text-black hover:text-primary transition-colors">
          My WishList
        </Link>
      </div>
    </aside>
  )
}
