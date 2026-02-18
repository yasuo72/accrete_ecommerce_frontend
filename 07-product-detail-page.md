# Exclusive E-Commerce — Product Detail Page Specification

---

## 1. PAGE OVERVIEW

The Product Detail page displays a single product with full information, images, variants, add-to-cart functionality, and related products. Reached by clicking any product card anywhere on the site.

---

## 2. PAGE STRUCTURE

```
[Announcement Bar]
[Navigation Bar]
[Breadcrumb Bar]
[Product Detail Section — Images + Info]
[Tab Section — Description / Reviews / Shipping]
[Related Products Section]
[Footer]
```

---

## 3. BREADCRUMB

```
Padding: 24px 88px
Font: 14px, color: #9E9E9E
Example: Home / Electronics / LCD Monitor

Each part:
  Color: #9E9E9E
  Hover: color #DB4444, cursor: pointer
Current (last): color #000000, weight: 500
```

---

## 4. PRODUCT DETAIL SECTION

```
Padding: 40px 88px
Display: grid
Grid-template-columns: 1fr 1fr
Gap: 80px
Align-items: flex-start
```

### 4.1 Left Column — Product Images

```
Display: flex
Gap: 24px

  [Thumbnail Strip — Left side, vertical]
  Display: flex, flex-direction: column, gap: 16px
  Width: 100px
  
    Each thumbnail:
    Width: 100px, Height: 100px
    Background: #F5F5F5
    Border-radius: 4px
    Object-fit: contain
    Cursor: pointer
    Border: 2px solid transparent
    Transition: border-color 0.2s
    
    Hover: border-color: #DB4444
    
    Active/selected thumbnail:
    Border: 2px solid #DB4444
  
  [Main Image Display — Right side]
  Flex: 1
  Height: 500px
  Background: #F5F5F5
  Border-radius: 8px
  Position: relative
  Overflow: hidden
  Display: flex, align-items: center, justify-content: center
  
    [Main Product Image]
    Max-width: 90%
    Max-height: 90%
    Object-fit: contain
    Transition: opacity 0.25s ease (on thumbnail change)
    
    [Zoom Button] — top right
    Position: absolute, top: 16px, right: 16px
    Width: 36px, Height: 36px
    Background: #FFFFFF
    Border-radius: 50%
    Box-shadow: 0 2px 8px rgba(0,0,0,0.12)
    Icon: zoom-in / expand, 18px, color #000000
    Cursor: pointer
    Hover: background #F5F5F5
    
    [Sale Badge] — top left (if discounted)
    Position: absolute, top: 16px, left: 16px
    Uses badge spec from design system §2.5
    
    [Previous / Next Image Arrows]
    Position: absolute, left: 12px / right: 12px, top: 50%
    Transform: translateY(-50%)
    Width: 36px, Height: 36px
    Background: #FFFFFF
    Border-radius: 50%
    Box-shadow: 0 2px 8px rgba(0,0,0,0.1)
    Icon: ← / →, 14px
    Cursor: pointer
    Hover: background #DB4444, icon color #FFFFFF
```

### 4.2 Right Column — Product Info

