import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserProfilePicDto} from '../../../models/UserProfilePicDto';
import {FileService} from '../../../service/file.service';


@Component({
  selector: 'app-dialog-change-profile-pic',
  templateUrl: './dialog-change-profile-pic.component.html',
  styleUrls: ['./dialog-change-profile-pic.component.scss']
})

export class DialogChangeProfilePicComponent implements OnInit {
  userProfilePicDto: UserProfilePicDto;
  userId: string;
  fileToUpload: File;
  myReader: FileReader;
  image: string;


  constructor(private fileService: FileService) {
  }

  onChange(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    this.fileToUpload = inputValue.files[0];
    this.myReader = new FileReader();

    this.myReader.onloadend = (e) => {
      this.image = this.myReader.result;
    };
    this.myReader.readAsDataURL(this.fileToUpload);
  }

  onSubmit() {
    this.userProfilePicDto.profilePic = this.image;
    console.log(this.userProfilePicDto.profilePic);
    this.userProfilePicDto.id = this.userId;
    this.fileService.uploadProfilePic(this.userProfilePicDto).subscribe((response) => {
      console.log(response);
    });
  }

  ngOnInit(): void {
    this.userProfilePicDto = new UserProfilePicDto();
  }

}
