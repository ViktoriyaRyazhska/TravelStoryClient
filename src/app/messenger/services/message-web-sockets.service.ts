import {Injectable} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {Message} from '../model/Message';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageWebSocketsService {
  // messages: string[] = [];
  // disabled: boolean;
  messageContent: string;
  private stompClient = null;

  private baseUrl = 'http://localhost:8080';
  private urlToSubscribe: string;
  private urlToSendMessage: string;
  private urlToConnect = '';

  constructor() {
  }

  setConnected(connected: boolean) {

  }

  connect(): Stomp {
    const socket = new SockJS(this.baseUrl + '/messenger');
    this.stompClient = Stomp.over(socket);

    this.stompClient.connect({}, function (frame) {
      console.log('Connected: ' + frame);
    });

    return this.stompClient;
  }

  subscribe(chatId: number, message: Observable<Message>) {
    this.stompClient.subscribe('/messenger/' + chatId + '/messages',
      function (currMessage: Observable<Message>) {
        message = currMessage;
      });
  }

  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }
    console.log('Disconnected!');
  }

  sendMessage(chatId: number, message: Message) {
    this.stompClient.send(
      '/messenger/' + chatId + '/message',
      {},
      JSON.stringify(message)
    );
  }
}
