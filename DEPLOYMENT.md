# ForestGuard Alpha — Web Deployment

## 📦 Project Structure

```
forestguard-alpha/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page with Landing + Dashboard tabs
│   ├── page.module.css     # Page styles
│   └── globals.css         # Global styles
├── components/
│   ├── Landing.tsx         # Landing page component
│   └── Dashboard.tsx       # Dashboard component
├── public/
│   ├── forestguard-landing.html   # Landing HTML
│   └── forestguard-dashboard.html # Dashboard HTML
├── package.json
├── next.config.js
└── tsconfig.json
```

## 🚀 Quick Deploy to Vercel

### Option 1: Push to GitHub → Connect to Vercel (Recommended)

1. **Create a GitHub repo**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/forestguard-alpha.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub → Select `forestguard-alpha`
   - Framework: Next.js (auto-detected)
   - Click "Deploy"
   - Vercel will automatically build and deploy
   - **Live URL**: `https://forestguard-alpha.vercel.app`

### Option 2: Direct Deploy via Vercel CLI

```bash
npm install -g vercel
vercel
# Answer prompts:
# - Set scope to personal account
# - Link to existing project? → No
# - Project name: forestguard-alpha
# - Framework: Next.js
# - Root directory: ./
# - Vercel will deploy automatically
```

## 📋 What's Included

- **Landing Page**: Full ForestGuard landing with hero, products, timeline, market, business model, competition, roadmap, financials, team, CTA
- **Dashboard**: Live operations dashboard with:
  - 6 regional zones (Bariloche, Bolsón, Lanín, Iguazú, Córdoba, Valparaíso)
  - Global stats + network status
  - Sensor map with alerts
  - 5 critical alerts with dispatch buttons
  - Investor demo tab with financials
- **Tab Navigation**: Easy switching between Landing ↔ Dashboard at the top

## 🎨 Styling

- **Theme**: Dark luxury tech aesthetic
  - Background: `#07090a` (near-black)
  - Primary accent: `#82c69b` (leaf green)
  - Alert: `#ff6b35` (ember orange)
  - Sky: `#5bb8ef` (satellite blue)
- **Fonts**: System fonts (no external deps)
- **Responsive**: Works on mobile, tablet, desktop

## 📝 Next Steps

1. ✅ Extract archive: `tar -xzf forestguard-alpha.tar.gz`
2. ✅ Install: `cd forestguard-alpha && npm install`
3. ✅ Test locally: `npm run dev` → `http://localhost:3000`
4. ✅ Deploy: Follow Option 1 or Option 2 above

## 🔗 URLs After Deployment

- **Landing**: `https://forestguard-alpha.vercel.app?tab=landing`
- **Dashboard**: `https://forestguard-alpha.vercel.app?tab=dashboard`
- **Default**: Opens Landing (click "Dashboard" tab to switch)

## 🛠 Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000

# Build for production
npm run build
npm run start
```

## 📞 Support

For issues or questions:
- Email: max@forestguard.io
- Website: forestguard.io

---

**Built with**: Next.js 14, React 18, TypeScript  
**Deployment**: Vercel  
**Status**: Production-ready ✅
