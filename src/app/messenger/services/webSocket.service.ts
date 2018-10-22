// import {Injectable} from '@angular/core';
// import * as Rx from 'rxjs/Rx';
// import {Message} from '../model/Message';
// import * as Stomp from 'stompjs';
// import * as SockJS from 'sockjs-client';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class WebSocketService {
//
//   constructor() {
//   }
//
//   private subject: Rx.Subject<Message>;
//
//   public connect(url: string): Rx.Subject<Message> {
//     if (this.subject) {
//       this.subject = this.createConnection(url);
//       console.log('Successfully connected: ' + url);
//     }
//     return this.subject;
//   }
//
//   //
//   // private create(url): Rx.Subject<MessageEvent> {
//   //   let ws = new WebSocket(url);
//   //
//   //   let observable = Rx.Observable.create(
//   //     (obs: Rx.Observer<MessageEvent>) => {
//   //       ws.onmessage = obs.next.bind(obs);
//   //       ws.onerror = obs.error.bind(obs);
//   //       ws.onclose = obs.complete.bind(obs);
//   //       return ws.close.bind(ws);
//   //     })
//   //   let observer = {
//   //     next: (data: Object) => {
//   //       if (ws.readyState === WebSocket.OPEN) {
//   //         ws.send(JSON.stringify(data));
//   //       }
//   //     }
//   //   }
//   //   return Rx.Subject.create(observer, observable);
//   // }
//
//   private createConnection(url: string): Rx.Subject<Message> {
//     let ws = new SockJS(url);
//
//     let observable = Rx.Observable.create(
//       (obs: Rx.Observer<Message>) => {
//         ws.onmessage
//       };
//   }
// }
