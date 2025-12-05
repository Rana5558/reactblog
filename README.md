# Blog Platform - React Frontend

A complete React.js frontend application for a Blog Platform with authentication, blog listing, and blog creation features.

## 🚀 Features

- **Authentication**: Login and Signup with token-based authentication
- **Blog Management**: View all blogs, read individual blog posts, and create new blogs
- **Protected Routes**: Secure access to blog creation page
- **Responsive Design**: Modern UI built with Tailwind CSS
- **Error Handling**: Comprehensive error handling and loading states
- **TypeScript**: Full TypeScript support for type safety

## 📋 Prerequisites

- Node.js (v18 or higher)
- pnpm (preferred) or npm
- A running backend API server

## 🛠️ Installation

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Configure environment variables**:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and set your backend API URL:
   ```
   VITE_API_URL=http://localhost:3000/api
   ```
   Replace with your actual backend API URL.

## 🏃 Running the Project

**Development mode**:
```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

**Build for production**:
```bash
pnpm build
```

**Preview production build**:
```bash
pnpm preview
```

## 📁 Project Structure

```
blog-platform/
├── src/
│   ├── api/              # API service layer
│   │   ├── axios.ts      # Axios instance with interceptors
│   │   ├── auth.ts       # Authentication API calls
│   │   └── blogs.ts      # Blog API calls
│   ├── components/       # Reusable components
│   │   ├── AuthForm.tsx
│   │   ├── BlogCard.tsx
│   │   ├── BlogForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── ProtectedRoute.tsx
│   ├── context/          # React Context providers
│   │   └── AuthContext.tsx
│   ├── pages/            # Page components
│   │   ├── About.tsx
│   │   ├── AddBlog.tsx
│   │   ├── BlogDetails.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   └── Signup.tsx
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx           # Main app component with routing
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles with Tailwind
├── .env.example          # Environment variables template
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🔌 API Integration

### Backend API Endpoints

The frontend expects the following REST API endpoints:

#### Authentication
- `POST /auth/register` - Register a new user
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
  Response:
  ```json
  {
    "token": "string",
    "user": { "id": "string", "username": "string", "email": "string" }
  }
  ```

- `POST /auth/login` - Login user
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
  Response:
  ```json
  {
    "token": "string",
    "user": { "id": "string", "username": "string", "email": "string" }
  }
  ```

#### Blogs
- `GET /blogs` - Get all blogs
  Response: `Blog[]`

- `GET /blogs/:id` - Get single blog by ID
  Response: `Blog`

- `POST /blogs` - Create new blog (requires authentication)
  Headers: `Authorization: Bearer <token>`
  ```json
  {
    "title": "string",
    "content": "string",
    "author": "string"
  }
  ```
  Response: `Blog`

### Blog Type Definition
```typescript
interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt?: string;
  updatedAt?: string;
}
```

## 🔐 Authentication Flow

1. User logs in or signs up
2. Backend returns a JWT token
3. Token is stored in `localStorage`
4. Token is automatically included in all API requests via Axios interceptor
5. Protected routes check authentication status
6. On 401 errors, user is automatically logged out and redirected to login

## 🎨 Styling

The project uses **Tailwind CSS** for styling. All components are fully responsive and follow modern UI/UX practices.

## 🧩 Key Components

### AuthContext
- Manages authentication state
- Provides `login`, `register`, and `logout` functions
- Persists authentication state in localStorage

### ProtectedRoute
- Wraps routes that require authentication
- Redirects to login if user is not authenticated

### API Service
- Centralized Axios instance with interceptors
- Automatic token injection
- Error handling for 401 responses

## 📝 Example API Requests

### Login Request
```typescript
import { authApi } from './api/auth';

const response = await authApi.login({
  email: 'user@example.com',
  password: 'password123'
});
```

### Get All Blogs
```typescript
import { blogsApi } from './api/blogs';

const blogs = await blogsApi.getAll();
```

### Create Blog (Authenticated)
```typescript
import { blogsApi } from './api/blogs';

const newBlog = await blogsApi.create({
  title: 'My Blog Post',
  content: 'Blog content here...',
  author: 'username'
});
```

## 🐛 Troubleshooting

**Issue**: API calls failing with CORS errors
- **Solution**: Ensure your backend API has CORS configured to allow requests from your frontend origin

**Issue**: Token not being sent with requests
- **Solution**: Check that token is stored in localStorage and the Axios interceptor is working

**Issue**: 401 errors on protected routes
- **Solution**: Verify token format and backend token validation

## 📦 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Navigation
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## 📄 License

This project is open source and available under the MIT License.

