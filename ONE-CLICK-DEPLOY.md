# 🚀 ForestGuard Alpha — Deploy Now (1 Step!)

## ⚡ Ultra-Simple Deploy

You have **two options**:

---

## Option 1: One-Line Deploy (Easiest) ⭐

### Step 1: Get your Vercel token
1. Go to: https://vercel.com/account/tokens
2. Click **"Create Token"**
3. Name: `forestguard-deploy`
4. Click **"Create"**
5. **Copy the token** (looks like: `abcd1234...`)

### Step 2: Deploy with one command
```bash
cd forestguard-alpha

# Replace YOUR_TOKEN with your actual token (paste between quotes)
VERCEL_TOKEN="YOUR_TOKEN" bash VERCEL-DEPLOY.sh
```

**That's it!** ✅ Deployment starts immediately.

Output will show:
```
✅ Deployment complete!

Your app is live at:
  https://forestguard-alpha.vercel.app
```

---

## Option 2: GitHub + Vercel (Even Easier But Requires Setup)

### Step 1: Create GitHub repo
```bash
cd forestguard-alpha
git remote add origin https://github.com/YOUR_USERNAME/forestguard-alpha.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Vercel (1-click)
1. Go to: https://vercel.com/new
2. Click **"Import Git Repository"**
3. Paste your repo URL
4. Click **"Import"**
5. Click **"Deploy"**
6. **Done!** 🎉

Vercel will auto-detect Next.js and deploy automatically.

---

## 📊 URLs After Deploy

| Route | URL |
|-------|-----|
| Landing Page | `https://forestguard-alpha.vercel.app` |
| Dashboard | Click tab or append `?tab=dashboard` |
| Both | Same URL, switch with tabs |

---

## 🆘 If Deployment Fails

1. Check Vercel logs:
   ```bash
   vercel logs --token="YOUR_TOKEN" forestguard-alpha
   ```

2. Most common issue: `npm` can't find dependencies
   - Solution: `npm install && npm run build` locally first

3. If stuck: Re-extract the archive fresh:
   ```bash
   tar -xzf forestguard-alpha.tar.gz
   cd forestguard-alpha
   npm install
   npm run build
   ```

---

## ✨ That's All!

**Option 1:** 2 minutes (if you already have Vercel)  
**Option 2:** 5 minutes (if you need to create GitHub repo)

---

## 🎯 After Deployment

Your live URL is: **https://forestguard-alpha.vercel.app**

You can now:
- ✅ Share with investors
- ✅ Show in pitch meetings
- ✅ Test on mobile
- ✅ Update by pushing to GitHub (auto-redeploys!)

---

**Ready? Run the command above or head to vercel.com/new** 🚀
