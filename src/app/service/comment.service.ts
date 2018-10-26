import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Comment} from '../models/Comment';
import {environment} from '../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class CommentService {

  baseUrl = environment.apiUrl + '/api/comments';


  constructor(
    private http: HttpClient) {
  }

  /** GET comments from the server */
  getComments(travelStoryId: number, mediaId: number): Observable<Comment[]> {
    let params = new HttpParams().set('travelStoryId', travelStoryId.toString());
    params.set('mediaId', mediaId.toString());
    return this.http.get<Comment[]>(this.baseUrl,
      {params: params});
  }

  /** POST: add a new comment to the server */
  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.baseUrl, comment, httpOptions).pipe(
      catchError(this.handleError<Comment>('addComment'))
    );
  }

  /** DELETE: delete the comment from the server */
  deleteComment(comment: Comment | number): Observable<Comment> {
    const id = typeof comment === 'number' ? comment : comment.id;
    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<Comment>(url, httpOptions).pipe(
      catchError(this.handleError<Comment>('deleteComment'))
    );
  }

  getCommentsPortion(travelStoryId: number, mediaId: number, pageNumber: number) {
    debugger;
    let params = new HttpParams().set('pageNumber', pageNumber.toString()).set('mediaId', mediaId.toString());
    debugger;
    return this.http.get(`${this.baseUrl}/` + travelStoryId,
      {params: params});
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
