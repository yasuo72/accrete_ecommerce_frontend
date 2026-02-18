# Exclusive E-Commerce — Contact Page Specification

---

## 1. PAGE OVERVIEW

The Contact page allows users to reach the Exclusive team via phone, email, or a message form. URL: `/contact`

---

## 2. PAGE STRUCTURE

```
[Announcement Bar]
[Navigation Bar]
[Breadcrumb Bar]
[Contact Content Area — Info Card + Form Card]
[Footer]
```

---

## 3. BREADCRUMB

```
Padding: 24px 88px
Font: 14px, color: #9E9E9E
Items: "Home" + " / " + "Contact"
"Contact": color #000000, weight: 500
```

---

## 4. CONTACT CONTENT AREA

```
Padding: 60px 88px
Display: grid
Grid-template-columns: 340px 1fr
Gap: 32px
Align-items: flex-start
```

---

## 5. LEFT COLUMN — CONTACT INFO CARD

```
Background: #FFFFFF
Box-shadow: 0 2px 12px rgba(0,0,0,0.08)
Border-radius: 4px
Padding: 40px 32px
Height: 100% (stretches to match form card)

  ─────────────────────────────────
  SECTION 1 — CALL US
  ─────────────────────────────────
  
  [Icon Row]
  Display: flex, align-items: center, gap: 16px
  Margin-bottom: 16px
  
    [Icon Container]
    Width: 40px, Height: 40px
    Background: #000000
    Border-radius: 50%
    Display: flex, align-items: center, justify-content: center
    
      Icon: phone, 18px, color: #FFFFFF
  
  [Call To Us Heading]
  Font: 16px, weight: 700, color: #000000
  Text: "Call To Us"
  Margin-bottom: 8px
  
  [Subtext]
  Font: 14px, weight: 400, color: #000000
  Line-height: 1.6
  Text: "We are available 24/7, 7 days a week."
  Margin-bottom: 12px
  
  [Phone Number]
  Font: 14px, weight: 400, color: #000000
  Text: "Phone: +8801611112222"
  
  [Divider]
  Border-top: 1px solid #E0E0E0
  Margin: 32px 0
  
  ─────────────────────────────────
  SECTION 2 — WRITE TO US
  ─────────────────────────────────
  
  [Icon Row]
  Same structure as above
  Icon: mail/envelope, 18px, color: #FFFFFF
  Container background: #000000
  
  [Write To Us Heading]
  Font: 16px, weight: 700, color: #000000
  Text: "Write To Us"
  Margin-bottom: 8px
  
  [Subtext]
  Font: 14px, weight: 400, color: #000000
  Line-height: 1.6
  Text: "Fill out our form and we will contact you within 24 hours."
  Margin-bottom: 12px
  
  [Email 1]
  Font: 14px, color: #000000
  Text: "Emails: customer@exclusive.com"
  Margin-bottom: 6px
  
  [Email 2]
  Font: 14px, color: #000000
  Text: "Emails: support@exclusive.com"
```

---

## 6. RIGHT COLUMN — CONTACT FORM CARD

```
Background: #FFFFFF
Box-shadow: 0 2px 12px rgba(0,0,0,0.08)
Border-radius: 4px
Padding: 40px

  ─────────────────────────────────
  ROW 1 — THREE FIELDS SIDE BY SIDE
  ─────────────────────────────────
  
  Display: grid
  Grid-template-columns: repeat(3, 1fr)
  Gap: 16px
  Margin-bottom: 24px
  
    [Your Name* field]
    Height: 50px
    Background: #F5F5F5
    Border: none
    Border-radius: 4px
    Padding: 0 16px
    Font: 16px, color: #000000
    Placeholder: "Your Name *"
    Placeholder color: #9E9E9E
    Focus: border: 1px solid #DB4444
    Outline: none
    
    [Your Email* field]
    Same spec
    Type: email
    Placeholder: "Your Email *"
    
    [Your Phone* field]
    Same spec
    Type: tel
    Placeholder: "Your Phone *"
  
  ─────────────────────────────────
  ROW 2 — MESSAGE TEXTAREA
  ─────────────────────────────────
  
  Margin-bottom: 24px
  
  [Message Textarea]
  Width: 100%
  Height: 208px
  Background: #F5F5F5
  Border: none
  Border-radius: 4px
  Padding: 16px
  Font: 16px, color: #000000
  Placeholder: "Your Message"
  Placeholder color: #9E9E9E
  Resize: vertical (or none)
  Focus: border: 1px solid #DB4444
  Outline: none
  Line-height: 1.6
  
  ─────────────────────────────────
  ROW 3 — SUBMIT BUTTON
  ─────────────────────────────────
  
  Display: flex, justify-content: flex-end
  
  [Send Message Button]
  Width: 215px, Height: 56px
  Background: #DB4444
  Color: #FFFFFF
  Font: 16px, weight: 500
  Border: none
  Border-radius: 4px
  Cursor: pointer
  Text: "Send Message"
  Hover: background #C03333
  Transition: background 0.2s
  
  Loading state:
  Button text replaced with spinner
  Background: #C03333
  Cursor: not-allowed
```

---

## 7. FORM VALIDATION

```
Required fields: Name, Email, Phone, Message (all required)

Error state per field:
Border: 1px solid #DB4444
Error message below field:
  Font: 12px, color: #DB4444
  Margin-top: 4px
  Examples:
  - "Please enter your name"
  - "Please enter a valid email address"
  - "Please enter your phone number"
  - "Please enter a message"

Success state after submit:
Toast notification: "Your message has been sent! We'll get back to you within 24 hours."
Background: #000000, text #FFFFFF
Duration: 5s

OR: Replace form with success state panel:
  Icon: green checkmark circle, 64px
  Heading: "Message Sent!", 24px, weight 700
  Text: "Thank you for reaching out. We'll respond within 24 hours."
  Button: "Back to Home", uses Primary Button spec
```

---

## 8. NAVIGATION STATE

```
"Contact" nav link is underlined (active state)
Underline: 2px solid #000000, offset 4px
```

---

## 9. RESPONSIVE BEHAVIOR

```
Desktop (≥ 1024px):
  2-column layout (info card + form card)
  
Tablet (768px – 1023px):
  2-column grid: 280px info + 1fr form
  
Mobile (< 768px):
  Single column (info card stacks above form card)
  Form grid: 1 column (fields stack vertically)
  Button: full width
  Padding: 24px 16px
```
