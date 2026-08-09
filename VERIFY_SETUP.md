# ✅ Setup Verification Checklist

Run this checklist to ensure your environment is set up correctly to run the app locally.

## Before Running the App

### ✅ 1. System Requirements

- [ ] Node.js 18+ installed (`node --version`)
- [ ] npm, pnpm, or yarn installed (`pnpm --version`)
- [ ] Git installed (`git --version`)

### ✅ 2. Dependencies Installed

```bash
pnpm install
```

- [ ] No errors during installation
- [ ] `node_modules/` directory created
- [ ] `pnpm-lock.yaml` file exists

### ✅ 3. File Structure Verification

Run this command to verify the structure:

```bash
ls -R src/
```

Should show:

```
src/app/
  ├── globals.css
  ├── layout.tsx
  └── page.tsx

src/components/
  └── ui/
      └── button.tsx

src/lib/
  └── utils.ts

src/public/
  └── [images]
```

- [ ] `src/app/` exists with layout.tsx and page.tsx
- [ ] `src/components/` exists
- [ ] `src/lib/utils.ts` exists
- [ ] `src/public/` exists with images

### ✅ 4. Configuration Files at Root

- [ ] `package.json` exists
- [ ] `tsconfig.json` exists and has `"@/*": ["./src/*"]`
- [ ] `tailwind.config.ts` exists
- [ ] `postcss.config.mjs` exists
- [ ] `next.config.mjs` exists

### ✅ 5. TypeScript Paths Configured

Check `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]  // ← Should exist
    }
  },
  "include": [
    "src/**/*.ts",        // ← Should include src/
    "src/**/*.tsx"
  ]
}
```

- [ ] Paths are configured correctly
- [ ] Include points to `src/` directory

### ✅ 6. Tailwind CSS Configured

Check `tailwind.config.ts`:

```typescript
{
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',      // ← Should scan src/
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ]
}
```

- [ ] Content paths point to `src/app/` and `src/components/`
- [ ] File exists at root

### ✅ 7. PostCSS Configured

Check `postcss.config.mjs`:

```javascript
{
  plugins: {
    '@tailwindcss/postcss': {}  // ← Should exist
  }
}
```

- [ ] PostCSS config exists
- [ ] Tailwind plugin is configured

### ✅ 8. Next.js Configured

Check `next.config.mjs`:

```javascript
export default {
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true }
}
```

- [ ] Next.js config exists at root
- [ ] No `src` directory configuration needed (Next.js auto-detects)

---

## Running the App

### ✅ 9. Start Development Server

```bash
pnpm dev
```

Expected output:

```
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- event compiled client and server successfully
```

- [ ] Dev server started without errors
- [ ] No "Cannot find" errors
- [ ] No TypeScript errors (unless strict mode)

### ✅ 10. Access in Browser

- [ ] Navigate to `http://localhost:3000`
- [ ] Homepage loads without errors
- [ ] Styles are applied (not plain HTML)
- [ ] Images are visible
- [ ] No console errors (F12 → Console)

### ✅ 11. Test Hot Reload

- [ ] Edit `src/app/page.tsx`
- [ ] Change a title or text
- [ ] Browser automatically refreshes
- [ ] Changes are visible

---

## If Something Fails

### Issue: "Cannot find module '@/app'"

**Solution:**
1. Check `tsconfig.json` has paths configured
2. Verify files are in `src/app/` not root
3. Delete `.next/` folder
4. Restart dev server

### Issue: "Tailwind styles not applied"

**Solution:**
1. Verify `tailwind.config.ts` content paths point to `src/`
2. Check `src/app/globals.css` imports Tailwind: `@import 'tailwindcss'`
3. Delete `.next/` folder
4. Restart dev server

### Issue: "Port 3000 already in use"

**Solution:**
```bash
pnpm dev -- -p 3001
```

### Issue: "Module not found: next"

**Solution:**
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

---

## All Verified ✅

If all checkboxes are checked:

1. Your setup is **correct** ✅
2. The app is **ready to run** ✅
3. You can **start developing** ✅

Run:

```bash
pnpm dev
```

**Happy coding!** 🚀
