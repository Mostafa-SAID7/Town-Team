# Contributing to Town Team Landing Page

Thank you for your interest in contributing to Town Team! We appreciate your effort and want to make the process as smooth as possible.

## Code of Conduct

Please be respectful and constructive in all interactions with other contributors and users.

## How to Contribute

### Reporting Bugs

Before reporting a bug, please check the [existing issues](https://github.com/Mostafa-SAID7/Town-Team/issues) to avoid duplicates.

When reporting a bug, include:
- Clear description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Your environment (OS, Node version, etc.)

### Suggesting Enhancements

1. Check the [existing issues](https://github.com/Mostafa-SAID7/Town-Team/issues) and [discussions](https://github.com/Mostafa-SAID7/Town-Team/discussions)
2. Provide a clear description of the enhancement
3. Explain the use case and benefits
4. Include examples if possible

### Pull Requests

1. Fork the repository
2. Create a new branch for your feature: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Commit with clear messages: `git commit -m 'Add feature: description'`
5. Push to your branch: `git push origin feature/your-feature-name`
6. Open a Pull Request with a clear description of changes

#### Pull Request Guidelines

- Keep PRs focused on a single feature or fix
- Write clear commit messages
- Update documentation as needed
- Ensure your code follows the project's style
- Test your changes locally before submitting
- Link related issues in the PR description

## Development Setup

1. Clone the repository:
```bash
git clone https://github.com/Mostafa-SAID7/Town-Team.git
cd Town-Team
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a new branch:
```bash
git checkout -b feature/your-feature
```

4. Start the development server:
```bash
pnpm dev
```

5. Make your changes and test them

6. Run linting:
```bash
pnpm lint
```

## Coding Standards

- Use TypeScript for type safety
- Follow the existing code style
- Write meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Use Tailwind CSS for styling

## Commit Messages

Follow conventional commit format:
```
type(scope): description

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Example:
```
feat(button): add loading state to button component

Added a loading prop that displays a spinner when enabled.

Closes #123
```

## Questions?

Feel free to open a [discussion](https://github.com/Mostafa-SAID7/Town-Team/discussions) for questions or general feedback.

---

Thank you for contributing to Town Team! 🎉
