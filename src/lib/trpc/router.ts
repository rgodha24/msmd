import type { Context } from '$lib/trpc/context';
import { initTRPC, TRPCError } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.context<Context>().create();
export const { procedure, router } = t;

const protect = t.middleware(({ ctx, next }) => {
	if (ctx.session === null) {
		throw new TRPCError({
			code: 'UNAUTHORIZED',
			message: 'You must be logged in to access this'
		});
	} else {
		return next({
			ctx: {
				session: ctx.session
			}
		});
	}
});
export const protectedProcedure = procedure.use(protect);

export const trpcServer = t.router({
	greeting: procedure.input(z.object({ name: z.string() })).query(async ({ input: { name } }) => {
		return `Hello from trpc ${name}` as const;
	}),
	authed: protectedProcedure.query(async ({ ctx }) => ctx.session)
});

export type Router = typeof trpcServer;
