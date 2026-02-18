import React from 'react'

export default function StarRating({ rating, size = 'sm' }) {
  const px = size === 'lg' ? 'text-lg' : size === 'md' ? 'text-base' : 'text-sm'
  return (
    <div className={`flex items-center gap-0.5 ${px}`}>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} style={{ color: i <= Math.round(rating) ? '#FFAD33' : '#E0E0E0' }}>★</span>
      ))}
    </div>
  )
}
