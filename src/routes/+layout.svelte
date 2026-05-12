<script>
	let { children } = $props();
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-white px-4 py-0">
  <div class="container-fluid justify-content-start">

    <a class="navbar-brand me-5" href="/">
      <img src="/images/Logo.png" width="125" height="94" alt="Logo" />
    </a>

    <div class="navbar-nav d-flex flex-row align-items-center gap-5">
      <a class="nav-link fs-3" href="/modules">
        Module
      </a>

      <a class="nav-link fs-3" href="/tasks">
        Termine
      </a>
    </div>

  </div>
</nav>

{@render children()}
