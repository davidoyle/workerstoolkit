create extension if not exists pgcrypto;

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

alter table public.story_submissions enable row level security;
alter table public.feedback_submissions enable row level security;

create policy if not exists "allow anon insert stories" on public.story_submissions for insert to anon with check (true);
create policy if not exists "allow anon insert feedback" on public.feedback_submissions for insert to anon with check (true);
