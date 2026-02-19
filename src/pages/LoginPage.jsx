import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Check, Eye, EyeOff, ShieldCheck, Sparkles, Truck, X } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import { getFieldValidation } from '../utils/validation'

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [validation, setValidation] = useState({ email: null, password: null })
  const [shakeFields, setShakeFields] = useState({ email: false, password: false })
  const { login } = useAuth()
  const { showToast } = useToast()
  const navigate = useNavigate()

  const handleBlur = (field, type) => {
    const result = getFieldValidation(form[field], type)
    setValidation(prev => ({ ...prev, [field]: result.isValid }))

    if (!result.isValid && form[field]) {
      setShakeFields(prev => ({ ...prev, [field]: true }))
      setTimeout(() => setShakeFields(prev => ({ ...prev, [field]: false })), 300)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const emailValid = getFieldValidation(form.email, 'email').isValid
    const passwordValid = getFieldValidation(form.password, 'password').isValid

    setValidation({ email: emailValid, password: passwordValid })

    if (!emailValid) setShakeFields(prev => ({ ...prev, email: true }))
    if (!passwordValid) setShakeFields(prev => ({ ...prev, password: true }))

    setTimeout(() => setShakeFields({ email: false, password: false }), 300)

    if (emailValid && passwordValid) {
      login(form.email)
      showToast('Logged in successfully!')
      navigate('/')
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7fafc] dark:bg-[#0b1020]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(219,68,68,0.24),transparent_28%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_86%,rgba(37,99,235,0.18),transparent_32%)]" />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
        <Link to="/" className="inline-flex items-center gap-3 rounded-full bg-white/90 dark:bg-slate-900/90 border border-gray-200 dark:border-slate-700 px-4 py-2 text-sm font-medium text-black dark:text-white shadow-sm hover:shadow-md transition-shadow">
          <span className="w-7 h-7 bg-primary rounded-md text-white grid place-items-center text-xs font-bold">Ex</span>
          Exclusive
        </Link>

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] rounded-2xl border border-gray-200/70 dark:border-slate-700/80 bg-white/85 dark:bg-slate-900/75 backdrop-blur-md shadow-[0_24px_70px_rgba(15,23,42,0.18)] overflow-hidden">
          <div className="relative p-7 sm:p-10 lg:p-12 bg-gradient-to-br from-slate-950 via-slate-900 to-[#2b1220] text-white">
            <div className="absolute -top-20 -right-16 w-56 h-56 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-16 w-56 h-56 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.22em] text-white/75 mb-4">Welcome Back</p>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">Everything you need to shop smarter is one sign-in away.</h1>
              <p className="mt-4 text-white/80 text-sm sm:text-base max-w-xl">Get order tracking, faster checkout, exclusive offers, and synced wishlist across devices.</p>

              <div className="mt-8 space-y-3">
                {[
                  { Icon: Truck, text: 'Track every order in real time' },
                  { Icon: ShieldCheck, text: 'Secure account and payment flow' },
                  { Icon: Sparkles, text: 'Personalized recommendations' },
                ].map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 border border-white/10">
                    <span className="w-8 h-8 rounded-full bg-white/15 grid place-items-center">
                      <Icon size={16} />
                    </span>
                    <span className="text-sm sm:text-base">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-7 sm:p-10 lg:p-12 flex items-center">
            <div className="w-full max-w-[460px] mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">Log in</h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 mt-2 mb-7">Enter your account details to continue.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    onBlur={() => handleBlur('email', 'email')}
                    required
                    className={`w-full h-12 rounded-xl border bg-white dark:bg-slate-800 px-4 pr-10 text-sm sm:text-base outline-none transition-colors input-focus-glow ${validation.email === true ? 'field-valid' : ''} ${validation.email === false ? 'field-invalid' : 'border-gray-200 dark:border-slate-700'} ${shakeFields.email ? 'shake' : ''}`}
                  />
                  {validation.email === true && <Check size={18} className="absolute right-3 bottom-3 validation-check" />}
                  {validation.email === false && <X size={18} className="absolute right-3 bottom-3 validation-error" />}
                </div>

                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-1.5">Password</label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    onBlur={() => handleBlur('password', 'password')}
                    required
                    className={`w-full h-12 rounded-xl border bg-white dark:bg-slate-800 px-4 pr-20 text-sm sm:text-base outline-none transition-colors input-focus-glow ${validation.password === true ? 'field-valid' : ''} ${validation.password === false ? 'field-invalid' : 'border-gray-200 dark:border-slate-700'} ${shakeFields.password ? 'shake' : ''}`}
                  />
                  {validation.password === true && <Check size={18} className="absolute right-10 bottom-3 validation-check" />}
                  {validation.password === false && <X size={18} className="absolute right-10 bottom-3 validation-error" />}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 bottom-3 text-gray-400 hover:text-gray-600 btn-tactile"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <button type="submit" className="h-12 px-6 rounded-xl bg-primary text-white font-semibold text-sm sm:text-base hover:bg-primary-hover transition-colors btn-tactile btn-shadow-lift inline-flex items-center gap-2">
                    Continue <ArrowRight size={16} />
                  </button>
                  <button type="button" className="text-sm text-primary hover:underline btn-tactile">Forgot password?</button>
                </div>
              </form>

              <div className="mt-7 pt-6 border-t border-gray-200 dark:border-slate-700">
                <p className="text-sm text-gray-700 dark:text-slate-300">
                  New here?{' '}
                  <Link to="/sign-up" className="font-semibold text-black dark:text-white hover:text-primary">Create account</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
