<script>
  import { hidden } from '../header.js';
  import { opened } from '../sidebar.js';

  let state = true;
  let pic = 'rsc/Logo/menu.svg';
  $: if ($hidden) $opened = false;

  function showSidebar() {
    $opened = !$opened;
    state = !state;

    if (state) {
      pic = 'rsc/Logo/menu.svg';
    } else {
      pic = 'rsc/Logo/close.svg';
    }
  }
</script>

<div class="navbar">
  <img
    class="navbar--logo"
    class:opened={$opened}
    src={pic}
    alt="( ͡° ͜ʖ ͡°)"
    on:click={showSidebar}
  />
</div>

<style>
  @media (min-width: 1025px) {
    .navbar--logo,
    .navbar--close {
      display: none;
    }

    div.navbar {
      background-color: var(--text-color);
      width: 100%;
      height: 55px;
      position: fixed;
      text-align: left;
      display: block;
    }
  }

  @media (max-width: 1024px) {
    .navbar--logo {
      width: 45px;
      height: 100%;
      margin-left: 5px;
      cursor: pointer;
    }

    .navbar--logo.opened {
      width: 45px;
      height: 100%;
      margin-left: 5px;
      cursor: pointer;
    }

    div.navbar {
      background-color: var(--text-color);
      width: 100%;
      height: 55px;
      position: fixed;
      text-align: right;
      display: block;
    }
  }
</style>
