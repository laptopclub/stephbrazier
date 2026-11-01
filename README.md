# Steph Brazier

Holding site for [stephbrazier.co.uk](https://stephbrazier.co.uk), built with the Laptop Club Foundation framework.

## Setup

A GitHub token with `read:packages` access is required for the private `@laptopclub/*` packages.

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Validation

```bash
pnpm check
pnpm build
```

## Provisioning

Track the deployment, CMS and domain setup in [`docs/provisioning-checklist.md`](docs/provisioning-checklist.md). Never commit `.env` files, package tokens, Sanity tokens or webhook secrets.
