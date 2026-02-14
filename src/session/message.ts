import dayjs from 'dayjs';
import type { ModelMessage } from 'ai';

class Message {
  public constructor(
    private message: ModelMessage,
    private sendTime: dayjs.Dayjs,
    private completedTime: dayjs.Dayjs,
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
