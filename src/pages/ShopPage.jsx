import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Breadcrumb from '../components/UI/Breadcrumb'
import ProductCard from '../components/UI/ProductCard'
import SectionHeader from '../components/UI/SectionHeader'
import { products } from '../data/mockData'

const allCategories = [...new Set(products.map(p => p.category))]

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const initialCat = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(initialCat)
  const [sort, setSort] = useState('Best Match')
  const [page, setPage] = useState(1)
  const PER_PAGE = 8

  const filtered = useMemo(() => {
    let list = category === 'All' ? products : products.filter(p => p.category === category)
    if (sort === 'Price: Low to High') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'Price: High to Low') list = [...list].sort((a, b) => b.price - a.price)
    return list
  }, [category, sort])

  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const handleCategoryChange = (cat) => {
    setCategory(cat)
    setPage(1)
  }

  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: category === 'All' ? 'Shop' : category }]} />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px] pb-10 sm:pb-16 lg:pb-20">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-14">
          {/* Filter Sidebar - Desktop */}
          <aside className="w-[220px] flex-shrink-0 hidden lg:block">
            <h3 className="text-base font-bold text-black mb-4 pb-2 border-b border-gray-200">All Categories</h3>
            <ul>
              {['All', ...allCategories].map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => handleCategoryChange(cat)}
                    className={`w-full text-left h-10 text-sm px-2 border-b border-gray-100 transition-colors hover:text-primary
                      ${category === cat ? 'text-primary font-semibold border-l-2 border-l-primary pl-3' : 'text-black'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm text-gray-500">Showing {paged.length} of {filtered.length} results</p>
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="border border-gray-200 rounded px-3 h-9 sm:h-10 text-xs sm:text-sm outline-none focus:border-primary w-full sm:w-auto"
              >
                {['Best Match', 'Price: Low to High', 'Price: High to Low', 'Newest Arrivals'].map(o => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            <SectionHeader tag={category === 'All' ? 'All Products' : category} title={category === 'All' ? 'Shop All' : category} />

            {paged.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {paged.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 sm:py-24 text-center">
                <span className="text-4xl sm:text-6xl mb-4">🛍️</span>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">No Products Found</h3>
                <p className="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">Try adjusting your filters</p>
                <button onClick={() => setCategory('All')} className="bg-primary text-white px-6 sm:px-10 py-2 sm:py-3 rounded text-sm sm:text-base hover:bg-primary-hover transition-colors">Clear Filters</button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-1 sm:gap-2 mt-8 sm:mt-12">
                <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
                  className="w-8 sm:w-10 h-8 sm:h-10 border border-gray-200 rounded flex items-center justify-center disabled:opacity-40 hover:bg-gray-50">
                  <ChevronLeft size={16} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                  <button key={n} onClick={() => setPage(n)}
                    className={`w-8 sm:w-10 h-8 sm:h-10 border rounded flex items-center justify-center text-xs sm:text-sm transition-colors
                      ${n === page ? 'bg-primary border-primary text-white font-bold' : 'border-gray-200 hover:bg-gray-50'}`}>
                    {n}
                  </button>
                ))}
                <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                  className="w-8 sm:w-10 h-8 sm:h-10 border border-gray-200 rounded flex items-center justify-center disabled:opacity-40 hover:bg-gray-50">
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
