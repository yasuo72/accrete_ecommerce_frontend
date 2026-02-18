# Exclusive E-Commerce — Product Listing / Shop Page Specification

---

## 1. PAGE OVERVIEW

The Shop/Products page displays a filterable, sortable grid of all products. It is reached via:
- "View All Products" buttons on homepage
- Category links in the sidebar or Browse By Category section
- Clicking a category from the homepage hero sidebar
- Search results

---

## 2. PAGE STRUCTURE

```
[Announcement Bar]
[Navigation Bar]
[Breadcrumb Bar]
[Page Content — Sidebar + Product Grid]
[Pagination]
[Footer]
```

---

## 3. BREADCRUMB BAR

```
Padding: 24px 88px
Background: #FFFFFF
Display: flex, align-items: center, gap: 8px
Font: 14px, color: #9E9E9E

Examples:
Home / Shop
Home / Electronics
Home / Woman's Fashion / Tops

"Home": color #9E9E9E, hover: #DB4444, cursor: pointer
" / ": color #9E9E9E
Category names: same hover style
Current (last item): color #000000, weight: 500, no link
```

---

## 4. PAGE LAYOUT

```
Padding: 40px 88px
Display: grid
Grid-template-columns: 220px 1fr
Gap: 60px
Align-items: flex-start
```

---

## 5. LEFT FILTER SIDEBAR

```
Width: 220px
Position: sticky (optional), top: 108px

  ─────────────────────────────────
  SECTION: ALL CATEGORIES
  ─────────────────────────────────
  
  [Section Heading]
  Font: 16px, weight: 700, color: #000000
  Text: "All Categories" (or specific active category)
  Margin-bottom: 16px
  Padding-bottom: 8px
  Border-bottom: 1px solid #E0E0E0

  [Category List]
  Display: flex, flex-direction: column
  Gap: 0
  
    Each category item:
    Height: 40px
    Display: flex, align-items: center
    Font: 14px, weight: 400, color: #000000
    Cursor: pointer
    Border-bottom: 1px solid #F5F5F5
    Padding: 0 4px
    Transition: color 0.15s
    
    Hover: color #DB4444
    
    Active/selected: color #DB4444, font-weight: 600
    Left indicator for active:
      Width: 3px, height: 16px
      Background: #DB4444
      Border-radius: 2px
      Position: absolute, left: 0
  
  Categories:
  - Woman's Fashion
  - Men's Fashion
  - Electronics
  - Home & Lifestyle
  - Medicine
  - Sports & Outdoor
  - Baby's & Toys
  - Groceries & Pets
  - Health & Beauty

  ─────────────────────────────────
  SECTION: PRICE RANGE
  ─────────────────────────────────
  
  Margin-top: 32px
  
  [Section Heading]
  Font: 16px, weight: 700, color: #000000
  Text: "Price"
  Margin-bottom: 16px

  [Price Slider]
  Width: 100%
  
    [Track]
    Height: 4px
    Background: #E0E0E0
    Border-radius: 2px
    Position: relative
    
    [Filled Range]
    Height: 4px
    Background: #DB4444
    Border-radius: 2px
    Position: absolute
    
    [Thumb Handle — Left]
    [Thumb Handle — Right]
    Width: 14px, Height: 14px
    Background: #FFFFFF
    Border: 2px solid #DB4444
    Border-radius: 50%
    Position: absolute, top: -5px
    Cursor: grab
    Box-shadow: 0 2px 4px rgba(0,0,0,0.15)
    
    Active drag: cursor: grabbing
  
  [Price Labels Row]
  Margin-top: 12px
  Display: flex, justify-content: space-between
  Font: 14px, color: #000000
  Texts: "$0" left, "$1000" right (or current values)
  
  [Current Range Display]
  Font: 14px, color: #757575
  Text: "Price: $20 – $480" (dynamic)
  Margin-top: 4px

  ─────────────────────────────────
  SECTION: RATING FILTER
  ─────────────────────────────────
  
  Margin-top: 32px
  
  [Section Heading]
  Font: 16px, weight: 700, color: #000000
  Text: "Rating"
  Margin-bottom: 12px
  
  [Rating Options]
  Each row:
  Display: flex, align-items: center, gap: 8px
  Height: 32px
  Cursor: pointer
  
    [Stars row]: 5 stars, size 14px
    Filled: #FFAD33, empty: #E0E0E0
    
    [Count text]: "(120)", font: 12px, color: #757575
  
  5 rows: 5★ | 4★ & above | 3★ & above | 2★ & above | 1★ & above
  
  Hover: all stars light up with #FFAD33 tint
  Selected: bold label, radio-style dot beside

  ─────────────────────────────────
  CLEAR ALL FILTERS LINK
  ─────────────────────────────────
  
  Margin-top: 24px
  Font: 14px, color: #DB4444, underline
  Cursor: pointer
  Hover: color #A02020
  Text: "Clear All Filters"
```

