import { SvelteKitAuth } from '@auth/sveltekit';
import {} from '$env/static/private';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { createContext } from '$lib/trpc/context';
import { trpcServer } from '$lib/trpc/router';
import { createTRPCHandle } from 'trpc-sveltekit';

export const handle = sequence(
	SvelteKitAuth({
		providers: [], 
	}),
	createTRPCHandle({ router: trpcServer, createContext })
) satisfies Handle;
