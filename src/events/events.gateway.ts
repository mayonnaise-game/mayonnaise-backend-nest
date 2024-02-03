import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: '/v1',
})
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('connect')
  handleConnection(@ConnectedSocket() client: Socket): void {
    // Handle new connection
    console.log(client);
    this.server.emit('message', 'Hello from server');
  }
  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: string): void {
    this.server.emit('message', data);
  }

  @SubscribeMessage('disconnect')
  handleDisconnect(@ConnectedSocket() client: Socket): void {
    // Handle disconnection
    console.log(client);
  }
}
