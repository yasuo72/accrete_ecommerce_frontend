import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import { AuthProvider } from './context/AuthContext'
import { ToastProvider } from './context/ToastContext'
import { ThemeProvider } from './context/ThemeContext'

import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ShopPage from './pages/ShopPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import OrderConfirmationPage from './pages/OrderConfirmationPage'
import WishlistPage from './pages/WishlistPage'
import SearchPage from './pages/SearchPage'
import AccountPage from './pages/AccountPage'
import AddressBookPage from './pages/AddressBookPage'
import PaymentOptionsPage from './pages/PaymentOptionsPage'
import OrderHistoryPage from './pages/OrderHistoryPage'
import OrderDetailPage from './pages/OrderDetailPage'
import MyReturnsPage from './pages/MyReturnsPage'
import MyCancellationsPage from './pages/MyCancellationsPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <ToastProvider>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="contact" element={<ContactPage />} />
                  <Route path="sign-up" element={<SignUpPage />} />
                  <Route path="log-in" element={<LoginPage />} />
                  <Route path="products" element={<ShopPage />} />
                  <Route path="products/:id" element={<ProductDetailPage />} />
                  <Route path="cart" element={<CartPage />} />
                  <Route path="checkout" element={<CheckoutPage />} />
                  <Route path="order-confirmation/:id" element={<OrderConfirmationPage />} />
                  <Route path="wishlist" element={<WishlistPage />} />
                  <Route path="search" element={<SearchPage />} />
                  <Route path="account" element={<AccountPage />} />
                  <Route path="account/addresses" element={<AddressBookPage />} />
                  <Route path="account/payment" element={<PaymentOptionsPage />} />
                  <Route path="account/orders" element={<OrderHistoryPage />} />
                  <Route path="account/orders/:id" element={<OrderDetailPage />} />
                  <Route path="account/returns" element={<MyReturnsPage />} />
                  <Route path="account/cancellations" element={<MyCancellationsPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </ToastProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
