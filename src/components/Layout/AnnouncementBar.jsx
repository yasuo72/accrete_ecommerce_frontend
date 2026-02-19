import React from 'react'
import { ChevronDown } from 'lucide-react'

export default function AnnouncementBar() {
  return (
    <div className="bg-black text-white h-12 flex items-center justify-center px-4 relative">
      <p className="text-sm text-center">
        Summer sale for all swim suits and free express delivery - OFF 50%!{' '}
        <a href="/products" className="font-semibold underline hover:text-primary transition-colors">
          Shop now
        </a>
      </p>
      <div className="absolute right-4 hidden sm:flex items-center gap-1 text-sm cursor-pointer hover:text-gray-300">
        <span>English</span>
        <ChevronDown size={14} />
      </div>
    </div>
  )
}
