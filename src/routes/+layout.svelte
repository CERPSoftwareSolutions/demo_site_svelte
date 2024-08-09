<script>
  import { page } from "$app/stores";

  /**
   * @param {string} input
   */
  function capitalizeFirstLetter(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  const childTitle = capitalizeFirstLetter(
    $page?.url?.pathname?.slice(1).split("/")[0]
  );
</script>

<svelte:head>
  <title>GGS {$page?.url?.pathname != "/" ? `| ${childTitle}` : ""}</title>
</svelte:head>

<header>
  <nav class="navbar-light" style="background-color: #e3f2fd;">
    <img
      src="https://gouthamguna.github.io/in/favicon.ico"
      alt="favicon"
      width="50px"
    />
    <a class="navbar-brand" href="/"><strong>Gowtham Sankar</strong></a>

    <a class="navbar-brand" href="/" style="font-size:20px;">
      &#8195; &#8195; &#8195; &#8195; &#8195; &#8195; &#8195; Home</a
    >
    <div class="dropdown">
      <a class="navbar-brand" href="/about" style="font-size:20px;">
        &#8195; ↓ About</a
      >
      <div class="dropdown-content">
        <a href="/about/first">→ SMS - Page</a>
        <a href="/about/second">→ CMS - Page</a>
      </div>
    </div>
    <a class="navbar-brand" href="/services" style="font-size:20px;">
      &#8195; Services</a
    >
  </nav>
</header>

<main>
  <slot></slot>
</main>

<style>
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #e3f2fd;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
</style>
