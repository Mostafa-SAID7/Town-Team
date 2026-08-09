# 🚀 Release Workflow - Complete Guide

This document explains how releases, versions, tags, and automated workflows are managed.

---

## 📋 Overview

### Workflow Files
- **`bug-report.yml`** - Auto-detects and labels bug reports
- **`feature-merged.yml`** - Tracks merged PRs and categorizes them
- **`version-bump.yml`** - Calculates semantic versioning
- **`release.yml`** - Creates releases and GitHub tags

---

## 🐛 Bug Reports & Fixes

### Reporting a Bug

1. **Open Issue** on GitHub
2. **Title** includes bug/error keywords
3. **Body** describes the problem
4. **Auto-label:** `type: bug`, `priority: medium`

### Fixing a Bug

```bash
# 1. Create bugfix branch from develop
git checkout develop
git pull origin develop
git checkout -b bugfix/describe-bug

# 2. Fix the issue
git add .
git commit -m "fix: resolve bug description"

# 3. Push and create PR to develop
git push -u origin bugfix/describe-bug
# Create PR on GitHub

# 4. PR auto-labeled: type: bugfix
# 5. After merge, issue is tracked
```

**Auto-Label Applied:**
- `type: bugfix` - Automatically added
- `status: in-progress` - Shows progress

---

## ✨ Feature Development

### Creating a Feature

```bash
# 1. Create feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/new-feature

# 2. Develop feature with commits
git add .
git commit -m "feat: add new feature"

# 3. Push and create PR to develop
git push -u origin feature/new-feature
# Create PR on GitHub

# 4. PR auto-labeled: type: feature
# 5. After merge, feature is tracked
```

**Auto-Label Applied:**
- `type: feature` - Automatically added
- Shows in release notes

### Feature Branches
```
feature/dark-mode
feature/user-authentication
feature/payment-integration
```

---

## 🔧 Branch Types & Labeling

### Automatic Labels

| Branch Type | Label Applied | Merge To |
|------------|---------------|----------|
| `feature/*` | `type: feature` | develop |
| `bugfix/*` | `type: bugfix` | develop |
| `fix/*` | `type: fix` | develop |
| `hotfix/*` | `type: hotfix` | main |
| `docs/*` | `type: docs` | develop |
| `chore/*` | `type: chore` | develop |

---

## 📦 Release Process

### Manual Release (Recommended)

```bash
# 1. Create release branch
git checkout develop
git pull origin develop
git checkout -b release/1.0.0

# 2. Update version in package.json
# Change: "version": "0.1.0" → "version": "1.0.0"

# 3. Update CHANGELOG.md
# Add new section with changes

# 4. Commit changes
git add package.json CHANGELOG.md
git commit -m "chore: prepare release v1.0.0"

# 5. Create PR to main
git push -u origin release/1.0.0
# Create PR on GitHub

# 6. After merge to main, trigger release
# Release workflow automatically:
#   - Creates GitHub Release
#   - Creates git tag (v1.0.0)
#   - Generates release notes
```

### Automatic Release (via Workflow)

**Trigger:** Push to `main` branch

```bash
git checkout main
git pull origin main
# Release workflow triggers automatically
```

**What happens:**
- ✓ Analyzes commits since last release
- ✓ Calculates version bump (major/minor/patch)
- ✓ Updates package.json
- ✓ Updates CHANGELOG.md
- ✓ Creates git tag
- ✓ Creates GitHub Release
- ✓ Pushes changes

---

## 🏷️ Semantic Versioning

### Version Format: X.Y.Z

```
1.0.0
└─┬─┘ ├─ Major version (breaking changes)
  │   ├─ Minor version (new features)
  │   └─ Patch version (bug fixes)
```

### Version Bump Rules

| Change | Bump | Example |
|--------|------|---------|
| Breaking change | Major | 1.0.0 → 2.0.0 |
| New feature | Minor | 1.0.0 → 1.1.0 |
| Bug fix | Patch | 1.0.0 → 1.0.1 |

### Detecting Version Bumps

The workflow reads commit messages:

```bash
# Commits detected as:
# "feat:" → Minor bump (+0.1.0)
git commit -m "feat: add dark mode"

# "fix:" or "bugfix:" → Patch bump (+0.0.1)
git commit -m "fix: resolve form validation"

# "BREAKING CHANGE:" → Major bump (+1.0.0)
git commit -m "refactor!: change API structure"
```

---

## 📝 Commit Message Convention

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Common Types for Releases

```bash
# Features (Minor bump)
git commit -m "feat(auth): add OAuth login"

# Bug fixes (Patch bump)
git commit -m "fix(checkout): resolve payment error"

# Breaking changes (Major bump)
git commit -m "refactor!: change API response format"

# Other types (no version bump)
git commit -m "docs: update README"
git commit -m "chore: update dependencies"
git commit -m "ci: configure GitHub Actions"
```

