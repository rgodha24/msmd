import { SvelteKitAuth } from "@auth/sveltekit"
import { } from "$env/static/private"
import type { Handle } from "@sveltejs/kit";

export const handle = SvelteKitAuth({
  providers: [],
}) satisfies Handle

