# Exclusive E-Commerce — Design System & Homepage Specification

---

## 1. GLOBAL DESIGN SYSTEM

### 1.1 Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary` | `#DB4444` | CTA buttons, sale badges, active states, links |
| `--primary-hover` | `#C03333` | Button hover state |
| `--black` | `#000000` | Body text, headings, navbar background (top bar) |
| `--white` | `#FFFFFF` | Page background, card backgrounds, form fields |
| `--gray-100` | `#F5F5F5` | Input field backgrounds, card hover backgrounds |
| `--gray-200` | `#E0E0E0` | Borders, dividers, horizontal rules |
| `--gray-400` | `#9E9E9E` | Placeholder text, secondary labels |
| `--gray-600` | `#757575` | Body secondary text |
| `--text-dark` | `#1A1A1A` | Primary body text, headings |
| `--star-yellow` | `#FFAD33` | Star ratings |
| `--badge-new` | `#00FF66` | "NEW" product badge background |
| `--badge-sale` | `#DB4444` | "SALE" product badge background |
| `--footer-bg` | `#000000` | Footer background |
| `--topbar-bg` | `#000000` | Announcement bar background |

### 1.2 Typography

**Font Family:** `Inter` (Google Fonts), fallback: `sans-serif`

| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `display-xl` | 48px | 700 | 1.2 | Hero headlines |
| `h1` | 36px | 700 | 1.3 | Page titles |
| `h2` | 24px | 700 | 1.3 | Section headings |
| `h3` | 20px | 600 | 1.4 | Card titles, subsection |
| `h4` | 16px | 600 | 1.5 | Labels, nav items |
| `body-lg` | 16px | 400 | 1.6 | Body text |
| `body-sm` | 14px | 400 | 1.5 | Secondary text, captions |
| `caption` | 12px | 400 | 1.4 | Timestamps, footnotes |

### 1.3 Spacing Scale

Base unit: 4px

| Token | Value |
|-------|-------|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 20px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-10` | 40px |
| `space-12` | 48px |
| `space-16` | 64px |

### 1.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 4px | Buttons, badges |
| `radius-md` | 8px | Cards, inputs |
| `radius-lg` | 12px | Modals |
| `radius-full` | 9999px | Pills, avatar circles |

### 1.5 Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-card` | `0 2px 8px rgba(0,0,0,0.08)` | Product cards |
| `shadow-dropdown` | `0 4px 16px rgba(0,0,0,0.12)` | Dropdowns, popovers |
| `shadow-modal` | `0 8px 32px rgba(0,0,0,0.18)` | Modals |

### 1.6 Grid System

- **Max content width:** 1200px
- **Container padding:** 0 88px (desktop), 0 24px (tablet), 0 16px (mobile)
- **Columns:** 12-column grid
- **Gutter:** 24px

### 1.7 Breakpoints

| Name | Width |
|------|-------|
| `xs` | < 480px |
| `sm` | 480px – 767px |
| `md` | 768px – 1023px |
| `lg` | 1024px – 1279px |
| `xl` | ≥ 1280px |

---

## 2. REUSABLE COMPONENTS

### 2.1 Primary Button

```
Background: #DB4444
Text: #FFFFFF, 16px, weight 500
Padding: 16px 48px
Border-radius: 4px
Border: none
Cursor: pointer
Hover: background #C03333, slight scale(1.02)
Active: background #A02020
Transition: all 0.2s ease
```

### 2.2 Secondary / Outline Button

```
Background: transparent
Text: #000000, 16px, weight 500
Padding: 14px 46px
Border: 2px solid #000000
Border-radius: 4px
Hover: background #000000, text #FFFFFF
```

### 2.3 Icon Button (Wishlist / Cart / User — top nav)

```
Width: 32px, Height: 32px
Background: transparent
Icon color: #000000
Hover: icon color #DB4444
Border: none
Position: relative (for badge)
```

### 2.4 Badge / Counter Pill

```
Width: 16px, Height: 16px
Background: #DB4444
Text: #FFFFFF, 10px, weight 700
Border-radius: 50%
Position: absolute, top -6px, right -6px
```

### 2.5 Product Card

