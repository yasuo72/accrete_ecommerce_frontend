# Exclusive E-Commerce — Cart & Checkout Pages Specification

---

## 1. CART PAGE

### 1.1 Page Structure

```
[Announcement Bar]
[Navigation Bar] — logged-in state (user avatar filled, cart badge shows count)
[Breadcrumb Bar]
[Cart Content Area]
[Footer]
```

### 1.2 Breadcrumb Bar

```
Width: 100%
Padding: 24px 88px
Background: #FFFFFF

  [Breadcrumb]
  Display: flex, align-items: center, gap: 8px
  Font: 14px, color: #9E9E9E
  
  Items: "Home" + " / " + "Cart"
  
  "Home": color #9E9E9E, cursor: pointer, hover: color #DB4444
  " / ": color #9E9E9E
  "Cart": color #000000, font-weight: 500 (current page, no link)
```

### 1.3 Cart Table

```
Padding: 40px 88px

  [Table]
  Width: 100%
  Border-collapse: collapse
  
  ─────────────────────────────────
  HEADER ROW
  ─────────────────────────────────
  
  [Table Header Row]
  Background: #FFFFFF
  Box-shadow: 0 2px 8px rgba(0,0,0,0.08)
  Padding: 0
  Height: 72px
  
    Columns:
    
    [Product]
    Padding: 0 0 0 24px
    Font: 16px, weight: 400, color: #000000
    Width: 40% (flexible)
    
    [Price]
    Font: 16px, weight: 400, color: #000000
    Width: 20%
    
    [Quantity]
    Font: 16px, weight: 400, color: #000000
    Width: 20%
    
    [Subtotal]
    Font: 16px, weight: 400, color: #000000
    Width: 20%
    Text-align: right, padding-right: 24px
  
  ─────────────────────────────────
  PRODUCT ROWS
  ─────────────────────────────────
  
  Each product row:
  Background: #FFFFFF
  Border: 1px solid #E0E0E0 (full box border)
  Border-radius: 4px
  Margin-bottom: 16px (rows visually separated, not true table rows — use divs)
  Height: 100px
  Display: grid, grid-template-columns: 40% 20% 20% 20%
  Align-items: center
  
    [Product Cell]
    Padding: 0 16px 0 24px
    Display: flex, align-items: center, gap: 16px
    
      [Remove/Delete Icon]
      Width: 24px, Height: 24px
      Background: #DB4444
      Border-radius: 50%
      Display: flex, align-items: center, justify-content: center
      Icon: × (close), 12px, color: #FFFFFF
      Cursor: pointer
      Hover: background #A02020
      Flex-shrink: 0
      
      [Product Image]
      Width: 50px, Height: 50px
      Object-fit: contain
      Background: #F5F5F5
      Border-radius: 4px
      Flex-shrink: 0
      
      [Product Name]
      Font: 16px, weight: 400, color: #000000
    
    [Price Cell]
    Font: 16px, weight: 400, color: #000000
    Padding: 0 16px
    
    [Quantity Cell]
    Padding: 0 16px
    
      [Quantity Input with Spinners]
      Width: 80px
      Height: 44px
      Border: 1px solid #9E9E9E
      Border-radius: 4px
      Display: flex, align-items: center
      
        [Number Display]
        Flex: 1
        Text-align: center
        Font: 16px, weight: 500, color: #000000
        Padding: 0 4px
        Formatted: "01", "02" (zero-padded 2 digits)
        
        [Spinner Controls]
        Display: flex, flex-direction: column
        Width: 24px
        Height: 100%
        Border-left: 1px solid #9E9E9E
        
          [Up Arrow]
          Height: 50%
          Display: flex, align-items: center, justify-content: center
          Icon: ˄ or ▲, 8px, color: #000000
          Cursor: pointer
          Border-bottom: 1px solid #9E9E9E
          Hover: background #F5F5F5
          
          [Down Arrow]
          Height: 50%
          Display: flex, align-items: center, justify-content: center
          Icon: ˅ or ▼, 8px, color: #000000
          Cursor: pointer
          Hover: background #F5F5F5
    
    [Subtotal Cell]
    Font: 16px, weight: 400, color: #000000
    Padding: 0 24px 0 16px
    Text-align: right
  
  ─────────────────────────────────
  EXAMPLE DATA SHOWN
  ─────────────────────────────────
  
  Row 1:
    Product: LCD Monitor (thumbnail: red gaming monitor image)
    Price: $650
    Quantity: 01
    Subtotal: $650
  
  Row 2:
    Product: H1 Gamepad (thumbnail: black gamepad image)
    Price: $550
    Quantity: 02
    Subtotal: $1100
```

