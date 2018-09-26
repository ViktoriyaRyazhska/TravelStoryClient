import {Component, OnInit} from '@angular/core';
import {currUserMockup} from "./mockups/UserMockup";
import {User} from "./model/User";


@Component({
  selector: 'app-chat',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {
  currentUser: User;

  ngOnInit(): void {
    this.currentUser = currUserMockup;
  }

}
