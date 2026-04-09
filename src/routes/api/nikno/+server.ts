import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, fetch }) => {
  try {
    const body = await request.json();

    const res = await fetch('http://localhost:3000/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    return json({
      ok: true,
      mode: body.mode || 'casual_conversation',
      output: data.output,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    return json({ ok: false, error: (err as Error).message }, { status: 500 });
  }
};
