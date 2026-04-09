import type { NiknoRequest, NiknoResponse } from './types';

export async function askNikno(payload: NiknoRequest): Promise<NiknoResponse> {
  const res = await fetch('/api/nikno', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    throw new Error('NIKNO request failed');
  }

  return res.json();
}
