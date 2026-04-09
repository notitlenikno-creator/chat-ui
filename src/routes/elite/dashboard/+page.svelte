<script>
  import { onMount } from 'svelte';

  let data;

  onMount(async () => {
    const userId = localStorage.getItem('userId');

    const res = await fetch(`http://localhost:3002/creator/${userId}`);
    data = await res.json();
  });
</script>

<h1 class="text-2xl font-bold mb-4">Elite Dashboard</h1>

{#if data}
  <div class="grid grid-cols-3 gap-4">
    <div class="p-4 bg-white rounded shadow">
      <h2>Plan</h2>
      <p>{data.user?.planId}</p>
    </div>

    <div class="p-4 bg-white rounded shadow">
      <h2>Sessions</h2>
      <p>{data.stats.sessionsTracked}</p>
    </div>

    <div class="p-4 bg-white rounded shadow">
      <h2>Status</h2>
      <p>{data.stats.profileReady ? 'Ready' : 'Incomplete'}</p>
    </div>
  </div>

  <h2 class="mt-6 text-xl">Insights</h2>
  <ul>
    {#each data.insights as i}
      <li>{i}</li>
    {/each}
  </ul>
{/if}
