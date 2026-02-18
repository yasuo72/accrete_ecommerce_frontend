# Exclusive E-Commerce — Account Profile & About Page Specification

---

## 1. MY ACCOUNT / PROFILE PAGE

### 1.1 Page Structure

```
[Announcement Bar]
[Navigation Bar] — logged-in state (user icon filled red)
[Breadcrumb + Welcome Row]
[Account Content Area — Sidebar + Main Panel]
[Footer]
```

### 1.2 Breadcrumb + Welcome Row

```
Padding: 24px 88px
Display: flex, justify-content: space-between, align-items: center
Background: #FFFFFF

  [Left: Breadcrumb]
  Display: flex, align-items: center, gap: 8px
  Font: 14px, color: #9E9E9E
  
  Items: "Home" + " / " + "My Account"
  
  "Home": color #9E9E9E, hover: color #DB4444, cursor: pointer
  " / ": color #9E9E9E
  "My Account": color #000000, weight: 500

  [Right: Welcome Message]
  Font: 14px, weight: 400, color: #000000
  Text: "Welcome! "
  Followed by username in red:
    Font: 14px, weight: 500, color: #DB4444
    Text: "Md Rimel"
```

### 1.3 Account Layout

```
Padding: 40px 88px
Display: grid
Grid-template-columns: 220px 1fr
Gap: 80px
Align-items: flex-start
```

### 1.4 Left Sidebar Navigation

```
Width: 220px

  [Section: Manage My Account]
  
    [Section Label]
    Font: 16px, weight: 700, color: #000000
    Text: "Manage My Account"
    Margin-bottom: 16px
    
    [Nav Items]
    Padding-left: 16px
    
    "My Profile" — ACTIVE ITEM
      Font: 14px, weight: 400, color: #DB4444
      Cursor: default (current page)
    
    "Address Book"
      Font: 14px, weight: 400, color: #000000
      Cursor: pointer
      Hover: color: #DB4444
    
    "My Payment Options"
      Font: 14px, weight: 400, color: #000000
      Cursor: pointer
      Hover: color: #DB4444
  
  [Section: My Orders]
  Margin-top: 32px
  
    [Section Label]
    Font: 16px, weight: 700, color: #000000
    Text: "My Orders"
    Margin-bottom: 16px
    
    [Nav Items]
    Padding-left: 16px
    
    "My Returns"
      Font: 14px, weight: 400, color: #000000
      Cursor: pointer
      Hover: color: #DB4444
    
    "My Cancellations"
      Font: 14px, weight: 400, color: #000000
      Cursor: pointer
      Hover: color: #DB4444
  
  [Section: My WishList]
  Margin-top: 32px
  
    [Section Label / Link]
    Font: 16px, weight: 700, color: #000000
    Text: "My WishList"
    Cursor: pointer
    Hover: color: #DB4444
    (No sub-items for WishList — it IS the link)
```

### 1.5 Right Panel — Edit Profile Form

