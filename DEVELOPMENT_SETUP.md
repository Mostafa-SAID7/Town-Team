# 🚀 Development Setup & Running the App

## ✅ Current Status

**App is RUNNING locally** on: **http://localhost:3000**

## 🔧 Quick Start

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start Development Server
```bash
pnpm dev
```

### 3. Open in Browser
Visit: **http://localhost:3000**

The app will automatically reload as you make changes.

---

## 📁 Project Structure (Git Flow Ready)

```
town-team-landing-page/
├── .github/
│   ├── workflows/
│   │   ├── ci.yml                      # Main CI pipeline
│   │   ├── testing.yml                 # Unit, E2E, accessibility tests
│   │   ├── code-quality.yml            # ESLint, TypeScript, complexity
│   │   ├── security-scanning.yml       # Security & vulnerability scans
│   │   ├── gitflow-checks.yml          # Git Flow branch validation
│   │   └── deploy.yml                  # Production deployment
│   ├── GITFLOW.md                      # Detailed Git Flow guide
│   ├── GITFLOW_QUICK_REFERENCE.md      # Quick reference
│   └── ISSUE_TEMPLATE/
├── docs/
│   ├── ARCHITECTURE.md                 # Tech stack overview
│   ├── GETTING_STARTED.md              # Setup guide
│   ├── PROJECT_STRUCTURE.md            # File organization
│   └── GITFLOW.md                      # Git Flow documentation
├── src/                                # All source code
│   ├── app/
│   │   ├── globals.css                 # Global styles
│   │   ├── layout.tsx                  # Root layout
│   │   └── page.tsx                    # Home page
│   ├── components/                     # Reusable components
│   ├── lib/                            # Utilities
│   └── public/                         # Static assets
├── .gitflow                            # Git Flow config
├── .editorconfig                       # Code style
├── package.json                        # Dependencies
├── tsconfig.json                       # TypeScript config
├── tailwind.config.ts                  # Tailwind CSS config
├── next.config.mjs                     # Next.js config
├── postcss.config.mjs                  # PostCSS config
└── pnpm-lock.yaml                      # Locked dependencies
```

---

## 🔄 Git Flow Workflow

### Creating a Feature
```bash
# 1. Start from develop
git checkout develop
git pull origin develop

# 2. Create feature branch
git checkout -b feature/my-feature

# 3. Make changes and commit
git add .
git commit -m "feat: add my feature"

# 4. Push and create PR
git push -u origin feature/my-feature
# Create PR on GitHub → review → merge
```

### Branch Types
| Type | Pattern | Merge To |
|------|---------|----------|
| Feature | `feature/*` | develop |
| Bug Fix | `bugfix/*` | develop |
| Release | `release/X.Y.Z` | main |
| Hotfix | `hotfix/*` | main |
| Docs | `docs/*` | develop |
| Chore | `chore/*` | develop |

---

## 🧪 Testing & Quality Assurance

### Run Tests
```bash
pnpm test              # Unit tests
pnpm test --run        # Single run (no watch)
```

### Code Quality
```bash
pnpm lint              # ESLint
pnpm tsc --noEmit      # TypeScript check
pnpm build             # Production build
```

### Security Scanning
```bash
npm audit              # Check vulnerabilities
pnpm audit             # pnpm audit
```

---

## 📊 Automated Workflows

All workflows run automatically on push/PR to `main` or `develop`:

### 1. **Code Quality** (code-quality.yml)
- ✓ ESLint analysis
- ✓ TypeScript strict checking
- ✓ Console.log detection
- ✓ Dead code detection
- ✓ Bundle size analysis
- ✓ Duplication detection

### 2. **Testing** (testing.yml)
- ✓ Unit & Integration tests
- ✓ TypeScript type checking
- ✓ Build validation
- ✓ E2E tests (if configured)
- ✓ Accessibility tests
- ✓ Multi-node version support (18.x, 20.x)

