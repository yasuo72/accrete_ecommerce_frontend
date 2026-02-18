# Exclusive E-Commerce — React + Vite + Tailwind CSS

A full multi-page e-commerce application built with React 18, Vite, React Router v6, and Tailwind CSS, matching the "Exclusive" design specs exactly.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 🗂 Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Layout.jsx         # Shell: AnnouncementBar + Navbar + Footer + BackToTop
│   │   ├── AnnouncementBar.jsx
│   │   ├── Navbar.jsx         # Sticky nav with search, cart, wishlist, user dropdown
│   │   └── Footer.jsx         # 5-column black footer
│   └── UI/
│       ├── ProductCard.jsx    # Reusable card with wishlist/cart/hover
│       ├── StarRating.jsx
│       ├── Breadcrumb.jsx
│       ├── SectionHeader.jsx  # Red bar + tag + h2
│       └── AccountSidebar.jsx # Shared sidebar for all /account pages
├── context/
│   ├── AuthContext.jsx        # Login / logout / register
│   ├── CartContext.jsx        # Cart state (add, remove, qty, total)
│   ├── WishlistContext.jsx    # Wishlist toggle
│   └── ToastContext.jsx       # Global toast notifications
├── data/
│   └── mockData.js            # Products, categories, orders, team, stats
├── pages/
│   ├── HomePage.jsx           # Hero + Flash Sales + Categories + Best Sellers + ...
│   ├── SignUpPage.jsx
│   ├── LoginPage.jsx
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   ├── ShopPage.jsx           # Product listing with filters + pagination
│   ├── ProductDetailPage.jsx  # Images + info + tabs + related
│   ├── CartPage.jsx
│   ├── CheckoutPage.jsx
│   ├── OrderConfirmationPage.jsx
│   ├── WishlistPage.jsx
│   ├── SearchPage.jsx
│   ├── AccountPage.jsx        # Edit profile
│   ├── AddressBookPage.jsx    # With add/edit modal
│   ├── PaymentOptionsPage.jsx # With add card modal
│   ├── OrderHistoryPage.jsx
│   ├── OrderDetailPage.jsx    # With timeline
│   ├── MyReturnsPage.jsx
│   ├── MyCancellationsPage.jsx
│   └── NotFoundPage.jsx       # 404
├── App.jsx                    # All routes
├── main.jsx
└── index.css                  # Tailwind + global styles
```

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary red | `#DB4444` |
| Font | Inter |
| Max width | 1200px |
| Container padding | 88px |

## 📄 All Pages

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/about` | About |
| `/contact` | Contact |
| `/sign-up` | Sign Up |
| `/log-in` | Log In |
| `/products` | Shop / Product Listing |
| `/products/:id` | Product Detail |
| `/cart` | Shopping Cart |
| `/checkout` | Checkout |
| `/order-confirmation/:id` | Order Confirmation |
| `/wishlist` | Wishlist |
| `/search?q=...` | Search Results |
| `/account` | My Account (Edit Profile) |
| `/account/addresses` | Address Book |
| `/account/payment` | Payment Options |
| `/account/orders` | Order History |
| `/account/orders/:id` | Order Detail |
| `/account/returns` | My Returns |
| `/account/cancellations` | My Cancellations |
| `/*` | 404 Not Found |
