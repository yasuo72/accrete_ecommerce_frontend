# Exclusive E-Commerce — Wishlist Page Specification

---

## 1. PAGE OVERVIEW

The Wishlist page shows all items the user has saved. Accessible via the heart icon in the navbar or from My Account sidebar. URL: `/wishlist`

---

## 2. PAGE STRUCTURE

```
[Announcement Bar]
[Navigation Bar] — logged-in state, wishlist icon badge active
[Breadcrumb Bar]
[Wishlist Content Area]
[Footer]
```

---

## 3. BREADCRUMB

```
Padding: 24px 88px
Font: 14px, color: #9E9E9E
Items: "Home" + " / " + "Wishlist"
"Wishlist": color #000000, weight: 500
```

---

## 4. WISHLIST HEADER ROW

```
Padding: 40px 88px 0
Display: flex, align-items: center, justify-content: space-between

  [Left: Item Count]
  Font: 20px, weight: 400, color: #000000
  Text: "Wishlist (4)"  ← dynamic count in parentheses

  [Right: Move All to Bag Button]
  Width: 223px, Height: 56px
  Background: #FFFFFF
  Border: 2px solid #000000
  Border-radius: 4px
  Font: 16px, weight: 500, color: #000000
  Cursor: pointer
  Hover: background: #000000, color: #FFFFFF
  Transition: all 0.2s
  Text: "Move All To Bag"
```

---

## 5. WISHLIST PRODUCT GRID

```
Padding: 32px 88px
Display: grid
Grid-template-columns: repeat(4, 1fr)
Gap: 24px

  Each wishlist card:
  Width: 100% (of grid column)
  Background: #FFFFFF
  Border-radius: 8px
  Position: relative
  
  ─────────────────────────────────
  IMAGE CONTAINER
  ─────────────────────────────────
  
  Height: 250px
  Background: #F5F5F5
  Border-radius: 8px 8px 0 0
  Position: relative
  Overflow: hidden
  Display: flex, align-items: center, justify-content: center
  
    [Product Image]
    Max-width: 80%
    Max-height: 80%
    Object-fit: contain
    
    [Remove from Wishlist Button] — top right
    Position: absolute, top: 12px, right: 12px
    Width: 34px, Height: 34px
    Background: #FFFFFF
    Border-radius: 50%
    Display: flex, align-items: center, justify-content: center
    Box-shadow: 0 2px 4px rgba(0,0,0,0.1)
    Icon: × close / trash, 16px, color: #000000
    Cursor: pointer
    Hover: background: #DB4444, icon: #FFFFFF
    Transition: all 0.2s
    
    [Sale/New Badge] — top left (if applicable)
    Same spec as product card badge (design system §2.5)
    
    [Add to Cart Button] — bottom, full width, always visible on wishlist page
    Position: absolute, bottom: 0, left: 0, right: 0
    Height: 40px
    Background: #000000
    Color: #FFFFFF
    Font: 14px, weight: 500
    Text: "Add To Cart"
    Display: flex, align-items: center, justify-content: center
    Cursor: pointer
    Hover: background: #DB4444
    Transition: background 0.2s
    
    NOTE: Unlike regular product cards where "Add to Cart" only appears on hover,
    on the Wishlist page it is ALWAYS VISIBLE at the bottom of the image.
  
  ─────────────────────────────────
  PRODUCT INFO BLOCK
  ─────────────────────────────────
  
  Padding: 12px 0 0
  
    [Product Name]
    Font: 16px, weight: 500, color: #000000
    Margin-bottom: 6px
    White-space: nowrap, overflow: hidden, text-overflow: ellipsis
    
    [Price Row]
    Display: flex, align-items: center, gap: 8px
    
      [Current Price]
      Font: 16px, weight: 700, color: #DB4444
      
      [Original Price] (if discounted)
      Font: 14px, weight: 400, color: #9E9E9E
      Text-decoration: line-through
    
    [Rating Row]
    Margin-top: 6px
    Display: flex, align-items: center, gap: 4px
    
      [Stars]: 5 stars, 14px, filled: #FFAD33, empty: #E0E0E0
      [Count]: 12px, color: #757575, text: "(65)"
```

---

## 6. "JUST FOR YOU" RECOMMENDED SECTION

```
Margin-top: 80px
Padding: 0 88px

  [Header Row]
  Display: flex, align-items: center, justify-content: space-between
  Margin-bottom: 32px
  
    [Left: Title with Red Bar]
    Display: flex, align-items: center, gap: 16px
    
      [Red accent bar]: 16px × 40px, background #DB4444, border-radius 4px
      [Text]: "Just For You", font 20px, weight 600, color #000000
    
    [Right: See All Button]
    Width: 120px, Height: 42px
    Background: #FFFFFF
    Border: 2px solid #000000
    Border-radius: 4px
    Font: 14px, weight: 500, color: #000000
    Cursor: pointer
    Hover: background #000000, color #FFFFFF
    Text: "See All"

  [Recommended Products Grid]
  Display: grid
  Grid-template-columns: repeat(4, 1fr)
  Gap: 24px
  
    4 recommended product cards
    Uses standard Product Card spec (design system §2.5)
    "Add to Cart" shows on hover as normal
```

---

## 7. EMPTY WISHLIST STATE

```
Display: flex, flex-direction: column, align-items: center
Padding: 80px 88px
Text-align: center

  [Icon]
  Width: 80px, Height: 80px
  Icon: heart outline with X, or empty heart
  Color: #E0E0E0
  Margin-bottom: 24px
  
  [Heading]
  Font: 24px, weight: 700, color: #000000
  Text: "Your wishlist is empty"
  Margin-bottom: 12px
  
  [Subtext]
  Font: 16px, color: #757575
  Text: "Save items you love to your wishlist and shop them anytime."
  Margin-bottom: 32px
  
  [Continue Shopping Button]
  Uses Primary Button spec
  Text: "Continue Shopping"
  Width: 220px
```

---

## 8. TOAST NOTIFICATIONS

```
When removing item from wishlist:
Toast: "Item removed from wishlist"
Background: #000000, text #FFFFFF, 14px
Duration: 2s

When adding item to cart from wishlist:
Toast: "Added to cart"
With optional "View Cart" link in toast (font 14px, color #FFAD33, cursor pointer)
Duration: 3s

Toast spec: see 05-404-nav-states-interactions.md §9
```

---

## 9. RESPONSIVE BEHAVIOR

```
Desktop (≥ 1280px): 4 columns
Tablet (768px – 1279px): 3 columns, "Move All to Bag" button full width
Mobile (< 768px): 2 columns, header row stacks vertically
```

---

## 10. WISHLIST COUNT SYNC

```
The wishlist icon badge in the navbar always reflects current wishlist count.
When item removed: count decreases, badge updates instantly
When item added (from any product card): count increases
If count reaches 0: badge hides with fade-out animation (opacity 0, scale 0)
If first item added from 0: badge shows with bounce animation (scale 0 → 1.2 → 1)
```
