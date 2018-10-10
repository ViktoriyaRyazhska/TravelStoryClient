import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Comment} from '../models/Comment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class CommentService {

  baseUrl = 'http://qctravelstory-env-1.us-east-2.elasticbeanstalk.com/api';
  private commentsUrl = 'comments';

  constructor(
    private http: HttpClient) {
  }

  /** GET comments from the server */
  getComments(travelStoryId: number, mediaId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}/${this.commentsUrl}/${travelStoryId}/${mediaId}`)
      .pipe(
        catchError(this.handleError('getComments', []))
      );
  }

  /** POST: add a new comment to the server */
  addComment(comment: Comment, travelStoryId: number, mediaId: number): Observable<Comment> {
    return this.http.post<Comment>(`${this.baseUrl}/${this.commentsUrl}/${travelStoryId}/${mediaId}`, comment, httpOptions).pipe(
      catchError(this.handleError<Comment>('addComment'))
    );
  }

  /** DELETE: delete the comment from the server */
  deleteComment(comment: Comment | number): Observable<Comment> {
    const id = typeof comment === 'number' ? comment : comment.id;
    const url = `${this.baseUrl}/${this.commentsUrl}/${id}`;

    return this.http.delete<Comment>(url, httpOptions).pipe(
      catchError(this.handleError<Comment>('deleteComment'))
    );
  }
  /**
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
