import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/UI/Breadcrumb'

export default function NotFoundPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: '404 Error' }]} />
      <div className="flex flex-col items-center justify-center text-center py-20 px-4 min-h-[400px]">
        <h1 className="font-bold text-black mb-6" style={{ fontSize: 110, lineHeight: 1.1, letterSpacing: -2 }}>
          404 Not Found
        </h1>
        <p className="text-base text-black mb-12">Your visited page not found. You may go home page.</p>
        <Link to="/" className="btn-primary px-16 py-4 rounded text-base inline-block">Back to home page</Link>
      </div>
    </div>
  )
}
