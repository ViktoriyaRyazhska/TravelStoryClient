import {Component, Input, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {User} from "../../model/User";


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss', '../../general.scss']
})


export class PersonalInfoComponent implements OnInit {
  @Input() currentUser: User;

  constructor() {

  }

  ngOnInit() {
    $(document).ready(function () {
      $(".messages").animate({scrollTop: $(document).height()}, "fast");

      $("#profile-img").click(function () {
        $("#status-options").toggleClass("active");
      });

      $(".expand-button").click(function () {
        $("#profile").toggleClass("expanded");
        $("#contacts").toggleClass("expanded");
      });

      $("#status-options ul li").click(function () {
        $("#profile-img").removeClass();
        $("#status-online").removeClass("active");
        $("#status-away").removeClass("active");
        $("#status-busy").removeClass("active");
        $("#status-offline").removeClass("active");
        $(this).addClass("active");

        if ($("#status-online").hasClass("active")) {
          $("#profile-img").addClass("online");
        } else if ($("#status-away").hasClass("active")) {
          $("#profile-img").addClass("away");
        } else if ($("#status-busy").hasClass("active")) {
          $("#profile-img").addClass("busy");
        } else if ($("#status-offline").hasClass("active")) {
          $("#profile-img").addClass("offline");
        } else {
          $("#profile-img").removeClass();
        }
        ;

        $("#status-options").removeClass("active");
      });

    });

  }

  statusOptionChecked() {
  }

  profileImgClick() {
  }

  expandBtnClick() {

  }
}