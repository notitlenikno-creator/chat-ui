import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { sendWix } from "$lib/server/sendWix";

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();

	const collectionId = typeof body?.collectionId === "string" ? body.collectionId : undefined;
	const data =
		body?.data && typeof body.data === "object" && !Array.isArray(body.data)
			? (body.data as Record<string, unknown>)
			: undefined;

	if (!collectionId || !data) {
		return json({ ok: false, error: "collectionId and data are required" }, { status: 400 });
	}

	try {
		await sendWix(collectionId, data);
		return json({ ok: true });
	} catch (err) {
		return json({ ok: false, error: (err as Error).message }, { status: 500 });
	}
};