### 3. **Security** (security-scanning.yml)
- ✓ Secret scanning (TruffleHog, GitGuardian)
- ✓ Dependency vulnerability audit
- ✓ SAST (Static Analysis) via CodeQL
- ✓ SonarQube code quality
- ✓ License compliance
- ✓ Security headers check

### 4. **Git Flow** (gitflow-checks.yml)
- ✓ Branch naming validation
- ✓ Merge target validation
- ✓ PR label checking

---

## 🛠️ Development Commands

```bash
# Development
pnpm dev              # Start dev server (http://localhost:3000)

# Building
pnpm build            # Build for production
pnpm start            # Run production build

# Code Quality
pnpm lint             # Run ESLint
pnpm tsc --noEmit     # TypeScript check

# Testing
pnpm test             # Run tests with coverage

# Cleanup
pnpm clean            # Remove build artifacts
rm -rf .next          # Clear Next.js cache
rm -rf node_modules   # Clear dependencies (reinstall with pnpm install)
```

---

## 🔐 Security Best Practices

### Don't Commit
- ❌ `.env` files (use `.env.example`)
- ❌ API keys or tokens
- ❌ Private credentials
- ❌ node_modules/

### Environment Variables
```bash
# Create .env.local (not committed)
cp .env.example .env.local

# Edit with your values
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Before Committing
1. Run `pnpm lint` - check code quality
2. Run `pnpm tsc --noEmit` - type check
3. Run `pnpm build` - verify production build works
4. Check git diff for secrets: `git diff --cached`

---

## 📈 Performance Optimization

### Current Setup
- ✓ Next.js 16 with Turbopack
- ✓ Tree-shaking enabled
- ✓ Image optimization via Next.js
- ✓ CSS optimization via Tailwind
- ✓ Code splitting automatic

### Monitoring
- Bundle size tracked via GitHub Actions
- Build time monitored
- Type checking on every commit

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Push to GitHub main branch
git push origin main

# Vercel automatically deploys
# No additional steps needed
```

### Build for Static Export
```bash
pnpm build
# Creates .next/ folder with optimized bundle
```

---

## 📚 Documentation

- 📖 **QUICKSTART.md** - Quick start guide
- 📖 **VERIFY_SETUP.md** - Verification checklist
- 📖 **PROJECT_STRUCTURE.md** - Detailed structure
- 📖 **ARCHITECTURE.md** - Tech stack overview
- 📖 **GITFLOW.md** - Detailed Git Flow guide
- 📖 **GITFLOW_QUICK_REFERENCE.md** - Quick reference

---

## 🆘 Troubleshooting

### Port 3000 in use?
```bash
pnpm dev -- -p 3001
```

### Styles not loading?
```bash
rm -rf .next
pnpm dev
```

### Dependencies issues?
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build fails?
```bash
pnpm tsc --noEmit    # Check for TypeScript errors
pnpm lint             # Check for linting errors
```

---

## 🎯 Next Steps

1. **Start developing**: `pnpm dev`
2. **Create a feature branch**: `git checkout -b feature/my-feature`
3. **Make changes**: Edit files in `src/`
4. **Test**: `pnpm lint && pnpm tsc --noEmit`
5. **Push**: `git push -u origin feature/my-feature`
6. **Create PR**: Open pull request on GitHub
7. **Merge**: After approval, merge to develop or main

---

## ✅ Verification

To verify everything is working:

```bash
# 1. Check dependencies
pnpm install

# 2. Run dev server
pnpm dev

# 3. Open http://localhost:3000 in browser

# 4. Verify in browser console (F12):
#    - No errors
#    - Page loads properly
#    - Styles are applied
#    - Images are visible

# 5. Run quality checks
pnpm lint
pnpm tsc --noEmit
pnpm build

# All should pass!
```

---

## 🎉 You're All Set!

Your development environment is:
- ✅ Properly organized with Git Flow
- ✅ Secured with automated scanning
- ✅ Tested with comprehensive workflows
- ✅ Ready for production deployment

**Happy coding!** 🚀
