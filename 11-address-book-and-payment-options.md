# Exclusive E-Commerce — Address Book & Payment Options Pages Specification

---

## 1. ADDRESS BOOK PAGE

### 1.1 Page Overview

Sub-page of My Account for managing saved delivery addresses. URL: `/account/addresses`
Accessible from: My Account sidebar → "Address Book"

### 1.2 Page Structure

```
[Announcement Bar]
[Navigation Bar] — logged-in state
[Breadcrumb + Welcome Row]
[Account Layout — Sidebar + Address Content]
[Footer]
```

### 1.3 Breadcrumb + Welcome Row

```
Same as My Account page:
"Home / My Account"
Welcome! Md Rimel (right side)
```

### 1.4 Sidebar Navigation

```
Same sidebar as My Account (04-account-and-about-pages.md §1.4)
Active item: "Address Book" (under Manage My Account section)
Color: #DB4444, font-weight 400
```

### 1.5 Address Book Content Panel

```
Background: #FFFFFF
Box-shadow: 0 2px 12px rgba(0,0,0,0.06)
Border-radius: 8px
Padding: 32px 40px

  [Panel Header Row]
  Display: flex, align-items: center, justify-content: space-between
  Margin-bottom: 32px
  
    [Title]
    Font: 20px, weight: 600, color: #DB4444
    Text: "Address Book"
    
    [Add New Address Button]
    Width: 180px, Height: 44px
    Background: #DB4444
    Color: #FFFFFF
    Font: 14px, weight: 500
    Border: none
    Border-radius: 4px
    Cursor: pointer
    Icon: + (plus), 16px, before text
    Text: "+ Add New Address"
    Hover: background #C03333
  
  ─────────────────────────────────
  ADDRESS CARDS GRID
  ─────────────────────────────────
  
  Display: grid
  Grid-template-columns: repeat(2, 1fr)
  Gap: 20px
  
    Each address card:
    Border: 2px solid #E0E0E0
    Border-radius: 8px
    Padding: 20px 24px
    Position: relative
    Cursor: pointer
    Transition: border-color 0.2s
    
    Default state: border-color #E0E0E0
    Hover: border-color #9E9E9E
    
    Selected / Default address:
    Border: 2px solid #DB4444
    
      [Default Badge] — top right
      Position: absolute, top: 16px, right: 16px
      Background: #DB4444
      Color: #FFFFFF
      Font: 11px, weight: 600
      Padding: 3px 10px
      Border-radius: 9999px
      Text: "Default"
    
    [Address Type Label]
    Font: 14px, weight: 700, color: #000000
    Text: "Home" or "Work" or "Other"
    Margin-bottom: 12px
    
    [Name]
    Font: 14px, weight: 600, color: #000000
    Margin-bottom: 4px
    
    [Phone]
    Font: 14px, color: #757575
    Margin-bottom: 8px
    
    [Address Lines]
    Font: 14px, color: #757575
    Line-height: 1.7
    Example:
    "Kingston, 5236"
    "United States"
    
    [Action Row]
    Margin-top: 16px
    Display: flex, align-items: center, gap: 16px
    
      [Edit Link]
      Font: 14px, color: #000000
      Cursor: pointer
      Hover: color: #DB4444, underline
      Text: "Edit"
      
      [Delete Link]
      Font: 14px, color: #DB4444
      Cursor: pointer
      Hover: color: #A02020, underline
      Text: "Delete"
      
      [Set as Default Link] (only if not already default)
      Font: 14px, color: #757575
      Cursor: pointer
      Hover: color: #DB4444
      Text: "Set as Default"
```

### 1.6 Add/Edit Address Modal

```
[Overlay]: rgba(0,0,0,0.5), fixed inset 0, z-index 400

[Modal]
Position: fixed
Top: 50%, Left: 50%
Transform: translate(-50%, -50%)
Width: 560px
Background: #FFFFFF
Border-radius: 12px
Padding: 40px
Box-shadow: 0 8px 32px rgba(0,0,0,0.18)
Z-index: 401

  [Modal Header]
  Display: flex, align-items: center, justify-content: space-between
  Margin-bottom: 28px
  
    [Title]
    Font: 20px, weight: 700, color: #000000
    Text: "Add New Address" or "Edit Address"
    
    [Close Button]
    Width: 32px, Height: 32px
    Background: transparent
    Border: none
    Icon: × , 20px, color #757575
    Cursor: pointer
    Hover: color #000000
  
  [Address Type Selector]
  Display: flex, gap: 12px
  Margin-bottom: 24px
  
    Each option button:
    Padding: 8px 20px
    Border: 1px solid #E0E0E0
    Border-radius: 4px
    Font: 14px, color: #000000
    Cursor: pointer
    
    Selected: border-color #DB4444, color #DB4444, background: #FFF5F5
    
    Options: Home | Work | Other
  
  [Form Fields — 2-column grid where applicable]
  
    [First Name + Last Name] — side by side, grid 1fr 1fr, gap 16px
    [Phone Number] — full width
    [Street Address] — full width
    [Apartment/Suite (optional)] — full width
    [City + State/Province] — side by side
    [Postal Code + Country] — side by side
    
    All inputs: same spec as My Account form fields (height 50px, bg #F5F5F5)
  
  [Make Default Checkbox]
  Margin-top: 8px
  Display: flex, align-items: center, gap: 10px
  
    Checkbox: same spec as checkout save-info checkbox
    Label: "Set as default address", 14px, #000000
  
  [Action Buttons]
  Margin-top: 28px
  Display: flex, justify-content: flex-end, gap: 16px
  
    [Cancel]: Secondary button spec, width 100px, text "Cancel"
    [Save Address]: Primary button spec, width 160px, text "Save Address"
```

