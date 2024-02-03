// chat.service.ts
import { Injectable } from '@nestjs/common';
import { MessageResponse } from 'src/chat/types/messageReponse';

@Injectable()
export class ChatService {
  async processMessage(message: string): Promise<MessageResponse> {
    // Process the message
    // For example, save the message to the database or perform some business logic

    return {
      ack: true,
      content: {
        nickname: 'John Doe',
        message: message as any,
        timestamp: new Date().toISOString(),
      },
    }; // Example response
  }
}
