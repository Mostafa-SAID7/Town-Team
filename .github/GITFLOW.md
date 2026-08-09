# 🔄 Git Flow Workflow Guide

This project uses **Git Flow** branching model for organized and scalable development.

---

## 📋 Overview

Git Flow defines a robust branching strategy with specific branch types and their purposes:

```
main (production)
  └─ release/1.0.0
  └─ hotfix/critical-bug
    
develop (integration)
  └─ feature/new-feature
  └─ feature/dark-mode
  └─ bugfix/form-validation
  └─ docs/api-guide
  └─ chore/update-deps
  └─ infra/github-actions
```

---

## 🌳 Branch Types & Naming Conventions

### 1. **main** (Production)
- **Purpose:** Production-ready code only
- **Protection:** Requires PR reviews, passing CI/CD
- **Who merges:** Release Manager / Lead Dev
- **Merge from:** `release/*` and `hotfix/*` branches only

```bash
# Always create a tag for releases
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin main --tags
```

### 2. **develop** (Integration)
- **Purpose:** Integration branch for all features
- **Protection:** Requires PR reviews, passing CI/CD
- **Who merges:** Any team member
- **Merge from:** `feature/*`, `bugfix/*`, `release/*`, `hotfix/*`

```bash
# Keep develop always in a working state
git pull origin develop
```

### 3. **feature/*** (Feature Development)
- **Pattern:** `feature/descriptive-name`
- **Examples:** 
  - `feature/dark-mode`
  - `feature/user-authentication`
  - `feature/payment-integration`
- **Branch from:** `develop`
- **Merge back to:** `develop` via Pull Request
- **Delete after merge:** Yes

```bash
# Create a new feature branch
git checkout develop
git pull origin develop
git checkout -b feature/dark-mode

# Work on your feature
git add .
git commit -m "feat: add dark mode toggle"

# Push to remote
git push -u origin feature/dark-mode

# Create Pull Request on GitHub
# After approval and merge, branch is deleted
```

### 4. **bugfix/*** (Non-Critical Bugs)
- **Pattern:** `bugfix/descriptive-name`
- **Examples:**
  - `bugfix/form-validation`
  - `bugfix/image-loading-issue`
  - `bugfix/typo-in-header`
- **Branch from:** `develop`
- **Merge back to:** `develop` via Pull Request
- **Delete after merge:** Yes

```bash
git checkout develop
git checkout -b bugfix/form-validation
# Fix the bug
git push -u origin bugfix/form-validation
```

### 5. **release/*** (Release Preparation)
- **Pattern:** `release/X.Y.Z` (semantic versioning)
- **Examples:**
  - `release/1.0.0`
  - `release/1.1.0`
  - `release/2.0.0`
- **Branch from:** `develop`
- **Merge back to:** `main` AND `develop`
- **Purpose:** Final testing, version bumps, release notes
- **Delete after merge:** Yes

```bash
# Create release branch when develop is ready for release
git checkout develop
git pull origin develop
git checkout -b release/1.0.0

# Update version numbers in:
# - package.json
# - CHANGELOG.md
git add package.json CHANGELOG.md
git commit -m "chore: bump version to 1.0.0"

# Create Pull Request to main
# After merge to main, create a tag
git tag -a v1.0.0 -m "Release 1.0.0"
git push origin main --tags

# Also merge back to develop
git checkout develop
git pull origin main
git commit -m "Merge release/1.0.0 back to develop"
```

### 6. **hotfix/*** (Critical Production Fixes)
- **Pattern:** `hotfix/descriptive-name`
- **Examples:**
  - `hotfix/security-vulnerability`
  - `hotfix/payment-processing-down`
  - `hotfix/data-loss-bug`
- **Branch from:** `main` (not develop!)
- **Merge back to:** `main` AND `develop`
- **Delete after merge:** Yes
- **Urgency:** High - fixes production issues

```bash
# Branch from main for critical issues
git checkout main
git pull origin main
git checkout -b hotfix/security-patch

# Fix the issue
git add .
git commit -m "fix: security vulnerability in auth"

# Create Pull Request to main
# After merge, create a patch tag
git tag -a v1.0.1 -m "Hotfix 1.0.1"
git push origin main --tags

# Also merge back to develop to keep in sync
git checkout develop
git pull origin main
```

### 7. **docs/*** (Documentation)
- **Pattern:** `docs/descriptive-name`
- **Examples:**
  - `docs/api-reference`
  - `docs/deployment-guide`
  - `docs/contributing-guide`
- **Branch from:** `develop`
- **Merge back to:** `develop` via Pull Request
- **Delete after merge:** Yes

```bash
git checkout develop
git checkout -b docs/deployment-guide
# Update documentation
git push -u origin docs/deployment-guide
```

### 8. **chore/*** (Maintenance & Configuration)
- **Pattern:** `chore/descriptive-name`
- **Examples:**
  - `chore/update-dependencies`
  - `chore/update-eslint-config`
  - `chore/upgrade-node-version`
- **Branch from:** `develop`
- **Merge back to:** `develop` via Pull Request
- **Delete after merge:** Yes

