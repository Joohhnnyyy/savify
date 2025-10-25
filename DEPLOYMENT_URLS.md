# Savify Deployment URLs

## Frontend (Vercel)
- **URL**: https://savify.vercel.app
- **GitHub Repository**: https://github.com/Joohhnnyyy/savify
- **Branch**: main

## Backend (Render)
- **URL**: https://savify-backend.onrender.com
- **GitHub Repository**: https://github.com/Joohhnnyyy/savify
- **Branch**: main
- **Directory**: Financial-AI-System-V2-main

## Environment Variables

### Frontend (Vercel)
- VITE_API_URL: https://savify-backend.onrender.com
- VITE_FIREBASE_API_KEY: [configured in Vercel dashboard]
- VITE_FIREBASE_AUTH_DOMAIN: [configured in Vercel dashboard]
- VITE_FIREBASE_PROJECT_ID: [configured in Vercel dashboard]
- VITE_FIREBASE_STORAGE_BUCKET: [configured in Vercel dashboard]
- VITE_FIREBASE_MESSAGING_SENDER_ID: [configured in Vercel dashboard]
- VITE_FIREBASE_APP_ID: [configured in Vercel dashboard]
- VITE_FIREBASE_MEASUREMENT_ID: [configured in Vercel dashboard]

### Backend (Render)
- FLASK_ENV: production
- OPENAI_API_KEY: [configured in Render dashboard]
- CORS_ORIGINS: https://savify.vercel.app

## Testing the Integration
To verify the integration is working correctly:
1. Visit https://savify.vercel.app
2. Navigate to the Financial Dashboard
3. The frontend should successfully connect to the backend API at https://savify-backend.onrender.com