```
Background: #FFFFFF
Box-shadow: 0 2px 12px rgba(0,0,0,0.06)
Border-radius: 8px
Padding: 32px 40px

  [Form Title]
  Font: 20px, weight: 600, color: #DB4444
  Text: "Edit Your Profile"
  Margin-bottom: 32px
  
  ─────────────────────────────────
  NAME ROW (2 fields side by side)
  ─────────────────────────────────
  
  Display: grid, grid-template-columns: 1fr 1fr, gap: 24px
  Margin-bottom: 24px
  
    [First Name field]
    Label: "First Name"
      Font: 16px, weight: 400, color: #000000
      Margin-bottom: 8px
    
    Input:
    Height: 50px
    Background: #F5F5F5
    Border: none
    Border-radius: 4px
    Padding: 0 16px
    Font: 16px, color: #000000
    Value shown: "Md" (pre-filled)
    Focus: border: 1px solid #DB4444
    Outline: none
    
    [Last Name field]
    Label: "Last Name"
    Input same style
    Value shown: "Rimel"
  
  ─────────────────────────────────
  EMAIL + ADDRESS ROW (2 fields)
  ─────────────────────────────────
  
  Display: grid, grid-template-columns: 1fr 1fr, gap: 24px
  Margin-bottom: 24px
  
    [Email field]
    Label: "Email"
    Input same style
    Value shown: "rimel1111@gmail.com"
    Type: email
    
    [Address field]
    Label: "Address"
    Input same style
    Value shown: "Kingston, 5236, United State"
  
  ─────────────────────────────────
  PASSWORD CHANGES SECTION
  ─────────────────────────────────
  
  Margin-top: 8px, Margin-bottom: 32px
  
  [Section Label]
  Font: 16px, weight: 400, color: #000000
  Text: "Password Changes"
  Margin-bottom: 16px
  
  [Current Password field]
  Width: 100%
  Height: 50px
  Background: #F5F5F5
  Border: none
  Border-radius: 4px
  Padding: 0 16px
  Type: password
  Placeholder: "Current Passwod" (note: typo in design — keep as-is for fidelity)
  Font: 16px, color: #9E9E9E (placeholder) / #000000 (value)
  Margin-bottom: 16px
  
  [New Password field]
  Same style
  Placeholder: "New Passwod" (typo in design — keep)
  Margin-bottom: 16px
  
  [Confirm New Password field]
  Same style
  Placeholder: "Confirm New Passwod" (typo in design — keep)
  
  ─────────────────────────────────
  ACTION BUTTONS ROW
  ─────────────────────────────────
  
  Margin-top: 32px
  Display: flex, justify-content: flex-end, align-items: center, gap: 32px
  
    [Cancel Button]
    Background: transparent
    Border: none
    Font: 16px, weight: 500, color: #000000
    Cursor: pointer
    Hover: color: #DB4444
    Text: "Cancel"
    
    [Save Changes Button]
    Width: 214px, Height: 56px
    Background: #DB4444
    Color: #FFFFFF
    Font: 16px, weight: 500
    Border: none
    Border-radius: 4px
    Cursor: pointer
    Hover: background #C03333
    Text: "Save Changes"
```

---

## 2. ABOUT PAGE

### 2.1 Page Structure

```
[Announcement Bar]
[Navigation Bar] — logged-out state
[Breadcrumb Bar]
[Our Story Section]
[Stats Grid Section]
[Team Carousel Section]
[Service Features Strip]
[Footer]
```

### 2.2 Breadcrumb

```
Padding: 24px 88px
Font: 14px, color: #9E9E9E
Items: "Home" + " / " + "About"
"About": color #000000, weight: 500
```

### 2.3 Our Story Section

```
Padding: 60px 88px
Display: grid
Grid-template-columns: 1fr 1fr
Gap: 80px
Align-items: center

  [Left: Text Content]
  
    [Heading]
    Font: 54px, weight: 700, color: #000000
    Text: "Our Story"
    Margin-bottom: 32px
    
    [Paragraph 1]
    Font: 16px, weight: 400, color: #000000
    Line-height: 1.8
    Margin-bottom: 24px
    Text: "Launced in 2015, Exclusive is South Asia's premier online shopping 
    markerplace with an active presense in Bangladesh. Supported by wide range 
    of tailored marketing, data and service solutions, Exclusive has 10,500 
    sallers and 300 brands and serves 3 millioons customers across the region."
    (Note: typos in original design — keep for fidelity)
    
    [Paragraph 2]
    Font: 16px, weight: 400, color: #000000
    Line-height: 1.8
    Text: "Exclusive has more than 1 Million products to offer, growing at a very 
    fast. Exclusive offers a diverse assortment in categories ranging from consumer."
  
  [Right: Image]
  Width: 100%
  Height: 600px
  
    [Image]
    Width: 100%, Height: 100%
    Object-fit: cover
    Object-position: center
    Border-radius: 0 (no radius)
    
    Image description:
    Two women smiling, holding shopping bags
    Pink background
    Colorful striped shopping bags
    Both women in stylish casual wear (one in blue dress, one in gray)
    Modern, vibrant, fashion-forward
```

### 2.4 Stats Grid Section