---

## 6. RIGHT COLUMN — PRODUCT GRID AREA

### 6.1 Toolbar (Sort + Results Count + View Toggle)

```
Margin-bottom: 24px
Display: flex, align-items: center, justify-content: space-between

  [Left: Results Text]
  Font: 14px, weight: 400, color: #757575
  Text: "Showing 1–20 of 96 results"
  
  [Right: Controls Row]
  Display: flex, align-items: center, gap: 16px
  
    [Sort By Dropdown]
    Width: 200px, Height: 40px
    Background: #FFFFFF
    Border: 1px solid #E0E0E0
    Border-radius: 4px
    Padding: 0 12px
    Font: 14px, color: #000000
    Cursor: pointer
    Display: flex, align-items: center, justify-content: space-between
    
    Dropdown arrow: 10px chevron, color: #757575
    
    Options:
    - Best Match (default)
    - Price: Low to High
    - Price: High to Low
    - Newest Arrivals
    - Best Selling
    - Highest Rated
    
    [View Toggle — Grid/List]
    Display: flex, gap: 4px
    
      [Grid View Button] — 4-square icon
      Width: 36px, Height: 36px
      Border: 1px solid #E0E0E0
      Border-radius: 4px
      Icon: grid 2×2, 16px
      
      Active: background: #DB4444, icon: #FFFFFF, border-color: #DB4444
      Inactive: background: #FFFFFF, icon: #757575
      
      [List View Button] — 3-lines icon
      Same size spec
      Active/inactive same as grid button
```

### 6.2 Active Filter Tags

```
Display: flex, flex-wrap: wrap, gap: 8px
Margin-bottom: 20px

  Each active filter tag:
  Background: #F5F5F5
  Border: 1px solid #E0E0E0
  Border-radius: 9999px
  Padding: 4px 12px
  Display: flex, align-items: center, gap: 6px
  
    [Label]
    Font: 13px, color: #000000
    Example: "Electronics" | "Under $500" | "4★+"
    
    [Remove × button]
    Font: 12px, color: #757575
    Cursor: pointer
    Hover: color: #DB4444
    
  Hover tag: border-color: #DB4444
```

### 6.3 Product Grid

```
Display: grid
Grid-template-columns: repeat(4, 1fr)  [desktop]
  → repeat(3, 1fr)  [tablet 1024px]
  → repeat(2, 1fr)  [tablet 768px]
  → 1fr             [mobile 480px]
Gap: 24px

  Each product card: see 01-design-system-and-homepage.md §2.5 (Product Card spec)
  
  Cards per page: 20 (4 rows × 5 columns, or flexible per design)
  
  Cards include:
  - Sale badge (red) or New badge (green) if applicable
  - Wishlist + Quick-view icons (appear on hover)
  - "Add to Cart" button (slides up on card hover)
  - Product image (200px height, #F5F5F5 bg)
  - Product name
  - Current price (red #DB4444) + original price (strikethrough gray)
  - Star rating + review count
  - Color swatches (if multiple variants)
```

### 6.4 List View (alternate)

