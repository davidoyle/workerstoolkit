import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';

serve(async (req) => {
  const { topic, year, email } = await req.json();
  const key = Deno.env.get('RESEND_API_KEY');
  const to = Deno.env.get('NOTIFY_EMAIL');

  if (!key || !to) {
    return new Response(JSON.stringify({ ok: false, error: 'Missing function secrets' }), { status: 500 });
  }

  const payload = {
    from: 'Workers Toolkit <notifications@resend.dev>',
    to: [to],
    subject: 'New Worker Story Submission',
    html: `<p>New submission received.</p><p><strong>Topic:</strong> ${topic}</p><p><strong>Year:</strong> ${year}</p><p><strong>Email:</strong> ${email ?? 'not provided'}</p>`,
  };

  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!resp.ok) {
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
});
