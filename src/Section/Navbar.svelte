<script>
  import { hidden } from '../header.js';
  import { opened } from '../sidebar.js';

  $: if ($hidden) $opened = false;

  function showSidebar() {
    $opened = !$opened;
  }
</script>

<div class="navbar">
  <img
    class="logo"
    class:opened={$opened}
    src="rsc/Logo/logo.svg"
    alt="( ͡° ͜ʖ ͡°)"
    on:click={showSidebar}
  />
</div>

<style>
  @media (min-width: 1025px) {
    .logo {
      width: 45px;
      height: 100%;
      margin-left: 5px;
    }

    div.navbar {
      background-color: var(--text-color);
      width: 100%;
      height: 55px;
      position: fixed;
      text-align: left;
    }
  }

  @media (max-width: 1024px) {
    .logo {
      width: 45px;
      height: 100%;
      margin-left: 5px;
      transition-duration: 500ms;
      transform: rotate(-0.25turn);
    }

    .logo.opened {
      transform: rotate(0);
    }

    div.navbar {
      background-color: var(--text-color);
      width: 100%;
      height: 55px;
      position: fixed;
      text-align: left;
    }
  }
</style>
