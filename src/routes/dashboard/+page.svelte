<script>
  let user = null;
  let data = null;

  async function load() {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    const meRes = await fetch('/api/platform/auth/me', {
      headers: { authorization: `Bearer ${token}` }
    });

    const me = await meRes.json();
    user = me.user;

    const dashRes = await fetch(`/api/platform/dashboard/${userId}`);
    data = await dashRes.json();
  }

  load();
</script>

<h1>Dashboard</h1>

{#if user}
  <p>Welcome {user.email}</p>
  <p>Plan: {user.planId}</p>
{/if}

{#if data}
  <h2>Insights</h2>
  <ul>
    {#each data.insights as i}
      <li>{i}</li>
    {/each}
  </ul>
{/if}
