import 'dotenv/config';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { streamText } from 'ai';

async function main() {
  const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY!,
  });
  const result = streamText({
    model: openrouter.chat('meta-llama/llama-3.1-405b-instruct'),
    prompt: 'Write a short story about AI.',
  });

  for await (const chunk of result.textStream) {
    console.log(chunk);
  }
}

main();
