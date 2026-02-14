import { streamText, type LanguageModel, type UserModelMessage } from 'ai';
import Message from './message';
import dayjs from 'dayjs';

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
    const newMessage: UserModelMessage = { role: 'user', content };
    const questionSendTime = dayjs();
    this.messages.push(new Message(newMessage, questionSendTime, questionSendTime));
    const result = streamText({
      model: this.model,
      messages: this.ModelMessages,
    });
    let answer = '';
    let answerSendTime = dayjs();
    let answerCompletedTime = dayjs();
    for await (const chunk of result.textStream) {
      if (answer === '') {
        answerSendTime = dayjs();
      }
      answer += chunk;
      process.stdout.write(chunk);
    }
    answerCompletedTime = dayjs();
    this.messages.push(new Message({ role: 'assistant', content: answer }, answerSendTime, answerCompletedTime));
  }
}

export default Session;
