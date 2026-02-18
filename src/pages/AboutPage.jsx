import React, { useState } from 'react'
import Breadcrumb from '../components/UI/Breadcrumb'
import { teamMembers, stats } from '../data/mockData'

export default function AboutPage() {
  const [activeTeam, setActiveTeam] = useState(0)
  const [activeStat, setActiveStat] = useState(1)

  const visible = teamMembers.slice(activeTeam, activeTeam + 3)

  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />

      {/* Our Story */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px] pb-10 sm:pb-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 lg:mb-8">Our Story</h1>
            <p className="text-sm sm:text-base text-black leading-relaxed sm:leading-[1.8] mb-4 sm:mb-6">
              Launced in 2015, Exclusive is South Asia's premier online shopping markerplace with an active presense in Bangladesh.
              Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands
              and serves 3 millioons customers across the region.
            </p>
            <p className="text-sm sm:text-base text-black leading-relaxed sm:leading-[1.8]">
              Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assortment
              in categories ranging from consumer.
            </p>
          </div>
          <div className="h-[300px] sm:h-[450px] lg:h-[600px] rounded overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&fit=crop"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px] py-6 sm:py-8 lg:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {stats.map((s, i) => (
            <div key={s.id} onClick={() => setActiveStat(i)}
              className={`p-4 sm:p-6 lg:p-8 border rounded cursor-pointer transition-all text-center
                ${activeStat === i ? 'bg-primary border-primary text-white' : 'bg-white border-gray-200 text-black hover:border-primary'}`}>
              <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center border-2
                ${activeStat === i ? 'border-white/50 bg-white/20' : 'border-gray-300 bg-black'}`}>
                <span className="text-lg sm:text-xl lg:text-2xl">{s.icon}</span>
              </div>
              <div className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 ${activeStat === i ? 'text-white' : 'text-black'}`}>{s.value}</div>
              <div className={`text-xs sm:text-sm ${activeStat === i ? 'text-white/80' : 'text-gray-500'}`}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px] py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10">
          {teamMembers.map(m => (
            <div key={m.id} className="text-left">
              <div className="h-[280px] sm:h-[320px] lg:h-[360px] bg-gray-100 rounded overflow-hidden mb-4 sm:mb-6">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-1">{m.name}</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{m.role}</p>
              <div className="flex gap-3 text-lg sm:text-xl">
                {['𝕏', '📷', 'in'].map(s => (
                  <a key={s} href="#" className="text-black hover:text-primary transition-colors">{s}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {Array(Math.ceil(teamMembers.length / 3)).fill(0).map((_, i) => (
            <button key={i} onClick={() => setActiveTeam(i * 3)}
              className={`rounded-full transition-all ${Math.floor(activeTeam / 3) === i ? 'w-5 h-3 bg-primary' : 'w-3 h-3 bg-gray-300'}`} />
          ))}
        </div>
      </section>

      {/* Service Strip */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[88px] py-10 sm:py-12 lg:py-16 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 lg:gap-20 flex-wrap">
          {[
            { icon: '🚚', title: 'FREE AND FAST DELIVERY', sub: 'Free delivery for all orders over $140' },
            { icon: '🎧', title: '24/7 CUSTOMER SERVICE', sub: 'Friendly 24/7 customer support' },
            { icon: '🛡', title: 'MONEY BACK GUARANTEE', sub: 'We return money within 30 days' },
          ].map(({ icon, title, sub }) => (
            <div key={title} className="flex flex-col items-center gap-2 sm:gap-3 text-center max-w-[200px] mx-auto sm:mx-0">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                <div className="absolute inset-0 border-2 border-black rounded-full" />
                <div className="absolute inset-1 bg-black rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-xl">{icon}</span>
                </div>
              </div>
              <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wide">{title}</h4>
              <p className="text-xs sm:text-sm text-gray-500">{sub}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
