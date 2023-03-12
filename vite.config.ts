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
					black: '#353535',
					violet: '#7d12ff',
					purple: '#ab20fd',
					white: '#ffffff',
					gray: '#878787'
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