```
Width: 250px (flex, responsive)
Background: #FFFFFF
Border-radius: 8px
Overflow: hidden
Shadow: 0 2px 8px rgba(0,0,0,0.08)
Hover: shadow increases to 0 4px 16px rgba(0,0,0,0.14)
Transition: 0.2s ease

  [Image Container]
  Height: 200px
  Background: #F5F5F5
  Position: relative
  
    [Sale/New Badge] — top-left
    Position: absolute, top: 12px, left: 12px
    Padding: 4px 10px
    Border-radius: 4px
    Text: 12px, weight 600, #FFFFFF
    Sale badge bg: #DB4444
    New badge bg: #00FF66, text: #000000
    
    [Action Icons] — top-right, vertical stack
    Position: absolute, top: 12px, right: 12px
    Icons: Wishlist heart, Quick-view eye
    Icon container: 34px × 34px, background: #FFFFFF, border-radius: 50%
    Shadow: 0 2px 4px rgba(0,0,0,0.1)
    Icon size: 18px, color: #000000
    Hover icon color: #DB4444
    
    [Add to Cart Button] — bottom, full width, appears on hover
    Position: absolute, bottom: 0, left: 0, right: 0
    Background: #000000
    Text: #FFFFFF, 14px, weight 500, centered
    Height: 40px
    Transition: opacity 0.2s, transform 0.2s
    Default: opacity 0 / translateY(8px)
    Hover state of card: opacity 1 / translateY(0)

  [Product Info] — padding: 12px 16px
  
    [Title]
    Font: 16px, weight 500, color #000000
    Margin-bottom: 8px
    
    [Price Row]
    Display: flex, gap: 8px, align-items: center
    
      [Current Price]
      Font: 16px, weight 700, color #DB4444
      
      [Original Price] (if discounted)
      Font: 16px, weight 400, color #9E9E9E
      Text-decoration: line-through
    
    [Rating Row]
    Display: flex, gap: 4px, align-items: center
    Margin-top: 6px
    
      [Stars] — filled: #FFAD33, empty: #E0E0E0, size: 14px
      [Count] — "(140)" font: 14px, color: #757575
```

### 2.6 Section Header Pattern

```
[Tag/Label line]
Text: #DB4444, 16px, weight 600
Display: flex, align-items: center, gap: 12px

  [Red accent bar]
  Width: 16px, Height: 40px
  Background: #DB4444
  Border-radius: 4px
  Display: inline-block

[Heading]
Font: 36px, weight 700, color: #000000
Margin-top: 20px
```

### 2.7 Star Rating

```
5 stars rendered as SVG or Unicode ★
Filled star: #FFAD33
Half star: gradient or alternate icon
Empty star: #E0E0E0
Star size: 14px (product cards), 16px (product detail)
Gap between stars: 2px
```

### 2.8 Input Field

```
Width: 100%
Height: 48px
Background: #F5F5F5 (forms) or #FFFFFF with border (search)
Border: 1px solid #E0E0E0 (focus: 1px solid #DB4444)
Border-radius: 4px
Padding: 0 16px
Font: 14px, color #000000
Placeholder: 14px, color #9E9E9E
Outline: none on focus
Transition: border-color 0.2s
```

### 2.9 Navigation Dropdown (Category Sidebar)

```
Width: 220px
Background: #FFFFFF
Border-right: 1px solid #E0E0E0
Each item:
  Height: 40px
  Padding: 0 16px
  Font: 14px, weight 400, color #000000
  Hover: background #F5F5F5, color #DB4444
  Active/selected: color #DB4444
  Cursor: pointer
Items with sub-menus have a "›" chevron on the right, font-size 12px
```

---

## 3. ANNOUNCEMENT BAR

```
Position: fixed top or static top
Width: 100%
Height: 48px
Background: #000000
Display: flex, justify-content: center, align-items: center
Padding: 0 16px

  [Message Text]
  Font: 14px, weight 400, color: #FFFFFF
  Text: "Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!"
  
  [Shop Now Link]
  Font: 14px, weight 600, color: #FFFFFF
  Text-decoration: underline
  Margin-left: 4px
  Cursor: pointer
  Hover: color #DB4444

  [Language Selector] — absolute right: 16px
  Font: 14px, color: #FFFFFF
  Display: flex, align-items: center, gap: 4px
  "English" text + down-arrow chevron icon
```

---

## 4. NAVIGATION BAR

