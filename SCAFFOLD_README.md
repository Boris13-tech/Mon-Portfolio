# Boris Ohandja — Portfolio scaffold

Real Next.js 15 / TypeScript / Tailwind v4 skeleton. Not executed in this environment — you run it locally.

## Prerequisites
- Node 20 LTS (or 22)
- pnpm 9 (`corepack enable` if needed)
- A Vercel account (for deployment)
- A Resend API key (for the contact form)

## First run
```bash
cd design_handoff_boris_portfolio/scaffold
cp .env.example .env.local          # then fill in the values
pnpm install                        # installs everything at "latest"
# OR, if you prefer explicit "latest resolution":
# pnpm run install:latest
pnpm dev                            # http://localhost:3000
```

## Quality gates
```bash
pnpm typecheck   # tsc --noEmit
pnpm lint        # next lint
pnpm test        # vitest (unit)
pnpm test:e2e    # playwright — needs pnpm test:e2e:install first
pnpm build       # next build
```

## Recommended versions (verify at install time)
Every dependency in `package.json` is set to `"latest"`. When you run `pnpm install`, pnpm resolves the current latest stable version and writes exact versions into `pnpm-lock.yaml`. **Commit the lockfile** and then update `docs/technical-decisions.md` with the resolved versions of: `next`, `react`, `typescript`, `tailwindcss`, `framer-motion`, `next-mdx-remote`, `vitest`, `@playwright/test`.

## Deployment (Vercel)
1. Push to GitHub (`Boris13-tech/Mon-Portfolio` or new repo).
2. `vercel link` or import via the Vercel dashboard.
3. Environment variables (from `.env.example`):
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (optional)
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
4. Custom domain (recommended: `borisohandja.com`).

## Environment variables
See `.env.example`. Never commit real values.

## Points to validate locally
- `pnpm install` succeeds with a clean lockfile.
- `pnpm typecheck` passes.
- `pnpm lint` passes.
- `pnpm test` passes (data-integrity tests).
- `pnpm dev` renders every route in `tests/e2e/nav.spec.ts`.
- Contact form: fill `.env.local` with valid `RESEND_API_KEY` + `CONTACT_TO_EMAIL` before smoke-testing.
- Dark/light toggle switches theme and persists across reloads.
- Lighthouse: run in Chrome DevTools; target ≥ 95 on Perf/A11y/Best Practices/SEO. Adjust images / font loading if needed.
- Certifications page must show every cert as `needs-verification` until Boris confirms and adds `credentialUrl`.

## What is intentionally minimal
- No MDX pipeline wired at runtime yet — folders and `lib/mdx.ts` are ready, project sections are inline in `data/projects.ts` for v1.
- `talks`, `events`, `contributions` arrays are empty by design.
- No i18n runtime — see `docs/i18n.md` for the FR → FR+EN migration path.
- No CMS, no RSS, no search — Phase 2.
