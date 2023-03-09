<script lang="ts">
	import '@unocss/reset/tailwind.css';
	import type { PageData } from './$types';
	import Todo from '$lib/Todo.svelte';

	export let data: PageData;
</script>

<h1 class="text-2xl ">Welcome to SvelteKit</h1>
<p class="text-red-600">
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
{#each data.todos as todo}
	<Todo {todo} />
{/each}

<style uno:preflights uno:safelist global></style>
