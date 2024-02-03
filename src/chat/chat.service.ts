// chat.service.ts
import { Injectable } from '@nestjs/common';
import { MessageDto } from 'src/chat/dto/message.dto';

@Injectable()
export class ChatService {
  async processMessage(message: MessageDto): Promise<any> {
    // Process the message
    // For example, save the message to the database or perform some business logic

    return { ack: true, content: message }; // Example response
  }
}
