import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../models/Comment';
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
  @Input() contentId: number;
  @Input() contentType: string;
  loggedUser: User;
  comments: Comment [];
  pageNumber: number;
  commentsNumber: number;



  constructor(private commentService: CommentService, private tokenService: TokenService, private userService: UserService) {
  }

  ngOnInit() {
    debugger; document.getElementById('commentsBlock' + this.contentId.toString()).hidden = false;
    this.getLoggedUser();
    this.pageNumber = 0;
    this.getCommentsPortion(this.contentId, this.contentType);
  }

  add(commentMassage: string, contentId: number, contentType: string): void {
    commentMassage = commentMassage.trim();
    if (!commentMassage) {
      return;
    }
    this.getComments(this.contentId, this.contentType);
    const comment: Comment = new Comment();
    comment.commentMassage = commentMassage;
    comment.userId = this.loggedUser.id;
    comment.userProfilePic = this.loggedUser.profilePic;
    comment.userFirstName = this.loggedUser.firstName;
    comment.userLastName = this.loggedUser.lastName;
    comment.contentId = this.contentId;
    comment.mediaType = this.contentType;
    this.commentService.addComment(comment)
      .subscribe(comment => {
        this.comments.push(comment);
      });
    this.commentsNumber++;
  }

  getComments(contentId: number, contentType: string) {
    this.commentService.getComments(contentId, contentType)
      .subscribe(comments => this.comments = comments);
    document.getElementById('commentsBlock' + this.contentId.toString()).hidden = false;
  }

  delete(comment: Comment) {
    this.comments = this.comments.filter(h => h !== comment);
    this.commentService.deleteComment(comment).subscribe();
    this.commentsNumber--;
  }

  getLoggedUser() {
    const userId = this.tokenService.getUserId();
    this.userService.getUser(userId).subscribe(user => this.loggedUser = user);
  }

  getCommentsPortion(contentId: number, contentType: string) {
    this.commentService.getCommentsPortion(contentId, contentType, this.pageNumber).subscribe(data => {
      this.comments = data['content'];
      this.commentsNumber = data['totalElements'];
    });
    document.getElementById('commentsBlock' + this.contentId.toString()).hidden = false;
  }

  hideComments() {
    document.getElementById('commentsBlock' + this.contentId.toString()).hidden = true;
  }
}
