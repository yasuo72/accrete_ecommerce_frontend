# Exclusive E-Commerce — Order Confirmation & Order History Pages Specification

---

## 1. ORDER CONFIRMATION PAGE

### 1.1 Page Overview

Shown immediately after a successful checkout / "Place Order" action. URL: `/order-confirmation/:orderId`

### 1.2 Page Structure

```
[Announcement Bar]
[Navigation Bar] — logged-in state
[Order Confirmation Content]
[Footer]
```

### 1.3 Order Confirmation Content

```
Padding: 80px 88px
Display: flex, flex-direction: column, align-items: center
Text-align: center

  ─────────────────────────────────
  SUCCESS HEADER
  ─────────────────────────────────
  
  [Checkmark Circle Icon]
  Width: 80px, Height: 80px
  Background: #DB4444
  Border-radius: 50%
  Display: flex, align-items: center, justify-content: center
  Margin-bottom: 24px
  
    Icon: checkmark ✓
    Size: 36px, color: #FFFFFF
    Stroke-width: 3px
    
    Animation on load:
    Circle: scale(0) → scale(1), 0.4s ease-out
    Checkmark: draw animation (stroke-dashoffset), 0.3s 0.3s ease-out
  
  [Success Heading]
  Font: 36px, weight: 700, color: #000000
  Text: "Your Order is Confirmed!"
  Margin-bottom: 8px
  
  [Sub-heading]
  Font: 16px, weight: 400, color: #757575
  Text: "Thank you for your purchase. We've received your order and will process it shortly."
  Max-width: 520px
  Line-height: 1.6
  Margin-bottom: 40px
  
  ─────────────────────────────────
  ORDER SUMMARY BOX
  ─────────────────────────────────
  
  Width: 100%
  Max-width: 640px
  Border: 1px solid #E0E0E0
  Border-radius: 8px
  Overflow: hidden
  Text-align: left
  
    [Box Header]
    Background: #F5F5F5
    Padding: 16px 24px
    Display: flex, align-items: center, justify-content: space-between
    
      [Left: Order Number]
      Font: 16px, weight: 700, color: #000000
      Text: "Order #123456789"
      
      [Right: Date]
      Font: 14px, weight: 400, color: #757575
      Text: "February 18, 2026"
    
    [Order Items List]
    Padding: 0 24px
    
      Each item row:
      Display: flex, align-items: center, justify-content: space-between
      Padding: 16px 0
      Border-bottom: 1px solid #F5F5F5
      
        [Left: Image + Info]
        Display: flex, align-items: center, gap: 16px
        
          [Thumbnail]: 52px × 52px, background #F5F5F5, border-radius 4px, object-fit contain
          
          [Info block]
            [Name]: 14px, weight 500, #000000
            [Quantity]: 12px, #757575, "Qty: 2"
        
        [Right: Subtotal]
        Font: 14px, weight: 600, color: #000000
    
    [Totals Block]
    Padding: 16px 24px
    
      [Subtotal row]: flex space-between, 14px, #757575 left / #000000 right
      [Shipping row]: same style, right value: "Free"
      [Divider]: 1px solid #E0E0E0, margin 8px 0
      [Total row]: 16px, weight 700, #000000 both sides
    
    [Delivery Info Row]
    Padding: 16px 24px
    Border-top: 1px solid #E0E0E0
    Display: flex, align-items: center, gap: 12px
    
      Icon: truck, 20px, color #000000
      Text: "Estimated delivery: 3–5 business days"
      Font: 14px, color #757575
  
  ─────────────────────────────────
  ACTION BUTTONS ROW
  ─────────────────────────────────
  
  Margin-top: 40px
  Display: flex, gap: 16px, justify-content: center
  
  [Continue Shopping Button]
  Uses Primary Button spec
  Text: "Continue Shopping"
  Width: 220px
  
  [View Order Details Button]
  Width: 220px, Height: 56px
  Background: #FFFFFF
  Border: 2px solid #000000
  Border-radius: 4px
  Font: 16px, weight: 500, color: #000000
  Text: "View Order Details"
  Hover: background #000000, color #FFFFFF
  
  ─────────────────────────────────
  EMAIL CONFIRMATION NOTE
  ─────────────────────────────────
  
  Margin-top: 24px
  Font: 14px, color: #757575
  Text: "A confirmation email has been sent to rimel1111@gmail.com"
  
  Email address in text: color #000000, font-weight 500
```

