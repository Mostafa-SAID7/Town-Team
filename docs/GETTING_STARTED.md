# Getting Started with Town Team

This guide will help you get started with the Town Team Landing Page project.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/Mostafa-SAID7/Town-Team.git
cd Town-Team
```

### Step 2: Install Dependencies

Using pnpm (recommended):
```bash
pnpm install
```

Or using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

## Development

### Start the Development Server

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Make Changes

Edit files in the `src/` directory. The page will auto-refresh as you make changes.

### Run Type Checking

```bash
pnpm tsc --noEmit
```

### Lint Your Code

```bash
pnpm lint
```

## Building for Production

### Build the Application

```bash
pnpm build
```

This creates an optimized production build in the `.next` folder.

### Start the Production Server

```bash
pnpm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── components/            # Reusable React components
│   └── ui/               # shadcn/ui components
├── lib/                   # Utility functions
│   └── utils.ts          # Common utilities
└── public/               # Static assets
    ├── icons/            # Icon files
    ├── images/           # Image files
    └── ...
```

## Key Technologies

- **Next.js**: React framework for production
- **React 19**: JavaScript library for UI
- **TypeScript**: Typed JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **Lucide React**: Beautiful icon library

## Common Tasks

### Add a New Component

1. Create a new file in `src/components/`
2. Write your React component
3. Export it and use it in your pages

### Add a New Page

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Next.js will automatically create the route

### Customize Styles

Edit `src/app/globals.css` for global styles or add component-specific styles to component files.

## Troubleshooting

### Port 3000 Already in Use

If port 3000 is already in use, you can specify a different port:

```bash
pnpm dev -- -p 3001
```

### Dependencies Not Installing

Clear your package manager cache and try again:

```bash
pnpm install
# or
npm cache clean --force
npm install
```

### Build Fails

Check for TypeScript errors:

```bash
pnpm tsc --noEmit
```

Clear the build cache:

```bash
rm -rf .next
pnpm build
```

## Next Steps

- Read the [README](../README.md) for project overview
- Check [CONTRIBUTING.md](../CONTRIBUTING.md) for contribution guidelines
- Explore the [documentation](/) for more information

## Need Help?

- Check the [existing issues](https://github.com/Mostafa-SAID7/Town-Team/issues)
- Open a new [discussion](https://github.com/Mostafa-SAID7/Town-Team/discussions)
- Create a new [issue](https://github.com/Mostafa-SAID7/Town-Team/issues/new)

Happy coding! 🚀
