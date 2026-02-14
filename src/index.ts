import 'dotenv/config';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import Session from './session';

async function main() {
  const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY!,
  });
  const model = openrouter('google/gemini-3-flash-preview');
  const session = new Session(model);
  await session.SendTextMessage('1+1等于多少?');
}

main();
