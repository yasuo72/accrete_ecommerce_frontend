import React, { useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Breadcrumb from '../components/UI/Breadcrumb'
import ProductCard from '../components/UI/ProductCard'
import { products } from '../data/mockData'

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const results = useMemo(() => {
    if (!query) return []
    const q = query.toLowerCase()
    return products.filter(p =>
      p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: `Search: "${query}"` }]} />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[88px] pb-16 sm:pb-20">
        <p className="text-sm text-gray-500 mb-2">
          Search results for: <span className="font-bold text-black">"{query}"</span>
        </p>
        <p className="text-sm text-gray-500 mb-8">{results.length} results found</p>

        {results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {results.map((p, index) => (
              <div key={p.id} style={{ animationDelay: `${index * 50}ms` }} className="animate-in fade-in-0.5s slide-in-from-bottom-4">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center py-16 sm:py-24 text-center px-4">
            <span className="text-5xl sm:text-6xl lg:text-7xl mb-4 sm:mb-6">🔍</span>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">No results for "{query}"</h2>
            <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">Try checking your spelling or use more general terms</p>
            <Link to="/products" className="btn-primary px-8 sm:px-10 py-3 rounded text-sm sm:text-base btn-tactile">Browse All Products</Link>
          </div>
        )}
      </div>
    </div>
  )
}
