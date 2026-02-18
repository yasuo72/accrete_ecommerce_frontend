# Exclusive E-Commerce — 404 Error Page, Logged-In Nav States & Interactions

---

## 1. 404 ERROR PAGE

### 1.1 Page Structure

```
[Announcement Bar]
[Navigation Bar] — logged-out state
[Breadcrumb Bar]
[404 Content Area]
[Footer]
```

### 1.2 Breadcrumb

```
Padding: 24px 88px
Font: 14px, color: #9E9E9E
Items: "Home" + " / " + "404 Error"
"404 Error": color #000000, weight: 500
```

### 1.3 404 Content Area

```
Width: 100%
Min-height: 500px
Display: flex, flex-direction: column, align-items: center, justify-content: center
Padding: 80px 88px
Text-align: center

  [404 Heading]
  Font: 110px, weight: 700, color: #000000
  Text: "404 Not Found"
  Line-height: 1.1
  Margin-bottom: 24px
  Letter-spacing: -2px (tight tracking for impact)
  
  NOTE: "404" and "Not Found" appear on the SAME LINE
  Font size is very large — effectively a display/hero heading
  
  [Subtext]
  Font: 16px, weight: 400, color: #000000
  Text: "Your visited page not found. You may go home page."
  Margin-bottom: 48px
  
  [Back to Home Page Button]
  Width: 254px, Height: 56px
  Background: #DB4444
  Color: #FFFFFF
  Font: 16px, weight: 500
  Border: none
  Border-radius: 4px
  Cursor: pointer
  Text: "Back to home page"
  Hover: background #C03333
  Transition: background 0.2s
  
  NOTE: Large whitespace above and below content
  The 404 content is vertically centered in a large empty area
  
  Above the heading: approximately 80px of padding
  Below the button: approximately 80px before footer
```

### 1.4 Navigation State on 404

```
No breadcrumb item is highlighted red
Nav: "Home" / "Contact" / "About" / "Sign Up" — none active
User icon: person outline (logged out)
Cart icon: no badge
Wishlist icon: no badge
```

---

## 2. LOGGED-IN NAVIGATION STATES

### 2.1 User Icon — Logged-Out State

```
Icon type: person outline / silhouette
Size: 24px × 24px
Color: #000000
Background: transparent
Border: none
Cursor: pointer
Hover: color #DB4444
```

### 2.2 User Icon — Logged-In State (Image 8 — My Account Page)

```
Icon Container:
Width: 38px, Height: 38px
Background: #DB4444
Border-radius: 50%
Display: flex, align-items: center, justify-content: center

  [Person Icon inside]
  Size: 20px
  Color: #FFFFFF

OR alternatively (if avatar):
  [User initials]
  Font: 14px, weight: 700, color: #FFFFFF
```

### 2.3 User Dropdown Menu (Image 5 — Homepage with dropdown open)

```
Trigger: Hover or click on user icon (when logged in)

[Dropdown Container]
Position: absolute
Top: calc(100% + 8px) of nav bar
Right: 88px (aligned to right edge of page)
Width: 180px
Background: linear-gradient(135deg, #8B3A8B 0%, #5A1E5A 100%) (dark purple gradient)
Border-radius: 8px
Box-shadow: 0 4px 20px rgba(0,0,0,0.2)
Padding: 8px 0
Z-index: 200
Overflow: hidden

Animation:
Default: opacity 0, translateY(-8px), pointer-events: none
Active: opacity 1, translateY(0), pointer-events: all
Transition: all 0.2s ease

  [Menu Items]
  Each item:
  Display: flex, align-items: center, gap: 12px
  Padding: 12px 20px
  Cursor: pointer
  Transition: background 0.15s
  
  Hover state:
  Background: rgba(255, 255, 255, 0.12)
  
    [Icon]
    Size: 18px
    Color: #FFFFFF
    Flex-shrink: 0
    
    [Label]
    Font: 14px, weight: 400, color: #FFFFFF
  
  Menu items (4 total):
  
  1. Icon: person / user outline
     Label: "Manage My Account"
     Action: navigates to /account
  
  2. Icon: shopping bag / box
     Label: "My Order"
     Action: navigates to /orders
  
  3. Icon: star / review
     Label: "My Reviews"
     Action: navigates to /reviews
  
  4. Icon: exit / logout arrow
     Label: "Logout"
     Action: logs out, redirects to /login
     Hover: background rgba(219,68,68,0.3) (red tint for destructive action)

[Dropdown Arrow / Caret]
Position: absolute top: -6px, right: 16px (points up toward icon)
Width: 12px, Height: 12px
Background: #8B3A8B (matches gradient top)
Transform: rotate(45deg)
Z-index: -1
```

