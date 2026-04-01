# 🚀 Full Stack TypeScript Project (Node.js + Express + React)

A modern, production-ready full-stack application built with **TypeScript**, featuring a clean architecture with separated backend and frontend layers.

![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![React](https://img.shields.io/badge/React-18+-61dafb)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 📂 Project Structure

```
.
├── node-ts-express/          # Backend (Node.js + Express + TypeScript)
│   ├── src/
│   │   ├── controllers/       # Request handlers
│   │   ├── routes/            # API routes
│   │   ├── middleware/        # Custom middleware
│   │   ├── types/             # TypeScript type definitions
│   │   ├── utils/             # Utility functions & validators
│   │   └── index.ts           # Entry point
│   ├── .env.example           # Environment variables template
│   ├── tsconfig.json          # TypeScript configuration
│   ├── package.json           # Dependencies
│   └── README.md              # Backend documentation
│
├── react-ts/                  # Frontend (React + TypeScript + Vite)
│   ├── src/
│   │   ├── components/        # Reusable React components
│   │   ├── pages/             # Page components
│   │   ├── hooks/             # Custom React hooks
│   │   ├── types/             # TypeScript interfaces
│   │   ├── api/               # API client services
│   │   ├── styles/            # Global styles
│   │   ├── App.tsx            # Main App component
│   │   └── main.tsx           # Entry point
│   ├── .env.example           # Environment variables template
│   ├── vite.config.ts         # Vite configuration
│   ├── tsconfig.json          # TypeScript configuration
│   ├── package.json           # Dependencies
│   └── README.md              # Frontend documentation
│
└── TypeScript/                # TypeScript practice & learning modules
    ├── basics/                # Core TypeScript concepts
    ├── advanced/              # Advanced patterns
    └── exercises/             # Hands-on exercises
```

---

## ⚙️ Tech Stack

### 🖥️ Backend
- **Runtime:** Node.js (v18+)
- **Framework:** Express.js (v4.x)
- **Language:** TypeScript (v5.0+)
- **Development:** ts-node-dev, Nodemon
- **Validation:** Zod
- **Environment:** dotenv

### 🌐 Frontend
- **Library:** React (v18+)
- **Language:** TypeScript (v5.0+)
- **Build Tool:** Vite
- **Linting:** ESLint
- **HTTP Client:** Fetch API / Axios (optional)

### 📦 Additional Libraries
| Library | Purpose |
|---------|---------|
| **Zod** | Runtime type validation |
| **dotenv** | Environment variable management |
| **cors** | Cross-origin resource sharing |
| **body-parser** | Request body parsing |

---

## ✨ Features

- ✅ **Type-Safe Development** - Full TypeScript coverage across frontend and backend
- ✅ **RESTful API** - Express-based REST endpoints with validation
- ✅ **Modern Frontend** - React with Vite for fast development
- ✅ **Input Validation** - Zod schemas for runtime type checking
- ✅ **Environment Management** - Validated environment variables
- ✅ **Scalable Architecture** - Modular, maintainable folder structure
- ✅ **Separate Concerns** - Frontend and backend are completely independent
- ✅ **Development Tools** - Hot reload, auto-rebuild, linting

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18 or higher
- **npm** v9 or higher
- **Git**

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2️⃣ Backend Setup

```bash
cd node-ts-express
npm install
```

Create `.env` file:
```bash
cp .env.example .env
```

Configure your environment variables:
```env
PORT=5000
NODE_ENV=development
```

Start the development server:
```bash
npm run dev
```

Backend runs at: `http://localhost:5000`

### 3️⃣ Frontend Setup

Open a new terminal window:

```bash
cd react-ts
npm install
```

Create `.env` file:
```bash
cp .env.example .env
```

Configure frontend environment:
```env
VITE_API_URL=http://localhost:5000
```

Start the development server:
```bash
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## 📌 Available Scripts

### Backend Scripts
```bash
npm run dev       # Start development server with hot reload
npm run build     # Compile TypeScript to JavaScript
npm start         # Run compiled JavaScript
npm run lint      # Run ESLint checks
npm run lint:fix  # Fix linting issues
npm run type-check # Type check without emitting files
```

### Frontend Scripts
```bash
npm run dev       # Start Vite dev server
npm run build     # Build for production
npm run preview   # Preview production build locally
npm run lint      # Run ESLint checks
npm run type-check # Type check the project
```

---

## 🔐 Environment Variables

### Backend (.env)
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database (Future)
# DATABASE_URL=mongodb://localhost:27017/myapp

# JWT Secret (Future)
# JWT_SECRET=your_secret_key_here

# API Keys
# EXTERNAL_API_KEY=your_api_key
```

### Frontend (.env)
```env
# API Configuration
VITE_API_URL=http://localhost:5000
VITE_API_TIMEOUT=30000

# Feature Flags
VITE_ENABLE_ANALYTICS=false
```

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Example Endpoints

#### Health Check
```http
GET /api/health
```

**Response:**
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

#### Create Item (Example)
```http
POST /api/items
Content-Type: application/json

{
  "name": "Sample Item",
  "description": "A sample item"
}
```

**Response:**
```json
{
  "id": "1",
  "name": "Sample Item",
  "description": "A sample item",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

---

## 🔧 Development Workflow

### 1. Create a New Feature

**Backend:**
```bash
cd node-ts-express/src
# Create files in appropriate directories (controllers, routes, types, etc.)
```

**Frontend:**
```bash
cd react-ts/src
# Create components, pages, hooks, and types
```

### 2. Type-Safe Development

Ensure all TypeScript files have proper types:
```typescript
// ✅ Good
interface User {
  id: number;
  name: string;
  email: string;
}

// ❌ Avoid
const user: any = { /* ... */ };
```

### 3. Validation with Zod

Backend example:
```typescript
import { z } from 'zod';

const CreateUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().min(18).optional(),
});

