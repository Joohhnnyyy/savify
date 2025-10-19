#!/bin/bash

# Savify Backend Deployment Script
echo "🚀 Starting Savify Backend Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if .env file exists
if [ ! -f ".env" ]; then
    print_warning ".env file not found. Creating from .env.example..."
    if [ -f ".env.example" ]; then
        cp .env.example .env
        print_warning "Please edit .env file with your configuration before continuing."
        read -p "Press Enter to continue after editing .env file..."
    else
        print_error ".env.example file not found. Please create .env file manually."
        exit 1
    fi
fi

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
print_status "Checking prerequisites..."

if ! command_exists docker; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

if ! command_exists docker-compose; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

print_success "Prerequisites check passed!"

# Deployment options
echo ""
echo "Select deployment option:"
echo "1) Docker Compose (Full stack with database)"
echo "2) Docker Container only"
echo "3) Local development setup"
echo "4) Build and push to registry"
echo "5) Deploy to cloud platform"

read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        print_status "Deploying with Docker Compose..."
        
        # Stop existing containers
        print_status "Stopping existing containers..."
        docker-compose down
        
        # Build and start services
        print_status "Building and starting services..."
        docker-compose up -d --build
        
        # Wait for services to be ready
        print_status "Waiting for services to be ready..."
        sleep 10
        
        # Check health
        print_status "Checking service health..."
        if curl -f http://localhost:8000/health >/dev/null 2>&1; then
            print_success "Backend is running at http://localhost:8000"
            print_success "API documentation available at http://localhost:8000/docs"
        else
            print_error "Backend health check failed. Check logs with: docker-compose logs"
        fi
        ;;
        
    2)
        print_status "Deploying Docker container only..."
        
        # Build image
        print_status "Building Docker image..."
        docker build -t savify-backend .
        
        # Stop existing container
        print_status "Stopping existing container..."
        docker stop savify-backend 2>/dev/null || true
        docker rm savify-backend 2>/dev/null || true
        
        # Run container
        print_status "Starting container..."
        docker run -d \
            --name savify-backend \
            -p 8000:8000 \
            --env-file .env \
            savify-backend
        
        # Check health
        sleep 5
        if curl -f http://localhost:8000/health >/dev/null 2>&1; then
            print_success "Backend is running at http://localhost:8000"
        else
            print_error "Backend health check failed. Check logs with: docker logs savify-backend"
        fi
        ;;
        
    3)
        print_status "Setting up local development environment..."
        
        # Check Python
        if ! command_exists python3; then
            print_error "Python 3 is not installed."
            exit 1
        fi
        
        # Create virtual environment
        print_status "Creating virtual environment..."
        python3 -m venv venv
        
        # Activate virtual environment
        print_status "Activating virtual environment..."
        source venv/bin/activate
        
        # Install dependencies
        print_status "Installing dependencies..."
        pip install -r requirements.txt
        
        # Run database migrations (if applicable)
        print_status "Setting up database..."
        # Add migration commands here if using Alembic
        
        print_success "Local development environment ready!"
        print_status "To start the server, run:"
        print_status "source venv/bin/activate && uvicorn main:app --reload --host 0.0.0.0 --port 8000"
        ;;
        
    4)
        print_status "Building and pushing to registry..."
        
        read -p "Enter registry URL (e.g., your-registry.com/savify-backend): " registry_url
        
        if [ -z "$registry_url" ]; then
            print_error "Registry URL is required."
            exit 1
        fi
        
        # Build image
        print_status "Building Docker image..."
        docker build -t $registry_url:latest .
        
        # Tag with version
        read -p "Enter version tag (default: latest): " version_tag
        version_tag=${version_tag:-latest}
        
        if [ "$version_tag" != "latest" ]; then
            docker tag $registry_url:latest $registry_url:$version_tag
        fi
        
        # Push to registry
        print_status "Pushing to registry..."
        docker push $registry_url:latest
        
        if [ "$version_tag" != "latest" ]; then
            docker push $registry_url:$version_tag
        fi
        
        print_success "Image pushed to registry: $registry_url"
        ;;
        
    5)
        print_status "Cloud platform deployment..."
        
        echo "Select cloud platform:"
        echo "1) Railway"
        echo "2) Render"
        echo "3) Heroku"
        echo "4) Google Cloud Run"
        echo "5) AWS ECS"
        
        read -p "Enter your choice (1-5): " cloud_choice
        
        case $cloud_choice in
            1)
                print_status "Railway deployment instructions:"
                echo "1. Connect your GitHub repository to Railway"
                echo "2. Set environment variables in Railway dashboard"
                echo "3. Deploy automatically on git push"
                ;;
            2)
                print_status "Render deployment instructions:"
                echo "1. Create new Web Service on Render"
                echo "2. Connect GitHub repository"
                echo "3. Set build command: pip install -r requirements.txt"
                echo "4. Set start command: uvicorn main:app --host 0.0.0.0 --port \$PORT"
                echo "5. Add environment variables"
                ;;
            3)
                print_status "Heroku deployment..."
                if ! command_exists heroku; then
                    print_error "Heroku CLI is not installed."
                    exit 1
                fi
                
                read -p "Enter Heroku app name: " app_name
                
                # Create Procfile if it doesn't exist
                if [ ! -f "Procfile" ]; then
                    echo "web: uvicorn main:app --host 0.0.0.0 --port \$PORT" > Procfile
                fi
                
                # Create or update app
                heroku create $app_name 2>/dev/null || heroku git:remote -a $app_name
                
                # Deploy
                git add .
                git commit -m "Deploy to Heroku" || true
                git push heroku main
                
                print_success "Deployed to Heroku: https://$app_name.herokuapp.com"
                ;;
            4)
                print_status "Google Cloud Run deployment instructions:"
                echo "1. gcloud builds submit --tag gcr.io/PROJECT_ID/savify-backend"
                echo "2. gcloud run deploy savify-backend --image gcr.io/PROJECT_ID/savify-backend --platform managed --region us-central1 --allow-unauthenticated"
                ;;
            5)
                print_status "AWS ECS deployment instructions:"
                echo "1. Build and push Docker image to ECR"
                echo "2. Create ECS task definition"
                echo "3. Set up ECS service with load balancer"
                echo "4. Configure environment variables in task definition"
                ;;
            *)
                print_error "Invalid choice."
                exit 1
                ;;
        esac
        ;;
        
    *)
        print_error "Invalid choice."
        exit 1
        ;;
esac

print_success "Deployment completed!"

# Show useful information
echo ""
print_status "Useful commands:"
echo "  View logs: docker-compose logs -f"
echo "  Stop services: docker-compose down"
echo "  Restart services: docker-compose restart"
echo "  Check health: curl http://localhost:8000/health"
echo "  API docs: http://localhost:8000/docs"

print_status "Environment variables to set in production:"
echo "  - SECRET_KEY"
echo "  - DATABASE_URL"
echo "  - REDIS_URL"
echo "  - FIREBASE_PROJECT_ID"
echo "  - FIREBASE_PRIVATE_KEY"
echo "  - FIREBASE_CLIENT_EMAIL"
echo "  - OPENAI_API_KEY"
echo "  - CORS_ORIGINS"