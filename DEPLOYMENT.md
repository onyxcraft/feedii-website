# Deployment Guide

## Quick Deployment to Vercel (Recommended)

### Option 1: GitHub Integration (Best)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: Feedii landing page"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"
   - Your site will be live in ~2 minutes at `your-project.vercel.app`

3. **Custom Domain (Optional)**
   - In Vercel dashboard, go to "Settings" → "Domains"
   - Add your custom domain (e.g., `feedii.app`)
   - Follow DNS configuration instructions

### Option 2: Vercel CLI (Fast)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts - it will deploy automatically
```

## Alternative Hosting Platforms

### Netlify

1. Build the static site:
   ```bash
   npm run build
   ```

2. Deploy to Netlify:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out/` folder
   - Or connect to GitHub and set build command to `npm run build` and publish directory to `out`

### GitHub Pages

1. Add to `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

2. Enable GitHub Pages in repository settings
3. Set source to `gh-pages` branch

### Cloudflare Pages

1. Connect your GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: `/`

### AWS S3 + CloudFront

1. Build the site:
   ```bash
   npm run build
   ```

2. Upload `out/` to S3 bucket
3. Configure bucket for static website hosting
4. Set up CloudFront distribution pointing to bucket

## Pre-Deployment Checklist

- [ ] Update metadata in `app/layout.tsx` with final domain
- [ ] Replace placeholder email addresses with real ones
- [ ] Add real App Store link (replace `#` in CTA component)
- [ ] Add real social media links in Footer
- [ ] Test all navigation links
- [ ] Run lighthouse audit
- [ ] Test on mobile devices
- [ ] Verify dark mode works
- [ ] Check privacy policy and terms are complete
- [ ] Add analytics (optional - Google Analytics, Plausible, etc.)

## Environment Variables (if needed)

If you add analytics or other services, create `.env.local`:

```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

Add to `.gitignore` to keep secrets safe.

## Performance Tips

1. **Enable Compression** - Vercel/Netlify do this automatically
2. **CDN** - Use Cloudflare or similar for global distribution
3. **Image Optimization** - Already using SVG (no optimization needed)
4. **Caching** - Set in hosting platform (Vercel handles automatically)

## Monitoring

After deployment, monitor:
- **Uptime**: Use UptimeRobot or similar
- **Analytics**: Google Analytics, Plausible, or Fathom
- **Errors**: Sentry for error tracking
- **Performance**: Lighthouse CI, web-vitals

## Custom Domain Setup

### For Vercel:

1. Add domain in Vercel dashboard
2. Add DNS records at your domain registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### For Netlify:

1. Add domain in Netlify dashboard
2. Update nameservers at registrar to Netlify's NS records

## SSL/HTTPS

All recommended platforms (Vercel, Netlify, Cloudflare) provide free SSL certificates automatically.

## Updates

To update the site after initial deployment:

```bash
# Make changes
git add .
git commit -m "Update content"
git push

# Vercel/Netlify/etc will auto-deploy
```

## Troubleshooting

### Build fails on deployment:

- Check Node.js version (need 18+)
- Verify all dependencies are in package.json
- Check build logs for specific errors

### Links not working:

- Ensure you're using Next.js Link component for internal links
- Check hash links have corresponding IDs on page

### Styles not loading:

- Verify Tailwind is configured correctly
- Check PostCSS config exists
- Clear cache and rebuild

## Support

For deployment issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- GitHub Pages: [pages.github.com](https://pages.github.com)

---

Good luck with the Conrad Innovation Competition!
