<script>
  import Header from './Header.svelte';
  import '../app.css';
  import Background from "$lib/Background.svelte";
</script>

<div class="app">
  <Header/>
  <Background/>
  <main>
    <slot/>
  </main>
  <footer>
  </footer>
</div>

<style>
  main {
    max-width: 550px;
    height: 100%;
    margin: auto;
    overflow: scroll;
  }
</style>
