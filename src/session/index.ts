import dayjs from 'dayjs';
import type { LanguageModel } from 'ai';
import Message from './message';

class Session {
  public constructor(
    private model: LanguageModel,
    private messages: Message[] = [],
  ) {}

  public get Messages() {
    return this.messages;
  }

  public get ModelMessages() {
    return this.messages.map((message) => message.Message);
  }

  public SendTextMessage(content: string) {
    const message = new Message(
      {
        role: 'user',
        content,
      },
      dayjs(),
      dayjs(),
    );
  }
}
