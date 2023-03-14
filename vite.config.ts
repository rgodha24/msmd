import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { presetWind, transformerDirectives } from 'unocss';
import unocss from 'unocss/vite';

export default defineConfig({
	plugins: [
		unocss({
			presets: [presetWind()],
			mode: 'svelte-scoped',
			theme: {
				colors: {
					background: '#020e29',
					primary: '#c084fc',
					secondary: '#e879f9',
					text: '#d4d4d4'
				}
			},
			transformers: [
				transformerDirectives({
					applyVariable: ['@apply']
				})
			]
		}),
		sveltekit()
	]
});