```
Width: 100%
Height: 80px
Background: #FFFFFF
Border-bottom: 1px solid #E0E0E0
Position: sticky, top: 48px (below announcement bar), z-index: 100
Padding: 0 88px
Display: flex, align-items: center, justify-content: space-between

  [Logo]
  Font: 24px, weight 700, color: #000000
  Text: "Exclusive"
  Cursor: pointer
  Margin-right: auto (pushes nav to center)

  [Navigation Links]
  Display: flex, gap: 40px
  Font: 16px, weight 400, color: #000000
  Items: Home | Contact | About | Sign Up
  Active item: underline (2px solid #000000, offset: 4px)
  Hover: color #DB4444
  
  [Right Actions Group]
  Display: flex, align-items: center, gap: 24px
  
    [Search Bar]
    Width: 240px
    Height: 38px
    Background: #F5F5F5
    Border-radius: 4px
    Border: none
    Padding: 0 16px
    Placeholder: "What are you looking for?"
    Font: 14px
    
      [Search Icon]
      Position: absolute right, right: 12px
      Icon: magnifying glass, 18px, color: #000000
      Cursor: pointer
    
    [Wishlist Icon]
    Icon: heart outline, 24px, color: #000000
    Position: relative
    Hover: color #DB4444
    
      [Badge] — if items in wishlist
      Background: #DB4444, text: #FFFFFF, 10px
      Position: absolute top-right -6px/-6px
    
    [Cart Icon]
    Icon: shopping cart, 24px, color: #000000
    Position: relative
    Hover: color #DB4444
    
      [Badge] — item count
      Same style as wishlist badge
    
    [User / Avatar Icon]
    Icon: person outline, 24px, color: #000000
    Hover: shows dropdown

    [User Dropdown] (when logged in, appears on hover/click)
    Position: absolute, top: 40px, right: 0
    Width: 160px
    Background: linear-gradient(135deg, #8B3A8B, #5A1E5A) 
    Border-radius: 8px
    Shadow: 0 4px 16px rgba(0,0,0,0.15)
    Padding: 8px 0
    
      Items: "My Profile" | "My Order" | "My Reviews" | "Logout"
      Each item:
        Padding: 10px 20px
        Font: 14px, weight 400, color: #FFFFFF
        Hover: background rgba(255,255,255,0.15)
        Icon: 16px left of text
```

---

## 5. HOMEPAGE

### 5.1 Hero Section

```
Width: 100%
Height: 500px (desktop)
Display: flex

  [Left Sidebar — Category Menu]
  Width: 220px
  Height: 100%
  Background: #FFFFFF
  Border-right: 1px solid #E0E0E0
  Padding: 16px 0

    Category items:
    - Woman's Fashion  ›
    - Men's Fashion    ›
    - Electronics
    - Home & Lifestyle
    - Medicine
    - Sports & Outdoor
    - Baby's & Toys
    - Groceries & Pets
    - Health & Beauty
    
    Each item:
    Height: 40px, Padding: 0 24px
    Font: 14px, weight 400, color #000000
    "›" chevron for items with subcategories — right side, 12px, color #9E9E9E
    Hover: background #F5F5F5

  [Right Hero Banner]
  Flex: 1
  Height: 500px
  Background: #000000
  Position: relative
  Overflow: hidden
  
    [Background Image]
    Object-fit: cover, width: 100%, height: 100%
    Dark overlay or product showcase (iPhone purple)
    
    [Apple Logo]
    Position: top-left area, approx. top: 60px, left: 60px
    Color: #FFFFFF, size: 24px
    Below: "iPhone 14 Series" — 16px, #FFFFFF, weight 400
    
    [Headline]
    "Up to 10%" — 48px, weight 700, color #FFFFFF
    "off Voucher" — 48px, weight 700, color #FFFFFF
    Position: left area, vertically centered
    
    [Shop Now Link]
    Text: "Shop Now →"
    Font: 16px, weight 500, color #FFFFFF
    Text-decoration: underline on hover
    Margin-top: 16px
    
    [Carousel Dots]
    Position: absolute, bottom: 24px, left: 50% (translated)
    Dots: 5 circles, 8px diameter
    Active dot: #FFFFFF
    Inactive dot: rgba(255,255,255,0.4)
    Gap: 8px
    
    [iPhone Product Image]
    Position: absolute right side
    Height: ~420px
    Object-fit: contain
```

### 5.2 Flash Sales Section

