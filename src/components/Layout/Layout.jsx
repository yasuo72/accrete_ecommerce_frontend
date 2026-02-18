import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import AnnouncementBar from './AnnouncementBar'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from '../UI/ScrollToTop'

export default function Layout() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <div className="page-enter">
          <Outlet />
        </div>
      </main>
      <Footer />
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-11 h-11 bg-primary text-white rounded-full flex items-center justify-center cursor-pointer z-50 shadow-lg hover:bg-primary-hover btn-tactile opacity-0 scale-95 animate-in fade-in-0.3s zoom-in-0.3s"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  )
}
