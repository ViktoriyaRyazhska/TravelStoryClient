import {Component, Input, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {User} from '../../model/User';
import {MessengerService} from '../../services/messenger.service';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss', '../../general.scss']
})


export class PersonalInfoComponent implements OnInit {
  @Input() currentUser: User;

  constructor(private messengerService: MessengerService) {

  }

  ngOnInit() {
    $(document).ready(function () {
      $('.messages').animate({scrollTop: $(document).height()}, 'fast');

      $('#profile-img').click(function () {
        $('#state-options').toggleClass('active');
      });

      $('.expand-button').click(function () {
        $('#profile').toggleClass('expanded');
        $('#contacts').toggleClass('expanded');
      });

      $('#state-options ul li').click(function () {
        $('#profile-img').removeClass();
        $('#status-online').removeClass('active');
        $('#status-away').removeClass('active');
        $('#status-busy').removeClass('active');
        $('#status-offline').removeClass('active');
        $(this).addClass('active');

        if ($('#status-online').hasClass('active')) {
          $('#profile-img').addClass('online');
        } else if ($('#status-away').hasClass('active')) {
          $('#profile-img').addClass('away');
        } else if ($('#status-busy').hasClass('active')) {
          $('#profile-img').addClass('busy');
        } else if ($('#status-offline').hasClass('active')) {
          $('#profile-img').addClass('offline');
        } else {
          $('#profile-img').removeClass();
        }

        $('#state-options').removeClass('active');
      });

    });

  }

  statusOptionChecked(event: any) {
    let stateType = event.currentTarget.getId();
    switch (stateType) {
      case 'state-online': {
        stateType = 'ONLINE';
        break;
      }
      case 'state-away': {
        stateType = 'AWAY';
        break;
      }
      case 'state-busy': {
        stateType = 'BUSY';
        break;
      }
      case 'state-offline': {
        stateType = 'OFFLINE';
        break;
      }
      default: {
        stateType = 'AWAY';
      }
    }
    this.currentUser.userState = stateType;
    this.messengerService.updateCurrentUser(this.currentUser);
  }

  profileImgClick() {
  }

  expandBtnClick() {

  }
}