---

## 3. CART BADGE STATES

### 3.1 No Items in Cart

```
Cart icon: shopping cart outline, 24px, #000000
Badge: hidden (display: none)
```

### 3.2 Items in Cart (1–9)

```
Cart icon: shopping cart, 24px, #000000
Badge: visible
  Width: 16px, Height: 16px
  Background: #DB4444
  Border-radius: 50%
  Position: absolute, top: -6px, right: -6px
  Font: 10px, weight: 700, color: #FFFFFF
  Content: item count (e.g., "2")
  Display: flex, align-items: center, justify-content: center
```

### 3.3 Items (10+)

```
Badge: "9+" text
Width: 20px (auto) to fit text
```

---

## 4. WISHLIST BADGE STATES

Same logic as cart badge. Shown counts: 4 items visible in Image 9.

```
Wishlist icon: heart outline, 24px, #000000
Badge same spec as cart badge
Count displayed: numeric (e.g., "4")
```

---

## 5. INTERACTIVE STATES SUMMARY

### 5.1 Buttons

| State | Background | Border | Text | Cursor |
|-------|-----------|--------|------|--------|
| Default | #DB4444 | none | #FFFFFF | pointer |
| Hover | #C03333 | none | #FFFFFF | pointer |
| Active/Press | #A02020 | none | #FFFFFF | pointer |
| Disabled | #F5A5A5 | none | #FFFFFF | not-allowed |
| Loading | #C03333 | none | spinner | not-allowed |

### 5.2 Links

| State | Color | Decoration |
|-------|-------|------------|
| Default | #DB4444 | none |
| Hover | #DB4444 | underline |
| Visited | #DB4444 | none |
| Active (nav) | #000000 | underline 2px |

### 5.3 Input Fields

| State | Border | Background |
|-------|--------|-----------|
| Default (form) | none | #F5F5F5 |
| Default (search) | 1px solid #E0E0E0 | #F5F5F5 |
| Focus | 1px solid #DB4444 | #FFFFFF |
| Error | 1px solid #DB4444 | #FFF8F8 |
| Success | 1px solid #00A862 | #FFFFFF |
| Disabled | none | #F0F0F0 |

### 5.4 Product Cards

| State | Shadow | Background | Transform |
|-------|--------|-----------|-----------|
| Default | 0 2px 8px rgba(0,0,0,0.08) | #FFFFFF | none |
| Hover | 0 4px 16px rgba(0,0,0,0.14) | #FFFFFF | none |
| "Add to Cart" visible | same | same | button slides up |

---

## 6. SCROLL BEHAVIOR & STICKY ELEMENTS

```
[Announcement Bar]
Scrolls with page (not sticky)
OR: can be dismissed (close button optional)
Transition: height 0 → 0 with smooth animation if dismissed

[Navigation Bar]
Position: sticky
Top: 0 (if announcement bar scrolls away)
  OR
Top: 48px (if announcement bar stays fixed)
Z-index: 100
Background: #FFFFFF
Box-shadow on scroll: 0 2px 8px rgba(0,0,0,0.08) (appears after scrolling 10px)

[Back to Top Button] (visible in Image 1, Image 5, Image 6)
Position: fixed, bottom: 32px, right: 32px
Width: 44px, Height: 44px
Background: #DB4444
Border-radius: 50%
Icon: ↑ up arrow, 18px, color #FFFFFF
Box-shadow: 0 4px 12px rgba(219,68,68,0.4)
Cursor: pointer
Hover: background #C03333, transform: scale(1.1)
Transition: all 0.2s

Visibility logic:
  Hidden when page scroll < 300px
  Visible when page scroll ≥ 300px
  Fade transition: opacity 0 → 1 over 0.3s
```

