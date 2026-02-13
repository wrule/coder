import Message from './message';

class Session {
  public constructor(
    private messages: Message[] = [],
  ) {}

  public get Messages() {
    return this.messages;
  }
}
