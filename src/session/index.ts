import dayjs from 'dayjs';
import { streamText, type LanguageModel, type UserModelMessage } from 'ai';
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

  public async SendTextMessage(content: string) {
    const newMessage: UserModelMessage = {
      role: 'user',
      content,
    };
    const newModelMessages = this.ModelMessages.concat(newMessage);
    const result = streamText({
      model: this.model,
      messages: newModelMessages,
    });
    for await (const chunk of result.textStream) {
      console.log(chunk);
    }
  }
}
