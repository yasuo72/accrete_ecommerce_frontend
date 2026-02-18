import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const timersRef = useRef(new Map())

  const showToast = useCallback((message, type = 'success') => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message, type, leaving: false }])
    const timer = window.setTimeout(() => {
      setToasts(prev => prev.map(t => t.id === id ? { ...t, leaving: true } : t))
      window.setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 260)
    }, 3000)
    timersRef.current.set(id, timer)
  }, [])

  useEffect(() => {
    return () => {
      timersRef.current.forEach(t => window.clearTimeout(t))
      timersRef.current.clear()
    }
  }, [])

  const dismiss = (id) => {
    const t = timersRef.current.get(id)
    if (t) window.clearTimeout(t)
    timersRef.current.delete(id)
    setToasts(prev => prev.map(x => x.id === id ? { ...x, leaving: true } : x))
    window.setTimeout(() => setToasts(prev => prev.filter(x => x.id !== id)), 260)
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-20 right-6 z-[500] flex flex-col gap-2">
        {toasts.map(t => (
          <div key={t.id} className={`bg-black text-white text-sm px-5 py-3 rounded-lg shadow-modal flex items-start gap-3 min-w-[280px] overflow-hidden ${t.leaving ? 'toast-out' : 'toast-in'}`}>
            <span className={`${t.type === 'success' ? 'text-green-400' : 'text-red-400'} mt-0.5`}>{t.type === 'success' ? '✓' : '✕'}</span>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-3">
                <span className="leading-snug">{t.message}</span>
                <button type="button" onClick={() => dismiss(t.id)} className="text-white/70 hover:text-white btn-tactile" aria-label="Dismiss toast">
                  ✕
                </button>
              </div>
              <div className="h-[3px] bg-white/15 mt-2 rounded overflow-hidden">
                <div className="h-full bg-white/60 origin-left toast-progress" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() { return useContext(ToastContext) }
