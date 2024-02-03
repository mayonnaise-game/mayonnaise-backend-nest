// src/chat/dto/message.dto.ts
import { IsString } from 'class-validator';

export class MessageDto {
  @IsString()
  message: string;
}
