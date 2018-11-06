import {Component, Input, OnInit} from '@angular/core';
import {Chat} from '../../model/Chat';

@Component({
  selector: 'app-chat-info',
  templateUrl: './chat-info.component.html',
  styleUrls: ['./chat-info.component.scss', '../../general.scss']
})
export class ChatInfoComponent implements OnInit {
  @Input() currChat: Chat;

  constructor() {
  }

  ngOnInit() {
  }

}
