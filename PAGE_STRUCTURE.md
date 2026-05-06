# Ellem Groups Website - Page Map

## Website Structure

```
🏠 Homepage (/)
   ├─ Hero Section
   │  └─ Call-to-action buttons
   ├─ Company Overview Cards
   │  ├─ Ellem Foundry card
   │  ├─ Ellem Engineering card
   │  └─ Fluid Control Valves card
   └─ Why Choose Ellem Groups section

🏭 Ellem Foundry (/foundry)
   ├─ Hero: "Ellem Foundry - Excellence in Die Casting"
   ├─ About Section
   │  └─ Services & capabilities
   ├─ Technology & Capabilities
   │  ├─ Die Casting Machines
   │  ├─ Quality Testing
   │  └─ Skilled Team
   └─ Image Gallery (6 placeholders)

⚙️ Ellem Engineering (/engineering)
   ├─ Hero: "Precision Manufacturing with Advanced CNC"
   ├─ About Section
   │  ├─ CNC Turning
   │  ├─ VMC Operations
   │  └─ VTL Operations
   ├─ Technology & Capabilities
   │  ├─ CNC Turning Centers
   │  ├─ VMC (Vertical Machining)
   │  ├─ VTL (Vertical Turning)
   │  └─ Quality Control
   └─ Image Gallery (6 placeholders)

🔧 Fluid Control Valves (/fluid-control)
   ├─ Hero: "Complete Valve Assembly & Quality Testing"
   ├─ About Section
   │  └─ Services & capabilities
   ├─ Quality Assurance Process
   │  ├─ Component Inspection
   │  ├─ Expert Assembly
   │  ├─ Pressure Testing
   │  ├─ Leak Detection
   │  ├─ Dispatch Ready
   │  └─ Documentation
   └─ Image Gallery (6 placeholders)

📋 Contact Page (/contact)
   ├─ Contact Form (Name, Email, Phone, Company, Message)
   ├─ Contact Information
   │  ├─ Ellem Foundry contacts
   │  ├─ Ellem Engineering contacts
   │  ├─ Fluid Control Valves contacts
   │  └─ Corporate Office info
   └─ Business Hours

ℹ️ About Page (/about)
   ├─ Our Story
   ├─ Our Mission
   └─ Our Values (6 core values)

📱 Navigation (on all pages)
   ├─ Header Navbar
   │  ├─ Logo (Ellem)
   │  └─ Menu: Home, Foundry, Engineering, Fluid Control, Contact
   └─ Footer
      ├─ Company info
      ├─ Quick Links
      └─ Social Media
```

## URL Routing

| URL | Page | Purpose |
|-----|------|---------|
| `/` | Homepage | Welcome & overview |
| `/foundry` | Ellem Foundry | Die casting details |
| `/engineering` | Ellem Engineering | CNC manufacturing details |
| `/fluid-control` | Fluid Control Valves | Valve assembly details |
| `/contact` | Contact Us | Contact form & info |
| `/about` | About Us | Company information |

## Component Architecture

```
Root Layout (app/layout.tsx)
├─ Navbar (top of all pages)
│  └─ NavLinks
├─ Page Content (specific to route)
│  ├─ Hero Section
│  ├─ Main Content
│  ├─ Galleries
│  └─ Contact Forms
└─ Footer (bottom of all pages)
   └─ FooterLinks
```

## Styling System

**Global Colors:**
- `--primary`: #1f3a5f (Dark Blue) - Used for text, headers, buttons
- `--secondary`: #d4a017 (Gold) - Used for accents, highlights
- `--accent`: #f8b500 (Bright Gold) - Used for special highlights
- `--text-dark`: #1a1a1a - Main text
- `--text-light`: #666666 - Secondary text
- `--bg-light`: #f9f9f9 - Light backgrounds
- `--bg-white`: #ffffff - White backgrounds

**Style Files:**
- `styles/globals.css` - Base styles, typography, layout
- `styles/navbar.css` - Navigation styling
- `styles/hero.css` - Hero sections
- `styles/cards.css` - Card components
- `styles/footer.css` - Footer styling
- `styles/components.css` - Form, gallery, etc.

## Components

### Navbar Component
- Sticky positioning
- Mobile hamburger menu
- Link highlighting

### Footer Component
- Company information
- Social links
- Multiple footer sections

### CompanyCard Component
- Image placeholder
- Title and description
- "Learn More" link

### ContactForm Component
- Form validation
- Success/error messages
- Multiple fields (name, email, phone, company, message)

## Image Gallery Locations

Each company page has a gallery with 6 placeholder images:
- **Foundry Gallery**: `/foundry` - 6 images
- **Engineering Gallery**: `/engineering` - 6 images
- **Fluid Control Gallery**: `/fluid-control` - 6 images

Total: 18 image placeholder slots ready for your photos

## Responsive Breakpoints

The website is mobile-first responsive:

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px
- **Large Desktop**: > 1200px

All sections adjust automatically for different screen sizes.

---

**Total Pages**: 7 (Homepage, 3 Company Pages, Contact, About, + Navigation)
**Total Components**: 4 reusable React components
**Total Style Files**: 6 CSS files with organization
**Image Placeholder Slots**: 18 ready for your photos
**Contact Form Fields**: 5 (name, email, phone, company, message)
**Galleries**: 3 (one per company)

All ready for your content! 🚀