```
Margin-top: 80px
Padding: 0 88px

  [Section Header]
  [Red bar + "Today's" label]
  Red bar: 16px × 40px, background #DB4444, border-radius 4px
  Label: "Today's", 16px, weight 600, color #DB4444
  
  [Row: Title + Timer + Navigation Arrows]
  Display: flex, align-items: flex-end, justify-content: space-between
  
    [Title]
    Font: 36px, weight 700, color #000000
    Text: "Flash Sales"
    
    [Countdown Timer]
    Display: flex, align-items: flex-end, gap: 8px
    
      [Label]
      Font: 12px, weight 600, color #000000
      Texts: "Days" / "Hours" / "Minutes" / "Seconds"
      Position: above number
      
      [Number Block]
      Font: 32px, weight 700, color #000000
      No background — plain text
      Example values: 03 : 23 : 19 : 56
      
      Colon separator: font 24px, color #000000, aligned middle
    
    [Arrow Controls]
    Display: flex, gap: 8px
    
      Each arrow button:
      Width: 40px, Height: 40px
      Background: #F5F5F5
      Border-radius: 50%
      Icon: ← or →, 16px, color #000000
      Hover: background #DB4444, icon color #FFFFFF

  [Product Cards Row]
  Margin-top: 32px
  Display: flex, gap: 24px
  Overflow-x: scroll (or carousel)
  Scroll-behavior: smooth
  Scrollbar hidden
  
    [Product Cards] — 4-5 visible at once
    Use product card spec from section 2.5
    Each card width: ~250px
  
  [View All Products Button]
  Margin-top: 40px
  Display: flex, justify-content: center
  
    Button uses Primary Button spec
    Text: "View All Products"
    Width: 250px
```

### 5.3 Browse By Category Section

```
Margin-top: 80px
Padding: 0 88px
Border-top: 1px solid #E0E0E0
Padding-top: 60px

  [Section Header]
  Same pattern: red bar + "Categories" label + h2 "Browse By Category"
  
  [Arrow Controls] — top right, same style as Flash Sales arrows

  [Category Items Row]
  Margin-top: 32px
  Display: flex, gap: 16px
  
    Each category item:
    Width: ~170px
    Height: 145px
    Background: #FFFFFF
    Border: 1px solid #E0E0E0
    Border-radius: 8px
    Display: flex, flex-direction: column, align-items: center, justify-content: center
    Gap: 12px
    Cursor: pointer
    Transition: all 0.2s
    
      Active / Selected item:
      Background: #DB4444
      Border-color: #DB4444
      Icon color: #FFFFFF
      Text color: #FFFFFF
    
    Hover (non-active):
    Border-color: #DB4444
    
      [Icon]
      Size: 48px × 48px
      Style: outlined/line art, color #000000 (or #FFFFFF if active)
    
      [Label]
      Font: 14px, weight 500, color #000000 (or #FFFFFF if active)
  
  Categories visible: Phones | Computers | SmartWatch | Camera | HeadPhones | Gaming
```

### 5.4 Best Selling Products Section

```
Margin-top: 80px
Padding: 0 88px

  [Header Row]
  Display: flex, justify-content: space-between, align-items: flex-end
  
    Left: Red bar + "This Month" label + h2 "Best Selling Products"
    
    Right: [View All] button
    Width: 120px, Height: 42px
    Background: #DB4444, color #FFFFFF
    Border-radius: 4px, font: 14px, weight 500

  [Products Grid]
  Margin-top: 32px
  Display: grid, grid-template-columns: repeat(4, 1fr), gap: 24px
  
    4 product cards using spec from section 2.5
    Products shown: The north coat ($260), Gucci duffle bag ($960), 
    RGB liquid CPU Cooler ($160), Small BookShelf ($360)
```

### 5.5 Music Experience Banner (Promotional)

```
Margin-top: 80px
Width: 100% (within container padding)
Height: 500px
Background: #000000
Border-radius: 8px
Position: relative
Overflow: hidden
Display: flex, align-items: center
Padding: 0 64px

  [Left Content Area]
  Max-width: 400px
  
    [Category Label]
    Font: 14px, weight 400, color: #00FF66
    Text: "Categories"
    Margin-bottom: 16px
    
    [Headline]
    Font: 48px, weight 700, color: #FFFFFF
    Text: "Enhance Your"
    Second line: "Music Experience"
    Line-height: 1.2
    
    [Countdown Timer]
    Margin-top: 24px
    Display: flex, gap: 12px
    
      Each time block:
      Width: 48px, Height: 48px
      Background: #FFFFFF
      Border-radius: 50%
      Display: flex, flex-direction: column, align-items: center, justify-content: center
      
        [Number]: 16px, weight 700, color #000000
        [Label]: 10px, weight 400, color #000000
    
    [Buy Now Button]
    Margin-top: 32px
    Background: #00FF66
    Color: #000000
    Padding: 14px 32px
    Border-radius: 4px
    Font: 16px, weight 600
    Hover: background #00CC55
  
  [Product Image — JBL Speaker]
  Position: absolute, right: 64px
  Height: ~380px
  Object-fit: contain
  Drop-shadow filter for depth
```

