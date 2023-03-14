import { prisma } from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		session: null
	};
}) satisfies PageServerLoad;
