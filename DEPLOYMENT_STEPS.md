# Savify Deployment Guide

## Frontend Deployment (Vercel)

1. **Push your code to GitHub**
   - Create a repository and push your code

2. **Deploy on Vercel**
   - Go to [Vercel](https://vercel.com)
   - Connect your GitHub repository
   - Select the repository and click "Import"
   - Configure the project:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Add environment variables:
     ```
     VITE_FIREBASE_API_KEY=your_firebase_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
     VITE_API_URL=https://savify-backend.onrender.com
     ```
   - Click "Deploy"

## Backend Deployment (Render)

1. **Push your code to GitHub**
   - Ensure your backend code is in the repository

2. **Deploy on Render**
   - Go to [Render](https://render.com)
   - Sign up or log in
   - Click "New" and select "Web Service"
   - Connect your GitHub repository
   - Configure the service:
     - Name: savify-backend
     - Environment: Python
     - Build Command: `pip install -r requirements.txt`
     - Start Command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - Add environment variables:
     ```
     FLASK_ENV=production
     OPENAI_API_KEY=your_openai_api_key
     CORS_ORIGINS=https://savify.vercel.app
     ```
   - Click "Create Web Service"

## Connecting Frontend and Backend

1. **Update API URL in Frontend**
   - The frontend is configured to use the backend URL from the environment variable `VITE_API_URL`
   - Ensure this is set to your Render backend URL in Vercel

2. **Configure CORS on Backend**
   - The backend is configured to accept requests from the frontend URL
   - Ensure `CORS_ORIGINS` is set to your Vercel frontend URL in Render

## Verifying Deployment

1. **Test Frontend**
   - Visit your Vercel deployment URL
   - Ensure all pages load correctly

2. **Test Backend**
   - Visit your Render deployment URL + `/health`
   - Ensure it returns a successful response

3. **Test Integration**
   - Test features that require communication between frontend and backend