import { json } from "@sveltejs/kit";
import { auth } from "$lib/server/auth"; // Adjust this path based on your project structure

export async function POST({ request }) {
  try {
    const { email, password } = await request.json();
console.log(email, password);

    const response = await auth.api.signInEmail({
      body: { email, password },
      asResponse: true,
    });
    console.log("server response", response);

    return json(await response.json(), { status: response.status });
  } catch (error: any) {
    console.error("Authentication error:", error);
    return json({ error: "Authentication failed", message: error.message }, { status: 401 });
  }
}
