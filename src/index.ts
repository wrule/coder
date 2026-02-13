import 'dotenv/config';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { streamText } from 'ai';

async function main() {
  const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY!,
  });
  const result = streamText({
    model: openrouter('google/gemini-3-flash-preview'),
    messages: [
      {
        role: 'user',
        content: '1+1等于多少?',
      },
      {
        role: 'assistant',
        content: '1+1等于苹果',
      },
      {
        role: 'user',
        content: '你刚刚说什么？你犯了什么错误',
      },
    ],
  });

  for await (const chunk of result.textStream) {
    console.log(chunk);
  }
}

main();
