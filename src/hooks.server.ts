import { } from '$env/static/private';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { createContext } from '$lib/trpc/context';
import { trpcServer } from '$lib/trpc/router';
import { createTRPCHandle } from 'trpc-sveltekit';
import { auth } from '$lib/server/lucia';
import type { Auth, AdapterFunction } from 'lucia-auth';
import { handleHooks } from "@lucia-auth/sveltekit";

export const handle = sequence(
	handleHooks(auth),
	createTRPCHandle({ router: trpcServer, createContext })
) satisfies Handle;

