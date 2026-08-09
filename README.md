# 🎨 Town Team

> Urban streetwear landing page built with modern web technologies

![Next.js](https://img.shields.io/badge/Next.js-16.3.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4.3-38B2AC?style=flat-square&logo=tailwindcss)

---

## ✨ Features

- 🎯 **Modern UI** - Built with shadcn/ui components
- ⚡ **Fast** - Next.js 16 with Turbopack
- 📱 **Responsive** - Mobile-first design
- 🔒 **Secure** - Automated security scanning
- 🚀 **Deployed** - Production-ready on Vercel

---

## 🚀 Quick Start

```bash
# Clone & Install
git clone https://github.com/Mostafa-SAID7/Town-Team.git
cd Town-Team
pnpm install

# Run locally
pnpm dev
# → http://localhost:3000

# Build for production
pnpm build
pnpm start
```

---

## 📂 Project Structure

```
src/
├── app/              # Next.js pages & layouts
├── components/       # React components
├── lib/              # Utilities & helpers
└── public/           # Static assets

.github/
├── workflows/        # CI/CD automation
└── ISSUE_TEMPLATE/   # GitHub templates
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 16 |
| **UI** | React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Components** | shadcn/ui |
| **Icons** | Lucide React |
| **Analytics** | Vercel Analytics |

---

## 📋 Available Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm start        # Run production build
pnpm lint         # Run ESLint
```

---

## 🔄 Git Flow

We use Git Flow for organized development:

| Branch | Purpose | From | To |
|--------|---------|------|-----|
| `main` | Production | release/* | Deploy |
| `develop` | Integration | feature/* | Release |
| `feature/*` | New features | develop | PR |
| `bugfix/*` | Bug fixes | develop | PR |
| `release/*` | Releases | develop | main |
| `hotfix/*` | Urgent fixes | main | main |

👉 **[Full Git Flow Guide](./docs/GITFLOW.md)**

---

## 🚀 Deployment

**Automatically deployed to Vercel when you push to `main`**

- Build: ✅ Next.js optimized build
- Tests: ✅ ESLint, TypeScript, Unit tests
- Security: ✅ SAST, dependency audit, secret scan
- Deploy: ✅ Zero-downtime on Vercel

---

## 🔐 CI/CD Workflows

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| build-and-test | Push/PR | Lint, type check, test |
| code-analysis | Push/PR | Dead code, duplication |
| security-scanning | Daily | Vulnerabilities, secrets |
| gitflow-checks | PR | Branch validation |
| publish-release | main | Auto-releases |
| deploy | main | Vercel deployment |

---

## 📚 Documentation

- **[Quick Start](./docs/QUICKSTART.md)** - Get running in 60 seconds
- **[Git Flow](./docs/GITFLOW.md)** - Branch conventions
- **[Architecture](./docs/ARCHITECTURE.md)** - Tech overview

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/name`
2. Make your changes
3. Push: `git push -u origin feature/name`
4. Open a PR on GitHub
5. Merge after approval

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

---

## 📄 License

MIT © 2026 Mostafa SAID

---

## 📞 Support

- 🐛 [Report Issues](https://github.com/Mostafa-SAID7/Town-Team/issues)
- 💬 [Discussions](https://github.com/Mostafa-SAID7/Town-Team/discussions)
- 📖 [View Docs](./docs)

---

**Built with ❤️ using Next.js, React & Tailwind CSS**
