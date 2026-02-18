# Exclusive E-Commerce — Complete Page Index & AI Implementation Guide

---

## 1. COMPLETE PAGE INVENTORY

This document is the master index for all design specification files for the "Exclusive" e-commerce website. Use this as the starting point when instructing an AI model or developer to build the site.

---

## 2. ALL SPECIFICATION FILES

| File | Pages Covered |
|------|--------------|
| `01-design-system-and-homepage.md` | Global colors, typography, spacing, components, Homepage |
| `02-auth-pages-signup-login.md` | Sign Up page, Log In page |
| `03-cart-and-checkout-pages.md` | Shopping Cart page, Checkout / Billing Details page |
| `04-account-and-about-pages.md` | My Account / Edit Profile page, About page |
| `05-404-nav-states-interactions.md` | 404 Error page, Logged-in nav states, User dropdown, Animations |
| `06-product-listing-shop-page.md` | Shop / Product Listing page with filters |
| `07-product-detail-page.md` | Single Product Detail page, Image gallery, Reviews |
| `08-wishlist-page.md` | Wishlist / Saved Items page |
| `09-contact-page.md` | Contact page with info card + message form |
| `10-order-confirmation-and-history.md` | Order Confirmation, Order History, Order Detail |
| `11-address-book-and-payment-options.md` | Address Book, Payment Options, Returns, Cancellations |
| `12-search-results-and-quick-view.md` | Search Results page, Autocomplete dropdown, Quick View modal |

---

## 3. COMPLETE SITE PAGE LIST

### Public Pages (no login required)

```
/                          → Homepage
/about                     → About page
/contact                   → Contact page
/sign-up                   → Sign Up / Register page
/log-in                    → Log In page
/products                  → Product Listing / Shop page (all products)
/products?category=...     → Filtered by category
/products/:id              → Product Detail page
/search?q=...              → Search Results page
/404                       → 404 Not Found page (catch-all)
```

### Protected Pages (login required)

```
/wishlist                  → Wishlist page
/cart                      → Shopping Cart page
/checkout                  → Checkout / Billing page
/order-confirmation/:id    → Order Confirmation page
/account                   → My Account - Edit Profile (default sub-page)
/account/addresses         → Address Book page
/account/payment           → My Payment Options page
/account/orders            → Order History page
/account/orders/:id        → Order Detail page
/account/returns           → My Returns page
/account/cancellations     → My Cancellations page
```

---

## 4. SHARED LAYOUT COMPONENTS

Every page (except auth pages which have no sidebar) uses these shared components:

```
[ALWAYS PRESENT — ALL PAGES]
├── Announcement Bar           (01 §3)
├── Navigation Bar             (01 §4)
└── Footer                     (01 §6)

[PAGES WITH BREADCRUMB]
All pages EXCEPT Homepage, Sign Up, Log In
└── Breadcrumb Bar             (varies per spec file)

[AUTH PAGES SPECIAL LAYOUT]
Sign Up + Log In only:
└── Split panel (image left 50% + form right 50%)    (02 §1)

[ACCOUNT PAGES SHARED LAYOUT]
All /account/* pages:
├── Breadcrumb + Welcome Row   (04 §1.2)
└── Two-column layout (sidebar 220px + content)       (04 §1.3–1.5)
```

---

## 5. DESIGN TOKENS QUICK REFERENCE

```css
/* Colors */
--primary:        #DB4444;
--primary-hover:  #C03333;
--black:          #000000;
--white:          #FFFFFF;
--gray-100:       #F5F5F5;
--gray-200:       #E0E0E0;
--gray-400:       #9E9E9E;
--gray-600:       #757575;
--text-dark:      #1A1A1A;
--star-yellow:    #FFAD33;
--badge-new:      #00FF66;
--success:        #00A862;
--footer-bg:      #000000;
--topbar-bg:      #000000;

/* Typography */
--font-family:    'Inter', sans-serif;
--text-xs:        12px;
--text-sm:        14px;
--text-base:      16px;
--text-lg:        20px;
--text-xl:        24px;
--text-2xl:       36px;
--text-3xl:       48px;

/* Spacing (base 4px) */
--space-1: 4px;   --space-2: 8px;   --space-3: 12px;
--space-4: 16px;  --space-5: 20px;  --space-6: 24px;
--space-8: 32px;  --space-10: 40px; --space-12: 48px;
--space-16: 64px; --space-20: 80px; --space-22: 88px;

/* Border Radius */
--radius-sm:   4px;
--radius-md:   8px;
--radius-lg:   12px;
--radius-full: 9999px;

/* Shadows */
--shadow-card:    0 2px 8px rgba(0,0,0,0.08);
--shadow-hover:   0 4px 16px rgba(0,0,0,0.14);
--shadow-modal:   0 8px 32px rgba(0,0,0,0.18);
--shadow-dropdown:0 4px 16px rgba(0,0,0,0.12);

/* Layout */
--content-max-width: 1200px;
--container-padding: 0 88px;
--grid-columns: 12;
--grid-gutter: 24px;
```

---

## 6. COMPONENT REUSE MAP