---

## 🎯 Workflow Examples

### Example 1: Feature to Release

```
1. Create feature
   git checkout -b feature/dark-mode

2. Merge to develop
   PR: feature/dark-mode → develop
   Label: type: feature

3. Create release
   git checkout -b release/1.1.0
   Update version: 1.0.0 → 1.1.0

4. Merge to main
   PR: release/1.1.0 → main
   Triggers: release.yml

5. Result:
   ✓ GitHub Release created
   ✓ Tag: v1.1.0
   ✓ Changelog updated
   ✓ Published
```

### Example 2: Emergency Bugfix

```
1. Create hotfix
   git checkout -b hotfix/security-patch

2. Merge to main
   PR: hotfix/security-patch → main
   Label: type: hotfix

3. Triggers: release.yml
   - Calculates version: 1.1.0 → 1.1.1
   - Creates tag: v1.1.1
   - Publishes release

4. Merge back to develop
   Keeps branches in sync

5. Result:
   ✓ Emergency fix deployed
   ✓ Version bumped to 1.1.1
   ✓ Tagged immediately
```

### Example 3: Multiple Features

```
1. Multiple features merged to develop
   ✓ feature/dark-mode → develop
   ✓ feature/auth → develop
   ✓ feature/payments → develop

2. Create release
   git checkout -b release/1.2.0
   Combine all features

3. Merge to main
   Triggers release.yml

4. Result:
   ✓ Release v1.2.0 includes all features
   ✓ Release notes include all commits
```

---

## 📊 GitHub Release Components

Each GitHub Release includes:

```markdown
# Release v1.0.0

## Changelog
- feat: add dark mode
- feat: add authentication
- fix: resolve form validation
- fix: improve performance

## What's New
- See commits for detailed changes

## Installation
git clone ...
pnpm install
pnpm dev

## Documentation
- [Getting Started](./docs/GETTING_STARTED.md)
- [Git Flow](./docs/GITFLOW.md)
- [Architecture](./docs/ARCHITECTURE.md)
```

---

## 🔖 Git Tags

### Tag Format
```
v1.0.0
└────── Semantic version tag
```

### Creating Tags Manually
```bash
# Create annotated tag (recommended)
git tag -a v1.0.0 -m "Release version 1.0.0"

# Push tags
git push origin --tags

# List tags
git tag -l
```

### Automated Tag Creation
Tags are automatically created by `release.yml` when:
- Release branch merges to `main`
- Or workflow is manually triggered

---

## 📈 Release Tracking

### View All Releases

Navigate to: **GitHub → Releases tab**

Shows:
- ✓ All published releases
- ✓ Tag names (v1.0.0, v1.1.0, etc.)
- ✓ Release dates
- ✓ Changelog
- ✓ Download options

### View Git Tags

```bash
# List all tags
git tag -l

# Show tag details
git show v1.0.0

# Filter tags
git tag -l "v1.*"
```

---

## 🔄 Complete Release Checklist

### Before Release
- [ ] All features merged to `develop`
- [ ] All tests passing
- [ ] Code review approved
- [ ] No open critical bugs
- [ ] Documentation updated

### During Release
- [ ] Create `release/X.Y.Z` branch
- [ ] Update `package.json` version
- [ ] Update `CHANGELOG.md`
- [ ] Commit with: `chore: release vX.Y.Z`
- [ ] Create PR to `main`
- [ ] Merge to `main`

### After Release
- [ ] GitHub Release automatically created
- [ ] Git tag automatically created
- [ ] Tag is v-prefixed (v1.0.0)
- [ ] Release notes are generated
- [ ] Verify on GitHub Releases tab
- [ ] Merge back to `develop` (if from release branch)

---

## 🚀 Triggering Release Workflow

### Option 1: Automatic (Recommended)
- Merge to `main` branch
- `release.yml` triggers automatically
- Detects changes and bumps version

### Option 2: Manual
- Go to GitHub Actions
- Select `Release - Create Version & GitHub Release`
- Click "Run workflow"
- Choose branch: `main`
- Choose version type: major/minor/patch
- Click "Run"

---

## ✅ Verification

To verify release workflow is working:

1. **Check GitHub Actions**
   - Go to Actions tab
   - Look for `release.yml` runs

2. **Check Releases**
   - Go to Releases tab
   - Should show published releases with tags

3. **Check Tags**
   ```bash
   git tag -l
   # Should list: v1.0.0, v1.1.0, etc.
   ```

4. **Check CHANGELOG**
   - CHANGELOG.md should be updated
   - New entries at top

---

## 🎉 You're Ready to Release!

Your release workflow is fully automated:
- ✅ Bug reports tracked
- ✅ Features labeled
- ✅ Version automatically bumped
- ✅ GitHub Releases created
- ✅ Tags generated
- ✅ Changelog updated

**Next release:** Merge to `main` and let automation handle the rest! 🚀
