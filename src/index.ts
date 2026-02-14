import 'dotenv/config';
import readline from 'readline/promises';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import Session from './session';

async function main() {
  const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY!,
  });
  const model = openrouter('google/gemini-3-flash-preview');
  const session = new Session(model);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let question = '';
  question = await rl.question('>> ');
  await session.SendTextMessage(question);
  rl.close();
}

main();
