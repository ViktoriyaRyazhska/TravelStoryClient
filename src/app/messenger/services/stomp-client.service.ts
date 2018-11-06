import {Injectable} from '@angular/core';
import {Client, Frame, Stomp} from 'stompjs';

@Injectable()
export class StompClient {

  private socket: any;
  private url: string;
  private stomp: Stomp;
  private stompClient: Client;
  private connection: boolean = false;

  // connect(): Observable<StompClient> {
  //   // this.stompClient.reconnect_delay=5000;
  //
  //   if (!connection) {
  //     this.stompClient = Stomp.over(new SockJS('https://travelstory-server.herokuapp.com/ws'));
  //
  //   }
  // }


}
