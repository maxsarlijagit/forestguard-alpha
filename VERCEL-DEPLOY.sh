#!/bin/bash

echo "🚀 ForestGuard Alpha — Vercel Deployment"
echo ""
echo "This script will deploy your app to Vercel in 60 seconds."
echo ""

# Check if VERCEL_TOKEN is already set
if [ -z "$VERCEL_TOKEN" ]; then
  echo "⚠️  You need a Vercel token to deploy."
  echo ""
  echo "📖 Get your token:"
  echo "   1. Go to: https://vercel.com/account/tokens"
  echo "   2. Click 'Create Token'"
  echo "   3. Name it: 'forestguard-deploy'"
  echo "   4. Copy the token"
  echo ""
  read -p "🔑 Paste your VERCEL_TOKEN here: " VERCEL_TOKEN
  echo ""
fi

if [ -z "$VERCEL_TOKEN" ]; then
  echo "❌ No token provided. Exiting."
  exit 1
fi

# Install Vercel CLI globally
echo "📦 Installing Vercel CLI..."
npm install -g vercel --silent

# Build the project
echo "🔨 Building project..."
npm run build > /dev/null 2>&1

# Deploy
echo "🌐 Deploying to Vercel..."
vercel deploy \
  --token="$VERCEL_TOKEN" \
  --confirm \
  --name=forestguard-alpha \
  --public

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Your app is live at:"
echo "  https://forestguard-alpha.vercel.app"
echo ""
echo "📊 Dashboard:"
echo "  https://forestguard-alpha.vercel.app?tab=dashboard"
echo ""
echo "Share this URL with investors! 🎉"
