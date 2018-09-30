import { Component, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
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
    const socket = new SockJS('http://localhost:8080/messenger');
    this.stompClient = Stomp.over(socket);

    const _this = this;
    this.stompClient.connect({}, function (frame) {
      _this.setConnected(true);
      console.log('Connected: ' + frame);

      _this.stompClient.subscribe('/topic/messages', function (message) {
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
    this.stompClient.send(
      '/app/message',
      {},
      JSON.stringify({'messageContent': this.messageContent})
    );
  }

  showMessages(message) {
    this.messages.push(message);
  }

  ngOnInit() {
  }

}
