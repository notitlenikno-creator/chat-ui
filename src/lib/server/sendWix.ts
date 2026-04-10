import { config } from "$lib/server/config";
import { logger } from "$lib/server/logger";

const WIX_DATA_API = "https://www.wixapis.com/wix-data/v2/items";

export async function sendWix(collectionId: string, dataItem: Record<string, unknown>) {
	const apiKey = config.get("WIX_API_KEY");
	const siteId = config.get("WIX_SITE_ID");

	if (!apiKey || !siteId) {
		logger.warn("WIX_API_KEY or WIX_SITE_ID is not set, skipping Wix sync.");
		return;
	}

	const res = await fetch(WIX_DATA_API, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			// Wix REST API keys are passed without a scheme prefix per Wix API docs
			Authorization: apiKey,
			"wix-site-id": siteId,
		},
		body: JSON.stringify({
			dataCollectionId: collectionId,
			dataItem: { data: dataItem },
		}),
	});

	if (!res.ok) {
		const text = await res.text();
		const message = `Wix API sync failed: ${res.status} ${res.statusText} — ${text}`;
		logger.error(message);
		throw new Error(message);
	}
}