### 1.4 Cart Action Row

```
Margin-top: 32px
Padding: 0 88px
Display: flex, justify-content: space-between, align-items: center

  [Return To Shop Button]
  Width: 180px, Height: 56px
  Background: #FFFFFF
  Border: 2px solid #9E9E9E
  Border-radius: 4px
  Font: 16px, weight: 500, color: #000000
  Cursor: pointer
  Hover: border-color #000000
  
  [Update Cart Button]
  Width: 180px, Height: 56px
  Background: #FFFFFF
  Border: 2px solid #9E9E9E
  Border-radius: 4px
  Font: 16px, weight: 500, color: #000000
  Cursor: pointer
  Hover: border-color #000000, background #F5F5F5
```

### 1.5 Coupon + Cart Total Row

```
Margin-top: 40px
Padding: 0 88px
Display: flex, justify-content: space-between, align-items: flex-start
Gap: 40px

  ─────────────────────────────────
  LEFT — COUPON CODE INPUT
  ─────────────────────────────────
  
  Display: flex, gap: 16px, align-items: center
  Flex: 0 0 auto
  
    [Coupon Input]
    Width: 300px, Height: 56px
    Background: #FFFFFF
    Border: 1px solid #000000
    Border-radius: 4px
    Padding: 0 20px
    Font: 16px, color: #000000
    Placeholder: "Coupon Code", 16px, color: #9E9E9E
    
    [Apply Coupon Button]
    Width: 140px, Height: 56px
    Background: #DB4444
    Color: #FFFFFF
    Font: 16px, weight: 500
    Border: none
    Border-radius: 4px
    Cursor: pointer
    Hover: background #C03333
  
  ─────────────────────────────────
  RIGHT — CART TOTAL SUMMARY BOX
  ─────────────────────────────────
  
  Width: 470px
  Border: 1px solid #9E9E9E
  Border-radius: 4px
  Padding: 32px
  
    [Box Title]
    Font: 20px, weight: 700, color: #000000
    Text: "Cart Total"
    Margin-bottom: 24px
    
    [Line: Subtotal]
    Display: flex, justify-content: space-between, align-items: center
    Padding: 16px 0
    Border-bottom: 1px solid #E0E0E0
    
      Left: "Subtotal:" — 16px, weight: 400, color: #000000
      Right: "$1750" — 16px, weight: 400, color: #000000
    
    [Line: Shipping]
    Display: flex, justify-content: space-between, align-items: center
    Padding: 16px 0
    Border-bottom: 1px solid #E0E0E0
    
      Left: "Shipping:" — 16px, weight: 400, color: #000000
      Right: "Free" — 16px, weight: 400, color: #000000
    
    [Line: Total]
    Display: flex, justify-content: space-between, align-items: center
    Padding: 16px 0
    Margin-bottom: 24px
    
      Left: "Total:" — 16px, weight: 400, color: #000000
      Right: "$1750" — 16px, weight: 400, color: #000000
    
    [Proceed to Checkout Button]
    Width: 100%
    Height: 56px
    Background: #DB4444
    Color: #FFFFFF
    Font: 16px, weight: 500
    Border: none
    Border-radius: 4px
    Cursor: pointer
    Hover: background #C03333
    Text: "Proceed to checkout"
```

---

## 2. CHECKOUT PAGE

### 2.1 Page Structure

