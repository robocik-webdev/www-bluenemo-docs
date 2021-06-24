<script>
  import Sidebar from './Section/Sidebar.svelte';
  import Content from './Section/Content.svelte';
  import Navbar from './Section/Navbar.svelte';
</script>

<Navbar />
<div class="main">
  <Sidebar />
  <Content />
</div>


<p style="color:black; position:sticky; width:100%; margin:auto;">Lotem ipsum</p>
<style>
  .main {
    width: 1000px;
    height: 100%;
    margin: auto;
  }

  @media (max-width: 1000px) {
    .main {
      width: 100%;
    }
  }
</style>
