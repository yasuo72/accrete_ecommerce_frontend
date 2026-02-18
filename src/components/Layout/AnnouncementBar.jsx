import React from 'react'

export default function AnnouncementBar() {
  return (
    <div className="bg-black text-white h-12 flex items-center justify-center px-4 relative">
      <p className="text-sm text-center">
        Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{' '}
        <a href="/products" className="font-semibold underline hover:text-primary transition-colors">
          ShopNow
        </a>
      </p>
      <div className="absolute right-4 flex items-center gap-1 text-sm cursor-pointer hover:text-gray-300">
        <span>English</span>
        <span>▾</span>
      </div>
    </div>
  )
}
