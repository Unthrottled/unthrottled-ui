<script>
	import Header from './Header.svelte';
	import '../app.css';
	import Background from "$lib/Background.svelte";
</script>

<div class="app">
	<Header />

	<Background/>


	<main>
		<slot />
	</main>

	<footer>
	</footer>
</div>

<style>
	body {
		height: 100%;
		margin: 0;
	}

	.iAmRoot {
		height: 100%;
	}

	#primary-container {
		height: 100%;
	}

	.main {
		height: 100%;
		padding: 0.75rem;
	}

	#backgroundImage {
		position: fixed;
		z-index: -1;
	}

	#app {
		margin: auto;
		text-align: center;
		height: 100%;
		max-width: 980px;
	}

	.component-fade-enter-active,
	.component-fade-leave-active {
		transition: opacity 0.3s ease;
	}
	.component-fade-enter, .component-fade-leave-to
		/* .component-fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>
