import { prisma } from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	const todos = prisma.todo.findMany();
	return {
		todos,
		session: null
	};
}) satisfies PageServerLoad;
