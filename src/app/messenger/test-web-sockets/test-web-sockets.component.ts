import {Component, OnInit} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {Message} from '../model/Message';

@Component({
  selector: 'app-test-web-sockets',
  templateUrl: './test-web-sockets.component.html',
  styleUrls: ['./test-web-sockets.component.scss']
})
export class TestWebSocketsComponent implements OnInit {
  title = 'JavaSampleApproach';
  description = 'Angular-WebSocket Demo';

  messages: string[] = [];
  disabled: boolean;
  messageContent: string;
  messageType: string = 'TEXT';
  private stompClient = null;

  constructor() {
  }

  setConnected(connected: boolean) {
    this.disabled = !connected;

    if (connected) {
      this.messages = [];
    }
  }

  connect() {
    const socket = new SockJS('https://travelstory-server.herokuapp.com/ws');
    this.stompClient = Stomp.over(socket);

    const _this = this;
    this.stompClient.connect({}, function (frame) {
      _this.setConnected(true);
      console.log('Connected: ' + frame);

      _this.stompClient.subscribe('/chat/1/messages', function (message) {
        const json = JSON.parse(message.body);
        _this.showMessages(json.messageContent);
      });
    });
  }

  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }

    this.setConnected(false);
    console.log('Disconnected!');
  }

  sendMessage() {
    let message = new Message();
    message.messageContent = this.messageContent;
    message.messageType = this.messageType;
    this.stompClient.send(
      '/messenger/1/message',
      {},
      JSON.stringify(message.messageContent)
    );
  }

  showMessages(message) {
    this.messages.push(message);
  }

  ngOnInit() {
  }

}
