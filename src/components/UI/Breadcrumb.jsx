import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumb({ items }) {
  // items: [{ label, to }, ...] last item has no `to`
  return (
    <div className="max-w-[1200px] mx-auto px-[88px] py-6">
      <nav className="flex items-center gap-2 text-sm text-gray-400">
        {items.map((item, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span>/</span>}
            {item.to ? (
              <Link to={item.to} className="hover:text-primary transition-colors">{item.label}</Link>
            ) : (
              <span className="text-black font-medium">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  )
}
