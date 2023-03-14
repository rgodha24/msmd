<script lang="ts">
	import { page } from '$app/stores';
	import type { Todo } from '@prisma/client';
	import { trpc } from './trpc/client';

	export let todo: Todo;
	let checked: boolean = todo.done;
	let answer = '';
</script>

<div class="flex my-4 text-white">
	<input type="checkbox" name="complete" id="complete" bind:checked />
	im a s tupid monkey
	<div class="font-thin">awjefn awiefo iawjof iwaofihewaf ew</div>
</div>
