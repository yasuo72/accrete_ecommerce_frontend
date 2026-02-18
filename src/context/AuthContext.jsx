import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null) // null = logged out

  const login = (email) => {
    setUser({ name: 'Md Rimel', email, firstName: 'Md', lastName: 'Rimel', address: 'Kingston, 5236, United State' })
  }

  const logout = () => setUser(null)

  const register = (name, email) => {
    setUser({ name, email, firstName: name.split(' ')[0], lastName: name.split(' ')[1] || '' })
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
