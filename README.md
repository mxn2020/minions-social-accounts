# minions-social-accounts

**Account definitions, platforms, namespaces/purposes, and API keys**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-social-accounts/sdk minions-sdk

# Python
pip install minions-social-accounts

# CLI (global)
npm install -g @minions-social-accounts/cli
```

---

## CLI

```bash
# Show help
social-accounts --help
```

---

## Python SDK

```python
from minions_social_accounts import create_client

client = create_client()
```

---

## Project Structure

```
minions-social-accounts/
  packages/
    core/           # TypeScript core library (@minions-social-accounts/sdk on npm)
    python/         # Python SDK (minions-social-accounts on PyPI)
    cli/            # CLI tool (@minions-social-accounts/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [social-accounts.minions.help](https://social-accounts.minions.help)
- Blog: [social-accounts.minions.blog](https://social-accounts.minions.blog)
- App: [social-accounts.minions.wtf](https://social-accounts.minions.wtf)

---

## License

[MIT](LICENSE)