type CreateUserInput = z.infer<typeof CreateUserSchema>;
```

### 4. Running Both Servers

**Option A: Two Terminal Windows**
```bash
# Terminal 1 - Backend
cd node-ts-express && npm run dev

# Terminal 2 - Frontend
cd react-ts && npm run dev
```

**Option B: Using Concurrently (Root Package.json - Future)**
```bash
npm run dev
```

---

## 🧪 Testing (Future Implementation)

```bash
# Backend tests
npm run test

# Frontend tests
npm run test:frontend

# E2E tests
npm run test:e2e
```

---

## 📦 Build & Deployment

### Production Build

**Backend:**
```bash
cd node-ts-express
npm run build
npm start
```

**Frontend:**
```bash
cd react-ts
npm run build
# Output: dist/ folder ready for deployment
```

### Deployment Options

- **Backend:** Heroku, Railway, AWS EC2, DigitalOcean
- **Frontend:** Vercel, Netlify, AWS S3 + CloudFront, GitHub Pages

---

## 🗺️ Future Enhancements

- 🔹 **Authentication** - JWT-based auth with refresh tokens
- 🔹 **Database** - MongoDB or PostgreSQL integration with TypeORM/Prisma
- 🔹 **Caching** - Redis for session and data caching
- 🔹 **Testing** - Jest for unit tests, Playwright for E2E
- 🔹 **Logging** - Winston or Pino for structured logging
- 🔹 **Docker** - Containerization for development and production
- 🔹 **CI/CD** - GitHub Actions for automated testing and deployment
- 🔹 **API Documentation** - Swagger/OpenAPI integration
- 🔹 **Error Tracking** - Sentry for error monitoring
- 🔹 **Cloud Deployment** - Vercel, Netlify, AWS, or GCP integration

---

## 📖 Learning Resources

### TypeScript
- [TypeScript Official Handbook](https://www.typescriptlang.org/docs/)
- [Advanced Types & Patterns](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)

### Express.js
- [Express Official Docs](https://expressjs.com/)
- [Express + TypeScript Best Practices](https://expressjs.com/en/resources/middleware.html)

### React
- [React Documentation](https://react.dev/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

### Vite
- [Vite Guide](https://vitejs.dev/guide/)
- [Vite with React & TypeScript](https://vitejs.dev/guide/features.html)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contribution Guidelines
- Maintain TypeScript strict mode
- Follow existing code style and structure
- Add meaningful commit messages
- Include tests for new features
- Update documentation as needed

---

## 🐛 Troubleshooting

### Backend won't start
```bash
# Clear node_modules and reinstall
cd node-ts-express
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Port already in use
```bash
# Change PORT in .env or kill the process using port 5000
# On Linux/Mac:
lsof -i :5000
kill -9 <PID>

# On Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### TypeScript errors in IDE
- Ensure TypeScript version matches in `package.json`
- Restart your IDE's TypeScript language server
- Check `tsconfig.json` settings

### CORS issues
- Ensure backend has CORS enabled
- Check API URL in frontend `.env`
- Verify both servers are running

---

## 📄 License

This project is open-source and available under the **MIT License**. See [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**R Nanikumar**  
Full Stack Developer (TypeScript Focused)

- 🌐 Portfolio: [your-portfolio-url]
- 💼 LinkedIn: [your-linkedin-url]
- 🐙 GitHub: [your-github-url]
- 📧 Email: [your-email]

---

## 🙏 Acknowledgments

- Express.js community for excellent documentation
- React team for outstanding library and documentation
- TypeScript team for type safety
- Vite for lightning-fast development experience

---

## 📞 Support

If you have questions or need help:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Open an [Issue](https://github.com/your-username/your-repo-name/issues)
3. Start a [Discussion](https://github.com/your-username/your-repo-name/discussions)

---

## ⭐ Show Your Support

If you find this project helpful, please give it a star! Your support motivates continued development and improvements.

```bash
⭐ Star this repo
🍴 Fork and contribute
📢 Share with others
```

---

**Last Updated:** January 2024  
**Version:** 1.0.0
