<script>
  import { hidden } from '../header.js';
  import { opened } from '../sidebar.js';

  let pic = 'rsc/Logo/menu.svg';
  $: if ($hidden) $opened = false;

  function showSidebar() {
    $opened = !$opened;

    if (!$opened) {
      pic = 'rsc/Logo/menu.svg';
    } else {
      pic = 'rsc/Logo/close.svg';
    }
  }
</script>

<div class="navbar">
  <div class="navbar__logo">
    <a class="navbar__logo--link" href="http://robocik.pwr.edu.pl/">
      <img
        class="navbar__logo--link--img1"
        src="rsc/Logo/logo.svg"
        alt="logo"
      />
      <h1 class="navbar__logo--link--txt">PWr Diving Crew</h1>
    </a>
  </div>
  <div class="navbar__menu">
    <img
      class="navbar__menu--link--img2"
      class:opened={$opened}
      src={pic}
      alt="( ͡° ͜ʖ ͡°)"
      on:click={showSidebar}
    />
  </div>
</div>

<style>
  div.navbar {
    background-color: var(--text-color);
    width: 100%;
    height: 55px;
    position: fixed;
    display: block;
  }

  .navbar__logo {
    text-align: left;
    height: 100%;
    width: 100%;
  }

  .navbar__logo--link {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    height: 100%;
    text-decoration: none;
    width: 250px;
  }

  .navbar__logo--link--img1 {
    display: inline-block;
    height: 100%;
    width: 35px;
    margin-left: 12px;
  }

  .navbar__logo--link--txt {
    margin-left: 12px;
    font-size: 1.2em;
    font-weight: 400;
    color: #fff;
  }

  .navbar__menu {
    display: none;
  }

  @media (max-width: 800px) {
    div.navbar {
      text-align: right;
      display: flex;
    }
    .navbar__menu {
      display: flex;
      text-align: right;
      height: 100%;
    }
    .navbar__menu--link--img2 {
      display: inline-block;
      height: 100%;
      width: 35px;
      margin-left: 25px;
    }
  }
</style>
