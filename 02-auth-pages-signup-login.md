# Exclusive E-Commerce — Authentication Pages Specification
## Pages: Sign Up & Log In

---

## 1. SHARED LAYOUT (Both Auth Pages)

Both Sign Up and Log In pages share an identical outer shell. Only the right-panel content changes.

```
Page background: #FFFFFF
Min-height: 100vh
Display: flex, flex-direction: column

  [Announcement Bar]  — see 01-design-system-and-homepage.md §3
  [Navigation Bar]    — see 01-design-system-and-homepage.md §4
  
  [Main Content Area]
  Flex: 1
  Display: flex
  Width: 100%
  Max-width: none (full bleed)
  
    [Left Image Panel]      — 50% width
    [Right Form Panel]      — 50% width
  
  [Footer]                  — see 01-design-system-and-homepage.md §6
```

---

## 2. LEFT IMAGE PANEL

```
Width: 50vw (exactly half viewport)
Height: 100% (stretches to match form height)
Min-height: 600px
Position: relative
Overflow: hidden
Background: #EBF3FB (very light blue — backing color visible at edges)

  [Product Image]
  Position: absolute
  Top: 0, left: 0, right: 0, bottom: 0
  Width: 100%, height: 100%
  Object-fit: cover
  Object-position: center

  Image description:
  A smartphone (modern, black, full-screen) leaning against a shopping cart
  Shopping bags (pink/lavender) in foreground
  Background: pale light blue (#EBF3FB)
  Mood: clean, modern, e-commerce
  No text overlay on image
```

---

## 3. SIGN UP PAGE — RIGHT PANEL

```
Width: 50vw
Min-height: 600px
Background: #FFFFFF
Display: flex, flex-direction: column
Justify-content: center
Align-items: flex-start (content left-aligned within container)
Padding: 80px 100px 80px 80px

  [Content Max-Width Container]
  Max-width: 480px
  Width: 100%
  
    ─────────────────────────────────
    HEADING BLOCK
    ─────────────────────────────────
    
    [Title]
    Font: 36px, weight: 700, color: #000000
    Text: "Create an account"
    Margin-bottom: 8px
    
    [Subtitle]
    Font: 16px, weight: 400, color: #000000
    Text: "Enter your details below"
    Margin-bottom: 40px
    
    ─────────────────────────────────
    FORM FIELDS
    ─────────────────────────────────
    
    [Name Field]
    Width: 100%
    Height: 40px (not box-model — visual height before border)
    Background: transparent
    Border: none
    Border-bottom: 1px solid #9E9E9E
    Padding: 8px 0
    Font: 16px, color: #000000
    Placeholder: "Name", 16px, color: #9E9E9E
    Margin-bottom: 32px
    Focus: border-bottom-color: #DB4444
    Transition: border-color 0.2s
    Outline: none
    
    [Email or Phone Number Field]
    Same spec as Name field
    Placeholder: "Email or Phone Number"
    Margin-bottom: 32px
    
    [Password Field]
    Same spec as Name field
    Placeholder: "Password"
    Type: password (shows dots)
    
    Optional: Password visibility toggle icon
    Position: absolute right: 0, top: 50%, transform: translateY(-50%)
    Icon: eye / eye-slash, 18px, color #9E9E9E
    Hover: color #DB4444
    
    Margin-bottom: 32px
    
    ─────────────────────────────────
    CTA BUTTONS
    ─────────────────────────────────
    
    [Create Account Button]
    Width: 100%
    Height: 56px
    Background: #DB4444
    Color: #FFFFFF
    Font: 16px, weight: 600
    Border: none
    Border-radius: 4px
    Cursor: pointer
    Hover: background #C03333
    Active: background #A02020
    Transition: background 0.2s
    Margin-bottom: 16px
    
    [Sign up with Google Button]
    Width: 100%
    Height: 56px
    Background: #FFFFFF
    Color: #000000
    Font: 16px, weight: 500
    Border: 1px solid #9E9E9E
    Border-radius: 4px
    Cursor: pointer
    Display: flex, align-items: center, justify-content: center, gap: 12px
    Hover: background #F5F5F5, border-color #000000
    Transition: all 0.2s
    Margin-bottom: 32px
    
      [Google Icon]
      Width: 20px, Height: 20px
      Official Google "G" multicolor SVG logo
    
    ─────────────────────────────────
    LOGIN REDIRECT
    ─────────────────────────────────
    
    [Already have account row]
    Display: flex, align-items: center, justify-content: center, gap: 8px
    
      [Text]
      Font: 14px, weight: 400, color: #000000
      Text: "Already have account?"
      
      [Log In Link]
      Font: 14px, weight: 500, color: #000000
      Text-decoration: underline
      Cursor: pointer
      Hover: color: #DB4444
```