```
Component                     Used On
─────────────────────────────────────────────────────
Product Card (grid)           Homepage, Shop, Wishlist, Search, Similar items
Product Card (list)           Shop (list view)
Section Header (red bar)      Homepage (all sections), Wishlist, Shop
Primary Button (#DB4444)      Everywhere: Cart, Checkout, Forms, Modals
Secondary Button (outline)    Cart, Wishlist, Modals
Icon Button (32px circle)     Nav: Wishlist, Cart, User
Badge (red pill)              Nav cart/wishlist count
Star Rating                   Product Cards, Product Detail, Reviews
Bottom-border Input           Sign Up, Login forms
Box Input (#F5F5F5 bg)        Checkout, My Account, Contact, Modals
Countdown Timer               Homepage Flash Sales, Music Banner
Announcement Bar              All pages
Navigation Bar                All pages
Footer (5-column)             All pages
Pagination                    Shop, Search, Order History
Status Badge (rounded pill)   Order History, Returns, Cancellations
Cart Total Box                Cart, Checkout (right panel)
Breadcrumb                    All non-auth pages
Account Sidebar               All /account/* pages
```

---

## 7. FONT & ICON RESOURCES

```
Typography:
  Google Fonts: https://fonts.google.com/specimen/Inter
  Import: @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

Icons:
  Recommended: React Icons / Lucide React / Heroicons
  
  Icon usage map:
  Search:          MagnifyingGlass / Search
  Cart:            ShoppingCart
  Wishlist:        Heart
  User/Account:    User / Person
  Close:           X / XMark
  Arrow Left/Right: ChevronLeft / ChevronRight
  Truck/Delivery:  Truck
  Headphone:       Headphones
  Shield:          ShieldCheck
  Star:            Star (filled + outline)
  Checkmark:       Check / CheckCircle
  Phone:           Phone
  Email:           Mail / Envelope
  Edit:            Pencil
  Delete:          Trash
  Eye (quick view):Eye
  Eye-slash:       EyeSlash / EyeOff
  Plus:            Plus
  Minus:           Minus
  Home:            Home
  Back arrow:      ArrowLeft
  Logout:          ArrowRightOnRectangle / LogOut
```

---

## 8. IMAGE PLACEHOLDER GUIDE

```
All placeholder images should use:
Background color: #F5F5F5
Object-fit: contain (for product images)
Object-fit: cover (for hero/banner images, team photos)

Placeholder image dimensions by context:
Product card image:   250px × 200px
Product detail main:  500px × 500px
Product thumbnail:    100px × 100px
Cart thumbnail:       50px × 50px
Checkout thumbnail:   54px × 54px
Wishlist thumbnail:   250px × 250px
Team member photo:    Full width × 360px (card)
Hero banner:          Full width × 500px
About story image:    50vw × 600px
```

---

## 9. CRITICAL IMPLEMENTATION NOTES FOR AI

```
1. COLORS — Always use exact hex values from §5. Never approximate.
   Primary red is #DB4444, NOT #FF0000 or #CC0000.

2. BUTTONS — Primary button is #DB4444 background, NOT rounded (border-radius: 4px).

3. INPUTS — Most form inputs have NO visible border by default (#F5F5F5 background).
   Auth page inputs use BOTTOM BORDER ONLY (no box).
   Focus state: 1px solid #DB4444 for all inputs.

4. TYPOGRAPHY — All text is Inter font. No serif fonts used anywhere.

5. PRODUCT CARDS — "Add to Cart" button is HIDDEN by default, slides up on hover.
   Exception: Wishlist page — "Add to Cart" is ALWAYS visible.

6. NAVIGATION — Sticky top. The announcement bar scrolls away; nav stays.
   Active nav link: underline (not bold, not color change — just 2px underline).

7. FOOTER — Always black (#000000) background, white text.
   5-column grid. Always present on every page.

8. SECTION HEADERS — Always follow pattern:
   Red vertical bar (16×40px) + label text (red) on one line
   Large heading below (36px bold black)

9. CART BADGE — Shows on wishlist AND cart icons. Red circle (#DB4444), white text.
   Hides when count is 0.

10. MOBILE — All layouts are single-column on mobile.
    Container padding reduces from 88px → 24px → 16px.

11. AUTH PAGES — Special: NO footer category sidebar, split 50/50 layout,
    left panel is full-bleed image, right panel is form only.

12. ACCOUNT PAGES — Always have the 5-item sidebar on the left.
    Active item is #DB4444. Section labels are bold.

13. USER DROPDOWN — Purple gradient (#8B3A8B → #5A1E5A), NOT the primary red.
    Only appears when logged in.

14. TYPOS IN DESIGNS — Some original designs contain intentional placeholder typos.
    "Passwod" instead of "Password" — reproduce as designed for fidelity.
    "Mopnthly Protuduct Sale" — reproduce as designed.
    These can be corrected in final production if desired.
```

---

## 10. PAGE FLOW DIAGRAM

```
[Homepage]
    ├── → [Product Listing] → [Product Detail] → [Cart] → [Checkout] → [Order Confirmation]
    ├── → [Sign Up] ← → [Log In]
    ├── → [About]
    ├── → [Contact]
    ├── → [Search Results] → [Product Detail]
    └── (logged in) → [Wishlist]
                    → [My Account]
                        ├── Edit Profile
                        ├── Address Book
                        ├── Payment Options
                        ├── Order History → Order Detail
                        ├── My Returns
                        └── My Cancellations

[Any page] → 404 (if route not found)
```
