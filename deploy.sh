#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "🚀 Starting deployment to Cloudflare Pages..."

echo "🧹 Installing dependencies..."
npm install

echo "🔨 Building React/Vite Web App..."
npm run build

echo "☁️ Deploying to Cloudflare Pages (speakozy)..."
npx wrangler pages deploy dist --project-name speakozy

echo "✅ Deployment successful!"
echo "--------------------------------------------------------"
echo "🔗 To link your new domain (speakozy.com):"
echo "1. Open your Cloudflare Dashboard"
echo "2. Go to 'Workers & Pages' -> Click on 'speakozy'"
echo "3. Go to the 'Custom Domains' tab"
echo "4. Click 'Set up a custom domain' and type 'speakozy.com'"
echo "--------------------------------------------------------"
