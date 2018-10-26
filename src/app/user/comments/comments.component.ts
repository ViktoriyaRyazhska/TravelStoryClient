import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../models/Comment';
import {TravelStory} from '../../models/TravelStory';
import {CommentService} from '../../service/comment.service';
import {TokenService} from '../../service/token.service';
import {UserService} from '../../service/user.service';
import {User} from '../../models/User';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() travelStory: TravelStory;
  loggedUser: User;
  comments: Comment [];
  pageNumber: number;
  commentsNumber: number;

  constructor(private commentService: CommentService, private tokenService: TokenService, private userService: UserService) {
  }

  ngOnInit() {
    this.getLoggedUser();
    this.pageNumber = 0;
    this.getCommentsPortion(this.travelStory.id, this.travelStory.media[0].id);
  }

  add(commentMassage: string, travelStoryId: number, mediaId: number): void {
    commentMassage = commentMassage.trim();
    if (!commentMassage) {
      return;
    }
    this.getComments(travelStoryId, mediaId);
    let comment: Comment = new Comment();
    comment.commentMassage = commentMassage;
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
    this.commentsNumber++;
  }

  getComments(travelStoryId: number, mediaId: number) {
    this.commentService.getComments(travelStoryId, mediaId)
      .subscribe(comments => this.comments = comments);
    document.getElementById('commentsBlock' + this.travelStory.id).hidden = false;
  }

  delete(comment: Comment) {
    this.comments = this.comments.filter(h => h !== comment);
    this.commentService.deleteComment(comment).subscribe();
    this.commentsNumber--;
  }

  getLoggedUser() {
    let userId = this.tokenService.getUserId();
    this.userService.getUser(userId).subscribe(user => this.loggedUser = user);
  }

  getCommentsPortion(travelStoryId: number, mediaId: number) {
    debugger;
    this.commentService.getCommentsPortion(travelStoryId, mediaId, this.pageNumber).subscribe(data => {
      this.comments = data['content'];
      this.commentsNumber = data['totalElements'];
    });
    document.getElementById('commentsBlock').hidden = false;
  }

  hideComments() {
    document.getElementById('commentsBlock' + this.travelStory.id).hidden = true;
  }
}
