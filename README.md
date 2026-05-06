# Ellem Groups Website

A modern, professional website for Ellem Groups showcasing three specialized manufacturing companies.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **SEO Optimized**: Built with Next.js for excellent search engine optimization
- **Modern UI**: Clean, professional design with smooth animations
- **Multi-Company Pages**: Dedicated pages for each division:
  - Ellem Foundry - Die Casting & Foundry Operations
  - Ellem Engineering - Precision CNC Manufacturing
  - Fluid Control Valves - Valve Assembly & Testing
- **Contact Forms**: Easy-to-use contact forms for inquiries
- **Image Galleries**: Showcase products and facilities (placeholders ready for images)
- **Fast Performance**: Optimized for speed and user experience

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Main layout with metadata
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx      # About page
│   ├── contact/page.tsx    # Contact page
│   ├── foundry/page.tsx    # Ellem Foundry page
│   ├── engineering/page.tsx # Ellem Engineering page
│   └── fluid-control/page.tsx # Fluid Control Valves page
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer
│   ├── CompanyCard.tsx     # Company card component
│   └── ContactForm.tsx     # Contact form component
├── styles/
│   ├── globals.css         # Global styles
│   ├── navbar.css          # Navbar styles
│   ├── hero.css            # Hero section styles
│   ├── cards.css           # Card component styles
│   ├── footer.css          # Footer styles
│   └── components.css      # Component-specific styles
├── public/                 # Static assets (images, icons)
├── package.json            # Dependencies
├── next.config.ts          # Next.js configuration
└── tsconfig.json           # TypeScript configuration
```

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` in your browser.

## Getting Started

### 1. Add Company Images
Replace the image placeholders with actual company images. Places to update:
- Homepage company cards
- Individual company pages
- Gallery sections on each page

### 2. Update Contact Information
Edit `/app/contact/page.tsx` with actual contact details:
- Email addresses
- Phone numbers
- Physical addresses
- Business hours

### 3. Update Footer Information
Edit `/components/Footer.tsx` with actual contact information and social links.

### 4. Customize Colors
Edit the CSS variables in `/styles/globals.css` to match your brand:
- `--primary`: Main brand color (currently dark blue)
- `--secondary`: Accent color (currently gold)
- `--accent`: Highlight color

### 5. Update Company Descriptions
Edit the company pages to add detailed information about each division:
- `/app/foundry/page.tsx`
- `/app/engineering/page.tsx`
- `/app/fluid-control/page.tsx`

## Hosting on ellemgroups.com

### Option 1: Vercel (Recommended for Next.js)
1. Push code to GitHub
2. Connect repository to Vercel (vercel.com)
3. Deploy in one click
4. Add custom domain: ellemgroups.com

### Option 2: Self-Hosted (Traditional VPS)
1. Build: `npm run build`
2. Upload to your VPS
3. Set up Node.js environment
4. Configure domain DNS to point to your server

### Option 3: Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean
- Heroku

## SEO Checklist

- ✅ Page titles and descriptions set
- ✅ Mobile responsive
- ✅ Fast loading times
- ✅ Image optimization ready
- ⚠️ Add company photos
- ⚠️ Add meta descriptions
- ⚠️ Consider adding schema markup
- ⚠️ Set up Analytics (Google Analytics)

## Technologies Used

- **Next.js 14**: React framework for production
- **React 18**: UI library
- **TypeScript**: Type safety
- **CSS**: Custom styling with CSS variables
- **Responsive Design**: Mobile-first approach

## Performance Tips

1. Optimize images before uploading
2. Use WebP format for images
3. Implement lazy loading
4. Add analytics to track user behavior
5. Set up CDN for static assets

## Maintenance

- Update company information regularly
- Keep photos and galleries fresh
- Monitor contact form submissions
- Update testimonials and case studies
- Maintain SEO best practices

## Support & Customization

For additional features or customization:
- Add testimonials section
- Implement blog functionality
- Add team member profiles
- Integrate payment processing
- Add live chat support
- Implement multi-language support

---

**Website**: https://ellemgroups.com
**Built with**: Next.js, React, TypeScript
**Last Updated**: May 2026
