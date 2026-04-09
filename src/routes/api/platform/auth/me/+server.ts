import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request, fetch }) => {
  const auth = request.headers.get('authorization') || '';

  const res = await fetch('http://localhost:3001/auth/me', {
    headers: { authorization: auth }
  });

  const data = await res.json();

  return json(data);
};