---

## 2. MY PAYMENT OPTIONS PAGE

### 2.1 Page Overview

Manage saved payment methods. URL: `/account/payment`
Accessible from: My Account sidebar → "My Payment Options"

### 2.2 Sidebar Navigation

```
Active item: "My Payment Options"
Color: #DB4444
```

### 2.3 Payment Options Content Panel

```
Background: #FFFFFF
Box-shadow: 0 2px 12px rgba(0,0,0,0.06)
Border-radius: 8px
Padding: 32px 40px

  [Panel Header Row]
  Display: flex, align-items: center, justify-content: space-between
  Margin-bottom: 32px
  
    [Title]
    Font: 20px, weight: 600, color: #DB4444
    Text: "Payment Options"
    
    [Add New Card Button]
    Width: 180px, Height: 44px
    Background: #DB4444, Color: #FFFFFF
    Same style as "Add New Address" button
    Text: "+ Add New Card"
  
  ─────────────────────────────────
  SAVED CARDS LIST
  ─────────────────────────────────
  
  Display: flex, flex-direction: column, gap: 16px
  
    Each saved card:
    Border: 2px solid #E0E0E0
    Border-radius: 8px
    Padding: 20px 24px
    Display: flex, align-items: center, gap: 20px
    Position: relative
    
    Default card: border-color #DB4444
    
      [Card Brand Logo]
      Width: 56px, Height: 36px
      Object-fit: contain
      Background: #FFFFFF
      Border: 1px solid #E0E0E0
      Border-radius: 4px
      Padding: 4px 8px
      Flex-shrink: 0
      
      [Card Info]
      Flex: 1
      
        [Card number (masked)]
        Font: 16px, weight: 600, color: #000000
        Text: "•••• •••• •••• 4242"
        
        [Expiry]
        Font: 13px, color: #757575
        Text: "Expires 12/27"
        Margin-top: 4px
      
      [Default Badge] (if default card)
      Same style as address default badge
      
      [Action Buttons]
      Display: flex, gap: 12px
      
        [Edit]: same style as address edit link
        [Delete]: same style as address delete link
        [Set Default] (if not default)
  
  ─────────────────────────────────
  OTHER PAYMENT METHODS
  ─────────────────────────────────
  
  Margin-top: 32px
  
  [Section Label]
  Font: 16px, weight: 600, color: #000000
  Text: "Other Payment Methods"
  Margin-bottom: 16px
  
  [Methods Row]
  Display: flex, gap: 12px
  
    bKash logo card:
    Height: 56px, padding: 12px 20px
    Border: 1px solid #E0E0E0, border-radius 8px
    Display: flex, align-items: center, justify-content: center
    
    Nagad logo card: same
    
    Cash on Delivery card:
    Same size, icon: hand holding cash, 20px
    Text: "Cash on Delivery", 14px, weight 500
```

### 2.4 Add New Card Modal

```
Same modal overlay spec as Add Address modal

Width: 500px

  [Modal Title]: "Add New Card"
  
  [Card Preview — Visual Card]
  Width: 100%
  Height: 180px
  Background: linear-gradient(135deg, #434343 0%, #000000 100%)
  Border-radius: 12px
  Padding: 24px
  Margin-bottom: 28px
  Position: relative
  
    [Card Number display]: "•••• •••• •••• 4242", 20px, #FFFFFF, letter-spacing 2px
    Position: absolute, bottom: 48px, left: 24px
    
    [Cardholder Name]: 14px, #FFFFFF, position bottom 24px left 24px
    [Expiry]: "12/27", 14px, #FFFFFF, position bottom 24px right 24px
    
    [Card Brand Logo]: 40px, position top 24px right 24px
    [Chip icon]: 32px, position top 24px left 24px, color: #FFD700
  
  [Card Number Input]
  Full width, height 50px, background #F5F5F5
  Placeholder: "Card Number"
  Input mask: XXXX XXXX XXXX XXXX
  Margin-bottom: 16px
  
  [Cardholder Name Input]
  Full width, same style
  Placeholder: "Cardholder Name"
  Margin-bottom: 16px
  
  [Expiry + CVV Row]
  Display: grid, grid-template-columns: 1fr 1fr, gap 16px
  
    [Expiry Input]: Placeholder "MM / YY"
    [CVV Input]: Placeholder "CVV", type: password (shows dots)
  
  [Save Card Checkbox]
  Same style as checkout save-info checkbox
  Label: "Save card for future purchases"
  
  [Action Buttons]
  Same as Address modal
  Save button text: "Add Card"
```

---

## 3. MY RETURNS PAGE

### 3.1 Overview

URL: `/account/returns`

### 3.2 Content Panel

```
[Title]: "My Returns", same red title style

[Returns List]
Similar structure to Order History table
Columns: Order | Product | Return Reason | Status | Action

Status badges:
"Requested": background #FFF3CD, color #856404
"Approved": background #D4EDDA, color #155724
"Picked Up": background #CCE5FF, color #004085
"Refunded": background #D4EDDA, color #155724
"Rejected": background #F8D7DA, color #721C24

Action button: "View Details" — secondary button style
```

---

## 4. MY CANCELLATIONS PAGE

### 4.1 Overview

URL: `/account/cancellations`

### 4.2 Content Panel

```
[Title]: "My Cancellations", same red title style

[Cancellations List]
Columns: Order | Date Cancelled | Reason | Refund Status

Refund status badges:
"Pending": yellow badge
"Processed": green badge
"Not Eligible": gray badge
```
