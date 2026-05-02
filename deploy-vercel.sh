#!/bin/bash

# ForestGuard Alpha — One-Click Vercel Deploy
# 
# Usage: 
#   1. Set your Vercel token: export VERCEL_TOKEN=your_token_here
#   2. Run: bash deploy-vercel.sh
#
# Or just run with token inline:
#   VERCEL_TOKEN=your_token bash deploy-vercel.sh

set -e

if [ -z "$VERCEL_TOKEN" ]; then
  echo "❌ Error: VERCEL_TOKEN not set"
  echo ""
  echo "Get your token from: https://vercel.com/account/tokens"
  echo ""
  echo "Then run:"
  echo "  export VERCEL_TOKEN=your_token_here"
  echo "  bash deploy-vercel.sh"
  echo ""
  echo "Or in one line:"
  echo "  VERCEL_TOKEN=your_token bash deploy-vercel.sh"
  exit 1
fi

echo "🚀 ForestGuard Alpha — Deploying to Vercel"
echo ""

# Install Vercel CLI if needed
if ! command -v vercel &> /dev/null; then
  echo "📦 Installing Vercel CLI..."
  npm install -g vercel
fi

# Install dependencies
echo "📥 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel deploy \
  --token=$VERCEL_TOKEN \
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
echo "🏠 Landing:"
echo "  https://forestguard-alpha.vercel.app?tab=landing"
echo ""
