# Workers Toolkit

Workers Toolkit is a React 19 + Vite application for injured workers navigating WorkSafeBC.

## Stack
- React 19 + TypeScript + Vite
- Tailwind + custom design tokens
- shadcn/radix UI components
- GSAP animation
- Supabase (story submissions + feedback)

## Development
```bash
npm install
npm run dev
npm run build
npm run lint
```

## Data-driven content
Content is centralized in `src/data/*` modules (stories, precedents, email templates, onboarding, resources).

## Backend setup (Supabase)
1. Copy `.env.example` to `.env` and set:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
2. Apply SQL migration in `supabase/migrations/20260209_init.sql`.
3. Deploy function in `supabase/functions/notify-submission` and set secrets:
   - `RESEND_API_KEY`
   - `NOTIFY_EMAIL`

## Downloads
Resource assets are referenced by `src/data/resources.ts` and currently use repository root PDF files (no duplicated binary copies in `public/resources`).
