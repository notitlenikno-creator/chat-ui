<script>
  let result = null;

  async function generate() {
    const res = await fetch('http://localhost:3002/hook/growth-plan', {
      method: 'POST'
    });

    result = await res.json();
  }
</script>

<h1 class="text-3xl font-bold mb-4">Get Your Creator Growth Plan</h1>
<button on:click={generate} class="bg-black text-white px-4 py-2">Generate Plan</button>

{#if result}
  <div class="mt-6">
    <h2 class="text-xl">Positioning</h2>
    <p>{result.plan.positioning}</p>

    <h2 class="mt-4 text-xl">7 Day Plan</h2>
    <ul>
      {#each result.plan.sevenDayPlan as step}
        <li>{step}</li>
      {/each}
    </ul>
  </div>
{/if}
