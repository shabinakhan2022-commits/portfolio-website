# Portfolio Website

## Overview

This is a modern portfolio website built as a full-stack application showcasing a developer's work, skills, and contact information. The application features a React frontend with a beautiful, animated single-page design and an Express.js backend handling contact form submissions with database storage.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side is built using React with TypeScript, implementing a single-page application (SPA) architecture. The frontend uses Vite as the build tool and development server, providing fast hot module replacement and optimized builds. The application follows a component-based architecture with reusable UI components built on top of Radix UI primitives and styled with Tailwind CSS.

Key architectural decisions:
- **React with TypeScript**: Chosen for type safety and better developer experience
- **Vite**: Selected over Create React App for faster development builds and better performance
- **Component Library**: Uses shadcn/ui components built on Radix UI for accessibility and consistency
- **Styling**: Tailwind CSS for utility-first styling with CSS variables for theming
- **Routing**: Uses wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management with built-in caching and error handling

### Backend Architecture
The server follows a RESTful API architecture using Express.js with TypeScript. It implements a layered architecture with clear separation between routes, business logic, and data access layers.

Key architectural decisions:
- **Express.js**: Chosen for its simplicity and extensive middleware ecosystem
- **TypeScript**: Ensures type safety across the entire stack
- **Modular Structure**: Separate files for routes, storage, and server configuration
- **Storage Abstraction**: Interface-based storage layer allowing easy switching between implementations
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

### Data Storage Solutions
The application uses a dual storage approach:
- **Development**: In-memory storage for rapid development and testing
- **Production**: PostgreSQL with Drizzle ORM for type-safe database operations

Database schema includes:
- Users table for potential authentication features
- Contact messages table for storing form submissions with timestamps

### Authentication and Authorization
Currently implements a basic user schema but no active authentication. The architecture supports future authentication implementation with the existing user table structure.

### Form Handling and Validation
Uses React Hook Form with Zod for type-safe form validation on both client and server sides. The validation schema is shared between frontend and backend ensuring consistency.

### UI/UX Design System
Implements a comprehensive design system with:
- Dark theme with purple accent colors
- CSS custom properties for consistent theming
- Responsive design with mobile-first approach
- Smooth animations and transitions using CSS animations and Intersection Observer API
- Glass morphism effects and gradient backgrounds

### Development Tools and Workflow
- **Build System**: Vite for frontend, esbuild for backend bundling
- **Database Migrations**: Drizzle Kit for schema management
- **Code Quality**: TypeScript strict mode, ESLint configuration
- **Path Aliases**: Configured for clean imports using @ aliases

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend UI library with hooks and modern features
- **Express.js**: Node.js web framework for REST API
- **TypeScript**: Type system for JavaScript with strict type checking

### Database and ORM
- **Drizzle ORM**: Type-safe SQL query builder and ORM
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

### UI Component Library
- **Radix UI**: Comprehensive collection of accessible, unstyled UI primitives
- **shadcn/ui**: Pre-built components using Radix UI and Tailwind CSS
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library with React components

### Form Management and Validation
- **React Hook Form**: Performant forms library with minimal re-renders
- **Zod**: TypeScript-first schema validation library
- **@hookform/resolvers**: Validation resolvers for React Hook Form

### State Management and Data Fetching
- **TanStack React Query**: Server state management with caching, background updates, and error handling
- **wouter**: Lightweight routing library for React applications

### Development and Build Tools
- **Vite**: Fast build tool and development server
- **esbuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution environment for development
- **PostCSS**: CSS post-processor with Autoprefixer

### Animation and Interaction
- **Embla Carousel**: Lightweight carousel library for React
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Utility for constructing className strings conditionally

### Utilities and Helpers
- **date-fns**: Modern date utility library
- **nanoid**: Unique string ID generator
- **cmdk**: Command palette component

The architecture prioritizes developer experience, type safety, and performance while maintaining flexibility for future enhancements and scaling.