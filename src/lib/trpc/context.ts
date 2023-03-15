import type { RequestEvent } from '@sveltejs/kit';
import type { inferAsyncReturnType } from '@trpc/server';
import { prisma } from '$lib/prisma';

export async function createContext(event: RequestEvent) {
	const { session, user } = await event.locals.validateUser();
	return {
		prisma,
		session
	};
}

export type Context = inferAsyncReturnType<typeof createContext>;
