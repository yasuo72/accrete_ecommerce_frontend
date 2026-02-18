import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Check, X } from 'lucide-react'
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
    <div className="flex flex-col lg:flex-row min-h-[500px] sm:min-h-[600px]">
      {/* Left Image */}
      <div className="hidden lg:block w-1/2 relative overflow-hidden bg-[#EBF3FB]">
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&fit=crop"
          alt="Shopping"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-12 py-10 sm:py-16 lg:py-20">
        <div className="w-full max-w-[400px] sm:max-w-[480px]">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2">Create an account</h1>
          <p className="text-sm sm:text-base text-black mb-6 sm:mb-10">Enter your details below</p>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                onBlur={() => handleBlur('name', 'name')}
                required
                className={`w-full border-b py-2 sm:py-3 pr-8 text-sm sm:text-base outline-none focus:border-primary transition-colors input-focus-glow ${validation.name === true ? 'field-valid' : ''} ${validation.name === false ? 'field-invalid' : ''} ${shakeFields.name ? 'shake' : ''}`}
              />
              {validation.name === true && <Check size={18} className="absolute right-0 top-1/2 -translate-y-1/2 validation-check" />}
              {validation.name === false && <X size={18} className="absolute right-0 top-1/2 -translate-y-1/2 validation-error" />}
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Email or Phone Number"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                onBlur={() => handleBlur('email', 'email')}
                required
                className={`w-full border-b py-2 sm:py-3 pr-8 text-sm sm:text-base outline-none focus:border-primary transition-colors input-focus-glow ${validation.email === true ? 'field-valid' : ''} ${validation.email === false ? 'field-invalid' : ''} ${shakeFields.email ? 'shake' : ''}`}
              />
              {validation.email === true && <Check size={18} className="absolute right-0 top-1/2 -translate-y-1/2 validation-check" />}
              {validation.email === false && <X size={18} className="absolute right-0 top-1/2 -translate-y-1/2 validation-error" />}
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                onBlur={() => handleBlur('password', 'password')}
                required
                className={`w-full border-b py-2 sm:py-3 pr-20 text-sm sm:text-base outline-none focus:border-primary transition-colors input-focus-glow ${validation.password === true ? 'field-valid' : ''} ${validation.password === false ? 'field-invalid' : ''} ${shakeFields.password ? 'shake' : ''}`}
              />
              {validation.password === true && <Check size={18} className="absolute right-10 top-1/2 -translate-y-1/2 validation-check" />}
              {validation.password === false && <X size={18} className="absolute right-10 top-1/2 -translate-y-1/2 validation-error" />}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 btn-tactile"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button type="submit" className="w-full h-11 sm:h-14 bg-primary text-white font-semibold rounded text-sm sm:text-base hover:bg-primary-hover transition-colors btn-tactile btn-shadow-lift btn-primary-glow">
              Create Account
            </button>
          </form>

          <button className="w-full h-11 sm:h-14 mt-3 sm:mt-4 bg-white border border-gray-300 rounded flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base font-medium hover:bg-gray-50 transition-colors btn-tactile btn-shadow-lift">
            <span className="text-lg sm:text-xl">G</span> Sign up with Google
          </button>

          <p className="text-center mt-6 sm:mt-8 text-xs sm:text-sm">
            <span className="text-black">Already have account? </span>
            <Link to="/log-in" className="text-black font-medium underline hover:text-primary">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