---

## 7. LOADING STATES

### 7.1 Page Loading Skeleton

```
Product card skeleton:
Background: #F5F5F5
Border-radius: 8px
Animation: shimmer left-to-right (gradient sweep)

  [Image placeholder]: 250px × 200px, #E0E0E0
  [Title placeholder]: height 16px, width 70%, #E0E0E0
  [Price placeholder]: height 16px, width 40%, #E0E0E0
  [Stars placeholder]: height 14px, width 60%, #E0E0E0

Shimmer animation:
background: linear-gradient(90deg, #F5F5F5 25%, #EBEBEB 50%, #F5F5F5 75%)
background-size: 200% 100%
animation: shimmer 1.5s infinite
```

### 7.2 Page Transition

```
On navigation click:
Page content: opacity 1 → 0 (200ms)
New page content: opacity 0 → 1 (200ms)
Total transition: 400ms
```

---

## 8. MOBILE NAVIGATION (Hamburger)

```
Visible at: < 768px breakpoint
The sidebar category menu, nav links collapse to hamburger

[Hamburger Icon]
Position: top-right of navbar, before icons
Width: 32px, Height: 24px
Three horizontal bars:
  Each bar: width 100%, height 3px, background #000000, border-radius 2px
  Spacing between bars: 5px
  Transition: transform 0.3s (to X when open)

[Mobile Menu Panel]
Position: fixed, left: 0, top: 0, bottom: 0
Width: 280px
Background: #FFFFFF
Box-shadow: 4px 0 20px rgba(0,0,0,0.15)
Z-index: 300
Transform: translateX(-100%) when closed
Transform: translateX(0) when open
Transition: transform 0.3s ease

  [Close Button] — top right of panel
  Width: 32px, Height: 32px
  Icon: × 
  
  [Logo]
  Padding: 24px
  Font: 20px, weight: 700, color: #000000
  
  [Menu Items]
  Padding: 0 0 24px
  
    Each item:
    Height: 48px
    Padding: 0 24px
    Font: 16px, color: #000000
    Border-bottom: 1px solid #F5F5F5
    Display: flex, align-items: center, justify-content: space-between
    
    Items: Home | Contact | About | Sign Up | Category submenu...

[Overlay]
Position: fixed, inset: 0
Background: rgba(0,0,0,0.5)
Z-index: 299
Transition: opacity 0.3s
```

---

## 9. TOAST / NOTIFICATION MESSAGES

```
Position: fixed, top: 80px, right: 24px
Z-index: 500
Min-width: 300px
Max-width: 400px

[Toast Container]
Background: #000000
Color: #FFFFFF
Border-radius: 8px
Padding: 16px 20px
Box-shadow: 0 4px 16px rgba(0,0,0,0.2)
Display: flex, align-items: center, gap: 12px

  [Icon]
  Size: 20px
  Success: green checkmark
  Error: red × 
  Info: blue i
  
  [Message]
  Font: 14px, weight: 400, color: #FFFFFF

Animation:
Slide in: translateX(120%) → translateX(0) over 0.3s
Auto-dismiss after 3 seconds
Slide out: translateX(0) → translateX(120%) over 0.3s

Examples:
- "Item added to cart" (success)
- "Added to wishlist" (success)
- "Item removed" (neutral)
```

---

## 10. PAGE-SPECIFIC URL STRUCTURE

| Page | URL Path |
|------|----------|
| Home | / |
| About | /about |
| Contact | /contact |
| Sign Up | /sign-up |
| Log In | /log-in |
| My Account | /account |
| Cart | /cart |
| Checkout | /checkout |
| 404 | /404 or catch-all |
| Products | /products |
| Product Detail | /products/:id |
| Wishlist | /wishlist |
