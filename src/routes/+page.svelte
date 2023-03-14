<script lang="ts">
	import '@unocss/reset/tailwind.css';
	import type { PageData } from './$types';
	import Todo from '$lib/Todo.svelte';

	export let data: PageData;
</script>

<h1 class="text-2xl text-black">Monkey See Monkey Do</h1>
<p class="text-yellow">
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<p class="text-purple">
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<p class="text-gray">
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

{#each data.todos as todo}
	<Todo {todo} />
{/each}
``

<style uno:preflights uno:safelist global></style>
