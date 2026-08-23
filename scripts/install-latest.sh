#!/usr/bin/env bash
# Installs the latest stable versions of every dependency.
# Run this ONCE right after cloning if you prefer explicit "latest" pinning
# over the "latest" tag currently in package.json.
set -euo pipefail

pnpm add next react react-dom next-mdx-remote gray-matter reading-time \
  framer-motion lucide-react clsx tailwind-merge \
  react-hook-form @hookform/resolvers zod next-themes resend

pnpm add -D typescript @types/node @types/react @types/react-dom \
  tailwindcss @tailwindcss/postcss postcss autoprefixer \
  eslint eslint-config-next @typescript-eslint/parser @typescript-eslint/eslint-plugin \
  prettier prettier-plugin-tailwindcss \
  vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom jsdom \
  @playwright/test husky lint-staged

echo "Done. Now run: pnpm typecheck && pnpm lint && pnpm build"
