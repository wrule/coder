import Message from './message';

class Session {
  public constructor(
    private messages: Message[] = [],
  ) {}

  public get Messages() {
    return this.messages;
  }

  public get ModelMessages() {
    return this.messages.map((message) => message.Message);
  }
}
