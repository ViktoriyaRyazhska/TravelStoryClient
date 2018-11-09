import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {Router} from '@angular/router';
import {MediaPagableDTO} from '../models/MediaPagableDTO';

const baseUrl = environment.apiUrl + '/api';
const options = {headers: {'Content-Type': 'application/json'}};


@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private data: any;


  baseUrl = environment.apiUrl + '/api/media';


  constructor(
    private http: HttpClient,
    private router: Router) {
  }


  public getMedias(userId: number, page: number, size: number): Observable<MediaPagableDTO> {
    this.data = this.http.get(`${this.baseUrl}/${userId}/${page}/${size}`);
    return this.data;
  }


  public delete(mediaId: number) {
    debugger;
    return this.http.delete(`${this.baseUrl}/${mediaId}`);
  }

}
