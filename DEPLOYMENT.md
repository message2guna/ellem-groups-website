# Deployment Guide for Ellem Groups Website

## Quick Start

Your website is ready to deploy! Follow one of these methods:

## Method 1: Deploy to Vercel (Recommended - Free Tier Available)

Vercel is the creator of Next.js and provides the easiest deployment experience.

### Steps:

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub, GitLab, or Bitbucket
   - Or use email signup

2. **Push Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial Ellem Groups website"
   git remote add origin https://github.com/YOUR-USERNAME/ellem-groups-website.git
   git push -u origin main
   ```

3. **Deploy via Vercel Dashboard**
   - Go to https://vercel.com/new
   - Import your repository
   - Project settings are auto-detected
   - Click "Deploy"
   - Your site is now live at a Vercel URL!

4. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add `ellemgroups.com`
   - Follow DNS configuration instructions from your domain registrar
   - Wait for DNS propagation (usually 24-48 hours)

### Vercel Pricing:
- **Free**: Perfect for starting out (Recommended)
- **Pro**: $20/month for professional features

---

## Method 2: Deploy to AWS Amplify

Good option if you want more control and AWS integration.

### Steps:

1. **Push to GitHub** (see Method 1, steps 2)

2. **Connect to AWS Amplify**
   - Go to https://console.aws.amazon.com/amplify
   - Click "New App" → "Host Web App"
   - Select GitHub and authorize
   - Select your repository and branch
   - Accept default build settings
   - Click "Save and Deploy"

3. **Configure Custom Domain**
   - In Amplify console, go to Domain Management
   - Add your domain `ellemgroups.com`
   - Follow DNS setup instructions

### AWS Amplify Pricing:
- Free tier: Great for starting
- Paid: ~$0.15 per GB transferred

---

## Method 3: Deploy to DigitalOcean App Platform

Simple, affordable VPS deployment.

### Steps:

1. **Create DigitalOcean Account**
   - Go to https://www.digitalocean.com
   - Sign up and add payment method

2. **Create App**
   - Click "Create" → "App"
   - Select your GitHub repository
   - Confirm build settings (auto-detected)
   - Click "Launch App"
   - App deployed!

3. **Add Custom Domain**
   - Go to App Settings → Domains
   - Add `ellemgroups.com`
   - Update DNS at your registrar

### DigitalOcean Pricing:
- Starting at $5-12/month for app hosting
- Simple, predictable pricing

---

## Method 4: Self-Hosted (Traditional VPS)

For complete control, self-hosting on any Linux server.

### Steps:

1. **Set Up Server**
   ```bash
   # SSH into your VPS
   ssh root@your-server-ip
   
   # Update system
   apt update && apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   apt install -y nodejs
   
   # Install Git
   apt install -y git
   ```

2. **Clone and Build**
   ```bash
   # Clone repository
   git clone https://github.com/YOUR-USERNAME/ellem-groups-website.git
   cd ellem-groups-website
   
   # Install dependencies
   npm install
   
   # Build application
   npm run build
   ```

3. **Set Up PM2 (Process Manager)**
   ```bash
   # Install PM2
   npm install -g pm2
   
   # Start application
   pm2 start npm --name "ellem-groups" -- start
   
   # Set to auto-start on reboot
   pm2 startup
   pm2 save
   ```

4. **Set Up Nginx (Web Server)**
   ```bash
   # Install Nginx
   apt install -y nginx
   
   # Create Nginx config
   sudo nano /etc/nginx/sites-available/ellemgroups.com
   ```

   Add this configuration:
   ```nginx
   server {
       listen 80;
       server_name ellemgroups.com www.ellemgroups.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   ```bash
   # Enable site
   sudo ln -s /etc/nginx/sites-available/ellemgroups.com /etc/nginx/sites-enabled/
   
   # Test Nginx config
   sudo nginx -t
   
   # Restart Nginx
   sudo systemctl restart nginx
   ```

5. **Set Up SSL (HTTPS)**
   ```bash
   # Install Certbot
   apt install -y certbot python3-certbot-nginx
   
   # Get SSL certificate
   certbot --nginx -d ellemgroups.com -d www.ellemgroups.com
   
   # Auto-renewal is set up automatically
   ```

6. **Configure Domain**
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Point DNS A record to your VPS IP address
   - Wait for DNS propagation

---

## Pre-Deployment Checklist

- [ ] Update contact information in `/app/contact/page.tsx`
- [ ] Add company photos/images
- [ ] Update company descriptions
- [ ] Update footer with actual social links
- [ ] Update business hours
- [ ] Test contact form
- [ ] Test all links work
- [ ] Test on mobile devices
- [ ] Update SEO descriptions
- [ ] Set up analytics (Google Analytics)
- [ ] Test page load speed

---

## Post-Deployment Checklist

- [ ] Verify website loads at ellemgroups.com
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Verify mobile responsiveness
- [ ] Set up Google Search Console
- [ ] Set up Google Analytics
- [ ] Enable HTTPS/SSL
- [ ] Set up email notifications for form submissions
- [ ] Create sitemap
- [ ] Submit sitemap to search engines

---

## Domain Registration

If you haven't registered `ellemgroups.com` yet, choose from:

1. **GoDaddy** - https://www.godaddy.com
2. **Namecheap** - https://www.namecheap.com
3. **Google Domains** - https://domains.google.com
4. **Domain.com** - https://www.domain.com
5. **1&1** - https://www.1and1.com

Average cost: $10-15/year

---

## Adding Email to Your Domain

Popular options:
- **Google Workspace**: info@ellemgroups.com (starts at $5/user/month)
- **Zoho Mail**: Free for up to 5 users
- **Forwardmail.cc**: Cheap forwarding service

---

## Maintenance After Deployment

### Regular Tasks:
- Update company news/content monthly
- Add new project photos
- Respond to contact form submissions
- Monitor website analytics
- Check for broken links monthly
- Update testimonials/case studies

### Annual Tasks:
- Review and update SEO
- Renew SSL certificate (usually automatic)
- Update dependencies (`npm update`)
- Perform security audit
- Review analytics and adjust marketing

---

## Monitoring & Support

### Set Up Monitoring:
- **UptimeRobot**: https://uptimerobot.com (Free tier)
  - Get alerts if website goes down
  
- **Google Analytics**: https://analytics.google.com
  - Track visitor statistics
  
- **Google Search Console**: https://search.google.com/search-console
  - Monitor search performance

### Need Help?
- Next.js docs: https://nextjs.org/docs
- Vercel docs: https://vercel.com/docs
- DigitalOcean community: https://www.digitalocean.com/community
- Stack Overflow: https://stackoverflow.com

---

## Important Notes

1. **Environment Variables**: If you add sensitive data, create `.env.local` file (never commit to git)

2. **Contact Form**: Currently shows success message but doesn't send emails. To enable:
   - Use a service like FormSubmit.co or Formspree
   - Or set up a backend API with email service

3. **Performance**: Website is optimized for speed. Expected Lighthouse scores:
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 95+

4. **Backups**: If self-hosting, set up regular backups of your database and files

---

**Recommended**: Start with **Vercel** (Method 1) for easiest deployment!