```
[Announcement Bar]
[Navigation Bar] — logged-in state
[Breadcrumb Bar]
[Checkout Content Area]
[Footer]
```

### 2.2 Breadcrumb Bar (Checkout)

```
Padding: 24px 88px
Background: #FFFFFF

  [Breadcrumb — multi-step]
  Display: flex, align-items: center, gap: 8px
  Font: 14px, color: #9E9E9E
  
  Items: "Account" + " / " + "My Account" + " / " + "Product" + " / " + "View Cart" + " / " + "CheckOut"
  
  Current page ("CheckOut"): color #000000, weight: 500
  Previous steps: color #9E9E9E, cursor: pointer, hover: color #DB4444
  Separator " / ": color #9E9E9E
```

### 2.3 Checkout Layout

```
Padding: 40px 88px
Display: grid
Grid-template-columns: 1fr 420px
Gap: 80px
Align-items: flex-start
```

### 2.4 Left Column — Billing Details Form

```
[Section Title]
Font: 36px, weight: 700, color: #000000
Text: "Billing Details"
Margin-bottom: 32px

[Form]
Display: flex, flex-direction: column, gap: 24px

  All inputs share this base style:
  Width: 100% (of column)
  Height: 50px
  Background: #F5F5F5
  Border: none
  Border-radius: 4px
  Padding: 0 16px
  Font: 16px, color: #000000
  Placeholder: 16px, color: #9E9E9E
  Focus: border: 1px solid #DB4444, background: #FFFFFF
  Outline: none
  Transition: all 0.2s

  [First Name* field]
  Label: none visible (placeholder only)
  Placeholder: — (empty, just field shown)
  Required: true (asterisk in label above)
  
  Label style (if shown):
  Font: 16px, weight: 400, color: #000000
  Margin-bottom: 8px
  Required marker: "*" in red #DB4444, no space before

  [Company Name field]
  Not required (no asterisk)
  
  [Street Address* field]
  Required
  
  [Apartment, floor, etc. (optional) field]
  Not required
  
  [Town/City* field]
  Required
  
  [Phone Number* field]
  Type: tel
  Required
  
  [Email Address* field]
  Type: email
  Required

  [Save Info Checkbox Row]
  Margin-top: 8px
  Display: flex, align-items: center, gap: 12px
  
    [Checkbox]
    Width: 20px, Height: 20px
    Background: #DB4444 (when checked)
    Border: 2px solid #DB4444
    Border-radius: 4px
    
    Checked state:
    Background: #DB4444
    Icon: white checkmark inside, 12px
    
    [Label Text]
    Font: 16px, weight: 400, color: #000000
    Text: "Save this information for faster check-out next time"
    Cursor: pointer
```

### 2.5 Right Column — Order Summary & Payment

