// lib/server/lucia.ts
import lucia from "lucia-auth";
import PrismaAdapter from "@lucia-auth/adapter-prisma";
import { dev } from "$app/environment";
import { prisma } from "$lib/prisma";

export const auth = lucia({
	adapter: PrismaAdapter(prisma),
	env: dev ? "DEV" : "PROD"
});

export type Auth = typeof auth;
