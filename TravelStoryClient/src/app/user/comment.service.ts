import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {Comment} from './comments/comment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class CommentService {

  private commentsUrl = 'comments';  // URL to web api

  constructor(
    private http: HttpClient) {
  }

  /** GET comments from the server */
  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentsUrl)
      .pipe(
        catchError(this.handleError('getComments', []))
      );
  }

  /** POST: add a new comment to the server */
  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.commentsUrl, comment, httpOptions).pipe(
      catchError(this.handleError<Comment>('addComment'))
    );
  }

  /** DELETE: delete the comment from the server */
  deleteComment(comment: Comment | number): Observable<Comment> {
    const id = typeof comment === 'number' ? comment : comment.id;
    const url = `${this.commentsUrl}/${id}`;

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
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
