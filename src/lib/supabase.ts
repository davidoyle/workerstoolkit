const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const hasSupabase = Boolean(supabaseUrl && supabaseAnonKey);

const headers = {
  apikey: supabaseAnonKey ?? '',
  Authorization: `Bearer ${supabaseAnonKey ?? ''}`,
  'Content-Type': 'application/json',
};

export const insertRow = async (table: string, payload: Record<string, unknown>) => {
  if (!hasSupabase) return { error: { message: 'Supabase not configured' } };
  const resp = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
    method: 'POST',
    headers: { ...headers, Prefer: 'return=minimal' },
    body: JSON.stringify(payload),
  });
  return resp.ok ? { error: null } : { error: { message: await resp.text() } };
};

export const invokeFunction = async (name: string, body: Record<string, unknown>) => {
  if (!hasSupabase) return { error: { message: 'Supabase not configured' } };
  const resp = await fetch(`${supabaseUrl}/functions/v1/${name}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });
  return resp.ok ? { error: null } : { error: { message: await resp.text() } };
};
