# Workerstoolkit → WEB Content + Backend Migration Plan

## Goal
Keep the current **Vite + React 19 + Tailwind + shadcn/ui + GSAP UI** and migrate the project to a data-backed application by:

1. Moving static page content into centralized data modules
2. Adding Supabase-backed story + feedback storage
3. Using Resend via Supabase Edge Functions for notification emails
4. Keeping downloadable resources/checklists as managed assets

---

## Constraints

- This repo is currently a Vite SPA (no built-in server runtime)
- Backend logic should live in Supabase (DB + Edge Functions)
- Keep design components/layout unchanged where possible
- Route structure should remain stable to avoid UX churn

---

## Recommended Architecture (Option A)

### Frontend
- Vite + React app (existing)
- `src/data/*` modules for all page content, templates, WCAT cases, stories
- `@supabase/supabase-js` for authenticated client-side inserts/reads (RLS-protected)

### Backend (Supabase)
- Postgres tables:
  - `story_submissions`
  - `feedback_submissions`
  - `resource_download_events` (optional analytics)
- Edge functions:
  - `notify-story-submission` (send Resend email)
  - `notify-feedback` (optional)
- Storage buckets:
  - `resources` (PDF/checklist downloads)

### Email
- Resend key stored in Edge Function secrets
- Frontend never gets Resend API key

---

## Phase Plan

## Phase 1 — Content Migration (No infra dependency)

### 1. Create normalized content model
Add these files:
- `src/data/navigation.ts`
- `src/data/home.ts`
- `src/data/stories.ts`
- `src/data/tools.ts`
- `src/data/precedents.ts`
- `src/data/emailTemplates.ts`
- `src/data/glossary.ts`

Each page should render from data arrays/objects instead of inline hardcoded JSX strings.

### 2. WCAT/precedent source of truth
- Keep precedent data in a dedicated typed module (or JSON)
- Add tags, section refs, year, and citation fields
- Implement deterministic filter/search indexes

### 3. Resource manifest
- Add `src/data/resources.ts`
- Each downloadable item should define:
  - `id`, `title`, `description`, `filePath`, `mimeType`, `category`

Pages should map over this manifest and render consistent download buttons.

**Deliverable:** feature parity with current UI, but data-driven.

---

## Phase 2 — Supabase + Real Submission Flows

### 1. Install + configure
- Add dependencies:
  - `@supabase/supabase-js`
- Add env vars:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`

Create `src/lib/supabase.ts` singleton client.

### 2. Database schema

```sql
create table if not exists public.story_submissions (
  id uuid primary key default gen_random_uuid(),
  topic text not null,
  year text not null,
  what_happened text not null,
  outcome text,
  lessons text,
  confirmed boolean not null default false,
  newsletter boolean not null default false,
  email text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists public.feedback_submissions (
  id uuid primary key default gen_random_uuid(),
  page_path text,
  message text not null,
  email text,
  category text,
  created_at timestamptz not null default now()
);
```

### 3. RLS policies
- Enable RLS on both tables
- Allow anonymous `insert`
- Deny public `select/update/delete` by default

### 4. Submit page wiring
`src/pages/SubmitPage.tsx`:
- Replace fake timeout with Supabase insert
- Add proper loading + success + error states
- Add client-side validation and field-level messages

### 5. Email notifications
- Edge function receives minimal payload from frontend
- Writes audit log and sends Resend notification
- Function secured via Supabase JWT / service role logic

**Deliverable:** story submissions persist + team receives notification email.

---

## Phase 3 — Feedback + Downloads + Feature Ports

### 1. Feedback system
- Add floating feedback CTA button in layout
- Add modal form (`message`, optional email, category)
- Store in `feedback_submissions`

### 2. Download behavior
- Route all download CTAs to manifest-backed assets
- Optional: log download events to `resource_download_events`

### 3. Feature ports
Port in this order:
1. SituationSelector onboarding
2. First 30 Minutes guide
3. Progress tracking (`localStorage` abstraction + versioning)
4. Optional tone-context logic

**Deliverable:** parity with WEB’s utility features while preserving current UI language.

---

## Implementation Checklist

- [ ] Build `src/data/*` content modules
- [ ] Refactor pages to data-driven rendering
- [ ] Add Supabase client + env setup
- [ ] Add SQL migrations and RLS policies
- [ ] Replace mock submit with real DB insert
- [ ] Add Edge Function for Resend notifications
- [ ] Add feedback modal + storage
- [ ] Wire all download buttons to real assets
- [ ] Add smoke tests for critical user paths

---

## Risks & Mitigations

1. **External source repo unavailable / access limits**
   - Mitigation: import from exported JSON snapshots; maintain deterministic migration scripts.

2. **Schema drift during iteration**
   - Mitigation: use SQL migration files and lock typed interfaces.

3. **Spam submissions**
   - Mitigation: add honeypot + rate limiting in Edge Functions + optional CAPTCHA.

4. **RLS misconfiguration**
   - Mitigation: test policies in staging with anon role + explicit deny-by-default.

---

## Suggested Next Execution Step

Start with **Phase 1** and convert one full page vertical (`Tools`, `Stories`, `Precedents`) into `src/data/*` so the migration pattern is proven before wiring Supabase.
