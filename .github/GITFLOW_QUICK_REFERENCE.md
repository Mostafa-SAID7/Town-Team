# 🚀 Git Flow Quick Reference

## Branch Types at a Glance

| Branch Type | Pattern | From | To | Examples |
|-------------|---------|------|-----|----------|
| **Feature** | `feature/*` | develop | develop | `feature/dark-mode`, `feature/auth` |
| **Bugfix** | `bugfix/*` | develop | develop | `bugfix/form-validation` |
| **Release** | `release/X.Y.Z` | develop | main + develop | `release/1.0.0` |
| **Hotfix** | `hotfix/*` | main | main + develop | `hotfix/security-patch` |
| **Docs** | `docs/*` | develop | develop | `docs/api-guide` |
| **Chore** | `chore/*` | develop | develop | `chore/update-deps` |
| **Infra** | `infra/*` | develop | develop | `infra/github-actions` |

---

## Common Workflows

### 🎯 Start a New Feature

```bash
git checkout develop && git pull
git checkout -b feature/my-feature
# Make changes
git push -u origin feature/my-feature
# Create PR on GitHub → merge when approved
```

### 🐛 Fix a Bug

```bash
git checkout develop && git pull
git checkout -b bugfix/fix-issue
# Fix the bug
git push -u origin bugfix/fix-issue
# Create PR on GitHub → merge when approved
```

### 📦 Release a Version

```bash
git checkout develop && git pull
git checkout -b release/1.0.0
# Update version in package.json
# Update CHANGELOG.md
git push -u origin release/1.0.0
# Create PR to main → merge
git tag -a v1.0.0 -m "Release 1.0.0"
git push origin main --tags
# Merge back to develop
```

### 🔥 Emergency Hotfix

```bash
git checkout main && git pull
git checkout -b hotfix/critical-bug
# Fix the issue
git push -u origin hotfix/critical-bug
# Create PR to main → merge
git tag -a v1.0.1 -m "Hotfix 1.0.1"
git push origin main --tags
# Merge back to develop
```

### 📝 Update Docs

```bash
git checkout develop && git pull
git checkout -b docs/api-guide
# Update documentation
git push -u origin docs/api-guide
# Create PR on GitHub → merge when approved
```

### 🔧 Update Dependencies

```bash
git checkout develop && git pull
git checkout -b chore/update-deps
pnpm update
git push -u origin chore/update-deps
# Create PR on GitHub → merge when approved
```

---

## Commit Message Shortcuts

| Type | Prefix | Example |
|------|--------|---------|
| Feature | `feat:` | `git commit -m "feat: add dark mode"` |
| Fix | `fix:` | `git commit -m "fix: resolve form bug"` |
| Docs | `docs:` | `git commit -m "docs: update README"` |
| Style | `style:` | `git commit -m "style: format code"` |
| Refactor | `refactor:` | `git commit -m "refactor: simplify logic"` |
| Chore | `chore:` | `git commit -m "chore: update deps"` |
| CI/CD | `ci:` | `git commit -m "ci: add GitHub Actions"` |

---

## Check Branch Status

```bash
# List all branches
git branch -a

# Show current branch
git branch --show-current

# Show branch info
git branch -vv
```

---

## Delete Branches

```bash
# Delete local branch
git branch -d feature/old-feature

# Force delete local branch
git branch -D feature/old-feature

# Delete remote branch
git push origin --delete feature/old-feature
```

---

## Sync with Remote

```bash
# Fetch latest without merging
git fetch origin

# Pull latest changes
git pull origin develop

# View differences
git diff develop origin/develop
```

---

## Need Full Details?

📖 Read: [`.github/GITFLOW.md`](.github/GITFLOW.md)

---

## Key Rules

✅ **DO:**
- Create feature branches from `develop`
- Create PR to correct branch (feature → develop, release → main)
- Write descriptive commit messages
- Keep branches small and focused
- Delete branches after merge

❌ **DON'T:**
- Commit directly to `main` or `develop`
- Mix multiple features in one branch
- Forget to pull before pushing
- Leave stale branches
- Force push to shared branches

---

## Help!

Branch name rejected? Check these patterns:
- ✅ `feature/my-feature` → Merge to `develop`
- ✅ `bugfix/issue-fix` → Merge to `develop`
- ✅ `release/1.0.0` → Merge to `main`
- ✅ `hotfix/urgent-fix` → Merge to `main`
- ✅ `docs/readme` → Merge to `develop`
- ✅ `chore/deps` → Merge to `develop`

Not following a pattern? Use one from above! 🎯
