# Savify Deployment Guide

## Frontend Deployment (Vercel)

### Prerequisites
- Node.js 18+ installed
- Vercel CLI installed (`npm install -g vercel`)
- Vercel account

### Quick Deployment
1. Run the deployment script:
   ```bash
   ./deploy.sh
   ```

### Manual Deployment
1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy to Vercel:
   ```bash
   vercel --prod
   ```

### Environment Variables (Vercel Dashboard)
Set these environment variables in your Vercel project settings:

```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### Custom Domain (Optional)
1. Go to your Vercel project dashboard
2. Navigate to Settings > Domains
3. Add your custom domain
4. Update DNS records as instructed

---

## Backend Deployment

### Option 1: Docker Deployment

#### Prerequisites
- Docker installed
- Docker Compose installed

#### Steps
1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Build and run with Docker Compose:
   ```bash
   docker-compose up -d
   ```

### Option 2: Railway/Render Deployment

#### Prerequisites
- Railway or Render account
- GitHub repository

#### Steps
1. Connect your GitHub repository to Railway/Render
2. Set environment variables (see backend/.env.example)
3. Deploy using the platform's interface

### Option 3: AWS/GCP/Azure Deployment

#### Prerequisites
- Cloud provider account
- CLI tools installed

#### Steps
1. Follow cloud provider specific deployment guides
2. Use the provided Dockerfile for containerized deployment
3. Set up environment variables in cloud console

### Backend Environment Variables
```
FLASK_ENV=production
DATABASE_URL=your_database_url
OPENAI_API_KEY=your_openai_api_key
FIREBASE_ADMIN_SDK_PATH=path_to_firebase_admin_sdk.json
CORS_ORIGINS=https://your-frontend-domain.vercel.app
```

---

## Post-Deployment Checklist

### Frontend
- [ ] Verify all pages load correctly
- [ ] Test authentication flow
- [ ] Check Firebase integration
- [ ] Verify responsive design
- [ ] Test all navigation links

### Backend
- [ ] API endpoints respond correctly
- [ ] Database connections work
- [ ] Authentication middleware functions
- [ ] CORS settings allow frontend domain
- [ ] Environment variables are set correctly

### Integration
- [ ] Frontend can communicate with backend
- [ ] Authentication works end-to-end
- [ ] Data persistence functions correctly
- [ ] Error handling works properly

---

## Monitoring and Maintenance

### Frontend (Vercel)
- Monitor deployment logs in Vercel dashboard
- Set up analytics and performance monitoring
- Configure alerts for deployment failures

### Backend
- Set up application monitoring (e.g., Sentry, DataDog)
- Configure log aggregation
- Set up health checks and uptime monitoring
- Implement backup strategies for database

---

## Troubleshooting

### Common Frontend Issues
- **Build failures**: Check environment variables and dependencies
- **Routing issues**: Verify vercel.json rewrites configuration
- **Firebase errors**: Confirm Firebase configuration and API keys

### Common Backend Issues
- **Database connection**: Verify DATABASE_URL and network access
- **CORS errors**: Check CORS_ORIGINS environment variable
- **Authentication**: Verify Firebase Admin SDK configuration

### Getting Help
- Check deployment logs first
- Verify environment variables
- Test locally before deploying
- Contact support if issues persist