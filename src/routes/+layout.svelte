<script>
	import Navbar from '$lib/Navbar.svelte';
	import { page } from "$app/stores";
	import { handleSession } from "@lucia-auth/sveltekit/client";

	handleSession(page);
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
