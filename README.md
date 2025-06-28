# PLP Task Manager

A modern, responsive task management application built with React, Vite, TypeScript, and Tailwind CSS. This project demonstrates best practices in React component architecture, state management, API integration, and responsive design.

## ✨ Features

### 🎨 Modern UI/UX
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Dark/Light Mode**: Theme switcher with persistent preferences
- **Beautiful Gradients**: Modern gradient backgrounds and button styles
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Glass Morphism**: Backdrop blur effects and modern styling

### 📋 Task Management
- **Add Tasks**: Create new tasks with a clean input interface
- **Complete Tasks**: Mark tasks as completed with visual feedback
- **Delete Tasks**: Remove tasks with confirmation
- **Filter Tasks**: View All, Active, or Completed tasks
- **Persistent Storage**: Tasks saved in localStorage
- **Task Statistics**: Display remaining task count

### 🔧 Technical Features
- **React Router**: Client-side routing with navigation
- **Context API**: Theme management across components
- **Custom Hooks**: Reusable logic for localStorage
- **TypeScript**: Full type safety and better development experience
- **Component Architecture**: Modular, reusable components

### 🚀 Performance
- **Vite**: Lightning-fast development and build times
- **Tailwind CSS**: Utility-first CSS for optimal performance
- **Code Splitting**: Automatic route-based code splitting
- **Hot Module Replacement**: Instant updates during development

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Customizable button with variants
│   ├── Navbar.tsx      # Navigation with theme switcher
│   ├── Footer.tsx      # Site footer with links
│   ├── TaskManager.tsx # Main task management component
│   └── TestComponent.tsx # CSS verification component
├── pages/              # Page components
│   ├── Home.tsx        # Landing page with hero section
│   └── ApiData.tsx     # API data display (ready for integration)
├── context/            # React context providers
│   └── ThemeContext.tsx # Theme management (light/dark mode)
├── hooks/              # Custom React hooks
├── api/                # API integration functions
├── utils/              # Utility functions
├── assets/             # Static assets (images, icons)
├── App.tsx             # Main application component
├── main.tsx            # Entry point
└── index.css           # Tailwind CSS imports and custom styles
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.0
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 3.4.0
- **Routing**: React Router DOM 7.6.3
- **Icons**: Heroicons React 2.2.0
- **UI Components**: Headless UI React 2.2.4
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd week-3-react-js-assignment-danchege
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5174` (or the port shown in terminal)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Usage

### Navigation
- **Home**: Landing page with app overview and navigation buttons
- **Tasks**: Task management interface
- **API Data**: Placeholder for API integration (ready for implementation)

### Task Management
1. **Add a Task**: Type in the input field and click "Add" or press Enter
2. **Complete a Task**: Click the checkbox next to any task
3. **Delete a Task**: Click the "Delete" button on any task
4. **Filter Tasks**: Use the filter buttons (All, Active, Completed)

### Theme Switching
- Click the sun/moon icon in the navigation bar to toggle between light and dark modes
- Your preference is automatically saved and restored

## 🎨 Component Documentation

### Button Component
```tsx
<Button 
  variant="primary" | "secondary" | "danger" | "success" | "warning"
  size="sm" | "md" | "lg"
  disabled={boolean}
  onClick={function}
>
  Button Text
</Button>
```

### Theme Context
```tsx
import { useTheme } from './context/ThemeContext';

const { isDark, toggleTheme } = useTheme();
```

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with a custom configuration:
- Dark mode: `class` strategy
- Content paths: Configured for all React components
- Custom utilities: Available in `src/index.css`

### TypeScript
- Strict mode enabled
- React JSX transform
- Module resolution: bundler
- Target: ES2022

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel/Netlify
The project is ready for deployment to modern hosting platforms:
- Vercel: Connect your GitHub repository
- Netlify: Drag and drop the `dist` folder
- GitHub Pages: Use GitHub Actions for deployment

## 🔮 Future Enhancements

### Planned Features
- [ ] API Integration with JSONPlaceholder
- [ ] Search functionality for tasks
- [ ] Task categories and tags
- [ ] Due dates and reminders
- [ ] Export/import tasks
- [ ] User authentication
- [ ] Real-time collaboration

### API Integration Ready
The `ApiData` page is prepared for API integration:
- Loading states
- Error handling
- Search functionality
- Responsive grid layout

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the blazing fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React Router](https://reactrouter.com/) for client-side routing
- [Heroicons](https://heroicons.com/) for the beautiful icons
- [Headless UI](https://headlessui.dev/) for accessible UI components

---

**Built with ❤️ By Daniel Chege Njenga using modern web technologies**
