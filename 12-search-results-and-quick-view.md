# Exclusive E-Commerce — Search Results Page & Quick View Modal Specification

---

## 1. SEARCH RESULTS PAGE

### 1.1 Page Overview

Displayed when user submits a search query via the navbar search bar. URL: `/search?q=keyboard`

### 1.2 Page Structure

```
[Announcement Bar]
[Navigation Bar] — search bar highlighted/active
[Search Results Content]
[Footer]
```

### 1.3 Navigation Bar Search State

```
When search is active/focused:
Search input: border: 1px solid #DB4444 (focus ring)
Background: #FFFFFF (was #F5F5F5)

When query submitted:
Search input retains the query text
Input value: "keyboard" (example)
Search icon color: #DB4444 (indicates active search)
```

### 1.4 Search Results Header

```
Padding: 40px 88px 0

  [Results Summary]
  Font: 14px, color: #757575
  Text: "Search results for: "
  Followed by: query in quotes
    Font: 14px, weight: 700, color: #000000
    Text: '"keyboard"'
  
  Example full line: Search results for: "keyboard"
  Margin-bottom: 4px
  
  [Result Count]
  Font: 14px, color: #757575
  Text: "12 results found"
```

### 1.5 Search Layout

```
Padding: 24px 88px 60px
Display: grid
Grid-template-columns: 220px 1fr
Gap: 60px
```

### 1.6 Left Filter Sidebar

```
Same as Product Listing sidebar (06-product-listing-shop-page.md §5)
With one addition:

  [Refine By Category section] — at the top
  Font: 16px, weight: 700, color: #000000
  Text: "Results In"
  Margin-bottom: 12px
  
    Each category showing count of results:
    "Electronics (8)"
    "Gaming (3)"
    "Computers (1)"
    
    Font: 14px, color #000000
    Count: same size, color #757575
    Each is clickable to filter to that category
```

### 1.7 Search Results Grid

```
Same structure as Product Listing grid (06-product-listing-shop-page.md §6)

Top toolbar:
  [Sort dropdown] same spec
  [View toggle] same spec
  Text: "12 results for 'keyboard'"
  
Product grid: repeat(4, 1fr), gap 24px
Uses standard Product Card spec
```

### 1.8 Search Suggestions / Autocomplete Dropdown

```
Appears while user is typing in the search bar (before submitting)

Position: absolute
Top: 100% of search bar + 4px
Left: 0
Width: 100% of search bar (240px)
Background: #FFFFFF
Border: 1px solid #E0E0E0
Border-radius: 0 0 8px 8px
Box-shadow: 0 4px 12px rgba(0,0,0,0.1)
Z-index: 200
Max-height: 320px
Overflow-y: auto

  [Sections in dropdown]
  
  ─────────────────────────────────
  RECENT SEARCHES (if applicable)
  ─────────────────────────────────
  
  [Section Label]
  Padding: 8px 16px 4px
  Font: 11px, weight: 600, color: #9E9E9E
  Text-transform: uppercase
  Text: "RECENT SEARCHES"
  
  [Recent Items]
  Each item:
  Display: flex, align-items: center, gap: 10px
  Padding: 10px 16px
  Cursor: pointer
  Hover: background #F5F5F5
  
    Icon: clock/history, 14px, color #9E9E9E
    Text: previous search term, 14px, color #000000
    [Remove × ]: position right, 12px, color #9E9E9E, hover #DB4444
  
  ─────────────────────────────────
  SUGGESTIONS
  ─────────────────────────────────
  
  [Section Label] — "SUGGESTIONS"
  
  [Suggestion Items]
  Each item:
  Display: flex, align-items: center, gap: 10px
  Padding: 10px 16px
  Cursor: pointer
  Hover: background #F5F5F5
  
    Icon: search/magnifying glass, 14px, color #9E9E9E
    Text: suggestion term, 14px, color #000000
    
    Matching portion of query: font-weight 700
    Example: "key" → results show "**key**board", "**key**board wireless"
  
  ─────────────────────────────────
  PRODUCT QUICK RESULTS (top 3)
  ─────────────────────────────────
  
  [Section Label] — "PRODUCTS"
  
  [Product Items]
  Each item:
  Display: flex, align-items: center, gap: 12px
  Padding: 8px 16px
  Cursor: pointer
  Hover: background #F5F5F5
  
    [Thumbnail]: 40px × 40px, bg #F5F5F5, border-radius 4px, object-fit contain
    
    [Product Info]
      Name: 14px, #000000
      Price: 13px, weight 600, #DB4444
  
  [View All Results Footer]
  Border-top: 1px solid #F5F5F5
  Padding: 10px 16px
  Display: flex, justify-content: center
  
    Text: "View all 12 results for 'keyboard'"
    Font: 14px, color #DB4444, cursor pointer
    Hover: underline
```

### 1.9 No Results State

```
Padding: 80px 88px
Display: flex, flex-direction: column, align-items: center
Text-align: center

  [Icon]
  Width: 80px, Height: 80px
  Icon: search with × , color #E0E0E0
  Margin-bottom: 24px
  
  [Heading]
  Font: 24px, weight: 700, color: #000000
  Text: "No results for 'xyz'"
  Margin-bottom: 12px
  
  [Subtext]
  Font: 16px, color: #757575
  Line-height: 1.6
  Text: "Try checking your spelling or use more general terms"
  Margin-bottom: 32px
  
  [Suggestions Section]
  Text: "You might also like:"
  Font: 16px, weight: 600, margin-bottom: 16px
  
  [Suggested product cards row — 4 cards]
  Uses Product Card spec
```

