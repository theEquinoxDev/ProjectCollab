# ProjectCollab for Campus

A comprehensive platform designed specifically for campus developers to find project partners, showcase their skills, and collaborate on meaningful projects for hackathons, coursework, and personal development.

## Overview

ProjectCollab addresses the common challenge students face when trying to find suitable team members for academic and extracurricular projects. Instead of spamming WhatsApp groups, students can create verified profiles, post project opportunities, and connect with like-minded peers based on skills, interests, and project requirements.

## Features

### Core Functionality
- **Verified Student Profiles**: College email verification ensures authentic user base
- **Skill-Based Matching**: Advanced filtering system to find partners with specific technical skills
- **GitHub Integration**: Display portfolios and code quality metrics from GitHub profiles
- **Project Posting**: Create and manage project opportunities with detailed requirements
- **One-Click Applications**: Streamlined application process for project participation
- **WhatsApp Integration**: Direct messaging integration for seamless communication

### User Experience
- **Responsive Design**: Optimized for desktop and mobile devices
- **Dark/Light Theme**: User preference-based theming system
- **Real-time Notifications**: Instant updates on project applications and approvals
- **Advanced Search**: Filter projects by type, required skills, team size, and status
- **Team Formation Tools**: Smart suggestions for optimal team compositions

### Security & Privacy
- **JWT Authentication**: Secure token-based authentication system
- **Data Encryption**: Protected user data and communication channels
- **Privacy Controls**: User-managed visibility settings for profiles and projects

## Technology Stack

### Frontend
- **React 18** - Modern user interface framework
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Zustand** - Lightweight state management
- **Axios** - HTTP client for API communication
- **React Hot Toast** - Notification system

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **TypeScript** - Type-safe server development
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

### Development Tools
- **ESLint** - Code linting and formatting
- **Vite** - Frontend build and development
- **Nodemon** - Server auto-restart during development
- **TypeScript Compiler** - Type checking and compilation

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- MongoDB database
- Git

### Backend Setup

1. Clone the repository:
```bash
git clone https://github.com/theEquinoxDev/ProjectCollab
cd ProjectCollab/server
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/projectcollab
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

5. Start the development server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to client directory:
```bash
cd ../client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Usage

### For Students
1. **Registration**: Create an account using your college email
2. **Profile Setup**: Add your skills, GitHub profile, and contact information
3. **Browse Projects**: Explore available projects or post your own
4. **Apply to Projects**: Use one-click application for projects that match your skills
5. **Team Collaboration**: Connect with accepted team members via WhatsApp

### For Project Creators
1. **Create Project**: Define project requirements, skills needed, and team size
2. **Review Applications**: Evaluate applicants based on skills and portfolios
3. **Team Formation**: Accept applications and form your ideal team
4. **Project Management**: Track project progress and team communication

## API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Project Endpoints
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `GET /api/projects/:id` - Get project details
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Join Request Endpoints
- `POST /api/requests` - Submit join request
- `GET /api/requests` - Get user's requests
- `PUT /api/requests/:id` - Update request status
- `DELETE /api/requests/:id` - Delete request

## Project Structure

```
ProjectCollab/
├── client/                     # Frontend React application
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/            # Page components
│   │   ├── context/          # React context providers
│   │   ├── services/         # API service functions
│   │   └── types/            # TypeScript type definitions
│   └── package.json
├── server/                    # Backend Node.js application
│   ├── config/               # Database configuration
│   ├── controllers/          # Route controllers
│   ├── middleware/           # Express middleware
│   ├── models/              # MongoDB models
│   ├── routes/              # API routes
│   └── package.json
└── README.md
```

## Deployment

The application is configured for deployment on Vercel and other cloud platforms:

### Frontend Deployment
```bash
cd client
npm run build
# Deploy the dist/ folder to your hosting provider
```

### Backend Deployment
```bash
cd server
npm run build
npm start
# Configure environment variables on your hosting platform
```

## Contributing

We welcome contributions from the developer community. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write clear, concise commit messages
- Ensure code passes all linting checks
- Add tests for new features
- Update documentation as needed

## Testing

Run the test suites:

### Frontend Tests
```bash
cd client
npm run test
```

### Backend Tests
```bash
cd server
npm test
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Website: https://projectcollab-web.vercel.app
- Email: equinoxdev32@gmail.com
- GitHub Issues: [Repository issues page]

## Acknowledgments

- Built for the campus developer community
- Special thanks to all contributors and early adopters
- Inspired by the collaborative spirit of open-source development

---

**ProjectCollab for Campus** - Connecting students, building futures.
