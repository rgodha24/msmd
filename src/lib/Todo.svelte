<script lang="ts">
	import { page } from '$app/stores';
	import type { Todo } from '@prisma/client';
	import { trpc } from './trpc/client';

	export let todo: Todo;
	let checked: boolean = todo.done;
	let answer = '';
	async function test() {
		answer = await trpc($page).greeting.query({ name: `${Math.random()}` });
	}
</script>

<div class="flex my-4">
	<input type="checkbox" name="complete" id="complete" bind:checked />
	{answer}
	<button on:click={() => test()} class="m-5"> test </button>
</div>
