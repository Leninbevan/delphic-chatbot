import { betterAuth } from 'better-auth';
import { createPool } from 'mysql2/promise';

export const auth = betterAuth({
  database: createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'chatbot',
  }),
  emailAndPassword: {
    enabled: true, 
  }
});