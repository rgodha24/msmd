import { prisma } from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, parent }) => {
	const todos = prisma.todo.findMany();
	return {
		todos
	};
}) satisfies PageServerLoad;
