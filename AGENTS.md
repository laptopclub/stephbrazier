# Steph Brazier agent guide

This file captures site-specific rules for AI agents working in this client repository.

## Project summary

- Client/site: Steph Brazier
- Foundation package version: 0.1.33
- Production URL: https://stephbrazier.co.uk
- Sanity project/dataset: TODO_SANITY_PROJECT_ID / production

## Content voice

- Write site copy from the agreed client perspective.
- Capture whether copy should be first-person, third-person or brand voice during provisioning.
- Keep client-specific terminology and banned phrases here.

## Boundaries

- Keep client-specific content, styling and composition in this repository.
- Put reusable schemas, blocks, components and framework fixes in `laptopclub/foundation`.
- Do not edit code inside installed Foundation packages.
- Add site-specific schemas in `sanity/schema-types.ts`.
- Add site-specific renderers in `lib/blocks.ts` or client components.
- Upgrade all `@laptopclub/foundation-*` packages together.
- Do not mutate production Sanity content unless explicitly requested.
- Never commit `.env` files, package tokens, Sanity tokens or webhook secrets.
- Foundation package credentials are distributed from the macOS Keychain using `pnpm sync:package-token` in `laptopclub/foundation`. Do not create or store site-local package tokens.
- Register this repository in `laptopclub/foundation/docs/consumer-sites.json` before package credential distribution and fleet validation.
- Do not hand-edit generated Sanity type files.
- Do not add dependencies without explicit approval.

## Required checks

```bash
pnpm check
pnpm build
```

For schema or GROQ query changes:

```bash
pnpm sanity:schema
pnpm sanity:typegen
```

## Definition of done

- Client-specific changes stay in the client repository.
- Reusable framework changes are made upstream in Foundation.
- Package installation, checks and production build pass.
- Relevant routes are smoke-tested after deploy.
- No secrets or temporary generated files are committed.