```bash
git checkout develop
git checkout -b chore/update-dependencies
# Update deps
pnpm update
git commit -m "chore: update dependencies"
git push -u origin chore/update-dependencies
```

### 9. **infra/*** (Infrastructure & DevOps)
- **Pattern:** `infra/descriptive-name`
- **Examples:**
  - `infra/github-actions-setup`
  - `infra/docker-configuration`
  - `infra/ci-cd-pipeline`
- **Branch from:** `develop`
- **Merge back to:** `develop` via Pull Request
- **Delete after merge:** Yes

```bash
git checkout develop
git checkout -b infra/github-actions-setup
# Update CI/CD configuration
git push -u origin infra/github-actions-setup
```

---

## 📝 Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style (formatting, semicolons, etc.)
- `refactor:` Code refactoring
- `perf:` Performance improvement
- `test:` Adding/updating tests
- `chore:` Build, deps, tooling
- `ci:` CI/CD changes

### Examples:
```bash
git commit -m "feat(auth): add two-factor authentication"
git commit -m "fix(checkout): resolve payment processing issue"
git commit -m "docs(readme): update installation instructions"
git commit -m "chore(deps): update tailwind to v4"
git commit -m "refactor(components): simplify button component"
```

---

## 🔀 Typical Git Flow Workflow

### Starting a New Feature:

```bash
# 1. Update develop
git checkout develop
git pull origin develop

# 2. Create feature branch
git checkout -b feature/awesome-feature

# 3. Make changes and commit
git add .
git commit -m "feat: implement awesome feature"

# 4. Push to remote
git push -u origin feature/awesome-feature

# 5. Create Pull Request on GitHub
# - Add description
# - Link related issues
# - Request reviewers

# 6. After approval, merge via GitHub (delete branch)

# 7. Local cleanup
git checkout develop
git pull origin develop
git branch -d feature/awesome-feature
```

### Preparing a Release:

```bash
# 1. Create release branch from develop
git checkout develop
git pull origin develop
git checkout -b release/1.0.0

# 2. Update version and changelog
# - Update package.json version
# - Update CHANGELOG.md
git add package.json CHANGELOG.md
git commit -m "chore(release): prepare v1.0.0"

# 3. Create PR to main
# - Title: "Release v1.0.0"
# - Merge to main

# 4. Tag the release
git checkout main
git pull origin main
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin main --tags

# 5. Merge back to develop
git checkout develop
git pull origin main
git commit -m "Merge release/1.0.0 back to develop"
git push origin develop

# 6. Delete release branch
git branch -d release/1.0.0
git push origin --delete release/1.0.0
```

### Emergency Hotfix:

```bash
# 1. Create hotfix from main
git checkout main
git pull origin main
git checkout -b hotfix/critical-bug

# 2. Fix the issue
git add .
git commit -m "fix: resolve critical production bug"

# 3. Create PR to main
# - Merge to main
# - Create tag: v1.0.1

# 4. Merge back to develop
git checkout develop
git pull origin main
git push origin develop

# 5. Delete hotfix branch
git branch -d hotfix/critical-bug
git push origin --delete hotfix/critical-bug
```

---

## ✅ Pre-Merge Checklist

Before creating a Pull Request, ensure:

- [ ] Branch created from correct parent (`develop` or `main`)
- [ ] Branch name follows convention (`feature/*`, `bugfix/*`, etc.)
- [ ] Latest changes from parent branch pulled
- [ ] Code follows project style guide
- [ ] Tests pass locally: `pnpm test`
- [ ] Linter passes: `pnpm lint`
- [ ] TypeScript check passes: `pnpm tsc --noEmit`
- [ ] Commit messages follow conventional commits
- [ ] Documentation updated (if needed)
- [ ] CHANGELOG updated (for releases)

---

## 🔒 Branch Protection Rules

These branches have protection enabled:

### `main` branch:
- Requires PR review before merge (min 1 approver)
- Requires status checks to pass (CI/CD)
- Dismiss stale reviews
- Require branches up to date
- No force pushes allowed
- No direct commits

### `develop` branch:
- Requires PR review before merge (min 1 approver)
- Requires status checks to pass (CI/CD)
- Dismiss stale reviews
- Require branches up to date
- No force pushes allowed
- No direct commits

---

## 📊 Branch Management

### List all branches:
```bash
git branch -a
```

### Delete local branch:
```bash
git branch -d feature/old-feature
```

### Delete remote branch:
```bash
git push origin --delete feature/old-feature
```

### Track remote branch locally:
```bash
git checkout --track origin/feature/something
```

---

## 🚀 CI/CD Integration

All branches trigger automated checks:

- ✅ ESLint (code quality)
- ✅ TypeScript (type checking)
- ✅ Build (production build)
- ✅ Tests (if available)

Merge is blocked if checks fail.

---

## 📚 Resources

- [Git Flow CheatSheet](https://danielkummer.github.io/git-flow-cheatsheet/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Flow vs Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

---

## 🤝 Need Help?

If you're unsure about which branch to use or how to proceed:

1. Check this guide
2. Ask in team discussions
3. Reference `.gitflow` configuration file
4. Create an issue with your question

---

**Happy coding with Git Flow!** 🎉
