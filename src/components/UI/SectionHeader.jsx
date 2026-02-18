import React from 'react'

export default function SectionHeader({ tag, title }) {
  return (
    <div className="mb-6 sm:mb-8">
      <div className="flex items-center gap-3 mb-3 sm:mb-4">
        <div className="w-3 sm:w-4 h-8 sm:h-10 bg-primary rounded" />
        <span className="text-primary font-semibold text-sm sm:text-base leading-tight">{tag}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">{title}</h2>
    </div>
  )
}
