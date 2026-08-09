# Project Structure Review & Run Guide

## ✅ Current Structure (Verified Correct)

```
town-team-landing-page/
│
├── 📂 .github/                          # GitHub workflows and templates
│   ├── workflows/
│   │   ├── ci.yml                      # Build & test pipeline
│   │   └── deploy.yml                  # Production deployment
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   └── pull_request_template.md
│
├── 📂 docs/                             # Documentation files
│   ├── ARCHITECTURE.md                 # Tech stack & design decisions
│   ├── GETTING_STARTED.md              # Setup guide
│   └── PROJECT_STRUCTURE.md            # This file
│
├── 📂 src/                              # Source code (main app code)
│   ├── 📂 app/                         # Next.js app directory (routes)
│   │   ├── globals.css                 # Global styles & CSS variables
│   │   ├── layout.tsx                  # Root layout (all pages inherit this)
│   │   └── page.tsx                    # Home page component
│   │
│   ├── 📂 components/                  # Reusable React components
│   │   └── ui/                         # UI component library
│   │       └── button.tsx              # Example button component
│   │
│   ├── 📂 lib/                         # Utility functions
│   │   └── utils.ts                    # Helper functions (cn utility)
│   │
│   ├── 📂 public/                      # Static assets
│   │   ├── apple-icon.png
│   │   ├── icon-dark-32x32.png
│   │   ├── icon-light-32x32.png
│   │   ├── icon.svg
│   │   ├── placeholder-*.png
│   │   ├── placeholder.svg
│   │   └── placeholder-user.jpg
│   │
│   └── components.json                 # shadcn/ui config
│
├── 📂 public/                           # ❌ LEGACY - Can be deleted
│
├── 📄 .editorconfig                     # Editor settings (formatting)
├── 📄 .gitignore                        # Git ignore rules
├── 📄 CHANGELOG.md                      # Version history
├── 📄 CONTRIBUTING.md                   # Contribution guidelines
├── 📄 LICENSE                           # MIT License
├── 📄 README.md                         # Main project README
│
├── 📄 package.json                      # Dependencies & scripts
├── 📄 pnpm-lock.yaml                    # Locked dependency versions
├── 📄 tsconfig.json                     # TypeScript config
├── 📄 tailwind.config.ts                # Tailwind CSS config
├── 📄 postcss.config.mjs                # PostCSS plugins
└── 📄 next.config.mjs                   # Next.js config
```

## 🚀 How to Run This App Locally

### Prerequisites
- Node.js 18+ (or Bun)
- pnpm (recommended), npm, or yarn

### Step 1: Install Dependencies

```bash
pnpm install
# or: npm install
# or: yarn install
```

### Step 2: Start Development Server

```bash
pnpm dev
# or: npm run dev
# or: yarn dev
```

### Step 3: Open in Browser

Visit: **http://localhost:3000**

The app will automatically reload as you edit files.

---

## 📋 Critical File Paths (Must Be Correct)

### ✅ Configuration Files (Root Level - Correct)

| File | Purpose | Status |
|------|---------|--------|
| `package.json` | Dependencies | ✅ Correct location |
| `tsconfig.json` | TypeScript config with `@/*` → `./src/*` | ✅ Correct |
| `tailwind.config.ts` | Tailwind CSS config scanning `./src/**/*` | ✅ Correct |
| `postcss.config.mjs` | PostCSS with Tailwind plugin | ✅ Correct |
| `next.config.mjs` | Next.js settings | ✅ Correct |

### ✅ App Source Files (Inside `src/`)

| File | Purpose | Status |
|------|---------|--------|
| `src/app/layout.tsx` | Root layout component | ✅ Correct |
| `src/app/page.tsx` | Home page (route: `/`) | ✅ Correct |
| `src/app/globals.css` | Global CSS & variables | ✅ Correct |
| `src/components/ui/button.tsx` | UI components | ✅ Correct |
| `src/lib/utils.ts` | Utility functions | ✅ Correct |
| `src/public/*` | Static assets (images) | ✅ Correct |

---

## 🔧 Key Configurations Explained

### 1. **tsconfig.json** - Path Aliases

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]  // Import from @/app, @/components, etc.
    }
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx"    // Points to src directory
  ]
}
```

**Why:** Allows you to import as `@/components/Button` instead of `../../components/Button`

### 2. **tailwind.config.ts** - Content Scanning

```typescript
{
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ]
}
```

**Why:** Tailwind only includes CSS classes used in these directories

### 3. **postcss.config.mjs** - CSS Processing

```javascript
{
  plugins: {
    '@tailwindcss/postcss': {}
  }
}
```

**Why:** Processes Tailwind CSS and applies plugins

### 4. **next.config.mjs** - App Directory

```javascript
{
  typescript: {
    ignoreBuildErrors: true  // For dev; strict in production
  },
  images: {
    unoptimized: true  // For static export
  }
}
```

### 5. **src/app/layout.tsx** - Root Layout

```typescript
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

**Why:** Wraps all pages; metadata and providers go here

### 6. **src/app/page.tsx** - Home Page

```typescript
export default function Page() {
  return <main>...</main>
}
```

**Why:** Automatically becomes the route `/`

---

## 📦 Available Commands

```bash
# Development
pnpm dev          # Start dev server on http://localhost:3000

# Production
pnpm build        # Build optimized production bundle
pnpm start        # Run production server

# Code Quality
pnpm lint         # Run ESLint on all files
pnpm tsc --noEmit # Check TypeScript types
```

---

## 🐛 Troubleshooting

### Issue: `Cannot find module '@/components'`

**Solution:** 
1. Verify `tsconfig.json` has: `"@/*": ["./src/*"]`
2. File must be in `src/components/` directory
3. Restart dev server

### Issue: Tailwind styles not working

**Solution:**
1. Check `tailwind.config.ts` content paths point to `./src/**/*`
2. Run `pnpm install` to ensure Tailwind is installed
3. Check `src/app/globals.css` has `@import 'tailwindcss'`

### Issue: Images not loading

**Solution:**
1. Images must be in `src/public/` folder
2. Reference as `/filename.png` (not `src/public/...`)
3. Clear Next.js cache: `rm -rf .next` then `pnpm dev`

### Issue: Port 3000 already in use

**Solution:**
```bash
pnpm dev -- -p 3001  # Use port 3001 instead
```

---

## 🚀 Next Steps

1. **Install dependencies:** `pnpm install`
2. **Start dev server:** `pnpm dev`
3. **Edit:** Modify `src/app/page.tsx` to see changes
4. **Build:** `pnpm build` for production
5. **Deploy:** Push to GitHub and deploy with Vercel/Netlify

---

## ✨ Everything is in the Right Place

All source code is inside `src/` directory:
- ✅ App routes in `src/app/`
- ✅ Components in `src/components/`
- ✅ Utilities in `src/lib/`
- ✅ Assets in `src/public/`
- ✅ Config files in root for Next.js to find

**The app is ready to run with `pnpm install && pnpm dev`**
