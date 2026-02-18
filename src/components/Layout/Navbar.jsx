import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, Search, Heart, ShoppingCart, User, ChevronDown, Moon, Sun, SlidersHorizontal } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import { products } from '../../data/mockData'

const allCategories = [...new Set(products.map(p => p.category))]

export default function Navbar() {
  const { count: cartCount } = useCart()
  const { count: wishCount } = useWishlist()
  const { user, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const [search, setSearch] = useState('')
  const [searchScope, setSearchScope] = useState('All')
  const [searchScopeOpen, setSearchScopeOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cartBadgeKey, setCartBadgeKey] = useState(0)
  const [wishBadgeKey, setWishBadgeKey] = useState(0)
  const [categoryFilterOpen, setCategoryFilterOpen] = useState(false)
  const dropRef = useRef(null)
  const searchScopeRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isShopPage = location.pathname === '/products' || location.pathname === '/products/'

  useEffect(() => {
    const handler = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setDropdownOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if (searchScopeRef.current && !searchScopeRef.current.contains(e.target)) setSearchScopeOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (cartCount > 0) setCartBadgeKey(k => k + 1)
  }, [cartCount])

  useEffect(() => {
    if (wishCount > 0) setWishBadgeKey(k => k + 1)
  }, [wishCount])

  const handleSearch = (e) => {
    e.preventDefault()
    if (!search.trim()) return
    const q = encodeURIComponent(search.trim())
    const scope = searchScope && searchScope !== 'All' ? `&scope=${encodeURIComponent(searchScope)}` : ''
    navigate(`/search?q=${q}${scope}`)
    setSearch('')
  }

  const navLinks = []

  const categories = [
    "Woman's Fashion", "Men's Fashion", 'Electronics', 'Home & Lifestyle',
    'Medicine', 'Sports & Outdoor', "Baby's & Toys", 'Groceries & Pets', 'Health & Beauty'
  ]

  const searchScopes = ['All', ...categories]

  return (
    <>
      {/* Fixed Header */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-gray-200">
        <div className={`${scrolled ? 'nav-glass' : ''}`}>
          <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-[88px] h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4 flex-nowrap">
            {/* Mobile Menu Button */}
            <button
              className="p-2 text-black hover:text-primary transition-colors btn-tactile w-10 h-10 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X size={22} className="hamburger-to-x" />
              ) : (
                <Menu size={22} className={mobileMenuOpen ? 'x-to-hamburger' : ''} />
              )}
            </button>

            {/* Logo */}
            <Link to="/" className="text-xl sm:text-2xl font-bold text-black flex-shrink-0">Exclusive</Link>

            {/* Nav Links - Desktop */}
            <ul className={`hidden lg:flex items-center gap-10 ${mobileMenuOpen ? 'pointer-events-none opacity-0' : ''}`} />

            {/* Right: Search + Icons */}
            <div className="flex items-center gap-1.5 sm:gap-4 lg:gap-6 flex-shrink-0">
              {/* Search - Desktop (Amazon-like) */}
              <form onSubmit={handleSearch} className="hidden lg:flex items-stretch w-[520px]">
                <div className="relative" ref={searchScopeRef}>
                  <button
                    type="button"
                    onClick={() => setSearchScopeOpen(o => !o)}
                    className="h-10 px-2 text-sm bg-gray-100 border border-gray-200 rounded-l-md outline-none focus:ring-1 focus:ring-primary inline-flex items-center gap-1 w-[72px] justify-between"
                    aria-label="Search category"
                  >
                    <span className="truncate">{searchScope}</span>
                    <ChevronDown size={16} className="text-gray-500" />
                  </button>
                  {searchScopeOpen && (
                    <div className="absolute left-0 top-[calc(100%+6px)] w-56 max-h-72 overflow-auto bg-white border border-gray-200 rounded-md shadow-lg z-[400]">
                      {searchScopes.map(s => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => { setSearchScope(s); setSearchScopeOpen(false) }}
                          className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${searchScope === s ? 'text-primary font-semibold' : 'text-black'}`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search products"
                  className="flex-1 h-10 px-4 text-sm bg-white border-y border-gray-200 outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="h-10 w-12 bg-[#febd69] hover:bg-[#f3a847] border border-gray-200 rounded-r-md flex items-center justify-center btn-tactile"
                  aria-label="Search"
                >
                  <Search size={18} className="text-black" />
                </button>
              </form>

              {/* Category Filter - Shop Page Only */}
              {isShopPage && !mobileMenuOpen && (
                <button
                  onClick={() => setCategoryFilterOpen(true)}
                  className="lg:hidden p-2 text-black hover:text-primary transition-colors btn-tactile"
                  aria-label="Filter categories"
                >
                  <SlidersHorizontal size={20} />
                </button>
              )}

              {/* Wishlist */}
              <Link to="/wishlist" className="relative p-2 text-black hover:text-primary transition-colors btn-tactile">
                <Heart size={20} />
                {wishCount > 0 && (
                  <span
                    key={wishBadgeKey}
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center badge-pop"
                  >
                    {wishCount > 9 ? '9+' : wishCount}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link to="/cart" className="relative p-2 text-black hover:text-primary transition-colors btn-tactile">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span
                    key={cartBadgeKey}
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center badge-pop"
                  >
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </Link>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-black hover:text-primary transition-colors btn-tactile"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* User */}
              <div className="relative" ref={dropRef}>
                <button
                  onClick={() => setDropdownOpen(p => !p)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all btn-tactile btn-shadow-lift btn-primary-glow ${user ? 'bg-primary text-white' : 'text-black hover:text-primary'}`}
                >
                  {user ? <span className="text-sm font-bold">{user.firstName[0]}</span> : <User size={20} />}
                </button>

                {dropdownOpen && (
                  <div
                    className="absolute right-0 top-[calc(100%+8px)] w-48 rounded-xl shadow-lg z-[200] overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #8B3A8B 0%, #5A1E5A 100%)' }}
                  >
                    {user ? (
                      <>
                        <Link to="/account" onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-3 px-5 py-3 text-white text-sm hover:bg-white/10 transition-colors">
                          <User size={16} /> Manage My Account
                        </Link>
                        <Link to="/account/orders" onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-3 px-5 py-3 text-white text-sm hover:bg-white/10 transition-colors">
                          <ShoppingCart size={16} /> My Order
                        </Link>
                        <Link to="/wishlist" onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-3 px-5 py-3 text-white text-sm hover:bg-white/10 transition-colors">
                          <Heart size={16} /> My Wishlist
                        </Link>
                        <button onClick={() => { logout(); setDropdownOpen(false) }}
                          className="w-full flex items-center gap-3 text-left px-5 py-3 text-white text-sm hover:bg-red-500/30 transition-colors">
                          <X size={16} /> Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link to="/log-in" onClick={() => setDropdownOpen(false)}
                          className="block px-5 py-3 text-white text-sm hover:bg-white/10">Log In</Link>
                        <Link to="/sign-up" onClick={() => setDropdownOpen(false)}
                          className="block px-5 py-3 text-white text-sm hover:bg-white/10">Sign Up</Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Search - Mobile (full-width row) */}
          <div className={`lg:hidden border-t border-gray-200 bg-white ${isHomePage ? '' : 'hidden'}`}>
            <div className="max-w-[1440px] mx-auto px-3 sm:px-6">
              <form onSubmit={handleSearch} className="py-2 flex items-stretch">
                <div className="relative" ref={searchScopeRef}>
                  <button
                    type="button"
                    onClick={() => setSearchScopeOpen(o => !o)}
                    className="h-10 px-2 text-xs bg-gray-100 border border-gray-200 rounded-l-md outline-none focus:ring-1 focus:ring-primary inline-flex items-center gap-1 w-[64px] justify-between"
                    aria-label="Search category"
                  >
                    <span className="truncate">{searchScope}</span>
                    <ChevronDown size={14} className="text-gray-500" />
                  </button>
                  {searchScopeOpen && (
                    <div className="absolute left-0 top-[calc(100%+6px)] w-56 max-h-72 overflow-auto bg-white border border-gray-200 rounded-md shadow-lg z-[400]">
                      {searchScopes.map(s => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => { setSearchScope(s); setSearchScopeOpen(false) }}
                          className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${searchScope === s ? 'text-primary font-semibold' : 'text-black'}`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search"
                  className="flex-1 h-10 px-3 text-sm bg-white border-y border-gray-200 outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="h-10 w-11 bg-[#febd69] hover:bg-[#f3a847] border border-gray-200 rounded-r-md flex items-center justify-center btn-tactile"
                  aria-label="Search"
                >
                  <Search size={18} className="text-black" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {isHomePage && (
          <div className={`border-b border-gray-200 bg-white transition-all duration-300 ${scrolled ? 'opacity-0 max-h-0 overflow-hidden border-0' : 'opacity-100'}`}>
            <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-[88px] h-11 flex items-center">
              <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto whitespace-nowrap w-full scrollbar-hide">
                {categories.map(cat => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => navigate(`/products?category=${encodeURIComponent(cat)}`)}
                    className="h-8 px-3 rounded text-xs sm:text-sm font-medium text-black/80 hover:text-primary hover:bg-gray-50 transition-colors flex-shrink-0"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className={`${isHomePage ? 'h-[120px] sm:h-[140px]' : 'h-16 sm:h-20'}`} />

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[299]"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Category Filter Overlay */}
      {categoryFilterOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[298]"
          onClick={() => setCategoryFilterOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div className={`fixed left-0 top-0 bottom-0 w-[280px] bg-white shadow-xl z-[300] transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto overscroll-contain`}>
        <div className="p-4 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <Link to="/" className="text-xl font-bold text-black" onClick={() => setMobileMenuOpen(false)}>Exclusive</Link>
          <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-black hover:text-primary btn-tactile">
            <X size={24} />
          </button>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="p-4 border-b border-gray-200 sticky top-[64px] bg-white z-10">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full h-10 bg-gray-100 rounded px-4 pr-10 text-sm outline-none input-focus-glow"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 btn-tactile">
              <Search size={18} />
            </button>
          </div>
        </form>

        {/* Mobile Nav Links */}
        <div className="py-2" />
      </div>

      {/* Category Filter Drawer */}
      <div className={`fixed left-0 top-0 bottom-0 w-[280px] bg-white shadow-xl z-[300] transition-transform duration-300 ${categoryFilterOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <span className="text-base font-bold text-black">Filter by Category</span>
          <button onClick={() => setCategoryFilterOpen(false)} className="p-2 text-black hover:text-primary btn-tactile" aria-label="Close categories filter">
            <X size={20} />
          </button>
        </div>

        <div className="py-2">
          {['All', ...allCategories].map(cat => (
            <button
              key={cat}
              onClick={() => {
                navigate(`/products${cat === 'All' ? '' : `?category=${encodeURIComponent(cat)}`}`)
                setCategoryFilterOpen(false)
              }}
              className="w-full text-left h-12 text-sm px-6 border-b border-gray-100 transition-colors text-black hover:bg-gray-50 hover:text-primary"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
