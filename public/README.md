# Images README

This folder should contain all images for the Ellem Groups website.

## Recommended Image Organization

```
public/
├── foundry/
│   ├── foundry-1.jpg
│   ├── foundry-2.jpg
│   ├── foundry-3.jpg
│   └── ...
├── engineering/
│   ├── engineering-1.jpg
│   ├── engineering-2.jpg
│   ├── engineering-3.jpg
│   └── ...
├── fluid-control/
│   ├── valve-1.jpg
│   ├── valve-2.jpg
│   ├── valve-3.jpg
│   └── ...
├── logo.png
├── hero-background.jpg
└── ...
```

## Image Requirements

### For Best Performance:

1. **Format**: Use JPG for photos, PNG for logos/graphics
2. **Size**: Optimize images to < 500KB each
3. **Resolution**: 
   - Gallery images: 1200x1200px (square for gallery)
   - Hero images: 1920x1080px or wider
   - Logo: 200x200px or larger

4. **Optimization**: Use online tools to compress:
   - TinyPNG.com
   - Squoosh.app
   - ImageOptim.com

### WebP Format (Optional but Recommended):
Modern browsers support WebP format which is smaller:
- Use: image.webp alongside image.jpg
- Next.js will use WebP if browser supports it

## How to Update Image Paths

Once you add images to this folder, update the pages:

### Homepage (/app/page.tsx)
```tsx
<CompanyCard
  title="Ellem Foundry"
  image="/foundry/foundry-1.jpg"
  // ...
/>
```

### Foundry Page (/app/foundry/page.tsx)
```tsx
<div className="gallery-item">
  <img src="/foundry/foundry-1.jpg" alt="Foundry" />
</div>
```

### Engineering Page (/app/engineering/page.tsx)
```tsx
<div className="gallery-item">
  <img src="/engineering/engineering-1.jpg" alt="CNC Machine" />
</div>
```

### Fluid Control Page (/app/fluid-control/page.tsx)
```tsx
<div className="gallery-item">
  <img src="/fluid-control/valve-1.jpg" alt="Valve Assembly" />
</div>
```

## Image Suggestions

### Foundry Images (6-8 images)
- Production floor overview
- Die casting machine in operation
- Finished castings/products
- Quality testing equipment
- Worker operating equipment
- Facility exterior
- Close-up of product

### Engineering Images (6-8 images)
- CNC machine in operation
- Precision components
- VMC (Vertical Machining Center)
- VTL (Vertical Turning Lathe)
- Quality inspection
- Production facility
- Technical drawings/components

### Fluid Control Valve Images (6-8 images)
- Assembled valves
- Assembly workstation
- Testing equipment
- Pressure testing process
- Leak detection setup
- Finished products
- Quality control check

## Free Stock Images (If Needed Initially)

Use these websites for placeholder images while collecting real photos:

1. **Unsplash**: https://unsplash.com
   - Search: "factory", "manufacturing", "precision", "industrial"

2. **Pixabay**: https://pixabay.com
   - Search: "engineering", "production", "machines"

3. **Pexels**: https://pexels.com
   - Search: "industry", "factory", "technology"

## Important Notes

- All images in `public/` folder are publicly accessible
- Images are not processed by Next.js Image component in current setup
- For optimization, consider using Next.js Image component:
  ```tsx
  import Image from 'next/image'
  
  <Image
    src="/foundry/foundry-1.jpg"
    alt="Foundry"
    width={1200}
    height={1200}
  />
  ```

---

**Add images here → Update paths in page files → Push to production! 📸**
