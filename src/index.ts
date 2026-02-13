import 'dotenv/config';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { streamText } from 'ai';

async function main() {
  const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY!,
  });
  const result = streamText({
    model: openrouter('google/gemini-3-flash-preview'),
    prompt: '写一个关于AI的短篇故事',
  });

  for await (const chunk of result.textStream) {
    console.log(chunk);
  }
}

main();
