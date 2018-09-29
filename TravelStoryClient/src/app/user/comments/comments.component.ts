import {Component, OnInit} from '@angular/core';
import {COMMENTS} from "./CommentsData";
import {ComponentMetadata} from "codelyzer/angular/metadata";
import {Comment} from './Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

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
