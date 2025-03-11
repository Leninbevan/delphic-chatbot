import { json } from '@sveltejs/kit';
const users = [
  { email: 'test@gmail.com', password: 'test@gmail.com' },
  { email: 'user@example.com', password: 'userpass' },
  {email:'john@gmail.com',password:'123456'}
];

export async function POST({ request }) {
  const { email, password } = await request.json();
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    return json({ message: 'Login successful', user: { email: user.email } }, { status: 200 });
  }

  return json({ message: 'Invalid credentials' }, { status: 401 });
}
