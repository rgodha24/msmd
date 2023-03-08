import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { presetWind } from "unocss"
import unocss from "unocss/vite";

export default defineConfig({
	plugins: [unocss({
		presets: [presetWind()],
		mode: "svelte-scoped",
	}), sveltekit(),]
});
