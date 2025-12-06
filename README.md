# Nomad List Clone

A Next.js application for exploring cities, featuring a grid view and filtering capabilities.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, Radix UI Primitives, Lucide Icons
- **State Management**: React Hooks (useState, useMemo)

## Project Structure
- `app/`: Application routes and pages.
  - `page.tsx`: Main entry point composing `HeroSection`, `CityFilter`, and `CityGrid`.
- `components/`: UI components.
  - `ui/`: Reusable Shadcn/Radix UI primitives.
  - `city-grid.tsx`: Main grid display component.
  - `city-filter.tsx`: Filter controls.
- `lib/`: Utilities and static data.

## Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- `pnpm` (Project uses `pnpm-lock.yaml`)

### Installation
```bash
pnpm install
```

### Running the Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production
```bash
pnpm build
pnpm start
```

## Analysis & Findings
- **Data Source**: The application uses static data loaded from `lib/cities-data`.
- **Current State**: 
  - The UI is built using modern components and generic `globals.css`.
  - **Known Issue**: In `components/city-grid.tsx`, the filtering logic is implemented but the render loop iterates over the original `cities` array instead of the `filteredCities` result. As a result, filtering currently does not update the grid.
# webshack-nomad-list
