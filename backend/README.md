# Savify Backend Deployment Guide

## Overview
This directory contains all the necessary files and configurations for deploying the Savify backend API. The backend is built with FastAPI and supports multiple deployment options including Docker, cloud platforms, and traditional server deployments.

## Quick Start

### Prerequisites
- Python 3.11+
- Docker & Docker Compose
- PostgreSQL 15+
- Redis 7+

### Local Development Setup
1. **Clone and navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. **Run with Docker Compose (Recommended):**
   ```bash
   docker-compose up -d
   ```

6. **Or run locally:**
   ```bash
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

## Deployment Options

### 1. Docker Deployment (Recommended)

#### Single Container
```bash
# Build the image
docker build -t savify-backend .

# Run the container
docker run -d \
  --name savify-backend \
  -p 8000:8000 \
  --env-file .env \
  savify-backend
```

#### Docker Compose (Full Stack)
```bash
# Start all services (API, Database, Redis, Nginx)
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### 2. Cloud Platform Deployment

#### Railway
1. Connect your GitHub repository to Railway
2. Set environment variables in Railway dashboard
3. Deploy automatically on git push

#### Render
1. Create new Web Service on Render
2. Connect GitHub repository
3. Set build command: `pip install -r requirements.txt`
4. Set start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Add environment variables

#### Heroku
```bash
# Install Heroku CLI and login
heroku login

# Create app
heroku create savify-backend

# Set environment variables
heroku config:set SECRET_KEY=your-secret-key
heroku config:set DATABASE_URL=your-database-url

# Deploy
git push heroku main
```

#### AWS ECS/Fargate
1. Build and push Docker image to ECR
2. Create ECS task definition
3. Set up ECS service with load balancer
4. Configure environment variables in task definition

#### Google Cloud Run
```bash
# Build and push to Container Registry
gcloud builds submit --tag gcr.io/PROJECT_ID/savify-backend

# Deploy to Cloud Run
gcloud run deploy savify-backend \
  --image gcr.io/PROJECT_ID/savify-backend \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### 3. Traditional Server Deployment

#### Ubuntu/Debian Server
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Python 3.11
sudo apt install python3.11 python3.11-venv python3-pip

# Install PostgreSQL and Redis
sudo apt install postgresql postgresql-contrib redis-server

# Clone repository
git clone <your-repo-url>
cd savify-backend

# Set up application
python3.11 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Set up systemd service
sudo cp savify-backend.service /etc/systemd/system/
sudo systemctl enable savify-backend
sudo systemctl start savify-backend

# Set up Nginx reverse proxy
sudo apt install nginx
sudo cp nginx.conf /etc/nginx/sites-available/savify-backend
sudo ln -s /etc/nginx/sites-available/savify-backend /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

## Environment Configuration

### Required Environment Variables
```bash
# Application
SECRET_KEY=your-super-secret-key
DATABASE_URL=postgresql://user:pass@host:port/db
REDIS_URL=redis://host:port/db

# Firebase
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxx@project.iam.gserviceaccount.com

# OpenAI
OPENAI_API_KEY=sk-your-api-key

# CORS
CORS_ORIGINS=["https://your-frontend-domain.vercel.app"]
```

### Security Considerations
- **Never commit `.env` files to version control**
- **Use strong, unique SECRET_KEY in production**
- **Enable SSL/TLS in production**
- **Restrict CORS origins to your frontend domains**
- **Use environment-specific configurations**
- **Enable rate limiting and monitoring**

## Database Setup

### PostgreSQL Setup
1. **Create database and user:**
   ```sql
   CREATE DATABASE savify_db;
   CREATE USER savify_user WITH PASSWORD 'secure_password';
   GRANT ALL PRIVILEGES ON DATABASE savify_db TO savify_user;
   ```

2. **Run initialization script:**
   ```bash
   psql -U savify_user -d savify_db -f init.sql
   ```

3. **Run migrations (if using Alembic):**
   ```bash
   alembic upgrade head
   ```

### Redis Setup
```bash
# Start Redis server
redis-server

# Or with Docker
docker run -d --name redis -p 6379:6379 redis:7-alpine
```

## Monitoring and Logging

### Health Checks
The API includes a health check endpoint at `/health` that verifies:
- Application status
- Database connectivity
- Redis connectivity

### Logging Configuration
- Logs are written to `/app/logs/app.log`
- Log level can be configured via `LOG_LEVEL` environment variable
- Structured logging with JSON format for production

### Monitoring Setup
1. **Sentry for Error Tracking:**
   ```bash
   # Set SENTRY_DSN in environment variables
   SENTRY_DSN=https://your-dsn@sentry.io/project-id
   ```

2. **Prometheus Metrics:**
   - Metrics endpoint available at `/metrics`
   - Configure Prometheus to scrape metrics

3. **Health Check Monitoring:**
   - Set up uptime monitoring for `/health` endpoint
   - Configure alerts for service downtime

## Performance Optimization

### Production Settings
```bash
# Use multiple workers
WORKERS=4

# Enable connection pooling
DATABASE_POOL_SIZE=20
DATABASE_MAX_OVERFLOW=30

# Configure caching
REDIS_URL=redis://localhost:6379/0
CACHE_TTL=3600

# Enable rate limiting
RATE_LIMIT_ENABLED=true
RATE_LIMIT_REQUESTS=100
RATE_LIMIT_WINDOW=60
```

### Scaling Considerations
- **Horizontal Scaling:** Use load balancer with multiple instances
- **Database:** Consider read replicas for heavy read workloads
- **Caching:** Implement Redis caching for frequently accessed data
- **CDN:** Use CDN for static assets and API responses where appropriate

## Backup and Recovery

### Database Backups
```bash
# Create backup
pg_dump -U savify_user -h localhost savify_db > backup_$(date +%Y%m%d_%H%M%S).sql

# Restore backup
psql -U savify_user -h localhost savify_db < backup_file.sql
```

### Automated Backups
Set up automated daily backups using cron jobs or cloud provider backup services.

## Troubleshooting

### Common Issues

1. **Database Connection Errors:**
   - Verify DATABASE_URL format
   - Check network connectivity
   - Ensure database server is running

2. **Redis Connection Errors:**
   - Verify REDIS_URL format
   - Check Redis server status
   - Verify network connectivity

3. **Authentication Issues:**
   - Verify Firebase configuration
   - Check SECRET_KEY setting
   - Ensure proper CORS configuration

4. **Performance Issues:**
   - Monitor database query performance
   - Check Redis cache hit rates
   - Review application logs for bottlenecks

### Debug Mode
For debugging, set:
```bash
DEBUG=true
LOG_LEVEL=DEBUG
```

**Note:** Never enable debug mode in production!

## Support and Maintenance

### Regular Maintenance Tasks
- Monitor application logs
- Update dependencies regularly
- Review and rotate secrets
- Monitor database performance
- Check backup integrity

### Getting Help
- Check application logs first
- Review environment configuration
- Test database and Redis connectivity
- Monitor system resources (CPU, memory, disk)

For additional support, refer to the main project documentation or contact the development team.