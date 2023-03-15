<script lang="ts">
	import monkey from './monkey.png';
</script>

<header class="flex flex-row justify-between ">
	<div class="flex flex-row font-bold text-3xl p-6 gap-5 ">
		<img src={monkey} alt="monkey" class="w-12 h-12" />
		<h1 class="text-white my-auto">Monkey See Monkey Do</h1>
	</div>
	<div class="flex flex-row justify-between text-white my-auto">
		<a class="basis-1/3 p-6 hover:text-secondary hover:underline" href="/">Home</a>
		<a class="basis-1/3 p-6 hover:text-secondary hover:underline" href="/contributors"
			>Contributors</a
		>
		<a class="basis-1/3 pl-6 pr-20 py-6 hover:text-secondary hover:underline" href="/about">About</a
		>
	</div>
</header>
