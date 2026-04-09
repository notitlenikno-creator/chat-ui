<script>
  let email = '';
  let password = '';

  async function login() {
    const res = await fetch('/api/platform/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.user.id);
      window.location.href = '/dashboard';
    } else {
      alert(data.error);
    }
  }
</script>

<h1>Login</h1>
<input placeholder="Email" bind:value={email} />
<input type="password" placeholder="Password" bind:value={password} />
<button on:click={login}>Login</button>
