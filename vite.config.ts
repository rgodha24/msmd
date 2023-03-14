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
					black: '#1E1E1E',
				violet: '#C5A9EA',
				yellow: '#FFD700',
				white: '#ffffff',
				gray: '#808080'
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
