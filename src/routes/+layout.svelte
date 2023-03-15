<script>
	import Navbar from '$lib/Navbar.svelte';
</script>

<main class="w-full h-[100%]">
	<Navbar />
	<slot />
</main>

<style uno:preflights uno:safelist global>
	:root {
		@apply bg-background;
	}
</style>