```
  [Product Name]
  Font: 24px, weight: 700, color: #000000
  Margin-bottom: 8px
  
  [Rating + Review Count + In Stock]
  Display: flex, align-items: center, gap: 16px
  Margin-bottom: 16px
  
    [Stars]
    5 stars, 16px, filled: #FFAD33, empty: #E0E0E0
    
    [Review Count]
    Font: 14px, color: #757575
    Text: "(150 Reviews)"
    
    [Separator]
    Width: 1px, Height: 16px
    Background: #E0E0E0
    
    [Stock Status]
    Font: 14px, color: #00A862 (green)
    Text: "In Stock"
    
    OR if out of stock:
    Color: #DB4444, Text: "Out of Stock"
  
  [Price Display]
  Margin-bottom: 24px
  Display: flex, align-items: center, gap: 12px
  
    [Current Price]
    Font: 24px, weight: 700, color: #DB4444
    
    [Original Price] (if discounted)
    Font: 18px, weight: 400, color: #9E9E9E
    Text-decoration: line-through
    
    [Discount Badge] (if discounted)
    Background: #FFEAEA
    Color: #DB4444
    Font: 14px, weight: 600
    Padding: 2px 8px
    Border-radius: 4px
    Text: "-40%" (percentage off)
  
  [Divider]
  Border: none
  Border-top: 1px solid #E0E0E0
  Margin: 24px 0
  
  [Product Description — Short]
  Font: 14px, weight: 400, color: #757575
  Line-height: 1.7
  Margin-bottom: 24px
  Max 3 lines visible
  
  [Divider]
  Same as above
  
  ─────────────────────────────────
  COLOUR SELECTION
  ─────────────────────────────────
  
  Margin-bottom: 24px
  
  [Label]
  Font: 20px, weight: 400, color: #000000
  Text: "Colours:"
  Display: inline
  
  [Color Swatches Row]
  Display: inline-flex, gap: 8px
  Margin-left: 16px
  Vertical-align: middle
  
    Each swatch:
    Width: 20px, Height: 20px
    Border-radius: 50%
    Cursor: pointer
    Border: 2px solid transparent
    Transition: all 0.15s
    
    Hover: border-color: #9E9E9E
    
    Selected swatch:
    Border: 2px solid #FFFFFF
    Box-shadow: 0 0 0 2px #DB4444 (outer ring)
  
  ─────────────────────────────────
  SIZE SELECTION
  ─────────────────────────────────
  
  Margin-bottom: 24px
  
  [Label]
  Font: 20px, weight: 400, color: #000000
  Text: "Size:"
  Display: inline
  
  [Size Buttons Row]
  Display: inline-flex, gap: 8px
  Margin-left: 16px
  Vertical-align: middle
  
    Each size button:
    Min-width: 40px
    Height: 40px
    Padding: 0 12px
    Border: 1px solid #E0E0E0
    Border-radius: 4px
    Font: 14px, weight: 400, color: #000000
    Background: #FFFFFF
    Cursor: pointer
    Transition: all 0.15s
    
    Hover: border-color: #DB4444, color: #DB4444
    
    Selected:
    Background: #DB4444
    Border-color: #DB4444
    Color: #FFFFFF
    Font-weight: 600
    
    Out of Stock size:
    Color: #9E9E9E
    Cursor: not-allowed
    Position: relative
    ::after — diagonal line through button
  
  ─────────────────────────────────
  ADD TO CART ROW
  ─────────────────────────────────
  
  Margin-bottom: 24px
  Display: flex, align-items: center, gap: 16px
  
    [Quantity Selector]
    Width: 120px, Height: 44px
    Border: 1px solid #E0E0E0
    Border-radius: 4px
    Display: flex, align-items: center
    
      [Minus Button]
      Width: 40px, Height: 100%
      Background: #FFFFFF
      Border-right: 1px solid #E0E0E0
      Font: 20px, color: #000000
      Display: flex, align-items: center, justify-content: center
      Cursor: pointer
      Hover: background: #F5F5F5
      
      [Count Display]
      Flex: 1
      Text-align: center
      Font: 16px, weight: 500, color: #000000
      
      [Plus Button]
      Width: 40px, Height: 100%
      Background: #FFFFFF
      Border-left: 1px solid #E0E0E0
      Font: 20px, color: #000000
      Same as minus
      Active plus: text color changes to #DB4444
    
    [Buy Now Button]
    Uses Primary Button spec
    Width: 165px, Height: 44px
    Text: "Buy Now"
    
    [Wishlist Button]
    Width: 44px, Height: 44px
    Background: #FFFFFF
    Border: 1px solid #E0E0E0
    Border-radius: 4px
    Icon: heart outline, 20px, color: #000000
    Cursor: pointer
    Hover: background: #FFF0F0, border-color: #DB4444, icon: #DB4444
    
    When wishlisted:
    Icon: heart filled, color: #DB4444
    Background: #FFF0F0
    Border-color: #DB4444
  
  ─────────────────────────────────
  DELIVERY & RETURN INFO BOX
  ─────────────────────────────────
  
  Border: 1px solid #E0E0E0
  Border-radius: 4px
  Overflow: hidden
  
  [Free Delivery Row]
  Padding: 16px 20px
  Display: flex, align-items: flex-start, gap: 16px
  Border-bottom: 1px solid #E0E0E0
  
    [Icon]
    Width: 28px, Height: 28px
    Icon: truck/delivery, color: #000000
    Flex-shrink: 0, margin-top: 2px
    
    [Text Block]
    
      [Title]
      Font: 16px, weight: 700, color: #000000
      Text: "Free Delivery"
      Margin-bottom: 4px
      
      [Subtitle]
      Font: 12px, weight: 400, color: #000000
      Text-decoration: underline
      Cursor: pointer
      Hover: color: #DB4444
      Text: "Enter your postal code for Delivery Availability"
  
  [Return Delivery Row]
  Padding: 16px 20px
  Display: flex, align-items: flex-start, gap: 16px
  
    [Icon]
    Width: 28px, Height: 28px
    Icon: return/refresh arrows, color: #000000
    
    [Text Block]
    
      [Title]
      Font: 16px, weight: 700, color: #000000
      Text: "Return Delivery"
      Margin-bottom: 4px
      
      [Subtitle]
      Font: 12px, weight: 400, color: #000000
      Text: "Free 30 Days Delivery Returns. "
      Followed by link: "Details"
      Link: font-weight 400, underline, color #000000, hover #DB4444
```

---

## 5. PRODUCT TABS SECTION

