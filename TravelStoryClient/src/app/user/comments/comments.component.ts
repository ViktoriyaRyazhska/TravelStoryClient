import {Component, Input, OnInit} from '@angular/core';
import {COMMENTS} from "./CommentsData";
import {ComponentMetadata} from "codelyzer/angular/metadata";
import {Comment} from '../../models/Comment';
import {Import} from "@angular/compiler-cli/src/ngtsc/host";
import {User} from "../../models/User";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() userId: number;
  currentComment: Comment;
  comments: Comment [];

  constructor() {
  }

  addComment(comment: Comment) {
    this.comments.push(comment);
  }

  ngOnInit() {
    this.comments = COMMENTS;
  }

}
