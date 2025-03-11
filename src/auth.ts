import { betterAuth } from 'better-auth';
export const auth = betterAuth({
  baseURL: 'http://localhost:5174/api/login',
});

export async function login(email: string, password: string) {
  try {
    const response = await fetch(auth.options.baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      let errorMessage = 'Login failed.';
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch {
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    console.log('Login successful1:', data);
    return data.user;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
}