### 5.6 Explore Our Products Section

```
Margin-top: 80px
Padding: 0 88px

  [Section Header]
  Red bar + "Our Products" label
  h2: "Explore Our Products"
  
  [Arrow Controls] — top right

  [Products Grid — Row 1]
  Margin-top: 32px
  Display: grid, grid-template-columns: repeat(4, 1fr), gap: 24px
  
    4 product cards:
    - Breed Dry Dog Food ($100)
    - CANON EOS DSLR Camera ($360)
    - ASUS FHD Gaming Laptop ($700)
    - Cosmetic Dermatology Net ($30)

  [Products Grid — Row 2]
  Margin-top: 24px
  Display: grid, grid-template-columns: repeat(4, 1fr), gap: 24px
  
    4 more product cards:
    - Kids Electric Car ($960) — with color swatches
    - Jr. Zoom Soccer Cleats ($1160) — with color swatches
    - GP11 Shooter USB Gamepad ($660) — with color swatches
    - Quilted Satin Jacket ($660) — with color swatches
    
    [Color Swatches] — below price/rating on applicable cards
    Display: flex, gap: 6px, margin-top: 8px
    Each swatch: 16px × 16px, border-radius: 50%
    Colors per product vary (e.g., black, red, white)
    Active swatch: 2px white border + box-shadow ring

  [View All Products Button]
  Same as Flash Sales section
```

### 5.7 New Arrival Section

```
Margin-top: 80px
Padding: 0 88px

  [Section Header]
  Red bar + "Featured" label
  h2: "New Arrival"

  [4-Panel Layout]
  Margin-top: 32px
  Display: grid
  Grid-template:
    "left top-right-1 top-right-2"
    "left bottom-right-1 bottom-right-2"
  Grid-template-columns: 1fr 1fr 1fr (or similar)
  Gap: 24px
  Height: 600px (total)

    [Large Left Panel — PlayStation 5]
    Grid-row: span 2
    Background: #1A1A1A (dark)
    Border-radius: 8px
    Padding: 32px
    Position: relative, overflow: hidden
    
      [PS5 product image] — large, centered/bottom
      Height: ~70% of panel
      Object-fit: contain
      
      [Text overlay — bottom]
      [Title]: "PlayStation 5"
      Font: 20px, weight 700, color #FFFFFF
      [Desc]: brief text, 14px, color #C0C0C0
      [Shop Now link]: 14px, weight 500, color #FFFFFF, underline
    
    [Top-Right Panel 1 — Women's Collections]
    Background: #D2A885 (warm tan/pink)
    Border-radius: 8px
    Padding: 24px
    Position: relative, overflow: hidden
    
      [Model image] — right side, height ~100%
      [Text — left/bottom]:
        "Women's Collections"
        14px body text, #000000
        "Shop Now →" link, #000000
    
    [Bottom-Right Panel 1 — Speakers]
    Background: #1A1A1A (dark)
    Border-radius: 8px
    Padding: 24px
    Position: relative
    
      [Speaker image]
      [Text]: "Speakers", 18px, #FFFFFF
      Subtext, "Shop Now →" in #FFFFFF
    
    [Bottom-Right Panel 2 — Perfume]
    Background: #D4C4A8 (light tan)
    Border-radius: 8px
    Padding: 24px
    Position: relative
    
      [Perfume bottle image]
      [Text]: "Perfume", 18px, #000000
      Subtext, "Shop Now →" in #000000
```

### 5.8 Service Features Strip

