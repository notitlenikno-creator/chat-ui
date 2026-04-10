<script lang="ts">
	import Logo from "$lib/components/icons/Logo.svelte";
	import type { Model } from "$lib/types/Model";
	import { usePublicConfig } from "$lib/utils/PublicConfig.svelte";

	const publicConfig = usePublicConfig();

	interface Props {
		currentModel: Model;
		onmessage?: (content: string) => void;
	}

	let { currentModel, onmessage }: Props = $props();

	const starterPrompts = [
		"Summarize the latest AI trends in 5 concise bullets.",
		"Help me plan a 3-day TypeScript learning roadmap.",
		"Draft a concise, friendly email asking for project feedback.",
	];
</script>

<div class="my-auto grid w-full max-w-3xl items-center justify-center gap-6 text-center">
	<div
		class="mx-auto flex select-none items-center rounded-xl text-3xl font-semibold md:text-5xl"
	>
		<Logo classNames="mr-0.5 size-12 dark:invert md:size-20" />
		{publicConfig.PUBLIC_APP_NAME}
	</div>

	<div class="space-y-1">
		<p class="mx-auto max-w-2xl text-sm text-gray-600 dark:text-gray-300 md:text-base">
			Start a new chat with
			<span class="font-semibold text-gray-800 dark:text-gray-100">{currentModel.displayName}</span>.
		</p>
		<p class="mx-auto max-w-2xl text-xs text-gray-500 dark:text-gray-400 md:text-sm">
			Choose a starter prompt below or type your own message.
		</p>
	</div>

	<div class="grid gap-2 sm:grid-cols-3">
		{#each starterPrompts as prompt}
			<button
				type="button"
				class="rounded-xl border bg-white/70 p-3 text-left text-sm text-gray-700 transition hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus-visible:ring-white/40"
				onclick={() => onmessage?.(prompt)}
			>
				{prompt}
			</button>
		{/each}
	</div>
</div>
