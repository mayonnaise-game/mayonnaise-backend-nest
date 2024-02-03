export class MessageResponse {
  ack: boolean;
  content: {
    nickname: string;
    message: string;
    timestamp: string;
  };
}