---

## 2. QUICK VIEW MODAL

### 2.1 Overview

Opened when user clicks the eye/quick-view icon on any product card. Allows adding to cart without navigating to the product detail page.

### 2.2 Modal Structure

```
[Overlay]: rgba(0,0,0,0.6), fixed inset 0, z-index 300

[Modal Container]
Position: fixed
Top: 50%, Left: 50%
Transform: translate(-50%, -50%)
Width: 900px
Max-width: 95vw
Max-height: 90vh
Background: #FFFFFF
Border-radius: 12px
Box-shadow: 0 8px 32px rgba(0,0,0,0.2)
Z-index: 301
Overflow: hidden
Display: grid
Grid-template-columns: 1fr 1fr

Animation:
  Open: opacity 0 + scale(0.95) → opacity 1 + scale(1), 0.25s ease
  Close: reverse

  ─────────────────────────────────
  LEFT: PRODUCT IMAGE PANEL
  ─────────────────────────────────
  
  Background: #F5F5F5
  Display: flex, align-items: center, justify-content: center
  Padding: 40px
  Position: relative
  Min-height: 400px
  
    [Main Image]
    Max-width: 100%
    Max-height: 380px
    Object-fit: contain
    
    [Thumbnail Strip] — bottom row
    Position: absolute, bottom: 16px, left: 50%, transform: translateX(-50%)
    Display: flex, gap: 8px
    
      Each thumbnail: 48px × 48px, bg #FFFFFF, border-radius 4px
      Object-fit: contain, cursor pointer
      Border: 2px solid transparent
      Active: border-color #DB4444
  
  ─────────────────────────────────
  RIGHT: PRODUCT INFO PANEL
  ─────────────────────────────────
  
  Padding: 40px
  Overflow-y: auto
  
    [Close Button] — top right of modal (absolute)
    Position: absolute, top: 16px, right: 16px
    Width: 36px, Height: 36px
    Background: #FFFFFF
    Border: 1px solid #E0E0E0
    Border-radius: 50%
    Icon: × , 16px, color: #000000
    Cursor: pointer
    Hover: background #DB4444, icon #FFFFFF, border-color #DB4444
    Z-index: 1
    
    [Product Name]
    Font: 20px, weight: 700, color: #000000
    Margin-bottom: 8px
    
    [Rating Row]
    Display: flex, align-items: center, gap: 8px
    Margin-bottom: 12px
    
      [Stars]: 5 stars, 14px
      [Count]: "(65 Reviews)", 13px, color #757575
      [Separator]: 1px × 14px, #E0E0E0
      [Stock]: "In Stock", 13px, color #00A862
    
    [Price]
    Font: 24px, weight: 700, color: #DB4444
    Margin-bottom: 4px
    
    [Original Price + Discount]
    Display: flex, gap: 8px, align-items: center
    Margin-bottom: 16px
    
      Original: 16px, #9E9E9E, strikethrough
      Discount badge: same spec as product detail
    
    [Short Description]
    Font: 14px, color: #757575
    Line-height: 1.7
    Margin-bottom: 20px
    Max 3 lines
    
    [Divider]: 1px solid #E0E0E0, margin: 0 0 20px
    
    [Color Selection]
    Same spec as Product Detail page (§4.2)
    Margin-bottom: 16px
    
    [Size Selection]
    Same spec as Product Detail page
    Margin-bottom: 20px
    
    [Quantity + Add to Cart Row]
    Display: flex, align-items: center, gap: 12px
    Margin-bottom: 16px
    
      [Quantity selector]: same spec as product detail page
      Width: 120px
      
      [Add to Cart Button]
      Flex: 1
      Height: 44px
      Uses Primary Button spec
      Text: "Add to Cart"
    
    [Wishlist Row]
    Display: flex, align-items: center, gap: 8px
    Margin-bottom: 20px
    
      Icon: heart outline, 16px, color #000000
      Text: "Add to Wishlist", 14px, color #000000, cursor pointer
      Hover: color #DB4444, icon fills
    
    [View Full Details Link]
    Font: 14px, color: #DB4444
    Text: "View Full Product Details →"
    Cursor: pointer
    Hover: underline
    Text-decoration: none by default
```

---

## 3. SEARCH KEYBOARD NAVIGATION

```
When search dropdown is open:
  ↓ / ↑ arrow keys: navigate between suggestions
  Highlighted item: background #F5F5F5
  Enter: navigate to highlighted result
  Escape: close dropdown, clear focus
  Tab: close dropdown, move to next focusable element
```

---

## 4. SEARCH PAGE RESPONSIVE

```
Desktop (≥ 1280px): sidebar + 4-column grid
Tablet (768px – 1279px): no sidebar (filter button), 2-3 column grid
Mobile (< 768px): no sidebar, 1-2 column grid, simplified toolbar
```

---

## 5. QUICK VIEW MODAL RESPONSIVE

```
Desktop: 2-column (image left, info right), 900px wide
Tablet: 2-column, 90vw wide
Mobile: 1-column (image stacked above info), 95vw, max-height 95vh, scroll within
```
