import { Dayjs } from 'dayjs';
import type { ModelMessage } from 'ai';

class Message {
  public constructor(
    private message: ModelMessage,
    private sendTime: Dayjs,
    private completedTime: Dayjs,
  ) {}

  public get Message() {
    return this.message;
  }

  public get SendTime() {
    return this.sendTime;
  }

  public get CompletedTime() {
    return this.completedTime;
  }

  public get Role() {
    return this.message.role;
  }

  public get Content() {
    return this.message.content;
  }
}

export default Message;
