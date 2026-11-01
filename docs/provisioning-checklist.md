# Steph Brazier provisioning checklist

Generated: 2026-11-01T19:23:18.865Z

## Site

- Site name: Steph Brazier
- Slug: stephbrazier
- Repository: laptopclub/stephbrazier
- Production URL: https://stephbrazier.co.uk
- Foundation package version: 0.1.33
- Sanity project/dataset: TODO_SANITY_PROJECT_ID / production

## 1. Repository

- [x] Create repository `laptopclub/stephbrazier`.
- [x] Copy the Foundation consumer site template.
- [x] Commit `README.md`, `AGENTS.md`, `.gitignore`, `.vercelignore`, `.npmrc`, CI and Dependabot config.
- [x] Confirm the site is not workspace-linked to Foundation.

## 2. Package access

- [x] Add the site to `docs/consumer-sites.json` before credential distribution.
- [x] Configure GitHub Packages access for local development.
- [x] Add package-read token to GitHub Actions secrets.
- [x] Add package-read token to Vercel environment variables.
- [x] Run `pnpm install --frozen-lockfile` from a clean checkout.

## 3. Sanity

- [ ] Create or select Sanity project and dataset.
- [ ] Configure public Sanity env vars.
- [ ] Add CORS origins for local, preview and production.
- [ ] Create viewer token for Draft Mode and visual editing.
- [ ] Decide whether hosted Studio is required.

## 4. Vercel

- [x] Create Vercel project.
- [ ] Set Node.js 24.x.
- [ ] Add public env vars and secrets.
- [x] Configure install command if private package auth requires it.
- [x] Confirm preview and production builds pass.

## 5. Revalidation

- [ ] Generate `SANITY_REVALIDATE_SECRET`.
- [ ] Store revalidation secret in Vercel and local ignored env files.
- [ ] Create Sanity webhook targeting `/api/revalidate`.
- [ ] Verify signed requests return `200` and unsigned requests return `401`.

## 6. Content, voice and branding

- [x] Capture content voice in `AGENTS.md`.
- [ ] Configure site settings, navigation and footer links.
- [x] Define semantic brand, surface and ink tokens.
- [x] Keep client-specific styling and composition in the client repository.

## 7. Domains

- [x] Add production and preview domains in Vercel.
- [ ] Configure DNS.
- [ ] Verify SSL and redirects.

## 8. Validation

- [x] Run `pnpm validate:site ../stephbrazier` from Foundation.
- [x] Run `pnpm validate:site ../stephbrazier --run-checks` before launch.
- [x] Smoke-test production routes.
- [x] Add the site to `docs/consumer-sites.json`.
- [ ] Run `pnpm validate:fleet`.
- [ ] Run `pnpm check:drift`.
