import {Injectable} from '@angular/core';
import {Observable, Observer, BehaviorSubject, ReplaySubject} from 'rxjs/Rx';
import * as SockJS from 'sockjs-client';
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
  //     this.stompClient = Stomp.over(new SockJS('http://localhost:8080/ws'));
  //
  //   }
  // }




}
