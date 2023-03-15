<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	import Todo from '$lib/Todo.svelte';
</script>

<h1 class="text-2xl text-white">Monkey See Monkey Do</h1>
<p class="text-secondary">
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<p class="text-white">
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

{#each data.todos as todo}
	<Todo {todo} />
{/each}

<style uno:preflights uno:safelist global></style>
