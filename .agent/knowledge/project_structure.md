# Project Guidelines: Nomad List Clone

This document provides an overview of the project structure, technology stack, and development conventions.

## 1. Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (Radix UI primitives)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 2. Directory Structure

The project follows the standard Next.js App Router structure:

```
/
├── app/                  # Application routes and layouts
│   ├── layout.tsx        # Root layout (includes ThemeProvider, Analytics)
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles (Tailwind directives)
├── components/           # React components
│   ├── ui/               # Reusable UI components (Shadcn UI)
│   ├── city-card.tsx     # Feature component: Display city details
│   ├── city-grid.tsx     # Feature component: Grid layout for cities
│   └── ...
├── lib/                  # Utilities and static data
│   ├── cities-data.ts    # Static data source for cities
│   └── utils.ts          # Helper functions (cn, clsx)
├── public/               # Static assets (images, icons)
└── ...
```

## 3. Key Components & Architecture

### **Data Source**
- Data is currently static and defined in `lib/cities-data.ts`.
- The `City` interface defines the structure of city data (name, country, scores, costs, etc.).

### **UI Components**
- **Shadcn UI**: Located in `components/ui/`. These are re-exportable, accessible components built on Radix UI.
- **Feature Components**: Located in `components/`. These compose UI components to build feature-specific logic (e.g., `CityCard`, `CityFilter`).

### **Styling**
- Uses **Tailwind CSS 4** for styling.
- Global styles in `app/globals.css`.
- Theme configuration (colors, fonts) is handled via Tailwind variables and classes.

## 4. Development Conventions

- **File Naming**: Use `kebab-case` for filenames (e.g., `city-card.tsx`).
- **Component Structure**:
  - Place generic, reusable UI parts in `components/ui`.
  - Place domain-specific logic in `components`.
- **Imports**: Use relative imports or configure path aliases if needed (currently using relative imports in most places).
- **Type Safety**: Strictly typed with TypeScript. ensure data interfaces in `lib` match component props.
