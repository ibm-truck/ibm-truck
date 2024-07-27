import z from 'zod';
import 'dotenv/config.js';

const envSchema = z.object({
  BIDDY_DATABASE_URL: z.string().min(10),
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  NEXTAUTH_SECRET: z.string().optional(),
  GOOGLE_AUTH_ID: z.string(),
  GOOGLE_AUTH_SECRET: z.string()
});

const serverEnv = envSchema.safeParse(process.env);

if (!serverEnv.success) {
  console.error('There is an error with the server environment variables');
  console.error(serverEnv.error.issues);
  process.exit?.(1);
}

console.log('The server environment variables are valid!');

export default serverEnv.data;
