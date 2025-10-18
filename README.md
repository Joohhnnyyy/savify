# Savify

**AI-Powered Financial Coaching Platform**

Savify is a modern web application that provides personalized AI financial coaching designed to help individuals with irregular income patterns achieve financial wellness. The platform learns from user behavior, analyzes spending patterns, identifies financial risks, and offers tailored recommendations to improve financial health.

## Features

### Core Functionality
- **AI-Powered Financial Coaching**: Personalized guidance that adapts to individual financial patterns
- **Behavioral Analysis**: Advanced pattern recognition for spending habits and financial behaviors
- **Risk Assessment**: Intelligent identification of potential financial risks
- **Tailored Recommendations**: Customized advice based on individual financial situations
- **Multi-Platform Authentication**: Support for email, Google, GitHub, and Microsoft sign-in

### User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Real-time Updates**: Dynamic content updates and interactive elements
- **Professional Interface**: Clean, intuitive design focused on user experience

## Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development environment
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React component library

### Backend & Services
- **Firebase** - Authentication and real-time database
- **Supabase** - Additional backend services and database management
- **React Query** - Server state management and caching

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd savify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and configure the following variables:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:8080` to view the application

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run build:dev` - Build the application in development mode
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview the production build locally

## Project Structure

```
savify/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── *.mp4              # Video assets
├── src/
│   ├── components/        # Reusable UI components
│   ├── contexts/          # React context providers
│   ├── hooks/             # Custom React hooks
│   ├── integrations/      # Third-party service integrations
│   ├── lib/               # Utility functions and configurations
│   ├── pages/             # Application pages/routes
│   └── assets/            # Images and other assets
├── supabase/              # Supabase configuration
└── configuration files    # Various config files
```

## Key Components

### Authentication
- Multi-provider authentication system
- Firebase integration for secure user management
- Support for email/password, Google, GitHub, and Microsoft sign-in

### Financial Coaching
- AI-powered analysis engine
- Personalized recommendation system
- Pattern recognition algorithms
- Risk assessment tools

### User Interface
- Responsive design system
- Modern component architecture
- Accessibility-focused development
- Performance-optimized rendering

## Development Guidelines

### Code Quality
- TypeScript for type safety
- ESLint configuration for consistent code style
- Component-based architecture
- Responsive design principles

### Performance
- Vite for fast development and building
- Code splitting and lazy loading
- Optimized asset delivery
- Efficient state management

### Security
- Environment variable management
- Secure authentication flows
- Data validation and sanitization
- HTTPS enforcement in production

## Deployment

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

The application is optimized for deployment on modern hosting platforms including Vercel, Netlify, and traditional web servers.

## Contact Information

- **Email**: info@savify.iq
- **Phone**: +964 770 295 0000
- **Address**: Iraq, Sulaymaniyah, Malik Mahmud Street, District 305, Alley 10, Building 84

## Contributing

We welcome contributions to improve Savify. Please ensure all contributions follow our coding standards and include appropriate tests.

## License

This project is proprietary software. All rights reserved.

---

**Savify** - Transforming financial wellness through intelligent, personalized AI coaching.
