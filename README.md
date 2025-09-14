<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">🐙 GitHub Projects Hub</h1>

  <p align="center">
    <strong>A modern React application for discovering GitHub users and their repositories</strong>
    <br />
    Search users, explore repositories, and view README files with an intuitive interface
    <br />
    <br />
    <a href="https://github-projects-hub.vercel.app"><strong>🚀 View Live Demo »</strong></a>
    <br />
    <br />
    <a href="#features">Features</a>
    ·
    <a href="#getting-started">Getting Started</a>
    ·
    <a href="#contributing">Contributing</a>
    ·
    <a href="#contact">Contact</a>
  </p>
</div>

## 📖 About The Project

GitHub Projects Hub is a comprehensive web application designed to streamline the exploration of GitHub's vast ecosystem. Built with modern React technologies, this application provides developers, students, and tech enthusiasts with powerful tools to discover and analyze GitHub users and their repositories.

### 🎯 Key Objectives

- **Simplified Discovery**: Eliminate the complexity of manual GitHub browsing
- **Enhanced User Experience**: Provide a clean, intuitive interface for GitHub exploration
- **Educational Value**: Serve as a learning resource for GitHub API integration
- **Developer Productivity**: Help developers quickly find relevant projects and contributors
- **Community Building**: Connect developers with similar interests through repository discovery

### 🔍 What Makes It Special

- **Real-time Search**: Instant search results as you type
- **Comprehensive Data**: Access detailed user profiles, repository information, and README content
- **Responsive Design**: Seamless experience across all devices
- **Modern Architecture**: Built with clean code principles and modern React patterns
- **Performance Optimized**: Efficient data fetching and caching strategies

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ✨ Features
<a id="features"></a>

### 🔍 User Search
- Search GitHub users by username with real-time suggestions
- View comprehensive user profiles including followers, repositories, and bio
- Filter results with customizable pagination limits

### 📁 Repository Explorer
- Browse user repositories with detailed information
- View repository statistics (stars, forks, language, etc.)
- Access repository README files with markdown rendering

### 🎨 User Interface
- Clean, modern design with responsive layout
- Intuitive navigation and user-friendly interactions
- Loading states and error handling
- Toast notifications for better user feedback

### ⚡ Performance
- Optimized API calls with intelligent caching
- Lazy loading for better performance
- Debounced search to reduce unnecessary requests

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🛠️ Built With

This project is built using modern technologies and best practices to ensure scalability, maintainability, and performance.

### Core Technologies
-   [![React][React.js]][React-url] - UI Library
-   TypeScript - Type Safety
-   [![Vite][Vite]][Vite-url] - Build Tool & Dev Server
-   TailwindCSS - Styling Framework
-   daisyUI - UI Components

### State Management & Data Fetching
-   [![Tanstack Query][Tanstack Query]][TanstackQuery-url] - Server State Management
-  React Router - Client-side Routing

### Development Tools
-   ESLint - Code Linting
-   Prettier - Code Formatting
-   Husky - Git Hooks

### API & Validation
-   [![Zod][Zod]][Zod-url] - Schema Validation
-   Axios - HTTP Client
-   [![Github][Github]][Github-url] - GitHub API Integration

### Hosting & Deployment
-   [![Vercel][Vercel]][Vercel-url] - Deployment Platform

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🏗️ Project Architecture

The project follows a clean architecture pattern with clear separation of concerns:

```
📂 src/
├── 📁 components/          # Reusable UI components
│   ├── Accordion/          # Collapsible content component
│   ├── Hero/              # Landing section component
│   ├── Modal/             # Modal dialog component
│   ├── SearchBox/         # Search input component
│   └── Spinner/           # Loading indicator
├── 📁 features/           # Feature-based modules
│   └── home/              # Home page feature
│       ├── hooks/         # Feature-specific hooks
│       ├── sections/      # Page sections
│       └── store/         # Local state management
├── 📁 pages/              # Route pages
│   ├── home/              # Home page
│   └── not-found/         # 404 page
├── 📁 services/           # API services
│   ├── interceptors/      # HTTP interceptors
│   └── githubService.ts   # GitHub API service
├── 📁 domains/            # Type definitions
├── 📁 constants/          # Application constants
├── 📁 helpers/            # Utility functions
└── 📁 hooks/              # Custom React hooks
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 🚀 Getting Started
<a id="getting-started"></a>

Follow these steps to set up the project locally and start exploring GitHub users and repositories.

### 📝 Prerequisites

Make sure you have the following installed on your development machine:

- **Node.js** (v16.0.0 or later)
- **yarn** or **npm** (yarn is recommended)
- **Git** for version control

```bash
# Check your Node.js version
node --version

# Install Yarn globally (if you haven't already)
npm install -g yarn
```

### 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/edovqL/github-projects-hub.git
   cd github-projects-hub
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or using npm
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   ```

   Edit the `.env` file with your configuration:
   ```env
   # GitHub API Configuration
   VITE_GITHUB_API_URL=https://api.github.com
   VITE_LIMIT_DATA=5
   ```

4. **Start the development server**
   ```bash
   yarn dev
   # or using npm
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:5173](http://localhost:5173) to view the application.

### 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | 🚀 Start development server |
| `yarn build` | 🏗️ Build for production |
| `yarn preview` | 👀 Preview production build |
| `yarn lint` | 🔍 Lint code with ESLint |
| `yarn precommit` | ✅ Run pre-commit checks |

### 🔧 Development Workflow

This project uses several tools to maintain code quality:

- **ESLint** - Lints TypeScript and React code
- **Prettier** - Formats code automatically
- **Husky** - Runs pre-commit hooks
- **lint-staged** - Runs linting on staged files

The pre-commit hook will automatically:
1. Lint your code
2. Format it with Prettier
3. Ensure code quality standards

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Record -->

## Record

https://github.com/user-attachments/assets/93fd7201-b78d-4d3d-8bd9-75e4a043678d

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Top contributors:

<a href="https://github.com/edovqL/github-projects-hub/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=edovqL/github-projects-hub" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Alpredo Pandiangan - alpredo.vandy@gmail.com

Project Link: [https://github.com/edovqL/github-projects-hub](https://github.com/edovqL/github-projects-hub)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org
[Tanstack Query]: https://img.shields.io/badge/reactquery-whitesmoke?style=for-the-badge&logo=react-query
[TanstackQuery-url]: https://tanstack.com/query/latest
[Zod]: https://img.shields.io/badge/zod-blue?style=for-the-badge&logo=zod
[Zod-url]: https://zod.dev
[Github]: https://img.shields.io/badge/github-api-black?style=for-the-badge&logo=github
[Github-url]: https://github.com
[Vercel]: https://img.shields.io/badge/vercel-black?style=for-the-badge&logo=vercel
[Vercel-url]: https://vercel.com
[Vite]: https://img.shields.io/badge/vite-FFFFE0?style=for-the-badge&logo=vite
[Vite-url]: https://vite.dev