```
When list view toggle is active:
Each product row:
Width: 100%
Height: 140px
Background: #FFFFFF
Border: 1px solid #E0E0E0
Border-radius: 8px
Display: flex, align-items: center
Gap: 24px
Padding: 16px
Margin-bottom: 16px

  [Image]
  Width: 100px, Height: 100px
  Object-fit: contain
  Background: #F5F5F5
  Border-radius: 4px
  Flex-shrink: 0
  
  [Info Block] — flex: 1
  
    [Name]: 16px, weight 600, #000000
    [Description]: 14px, #757575, 2 lines max, overflow ellipsis
    [Stars + Count]: 14px stars, 12px count
  
  [Price Block]
  Display: flex, flex-direction: column, align-items: flex-end, gap: 4px
  
    [Current Price]: 18px, weight 700, #DB4444
    [Original Price]: 14px, weight 400, #9E9E9E, strikethrough
  
  [Action Buttons]
  Display: flex, flex-direction: column, gap: 8px
  
    [Add to Cart]: 120px × 36px, background #DB4444, text #FFFFFF
    [Wishlist icon]: 36px × 36px, border 1px solid #E0E0E0, heart icon
```

---

## 7. PAGINATION

```
Margin-top: 48px
Padding: 0 88px
Display: flex, justify-content: center, align-items: center, gap: 8px

  [Previous Button]
  Width: 40px, Height: 40px
  Background: #FFFFFF
  Border: 1px solid #E0E0E0
  Border-radius: 4px
  Icon: ← left arrow, 16px, color #000000
  Disabled: opacity 0.4, cursor not-allowed
  Hover (enabled): background #F5F5F5, border-color #9E9E9E
  
  [Page Number Buttons]
  Each: Width: 40px, Height: 40px
  Background: #FFFFFF
  Border: 1px solid #E0E0E0
  Border-radius: 4px
  Font: 14px, weight 400, color #000000
  Cursor: pointer
  Hover: background #F5F5F5
  
  Active / Current page:
  Background: #DB4444
  Border-color: #DB4444
  Color: #FFFFFF
  Font-weight: 600
  
  Ellipsis "...":
  Width: 40px, Height: 40px
  Display: flex, align-items: center, justify-content: center
  Font: 14px, color: #757575
  No border, no hover
  
  [Next Button]
  Width: 40px, Height: 40px
  Same style as Previous button but → right arrow
  Disabled when on last page
  
  Example sequence: ← 1 2 3 ... 8 9 →
  Display up to 5 page buttons + ellipsis
```

---

## 8. EMPTY STATE (No Products Found)

```
Display: flex, flex-direction: column, align-items: center, justify-content: center
Min-height: 400px
Text-align: center

  [Icon]
  Width: 80px, Height: 80px
  Color: #E0E0E0
  Icon: shopping bag with X or search with X
  
  [Heading]
  Font: 24px, weight: 700, color: #000000
  Text: "No Products Found"
  Margin-bottom: 12px
  
  [Subtext]
  Font: 16px, color: #757575
  Text: "Try adjusting your filters or search terms"
  Margin-bottom: 32px
  
  [Clear Filters Button]
  Uses Primary Button spec
  Text: "Clear All Filters"
  Width: 200px
```

---

## 9. LOADING STATE (Skeleton)

```
While products are loading, show skeleton cards:
Same grid layout
Each skeleton card:
  Height: 340px, width: 100%
  Background: #F5F5F5
  Border-radius: 8px
  Overflow: hidden
  
  Shimmer animation on all placeholder blocks
  (see 05-404-nav-states-interactions.md §7.1)

Show 8–12 skeleton cards while loading
```

---

## 10. CATEGORY-SPECIFIC PAGE HEADER

```
When browsing a specific category (e.g., "Electronics"):

  Margin-bottom: 32px
  
  [Section Tag]
  Red bar + category name label (see design system §2.6)
  
  [Page Heading]
  Font: 36px, weight: 700, color: #000000
  Text: category name (e.g., "Electronics")
  
  [Result Count]
  Font: 16px, color: #757575
  Text: "96 items found"
  Margin-top: 8px
```

---

## 11. RESPONSIVE BEHAVIOR

```
Desktop (≥ 1280px):
  Sidebar: visible
  Grid: 4 columns
  Gap: 24px

Tablet (768px – 1279px):
  Sidebar: hidden (toggle via "Filter" button)
  Filter button: fixed bottom-left or top of grid
  Grid: 2–3 columns

Mobile (< 768px):
  Sidebar: hidden (drawer from bottom)
  Grid: 1–2 columns
  Sort dropdown: full width
  Pagination: simplified (prev/next + current page only)
```
