# ⚡ Quick Start - Run Town Team Locally

## 1. Clone & Setup (First Time Only)

```bash
git clone https://github.com/Mostafa-SAID7/Town-Team.git
cd Town-Team
pnpm install
```

## 2. Start Development Server

```bash
pnpm dev
```

## 3. Open Browser

Visit: **http://localhost:3000** ✨

Done! The app is running. Edit `src/app/page.tsx` to see changes instantly.

---

## 📁 Project Structure

```
src/
├── app/           ← Your pages and routes
├── components/    ← Reusable components
├── lib/           ← Utilities
└── public/        ← Images and assets
```

## 🛠️ Other Commands

```bash
pnpm build        # Build for production
pnpm start        # Run production build
pnpm lint         # Check code quality
```

---

## ❓ Troubleshooting

**Port 3000 in use?**
```bash
pnpm dev -- -p 3001
```

**Styles not loading?**
```bash
rm -rf .next
pnpm dev
```

**Need help?** Check [docs/PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md)

---

**That's it!** Happy coding 🎉