```
Margin-top: 80px
Padding: 60px 88px
Border-top: 1px solid #E0E0E0

  Display: flex, justify-content: center, gap: 80px

  3 service items:
  Each:
    Display: flex, flex-direction: column, align-items: center, gap: 12px
    
    [Icon Circle]
    Width: 56px, Height: 56px
    Border: 3px solid #000000
    Border-radius: 50%
    Display: flex, align-items: center, justify-content: center
    
      Inner filled circle (smaller): 
      Width: 44px, Height: 44px
      Background: #000000
      Border-radius: 50%
      Icon: white, 20px
    
    [Title]
    Font: 16px, weight 700, color: #000000
    Text-transform: uppercase
    Text-align: center
    
    [Subtitle]
    Font: 14px, weight 400, color: #757575
    Text-align: center

  Items:
  1. Icon: truck | "FREE AND FAST DELIVERY" | "Free delivery for all orders over $140"
  2. Icon: headset | "24/7 CUSTOMER SERVICE" | "Friendly 24/7 customer support"
  3. Icon: shield-check | "MONEY BACK GUARANTEE" | "We return money within 30 days"
```

---

## 6. FOOTER

```
Background: #000000
Padding: 60px 88px 40px

  [Top Grid — 5 columns]
  Display: grid
  Grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr
  Gap: 40px
  
    [Column 1 — Brand + Subscribe]
    
      [Logo]
      Font: 24px, weight 700, color: #FFFFFF
      Text: "Exclusive"
      Margin-bottom: 24px
      
      [Subscribe heading]
      Font: 20px, weight 700, color: #FFFFFF
      Margin-bottom: 12px
      
      [Tagline]
      Font: 14px, color: #FFFFFF
      Text: "Get 10% off your first order"
      Margin-bottom: 16px
      
      [Email Input Row]
      Display: flex, height: 48px
      
        [Input]
        Flex: 1
        Background: transparent
        Border: 1px solid #FFFFFF
        Border-radius: 4px 0 0 4px
        Padding: 0 16px
        Font: 14px, color: #FFFFFF
        Placeholder: "Enter your email", color rgba(255,255,255,0.5)
        
        [Submit Arrow Button]
        Width: 48px
        Background: transparent
        Border: 1px solid #FFFFFF
        Border-left: none
        Border-radius: 0 4px 4px 0
        Icon: "›" or arrow, 18px, color: #FFFFFF
        Hover: background rgba(255,255,255,0.1)
    
    [Column 2 — Support]
    
      [Heading]
      Font: 20px, weight 700, color: #FFFFFF
      Margin-bottom: 24px
      
      [Items]
      Font: 14px, weight 400, color: #FFFFFF
      Line-height: 2 (generous spacing)
      
      - "111 Bijoy sarani, Dhaka,"
      - "DH 1515, Bangladesh."
      - (blank line separator)
      - "exclusive@gmail.com"
      - "+88015-88888-9999"
    
    [Column 3 — Account]
    
      [Heading] same style
      
      Links (14px, #FFFFFF, hover: underline + #DB4444):
      - My Account
      - Login / Register
      - Cart
      - Wishlist
      - Shop
    
    [Column 4 — Quick Link]
    
      [Heading] same style
      
      Links (14px, #FFFFFF, hover: underline + #DB4444):
      - Privacy Policy
      - Terms Of Use
      - FAQ
      - Contact
    
    [Column 5 — Download App]
    
      [Heading] same style
      
      [Save text]
      Font: 12px, color: #FFFFFF
      Text: "Save $3 with App New User Only"
      Margin-bottom: 12px
      
      [QR + Store Badges Row]
      Display: flex, gap: 12px, align-items: center
      
        [QR Code image]
        Width: 80px, Height: 80px
        Background: #FFFFFF
        Border-radius: 4px
        
        [Badges Column]
        Display: flex, flex-direction: column, gap: 8px
        
          [Google Play Badge]
          Width: 120px, Height: 40px
          Rounded rect image
          
          [App Store Badge]
          Width: 120px, Height: 40px
          Rounded rect image
      
      [Social Icons Row]
      Margin-top: 24px
      Display: flex, gap: 16px
      
        Icons: Facebook | Twitter | Instagram | LinkedIn
        Each: 24px × 24px, color: #FFFFFF
        Hover: color #DB4444

  [Footer Bottom Bar]
  Margin-top: 40px
  Padding-top: 20px
  Border-top: 1px solid rgba(255,255,255,0.1)
  Display: flex, justify-content: center
  
    [Copyright Text]
    Font: 14px, color: rgba(255,255,255,0.6)
    Text: "© Copyright Rimel 2022. All right reserved"
    
    [Copyright © symbol rendered as circled-c icon or text]
```