---

## 4. LOGIN PAGE — RIGHT PANEL

```
Width: 50vw
Min-height: 600px
Background: #FFFFFF
Display: flex, flex-direction: column
Justify-content: center
Align-items: flex-start
Padding: 80px 100px 80px 80px

  [Content Max-Width Container]
  Max-width: 480px
  Width: 100%
  
    ─────────────────────────────────
    HEADING BLOCK
    ─────────────────────────────────
    
    [Title]
    Font: 36px, weight: 700, color: #000000
    Text: "Log in to Exclusive"
    Margin-bottom: 8px
    
    [Subtitle]
    Font: 16px, weight: 400, color: #000000
    Text: "Enter your details below"
    Margin-bottom: 48px
    
    ─────────────────────────────────
    FORM FIELDS
    ─────────────────────────────────
    
    [Email or Phone Number Field]
    Same bottom-border style as Sign Up
    Placeholder: "Email or Phone Number"
    Margin-bottom: 40px
    
    [Password Field]
    Same bottom-border style
    Type: password
    Placeholder: "Password"
    Margin-bottom: 40px
    
    ─────────────────────────────────
    CTA ROW
    ─────────────────────────────────
    
    Display: flex, align-items: center, gap: 24px
    
    [Log In Button]
    Width: 143px (fixed, not full width)
    Height: 56px
    Background: #DB4444
    Color: #FFFFFF
    Font: 16px, weight: 600
    Border: none
    Border-radius: 4px
    Cursor: pointer
    Hover: background #C03333
    Transition: background 0.2s
    
    [Forget Password? Link]
    Font: 16px, weight: 400, color: #DB4444
    Cursor: pointer
    Hover: underline
    Text-decoration: none by default
    
    ─────────────────────────────────
    NOTE: No "Sign up with Google" on login page
    NOTE: No "register" redirect link shown
          (differs from Sign Up which shows "Already have account?")
    ─────────────────────────────────
```

---

## 5. STATE VARIATIONS

### 5.1 Input Error State

```
Border-bottom-color: #DB4444
Below input: error message
Font: 12px, color: #DB4444
Margin-top: 4px
Example: "Please fill in your email address"
```

### 5.2 Input Success State

```
Border-bottom-color: #00A862
Optional: green checkmark icon inside field (right side)
```

### 5.3 Loading State (button pressed)

```
Button background: #C03333 (slightly dimmed)
Button cursor: not-allowed
Button text replaced with spinner
Spinner: 20px, border: 2px solid rgba(255,255,255,0.3)
         border-top: 2px solid #FFFFFF
         animation: spin 0.8s linear infinite
```

---

## 6. RESPONSIVE BEHAVIOR

### Tablet (768px – 1023px)

```
Left image panel: hidden OR reduced to 40% width
Right form panel: 60% or full width
Form padding: 60px 48px
```

### Mobile (< 768px)

```
Left image panel: hidden completely
Right form panel: 100% width
Form padding: 40px 24px
Title font: 28px
Input height: 44px
Button height: 48px
```

---

## 7. NAVIGATION STATE ON AUTH PAGES

```
On Sign Up page:
  "Sign Up" nav link is underlined (active state)
  Underline: 2px solid #000000, offset 4px below text
  Other nav links: normal weight, no underline

On Login page:
  No nav item is actively underlined
  "Sign Up" nav link is present but not underlined
```

---

## 8. PAGE METADATA ANNOTATIONS

```
Sign Up:
  Browser tab title: "Sign Up – Exclusive"
  Breadcrumb: none
  
Login:
  Browser tab title: "Log In – Exclusive"
  Breadcrumb: none

Both pages:
  No sidebar category menu
  No hero banner
  Full-screen split layout
```
