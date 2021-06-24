<script>
  import Sidebar from './Section/Sidebar.svelte';
  import Content from './Section/Content.svelte';
  import Navbar from './Section/Navbar.svelte';
</script>

<Navbar />
<br/>
<div class="main">
  <Sidebar />
  <Content />
</div>

<style>
  .main {
    width: 800px;
    margin: auto;
  }
</style>
