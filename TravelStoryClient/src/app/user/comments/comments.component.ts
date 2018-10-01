import {Component, Input, OnInit} from '@angular/core';

import {ComponentMetadata} from "codelyzer/angular/metadata";
import {Comment} from '../../models/Comment';
import {Import} from "@angular/compiler-cli/src/ngtsc/host";
import {User} from "../../models/User";
import {TravelStory} from "../../models/TravelStory";
import {Media} from "../../models/Media";
import {Like} from "../../models/Like";
import {CommentService} from "../../service/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() user: User;
  @Input() travelStory: TravelStory;
  @Input() media: Media;

  currentComment: Comment;
  comments: Comment [];

  constructor(private commentService: CommentService) {
  }

  addComment(currentComment: Comment, travelStoryId: number, mediaId: number) {
    this.commentService.addComment(currentComment, travelStoryId, mediaId).subscribe(currentComment => {
      this.comments.push(currentComment);
    });
  }
  getComments(travelStoryId: number, mediaId: number) {
    this.commentService.getComments(travelStoryId, mediaId)
      .subscribe(comments => this.comments = comments);
  }
  delete(comment:Comment) {
    this.comments = this.comments.filter(h => h !== comment);
    this.commentService.deleteComment(comment).subscribe();
  }


  ngOnInit() {
    this.getComments(this.travelStory.id,this.media.id);
  }

}
