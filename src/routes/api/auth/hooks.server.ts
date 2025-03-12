import { auth } from "$lib/server/auth";
import { svelteKitHandler } from "better-auth/svelte-kit";
import type { RequestEvent } from "@sveltejs/kit";

export async function handle({ event, resolve }: { event: RequestEvent; resolve: (event: RequestEvent) => Promise<Response> }) {
    return svelteKitHandler({ event, resolve, auth });
}