<script>
  async function checkout(plan) {
    const res = await fetch('/api/platform/payments/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ planId: plan })
    });

    const data = await res.json();

    if (data.checkoutUrl) {
      window.location.href = data.checkoutUrl;
    } else {
      alert('Payment not configured');
    }
  }
</script>

<h1 class="text-3xl font-bold mb-6">Pricing</h1>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="border p-4 rounded">
    <h2 class="text-xl">Free</h2>
    <p>$0</p>
  </div>

  <div class="border p-4 rounded">
    <h2 class="text-xl">Pro</h2>
    <p>$29</p>
    <button on:click={() => checkout('pro')}>Upgrade</button>
  </div>

  <div class="border p-4 rounded">
    <h2 class="text-xl">Elite</h2>
    <p>$99</p>
    <button on:click={() => checkout('elite')}>Upgrade</button>
  </div>
</div>
