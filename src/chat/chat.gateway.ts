import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from 'src/chat/chat.service';
import { MessageDto } from 'src/chat/dto/message.dto';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: '/v1',
})
export class ChatGateway {
  constructor(private chatService: ChatService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('connect')
  handleConnection(@ConnectedSocket() client: Socket): void {
    // Handle new connection
    console.log(client);
    client.emit('message', 'Server Connection Established!');
  }

  @SubscribeMessage('message')
  async handleMessage(
    @MessageBody() message: MessageDto,
    // @ConnectedSocket() client: Socket,
  ) {
    console.log(message);
    const response = await this.chatService.processMessage(message);

    // broadcast to all connected clients
    this.server.emit('message', response);
  }

  @SubscribeMessage('disconnect')
  handleDisconnect(@ConnectedSocket() client: Socket): void {
    // Handle disconnection
    console.log(client);
  }
}