```
[Order Items List]
Margin-bottom: 24px

  Each order item row:
  Display: flex, align-items: center, justify-content: space-between
  Margin-bottom: 16px
  
    [Left: Image + Name]
    Display: flex, align-items: center, gap: 16px
    
      [Product Thumbnail]
      Width: 54px, Height: 54px
      Object-fit: contain
      Background: #F5F5F5
      Border-radius: 4px
      
      [Product Name]
      Font: 16px, weight: 400, color: #000000
    
    [Right: Price]
    Font: 16px, weight: 400, color: #000000

  Items shown:
  - LCD Monitor — $650 (thumbnail: red monitor)
  - H1 Gamepad — $1100 (thumbnail: black gamepad)

[Divider Line]
Border: none
Border-top: 1px solid #E0E0E0
Margin: 8px 0

[Subtotal Row]
Display: flex, justify-content: space-between
Padding: 16px 0
Font: 16px, weight: 400, color: #000000
"Subtotal:" / "$1750"

[Divider Line]
Same as above

[Shipping Row]
Display: flex, justify-content: space-between
Padding: 16px 0
"Shipping:" / "Free"

[Divider Line]

[Total Row]
Display: flex, justify-content: space-between
Padding: 16px 0
"Total:" / "$1750"
Both: Font: 16px, weight: 400, color: #000000

─────────────────────────────────
PAYMENT METHOD SELECTION
─────────────────────────────────

Margin-top: 24px

  [Bank Option Row]
  Display: flex, align-items: center, justify-content: space-between
  Margin-bottom: 16px
  
    [Left: Radio + Label]
    Display: flex, align-items: center, gap: 12px
    
      [Radio Button]
      Width: 20px, Height: 20px
      Border: 2px solid #9E9E9E
      Border-radius: 50%
      Background: #FFFFFF
      
      Unchecked state (Bank is unchecked by default):
      Center dot: none
      
      [Label]
      Font: 16px, weight: 400, color: #000000
      Text: "Bank"
    
    [Right: Payment Brand Logos]
    Display: flex, align-items: center, gap: 8px
    
      Logos shown (left to right):
      1. bKash logo (pink/magenta)
      2. Visa logo (blue/white)
      3. Mastercard logo (red/orange circles)
      4. Nagad logo (orange)
      
      Each logo: Height: 24px, object-fit: contain
  
  [Cash on delivery Option Row]
  Display: flex, align-items: center, gap: 12px
  Margin-bottom: 24px
  
    [Radio Button — CHECKED]
    Width: 20px, Height: 20px
    Border: 2px solid #DB4444
    Border-radius: 50%
    Background: #FFFFFF
    
    Checked state:
    Center filled circle: 10px × 10px, background: #DB4444
    
    [Label]
    Font: 16px, weight: 400, color: #000000
    Text: "Cash on delivery"

─────────────────────────────────
COUPON CODE ROW
─────────────────────────────────

Display: flex, gap: 16px, align-items: center
Margin-bottom: 16px

  [Coupon Input]
  Flex: 1
  Height: 56px
  Background: #FFFFFF
  Border: 1px solid #9E9E9E
  Border-radius: 4px
  Padding: 0 20px
  Font: 16px, color: #000000
  Placeholder: "Coupon Code", color: #9E9E9E

  [Apply Coupon Button]
  Width: 140px, Height: 56px
  Background: #DB4444
  Color: #FFFFFF
  Font: 16px, weight: 500
  Border: none
  Border-radius: 4px
  Cursor: pointer
  Hover: background #C03333

─────────────────────────────────
PLACE ORDER BUTTON
─────────────────────────────────

Width: 190px
Height: 56px
Background: #DB4444
Color: #FFFFFF
Font: 16px, weight: 500
Border: none
Border-radius: 4px
Cursor: pointer
Text: "Place Order"
Hover: background #C03333
Transition: background 0.2s
```

---

## 3. NAVIGATION HEADER STATE (Cart & Checkout)

```
When cart has items:
  Cart icon badge: shows item count (e.g., "2")
  Badge: 16px circle, background #DB4444, text #FFFFFF, 10px bold
  Position: absolute top -6px right -6px

When user is logged in:
  User icon: filled/colored person icon (red circle around person, #DB4444)
  OR: user avatar circle, 32px, background #DB4444, initials in #FFFFFF

Wishlist icon badge:
  Shows wishlist count (e.g., "4")
  Same badge style as cart
```

---

## 4. FORM VALIDATION STATES

```
[Required field empty on submit]
Border: 1px solid #DB4444
Below field: error text
  Font: 12px, color: #DB4444
  Text examples:
  - "Please enter your first name"
  - "Please enter a valid email address"
  - "Please enter your phone number"

[Valid field]
Border: 1px solid #00A862 (optional green)
No error message

[Field with value (filled)]
Background: #FFFFFF (overrides #F5F5F5)
Border: 1px solid #E0E0E0
```

---

## 5. RESPONSIVE CHECKOUT BEHAVIOR

### Tablet (768px – 1023px)

```
Grid becomes: 1 column (stacked)
Right column moves below left column
Max-width for both: 100%
```

### Mobile (< 768px)

```
Full single-column layout
Padding: 24px 16px
Form inputs: height 44px
Buttons: full width
```