---

## 2. ORDER HISTORY PAGE

### 2.1 Page Overview

Lists all past orders for the logged-in user. Accessible from My Account sidebar → "My Orders" (implied). URL: `/account/orders`

### 2.2 Page Structure

```
[Announcement Bar]
[Navigation Bar] — logged-in state
[Breadcrumb + Welcome Row] — same as My Account page
[Account Layout — Sidebar + Order Content]
[Footer]
```

### 2.3 Sidebar Navigation (Same as My Account page)

```
See 04-account-and-about-pages.md §1.4

Active item: "My Orders" section label (expanded)
Sub-items visible: "My Returns" and "My Cancellations"
"My Profile" is not the active link
```

### 2.4 Order History Content Panel

```
Background: #FFFFFF
  
  [Content Header]
  Font: 20px, weight: 600, color: #DB4444
  Text: "My Orders"
  Margin-bottom: 24px
  
  ─────────────────────────────────
  FILTER / SEARCH ROW
  ─────────────────────────────────
  
  Margin-bottom: 24px
  Display: flex, align-items: center, gap: 16px
  
    [Search Orders Input]
    Flex: 1
    Height: 44px
    Background: #F5F5F5
    Border: none
    Border-radius: 4px
    Padding: 0 16px
    Font: 14px
    Placeholder: "Search orders..."
    
    [Status Filter Dropdown]
    Width: 160px, Height: 44px
    Background: #F5F5F5
    Border: none
    Border-radius: 4px
    Padding: 0 12px
    Font: 14px
    
    Options: All Orders | Pending | Processing | Shipped | Delivered | Cancelled
  
  ─────────────────────────────────
  ORDERS TABLE
  ─────────────────────────────────
  
  [Table Header Row]
  Display: grid
  Grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr
  Background: #F5F5F5
  Padding: 12px 16px
  Border-radius: 4px
  Margin-bottom: 8px
  
  Columns: Order | Date | Status | Total | Action
  Font: 14px, weight: 600, color: #000000
  
  [Order Rows]
  Each row:
  Display: grid
  Grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr
  Padding: 16px
  Border: 1px solid #F5F5F5
  Border-radius: 4px
  Margin-bottom: 8px
  Align-items: center
  Background: #FFFFFF
  Hover: background #FAFAFA
  
    [Order Column]
    Display: flex, align-items: center, gap: 12px
    
      [First item thumbnail]: 48px × 48px, #F5F5F5 bg, border-radius 4px
      
      [Order Info]
        [Order Number]: 14px, weight 600, #000000, "Order #123456789"
        [Item count]: 12px, #757575, "2 items"
    
    [Date Column]
    Font: 14px, color: #000000
    Format: "Feb 18, 2026"
    
    [Status Column]
    
      Status badge:
      Padding: 4px 12px
      Border-radius: 9999px
      Font: 12px, weight: 600
      
      "Pending":
        Background: #FFF3CD
        Color: #856404
      
      "Processing":
        Background: #CCE5FF
        Color: #004085
      
      "Shipped":
        Background: #D4EDDA
        Color: #155724
      
      "Delivered":
        Background: #D4EDDA
        Color: #155724
      
      "Cancelled":
        Background: #F8D7DA
        Color: #721C24
      
      "Returned":
        Background: #E2E3E5
        Color: #383D41
    
    [Total Column]
    Font: 14px, weight: 600, color: #000000
    Text: "$1,750.00"
    
    [Action Column]
    Display: flex, align-items: center, gap: 8px
    
      [View Details Button]
      Height: 34px, Padding: 0 16px
      Background: #FFFFFF
      Border: 1px solid #000000
      Border-radius: 4px
      Font: 13px, weight: 500, color: #000000
      Cursor: pointer
      Hover: background #000000, color #FFFFFF
      
      [Reorder Button] (for delivered orders)
      Height: 34px, Padding: 0 16px
      Background: #DB4444
      Border: none
      Border-radius: 4px
      Font: 13px, weight: 500, color: #FFFFFF
      Cursor: pointer
      Hover: background #C03333
  
  ─────────────────────────────────
  EMPTY STATE
  ─────────────────────────────────
  
  If no orders exist:
  Display: flex, flex-direction: column, align-items: center, padding: 60px 0
  
    Icon: shopping bag outline, 64px, color #E0E0E0
    Heading: "No orders yet", 20px, weight 700, #000000
    Subtext: "When you place orders, they'll appear here.", 14px, #757575
    Button: "Start Shopping", Primary Button spec, width 180px, margin-top 24px
```

