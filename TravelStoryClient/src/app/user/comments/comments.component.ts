import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../models/Comment';
import {User} from "../../models/User";
import {TravelStory} from "../../models/TravelStory";
import {CommentService} from "../../service/comment.service";



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() travelStory: TravelStory;
  loggedUser: User;
  comments: Comment [];
  date:Date;

  constructor(private commentService: CommentService) {
  }

  ngOnInit() {
    this.getLoggedUser();
    // this.getNextComments(this.travelStory.id, this.travelStory.medias[0].id,7);
    this.getComments(this.travelStory.id,this.travelStory.medias[0].id);
    this.date=new Date();
  }

  add(commentMassage: string, travelStoryId: number, mediaId: number): void {
    commentMassage = commentMassage.trim();
    if (!commentMassage) {
      return;
    }
    let comment: Comment = new Comment();
    comment.commentMassage=commentMassage;
    comment.userId = this.loggedUser.id;
    comment.userProfilePic = this.loggedUser.profilePic;
    comment.userFirstName = this.loggedUser.firstName;
    comment.userLastName = this.loggedUser.lastName;
    comment.travelStoryId = travelStoryId;
    comment.mediaId = mediaId;

    this.commentService.addComment(comment)
      .subscribe(comment => {
        this.comments.push(comment);
      });
  }

  getComments(travelStoryId: number, mediaId: number) {
    this.commentService.getComments(travelStoryId, mediaId)
      .subscribe(comments => this.comments = comments);
  }

  delete(comment: Comment) {
    this.comments = this.comments.filter(h => h !== comment);
    this.commentService.deleteComment(comment).subscribe();
  }

  getLoggedUser() {
    this.loggedUser = new User();
    this.loggedUser.id = 1;
    this.loggedUser.profilePic = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  }
  getNextComments(travelStoryId:number,mediaId:number,page:number){
    this.commentService.getNextComments(travelStoryId,mediaId,page).
      subscribe(comments => this.comments = comments);
  }


}
