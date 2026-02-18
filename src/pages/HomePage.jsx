import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ChevronRight as ChevronRightIcon } from 'lucide-react'
import ProductCard from '../components/UI/ProductCard'
import SectionHeader from '../components/UI/SectionHeader'
import { flashSaleProducts, bestSellingProducts, exploreProducts, categories } from '../data/mockData'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

// ── Countdown Timer ──────────────────────────────────────────
function useCountdown(target) {
  const [time, setTime] = useState({ days: 3, hours: 23, minutes: 19, seconds: 56 })
  useEffect(() => {
    const id = setInterval(() => {
      setTime(t => {
        let { days, hours, minutes, seconds } = t
        if (seconds > 0) return { ...t, seconds: seconds - 1 }
        if (minutes > 0) return { ...t, minutes: minutes - 1, seconds: 59 }
        if (hours > 0) return { ...t, hours: hours - 1, minutes: 59, seconds: 59 }
        if (days > 0) return { days: days - 1, hours: 23, minutes: 59, seconds: 59 }
        return t
      })
    }, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

function TimeBlock({ value, label }) {
  const prevValue = useRef(value)
  const [isFlipping, setIsFlipping] = useState(false)

  useEffect(() => {
    if (prevValue.current !== value) {
      setIsFlipping(true)
      setTimeout(() => setIsFlipping(false), 400)
      prevValue.current = value
    }
  }, [value])

  return (
    <div className="flex flex-col items-center">
      <span className="text-[10px] sm:text-xs font-semibold text-black">{label}</span>
      <span className={`text-xl sm:text-2xl lg:text-3xl font-bold text-black ${isFlipping ? 'countdown-flip' : ''}`}>
        {String(value).padStart(2, '0')}
      </span>
    </div>
  )
}

// ── Hero Slider ──────────────────────────────────────────────
const heroSlides = [
  { id: 1, brand: '🍎 iPhone 14 Series', headline: 'Up to 10%\noff Voucher', color: '#000', img: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600&fit=crop' },
  { id: 2, brand: '🎮 PS5 Series', headline: 'Up to 20%\noff Voucher', color: '#1a1a2e', img: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&fit=crop' },
]

// ── Sidebar Categories ───────────────────────────────────────
const sidebarCats = ["Woman's Fashion", "Men's Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor", "Baby's & Toys", "Groceries & Pets", "Health & Beauty"]

export default function HomePage() {
  const time = useCountdown()
  const [slide, setSlide] = useState(0)
  const [activeCat, setActiveCat] = useState(null)
  const flashRef = useRef(null)
  const catsRef = useRef(null)
  const bestRef = useRef(null)
  const exploreRef = useRef(null)

  useRevealOnScroll(flashRef)
  useRevealOnScroll(catsRef)
  useRevealOnScroll(bestRef)
  useRevealOnScroll(exploreRef)

  useEffect(() => {
    const id = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 5000)
    return () => clearInterval(id)
  }, [])

  const current = heroSlides[slide]

  return (
    <div>
      {/* ── HERO ── */}
      <div className="flex flex-col xl:flex-row" style={{ minHeight: 300 }}>
        {/* Sidebar - Desktop */}
        <aside className="w-[220px] border-r border-gray-200 py-4 hidden xl:block flex-shrink-0">
          {sidebarCats.map((cat, i) => (
            <Link
              key={cat}
              to={`/products?category=${encodeURIComponent(cat)}`}
              className="h-10 px-6 flex items-center justify-between cursor-pointer hover:bg-gray-50 hover:text-primary transition-colors text-sm"
            >
              <span>{cat}</span>
              {(i === 0 || i === 1) && <span className="text-xs text-gray-400">›</span>}
            </Link>
          ))}
        </aside>

        {/* Banner */}
        <div className="flex-1 relative overflow-hidden" style={{ background: current.color, minHeight: 300 }}>
          {/* Dark overlay for mobile */}
          <div className="absolute inset-0 bg-black/30 sm:bg-transparent z-0" />
          
          <div className="absolute inset-0 flex items-center px-6 sm:px-10 lg:px-16 z-10">
            <div className="w-full sm:w-auto text-center sm:text-left">
              <p className="text-white/70 text-sm sm:text-base mb-2 sm:mb-3">{current.brand}</p>
              <h1 className="text-white font-bold leading-tight whitespace-pre-line text-2xl sm:text-3xl lg:text-5xl">{current.headline}</h1>
              <div className="mt-4 sm:mt-6 flex justify-center sm:justify-start">
                <Link to="/products" className="inline-flex items-center gap-2 text-white border-b border-white pb-0.5 text-sm sm:text-base hover:text-primary hover:border-primary transition-colors">
                  Shop Now →
                </Link>
              </div>
            </div>
          </div>
          <img src={current.img} alt="hero" className="absolute right-0 top-0 h-full w-auto object-cover opacity-60 sm:opacity-80 hidden sm:block" />
          
          {/* Navigation Arrows - 44px touch targets */}
          <button onClick={() => setSlide(s => (s - 1 + heroSlides.length) % heroSlides.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors btn-tactile"
            aria-label="Previous slide">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => setSlide(s => (s + 1) % heroSlides.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors btn-tactile"
            aria-label="Next slide">
            <ChevronRight size={20} />
          </button>
          
          {/* Dots - 44px touch targets */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setSlide(i)}
                className={`rounded-full transition-all w-11 h-11 flex items-center justify-center ${i === slide ? 'bg-primary' : 'bg-white/50'}`}
                aria-label={`Go to slide ${i + 1}`}>
                <span className="sr-only">Slide {i + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── FLASH SALES ── */}
      <section ref={flashRef} className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px] mt-10 sm:mt-16 lg:mt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-3 sm:w-4 h-8 sm:h-10 bg-primary rounded" />
              <span className="text-primary font-semibold text-sm sm:text-base">Today's</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">Flash Sales</h2>
              <div className="flex items-end gap-2 sm:gap-4">
                <TimeBlock value={time.days} label="Days" />
                <span className="text-lg sm:text-2xl font-bold text-black mb-1">:</span>
                <TimeBlock value={time.hours} label="Hours" />
                <span className="text-lg sm:text-2xl font-bold text-black mb-1">:</span>
                <TimeBlock value={time.minutes} label="Minutes" />
                <span className="text-lg sm:text-2xl font-bold text-black mb-1">:</span>
                <TimeBlock value={time.seconds} label="Seconds" />
              </div>
            </div>
          </div>
          <div className="hidden sm:flex gap-2">
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {flashSaleProducts.map((p, idx) => (
            <div key={p.id} style={{ animation: 'staggerIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both', animationDelay: `${Math.min(400, 50 + idx * 50)}ms` }}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 sm:mt-10">
          <Link to="/products" className="bg-primary text-white px-8 sm:px-16 py-3 sm:py-4 rounded text-sm sm:text-base font-medium hover:bg-primary-hover transition-colors btn-tactile btn-shadow-lift btn-primary-glow">View All Products</Link>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px] mt-10 sm:mt-16 border-t border-gray-200" />

      {/* ── BROWSE BY CATEGORY ── */}
      <section ref={catsRef} className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px] mt-10 sm:mt-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="min-w-0">
            <SectionHeader tag="Categories" title="Browse By Category" />
          </div>
          <div className="hidden sm:flex gap-2">
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-3 lg:gap-4">
          {categories.map((cat, i) => (
            <Link key={cat.id} to={`/products?category=${cat.name}`}
              onClick={() => setActiveCat(i)}
              className={`flex flex-col items-center justify-center gap-2 sm:gap-3 min-h-24 sm:min-h-32 lg:min-h-36 border rounded-lg cursor-pointer transition-all p-3 sm:p-2
                ${activeCat === i ? 'bg-primary border-primary text-white' : 'bg-white border-gray-200 text-black hover:border-primary'}`}>
              <span className="text-2xl sm:text-3xl lg:text-4xl">{cat.icon}</span>
              <span className="text-xs sm:text-sm font-medium text-center leading-tight break-words max-w-[90px] sm:max-w-none">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px] mt-10 sm:mt-16 border-t border-gray-200" />

      {/* ── BEST SELLING ── */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px] mt-10 sm:mt-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <SectionHeader tag="This Month" title="Best Selling Products" />
          <Link to="/products" className="bg-primary text-white px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm rounded hover:bg-primary-hover transition-colors btn-tactile btn-shadow-lift btn-primary-glow">View All</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {bestSellingProducts.map((p, idx) => (
            <div key={p.id} style={{ animation: 'staggerIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both', animationDelay: `${Math.min(400, 50 + idx * 50)}ms` }}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* ── MUSIC PROMO BANNER ── */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px] mt-10 sm:mt-16 lg:mt-20">
        <div className="bg-black rounded-lg sm:rounded-xl relative overflow-hidden flex flex-col sm:flex-row items-center px-6 sm:px-10 lg:px-16 py-10 sm:py-16 lg:py-20 gap-6 sm:gap-0">
          <div className="z-10 max-w-md text-center sm:text-left">
            <p className="text-[#00FF66] text-xs sm:text-sm mb-2 sm:mb-4">Categories</p>
            <h2 className="text-white font-bold leading-tight text-2xl sm:text-3xl lg:text-5xl">Enhance Your<br />Music Experience</h2>
            <div className="flex gap-2 sm:gap-4 mt-4 sm:mt-6 justify-center sm:justify-start">
              {[{ v: '23', l: 'Hours' }, { v: '05', l: 'Days' }, { v: '59', l: 'Minutes' }, { v: '35', l: 'Seconds' }].map(({ v, l }) => (
                <div key={l} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-full flex flex-col items-center justify-center">
                  <span className="text-xs sm:text-sm font-bold leading-tight">{v}</span>
                  <span className="text-[8px] sm:text-[9px] leading-tight">{l}</span>
                </div>
              ))}
            </div>
            <Link to="/products" className="mt-4 sm:mt-8 inline-block bg-[#00FF66] text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded text-sm sm:text-base hover:bg-green-400 transition-colors">
              Buy Now!
            </Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&fit=crop"
            alt="JBL Speaker"
            className="w-40 sm:w-auto sm:absolute sm:right-10 lg:right-16 h-32 sm:h-48 lg:h-72 object-contain drop-shadow-2xl"
          />
        </div>
      </section>

      {/* ── EXPLORE PRODUCTS ── */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px] mt-10 sm:mt-16 lg:mt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <SectionHeader tag="Our Products" title="Explore Our Products" />
          <div className="hidden sm:flex gap-2">
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {exploreProducts.map((p, idx) => (
            <div key={p.id} style={{ animation: 'staggerIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both', animationDelay: `${Math.min(400, 50 + idx * 50)}ms` }}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 sm:mt-10">
          <Link to="/products" className="bg-primary text-white px-8 sm:px-16 py-3 sm:py-4 rounded text-sm sm:text-base font-medium hover:bg-primary-hover transition-colors btn-tactile btn-shadow-lift btn-primary-glow">View All Products</Link>
        </div>
      </section>

      {/* ── NEW ARRIVAL ── */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px] mt-10 sm:mt-16 lg:mt-20">
        <SectionHeader tag="Featured" title="New Arrival" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 auto-rows-[200px] sm:auto-rows-[280px] lg:auto-rows-[300px]">
          {/* Large Left */}
          <div className="relative bg-black rounded-lg sm:rounded-xl overflow-hidden row-span-1 sm:row-span-2 flex items-end p-4 sm:p-6 lg:p-8 min-h-[200px] sm:min-h-[400px] lg:min-h-[600px]">
            <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&fit=crop" alt="PS5"
              className="absolute inset-0 w-full h-full object-cover opacity-60" />
            <div className="relative z-10">
              <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl">PlayStation 5</h3>
              <p className="text-white/70 text-xs sm:text-sm mt-1 mb-2 sm:mb-3">Black and White version of the PS5 coming out on sale.</p>
              <Link to="/products/17" className="text-white border-b border-white hover:text-primary hover:border-primary text-xs sm:text-sm transition-colors">Shop Now</Link>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Right top */}
            <div className="relative bg-[#D2A885] rounded-lg sm:rounded-xl overflow-hidden flex items-end p-4 sm:p-6 flex-1 min-h-[150px] sm:min-h-[180px]">
              <img src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&fit=crop" alt="Women"
                className="absolute right-0 bottom-0 h-full object-cover opacity-80" />
              <div className="relative z-10">
                <h3 className="font-bold text-base sm:text-xl">Women's Collections</h3>
                <p className="text-xs sm:text-sm text-black/70 mt-1 mb-2">Featured woman collections</p>
                <Link to="/products?category=Woman's Fashion" className="text-xs sm:text-sm border-b border-black hover:text-primary hover:border-primary transition-colors">Shop Now</Link>
              </div>
            </div>
            
            {/* Right bottom grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 flex-1">
              <div className="relative bg-black rounded-lg sm:rounded-xl overflow-hidden flex items-end p-3 sm:p-4 min-h-[100px] sm:min-h-[120px]">
                <img src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&fit=crop" alt="Speaker"
                  className="absolute inset-0 w-full h-full object-cover opacity-60" />
                <div className="relative z-10">
                  <h3 className="text-white font-bold text-sm sm:text-base">Speakers</h3>
                  <Link to="/products?category=Electronics" className="text-white/80 text-xs border-b border-white/50">Shop Now</Link>
                </div>
              </div>
              <div className="relative bg-[#D4C4A8] rounded-lg sm:rounded-xl overflow-hidden flex items-end p-3 sm:p-4 min-h-[100px] sm:min-h-[120px]">
                <img src="https://images.unsplash.com/photo-1541643600914-78b084683702?w=300&fit=crop" alt="Perfume"
                  className="absolute inset-0 w-full h-full object-cover opacity-70" />
                <div className="relative z-10">
                  <h3 className="font-bold text-sm sm:text-base">Perfume</h3>
                  <Link to="/products?category=Health & Beauty" className="text-black/70 text-xs border-b border-black/50">Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE FEATURES ── */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px] mt-10 sm:mt-16 lg:mt-20 mb-10 sm:mb-16 lg:mb-20 border-t border-gray-200 pt-8 sm:pt-12 lg:pt-16">
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 lg:gap-20">
          {[
            { icon: '🚚', title: 'FREE AND FAST DELIVERY', sub: 'Free delivery for all orders over $140' },
            { icon: '🎧', title: '24/7 CUSTOMER SERVICE', sub: 'Friendly 24/7 customer support' },
            { icon: '🛡', title: 'MONEY BACK GUARANTEE', sub: 'We return money within 30 days' },
          ].map(({ icon, title, sub }) => (
            <div key={title} className="flex flex-col items-center gap-2 sm:gap-3 text-center">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                <div className="absolute inset-0 border-2 border-black rounded-full" />
                <div className="absolute inset-1 bg-black rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-xl">{icon}</span>
                </div>
              </div>
              <h4 className="font-bold text-xs sm:text-sm lg:text-base uppercase tracking-wide">{title}</h4>
              <p className="text-xs sm:text-sm text-gray-500">{sub}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
