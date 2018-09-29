import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import {Like} from "./likes/Like";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class LikeService {


  private likesUrl = 'likes';

  constructor(
    private http: HttpClient) { }

  /** GET likes from the server */
  getLikes (): Observable<Like[]> {
    return this.http.get<Like[]>(this.likesUrl)
      .pipe(
        catchError(this.handleError('getLikes', []))
      );
  }

  /** GET like by id. Will 404 if id not found */
  getLike(id: number): Observable<Like> {
    const url = `${this.likesUrl}/${id}`;
    return this.http.get<Like>(url).pipe(
      tap(_ => this.log(`fetched like id=${id}`)),
      catchError(this.handleError<Like>(`getLike id=${id}`))
    );
  }



  //////// Save methods //////////

  /** POST: add a new like to the server */
  addLike (like: Like): Observable<Like> {
    return this.http.post<Like>(this.likesUrl, like, httpOptions).pipe(
      catchError(this.handleError<Like>('addLike'))
    );
  }

  /** DELETE: delete the like from the server */
  deleteLike (like: Like | number): Observable<Like> {
    const id = typeof like === 'number' ? like : like.id;
    const url = `${this.likesUrl}/${id}`;

    return this.http.delete<Like>(url, httpOptions).pipe(
      catchError(this.handleError<Like>('deleteLike'))
    );
  }

  /** PUT: update the like on the server */
  updateLike (like: Like): Observable<any> {
    return this.http.put(this.likesUrl, like, httpOptions).pipe(
      tap(_ => this.log(`updated like id=${like.id}`)),
      catchError(this.handleError<any>('updateLike'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a LikeService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`LikeService: ${message}`);
  }
}
