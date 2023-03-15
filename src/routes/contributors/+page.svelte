<script lang="ts">
	import '@unocss/reset/tailwind.css';
	import type { PageData } from '../$types';
	import Todo from '$lib/Todo.svelte';

</script>
<div> 
	<div class="topnav">
	<a class="active" href="../">Home</a>
	<a href="/contributors">Contributors</a>
	<a href="/about">About</a>
</div>
</div>
<p class="text-primary">
	Hello, welcome to <a href="https://jacobng.dev" class="text-secondary underline">Jacob Ng's</a> and
	<a href="https://rohangodha.me" class="text-secondary underline">Rohan Godha's</a> project
</p> 
<style uno:preflights uno:safelist global></style>