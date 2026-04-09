import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params, fetch }) => {
  const res = await fetch(`http://localhost:3001/dashboard/${params.userId}`);
  const data = await res.json();
  return json(data);
};
