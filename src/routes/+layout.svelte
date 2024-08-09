<script>
  import { page } from "$app/stores";
  
  // @ts-ignore
  function capitalizeFirstLetter(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  const childTitle = capitalizeFirstLetter($page?.url?.pathname?.slice(1).split("/")[0]);
</script>

<svelte:head>
  <title>GGS {$page?.url?.pathname != '/' ? `| ${childTitle}` : ''}</title>
</svelte:head>

<header>
  <nav>      
      <a href="/" class="nav-link">Home</a>
      <a href="/about" class="nav-link">About</a>
      <a href="/about/first" class="nav-link">First</a>
      <a href="/about/second" class="nav-link">Second</a>
  </nav>
</header>

<main>
  <slot></slot>
</main>

<style>
  header {
    background-color: #feee00;
    color: #fafafa;
    padding: 10px;
    text-align: center;
  }

  nav {
    display: flow-root;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  .nav-link {
    padding: .5rem 1rem;
  }
</style>