---

## 3. ORDER DETAIL PAGE

### 3.1 Overview

URL: `/account/orders/:orderId`

### 3.2 Structure

```
Same sidebar layout as My Account / Order History

[Order Detail Content Panel]

  [Back link]
  ← Back to Orders
  Font: 14px, color #757575, hover: color #DB4444
  Margin-bottom: 24px
  
  [Order Header]
  Display: flex, justify-content: space-between, align-items: center
  Margin-bottom: 32px
  
    [Left]
    "Order #123456789"
    Font: 20px, weight 600, color #DB4444
    
    Below: "Placed on February 18, 2026"
    Font: 14px, color #757575
    
    [Right: Status Badge]
    Same status badge spec as Order History table
  
  [Two-Column Layout]
  Display: grid
  Grid-template-columns: 1fr 360px
  Gap: 32px
  
    [Left: Order Items]
    
      Each item:
      Display: flex, align-items: center, gap: 16px
      Padding: 16px 0
      Border-bottom: 1px solid #F5F5F5
      
        Thumbnail: 72px × 72px
        Name: 16px, weight 500
        Variant: 14px, color #757575 (e.g., "Color: Black / Size: M")
        Quantity: 14px, color #757575
        Subtotal: 16px, weight 600, color #DB4444 (right aligned)
    
    [Right: Order Summary + Address]
    
      [Order Summary Box]: same style as Cart Total box
      Shows subtotal, shipping, total
      
      [Shipping Address Box]
      Margin-top: 24px
      Border: 1px solid #E0E0E0
      Border-radius: 4px
      Padding: 20px
      
        Heading: "Shipping Address"
        Font: 16px, weight 700, margin-bottom 12px
        
        Name: 14px, weight 600, #000000
        Address lines: 14px, color #757575, line-height 1.8
      
      [Payment Method Box]
      Margin-top: 16px
      Same container style
      
        Heading: "Payment Method"
        Method text: 14px, color #000000
        E.g., "Cash on delivery" or "Visa ending in 4242"
  
  [Order Timeline / Tracking]
  Margin-top: 32px
  
    Heading: "Order Status"
    Font: 16px, weight 700, margin-bottom 16px
    
    [Timeline Steps]
    Display: flex, align-items: flex-start, gap: 0
    
      Each step:
      Flex: 1
      Display: flex, flex-direction: column, align-items: center
      
        [Step Circle]
        Width: 32px, Height: 32px
        Border-radius: 50%
        
        Completed step: Background #DB4444, icon: white ✓, 14px
        Current step: Background #DB4444, border: 3px solid #DB4444, inner white circle
        Upcoming step: Background #FFFFFF, border: 2px solid #E0E0E0
        
        [Connector Line between steps]
        Height: 2px, flex: 1 (between circles)
        Completed: background #DB4444
        Upcoming: background #E0E0E0
        
        [Step Label]
        Font: 12px, weight 500, color #000000
        Text-align: center
        Margin-top: 8px
        
        [Step Date]
        Font: 11px, color #757575
        Text-align: center
    
    Steps: Order Placed → Processing → Shipped → Out for Delivery → Delivered
```
