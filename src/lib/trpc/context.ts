import type { RequestEvent } from '@sveltejs/kit';
import type { inferAsyncReturnType } from '@trpc/server';
import { prisma } from "$lib/prisma"

export async function createContext(event: RequestEvent) {
	const session = await event.locals.getSession();
	return {
		prisma,
		session
	};
}

export type Context = inferAsyncReturnType<typeof createContext>;

