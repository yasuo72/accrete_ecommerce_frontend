import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Check, Eye, EyeOff, Gift, ShieldCheck, Star, X } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import { getFieldValidation } from '../utils/validation'

export default function SignUpPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [validation, setValidation] = useState({ name: null, email: null, password: null })
  const [shakeFields, setShakeFields] = useState({ name: false, email: false, password: false })
  const { register } = useAuth()
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

    const nameValid = getFieldValidation(form.name, 'name').isValid
    const emailValid = getFieldValidation(form.email, 'email').isValid
    const passwordValid = getFieldValidation(form.password, 'password').isValid

    setValidation({ name: nameValid, email: emailValid, password: passwordValid })

    if (!nameValid) setShakeFields(prev => ({ ...prev, name: true }))
    if (!emailValid) setShakeFields(prev => ({ ...prev, email: true }))
    if (!passwordValid) setShakeFields(prev => ({ ...prev, password: true }))

    setTimeout(() => setShakeFields({ name: false, email: false, password: false }), 300)

    if (nameValid && emailValid && passwordValid) {
      register(form.name, form.email)
      showToast('Account created successfully!')
      navigate('/')
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7fafc] dark:bg-[#0b1020]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(219,68,68,0.22),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_84%,rgba(34,197,94,0.18),transparent_30%)]" />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
        <Link to="/" className="inline-flex items-center gap-3 rounded-full bg-white/90 dark:bg-slate-900/90 border border-gray-200 dark:border-slate-700 px-4 py-2 text-sm font-medium text-black dark:text-white shadow-sm hover:shadow-md transition-shadow">
          <span className="w-7 h-7 bg-primary rounded-md text-white grid place-items-center text-xs font-bold">Ex</span>
          Exclusive
        </Link>

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] rounded-2xl border border-gray-200/70 dark:border-slate-700/80 bg-white/85 dark:bg-slate-900/75 backdrop-blur-md shadow-[0_24px_70px_rgba(15,23,42,0.18)] overflow-hidden">
          <div className="p-7 sm:p-10 lg:p-12 flex items-center order-2 lg:order-1">
            <div className="w-full max-w-[470px] mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">Create account</h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 mt-2 mb-7">Set up your profile and unlock member benefits.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    placeholder="Rohit Sharma"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    onBlur={() => handleBlur('name', 'name')}
                    required
                    className={`w-full h-12 rounded-xl border bg-white dark:bg-slate-800 px-4 pr-10 text-sm sm:text-base outline-none transition-colors input-focus-glow ${validation.name === true ? 'field-valid' : ''} ${validation.name === false ? 'field-invalid' : 'border-gray-200 dark:border-slate-700'} ${shakeFields.name ? 'shake' : ''}`}
                  />
                  {validation.name === true && <Check size={18} className="absolute right-3 bottom-3 validation-check" />}
                  {validation.name === false && <X size={18} className="absolute right-3 bottom-3 validation-error" />}
                </div>

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
                    placeholder="Minimum 6 characters"
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

                <button type="submit" className="w-full h-12 rounded-xl bg-primary text-white font-semibold text-sm sm:text-base hover:bg-primary-hover transition-colors btn-tactile btn-shadow-lift inline-flex items-center justify-center gap-2">
                  Create Account <ArrowRight size={16} />
                </button>
              </form>

              <button className="w-full h-12 mt-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-xl flex items-center justify-center gap-3 text-sm sm:text-base font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors btn-tactile">
                <span className="w-6 h-6 rounded-full bg-[#ea4335] text-white grid place-items-center text-xs font-bold">G</span>
                Continue with Google
              </button>

              <div className="mt-7 pt-6 border-t border-gray-200 dark:border-slate-700">
                <p className="text-sm text-gray-700 dark:text-slate-300">
                  Already have an account?{' '}
                  <Link to="/log-in" className="font-semibold text-black dark:text-white hover:text-primary">Log in</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="relative p-7 sm:p-10 lg:p-12 bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#4a1d37] text-white order-1 lg:order-2">
            <div className="absolute -top-16 -left-10 w-56 h-56 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-12 w-56 h-56 rounded-full bg-emerald-400/15 blur-3xl" />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/75 mb-4">Join Exclusive</p>
                <h1 className="text-3xl sm:text-4xl font-bold leading-tight">Create your profile and unlock exclusive perks.</h1>
                <p className="mt-4 text-white/80 text-sm sm:text-base max-w-xl">From wishlist sync to limited-time member offers, your account powers a smoother shopping experience.</p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  { Icon: Gift, text: 'Welcome discount for new members' },
                  { Icon: Star, text: 'Priority access to featured drops' },
                  { Icon: ShieldCheck, text: 'Secure personal data controls' },
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
        </div>
      </div>
    </section>
  )
}