```
Padding: 40px 88px
Display: grid
Grid-template-columns: repeat(4, 1fr)
Gap: 24px
Margin-top: 40px

  Each stat card:
  Padding: 32px 24px
  Border: 1px solid #E0E0E0
  Border-radius: 4px
  Display: flex, flex-direction: column, align-items: center, gap: 8px
  Cursor: pointer
  Transition: all 0.3s
  
  Default (non-active) state:
  Background: #FFFFFF
  
  Hover / Active state:
  Background: #DB4444
  Border-color: #DB4444
  (All child elements change color accordingly)
  
    [Icon Circle]
    Width: 56px, Height: 56px
    Border: 3px solid #C0C0C0 (default) / rgba(255,255,255,0.6) (active)
    Border-radius: 50%
    Display: flex, align-items: center, justify-content: center
    
      Inner filled circle:
      Width: 44px, Height: 44px
      Background: #000000 (default) / #FFFFFF (active)
      Border-radius: 50%
      Icon inside: 20px, color #FFFFFF (default) / #000000 (active)
    
    [Number/Value]
    Font: 32px, weight: 700, color: #000000 (default) / #FFFFFF (active)
    
    [Label]
    Font: 14px, weight: 400, color: #757575 (default) / rgba(255,255,255,0.8) (active)
    Text-align: center

  Stats shown (left to right):
  
  1. Icon: storefront/shop
     Value: "10.5k"
     Label: "Sallers active our site"
     State: DEFAULT (white background)
  
  2. Icon: dollar/currency circle
     Value: "33k"
     Label: "Mopnthly Protuduct Sale" (typo in design — keep)
     State: ACTIVE (red background, #DB4444)
     This card is highlighted by default
  
  3. Icon: shopping bag
     Value: "45.5k"
     Label: "Customer active in our site"
     State: DEFAULT
  
  4. Icon: money bag
     Value: "25k"
     Label: "Anual gross sale in our site" (typo — keep)
     State: DEFAULT
```

### 2.5 Team Carousel Section

```
Padding: 40px 88px
Margin-top: 40px

  [Team Members Grid / Carousel]
  Display: flex, gap: 24px
  
  3 cards visible at once (with pagination dots for more):
  
    Each team member card:
    Flex: 0 0 calc(33.33% - 16px)
    Background: #FFFFFF (no border, no shadow)
    
      [Photo Container]
      Width: 100%
      Height: 360px
      Background: #F5F5F5 (light gray backing)
      Border-radius: 4px
      Overflow: hidden
      
        [Photo]
        Width: 100%, Height: 100%
        Object-fit: cover
        Object-position: top center
        
        Image style: Professional headshot
        Background: plain white or light gray
        Subject: Business-formal attire
      
      [Name]
      Font: 20px, weight: 700, color: #000000
      Margin-top: 24px
      Margin-bottom: 4px
      
      [Title/Role]
      Font: 14px, weight: 400, color: #000000
      Margin-bottom: 16px
      
      [Social Icons Row]
      Display: flex, gap: 12px, align-items: center
      
        Icons: Twitter | Instagram | LinkedIn
        Each: 20px × 20px, color: #000000
        Hover: color: #DB4444
        Cursor: pointer
  
  Team members shown:
  
  1. Tom Cruise (name as placeholder — fictional)
     Role: "Founder & Chairman"
     Social: Twitter, Instagram, LinkedIn
  
  2. Emma Watson (name as placeholder — fictional)
     Role: "Managing Director"
     Social: Twitter, Instagram, LinkedIn
  
  3. Will Smith (name as placeholder — fictional)
     Role: "Product Designer"
     Social: Twitter, Instagram, LinkedIn
  
  [Pagination Dots]
  Margin-top: 40px
  Display: flex, justify-content: center, gap: 8px
  
    5 total dots
    Active dot (3rd — index 2):
    Width: 20px, Height: 12px (elongated)
    Background: #DB4444
    Border-radius: 6px
    
    Inactive dots:
    Width: 12px, Height: 12px
    Background: #E0E0E0
    Border-radius: 50%
    
    Transition: width 0.3s ease (when dot becomes active)
    Cursor: pointer
    Hover inactive dot: background #9E9E9E
```

### 2.6 Service Features Strip (About Page)

```
Identical to homepage service features strip
See 01-design-system-and-homepage.md §5.8

Padding: 60px 88px
Border-top: 1px solid #E0E0E0

3 items: Free Delivery | 24/7 Customer Service | Money Back Guarantee

Only difference from homepage:
- No "View All Products" button after
- This section appears directly before footer
```

---

## 3. NAVIGATION STATE ON THESE PAGES

### My Account Page

```
URL path: /account (or /my-account)
Nav "Sign Up" link: visible but not active (user is logged in, shows profile icon)
Cart icon: shows item count badge
Wishlist icon: shows item count badge
User icon: filled red circle, 32px
```

### About Page

```
URL path: /about
Nav "About" link: underlined (active state)
Underline: 2px solid #000000, offset 4px
User icon: person outline (logged out state)
Cart & wishlist icons: no badge (empty)
```