```
Margin-top: 60px
Padding: 0 88px

  [Tab Navigation]
  Display: flex, gap: 0
  Border-bottom: 1px solid #E0E0E0
  
    Each tab:
    Padding: 14px 24px
    Font: 16px, weight: 400, color: #757575
    Cursor: pointer
    Border-bottom: 2px solid transparent
    Transition: all 0.2s
    Margin-bottom: -1px (overlap border)
    
    Hover: color #000000
    
    Active tab:
    Color: #000000
    Font-weight: 600
    Border-bottom: 2px solid #DB4444
  
  Tabs: "Description" | "Additional Information" | "Reviews (150)"

  [Tab Content Panel]
  Padding: 32px 0
  
  ─────────────────────────────────
  DESCRIPTION TAB
  ─────────────────────────────────
  
    Font: 16px, weight: 400, color: #757575
    Line-height: 1.8
    
    Content blocks:
    - Paragraphs with product details
    - Feature list (using design system bullets)
    - Specifications table if applicable
  
  ─────────────────────────────────
  REVIEWS TAB
  ─────────────────────────────────
  
    [Rating Overview Block]
    Display: flex, gap: 48px, align-items: center
    Margin-bottom: 32px
    
      [Overall Rating]
      Text-align: center
      
        [Big Number]: 64px, weight 700, color #000000
        [Stars row]: 5 stars, 24px
        [Count]: "Based on 150 reviews", 14px, #757575
      
      [Rating Breakdown Bars]
      Flex: 1
      
        5 rows (5★ to 1★):
        Each row:
        Display: flex, align-items: center, gap: 12px
        Margin-bottom: 8px
        
          [Star Label]: "5 ★", 14px, color #000000, width: 30px
          [Progress Bar]: flex 1, height: 8px, background: #F5F5F5, border-radius: 4px
            Filled portion: background #FFAD33, border-radius: 4px
          [Percentage]: 14px, color #757575, width: 36px, text-align: right
    
    [Write a Review Button]
    Uses Primary Button spec, width: 180px
    Text: "Write a Review"
    Margin-bottom: 32px
    
    [Individual Reviews]
    
      Each review card:
      Padding: 24px 0
      Border-bottom: 1px solid #F5F5F5
      
        [Header row]
        Display: flex, align-items: center, gap: 12px, margin-bottom: 8px
        
          [Avatar circle]: 40px, background #DB4444, initials #FFFFFF, font 14px bold
          [Name]: 16px, weight 600, #000000
          [Verified badge]: "✓ Verified Purchase", 12px, #00A862
          [Date]: 12px, #757575, margin-left: auto
        
        [Stars row]: 14px stars
        Margin-bottom: 8px
        
        [Review Title]: 16px, weight 600, #000000, margin-bottom: 4px
        [Review Text]: 14px, #757575, line-height 1.6
        
        [Helpful Row]
        Margin-top: 12px
        Font: 13px, color #757575
        Text: "Was this helpful?" + [Yes (12)] + [No (2)] buttons
        Button: padding 4px 12px, border 1px solid #E0E0E0, border-radius 4px
        Hover: border-color #DB4444, color #DB4444
```

---

## 6. RELATED PRODUCTS SECTION

```
Margin-top: 80px
Padding: 0 88px

  [Section Header]
  Red bar + "Related Items" label
  h2: "Related Products"
  
  [Navigation arrows] — top right, same spec as homepage
  
  [Product Cards Row]
  Margin-top: 32px
  Display: flex, gap: 24px
  Overflow: hidden (carousel)
  
    4–5 related product cards
    Uses Product Card spec from design system §2.5
```

---

## 7. RECENTLY VIEWED SECTION

```
Margin-top: 60px
Padding: 0 88px

  [Section Header]
  h3: "Recently Viewed Products"
  Font: 20px, weight 600, #000000
  
  [Product Cards Row]
  Display: flex, gap: 20px
  Overflow-x: auto, scrollbar hidden
  
  4 recently viewed product cards (smaller variant)
  Card width: 200px
```

---

## 8. LIGHTBOX / ZOOM MODAL

```
Triggered by clicking zoom button on main image

[Overlay]
Position: fixed, inset: 0
Background: rgba(0,0,0,0.85)
Z-index: 500
Display: flex, align-items: center, justify-content: center

  [Lightbox Container]
  Width: 80vw, Max-width: 900px
  Height: 80vh
  Position: relative
  
    [Close Button]
    Position: absolute, top: -40px, right: 0
    Width: 32px, Height: 32px
    Icon: × white, 20px
    Cursor: pointer
    
    [Main Image]
    Width: 100%, Height: 100%
    Object-fit: contain
    
    [Prev / Next Arrows]
    Same style as image gallery arrows
    Position: sides of modal
    
    [Thumbnail Strip]
    Position: absolute, bottom: -80px, left: 0, right: 0
    Display: flex, justify-content: center, gap: 12px
    
      Each thumbnail: 60px × 60px
      Border: 2px solid transparent
      Active: border: 2px solid #FFFFFF
      Cursor: pointer
```
