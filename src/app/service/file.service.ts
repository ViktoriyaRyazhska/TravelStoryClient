import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserPicDTO} from '../models/UserPicDTO';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

const baseUrl = environment.apiUrl + 'api';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) {
  }

  uploadProfilePic(dto: UserPicDTO): Observable<any> {
    console.log(dto);
    return this.http.post(baseUrl + '/uploadProfilePic', dto, {headers: {'Content-Type': 'application/json'}});
  }

  resetProfilePic(id: number): Observable<any> {
    return this.http.post(baseUrl + '/resetProfilePic', id, {headers: {'Content-Type': 'application/json'}});
  }

  resetBackgroundPic(id: number): Observable<any> {
    return this.http.post(baseUrl + '/resetBackgroundPic', id, {headers: {'Content-Type': 'application/json'}});
  }

  uploadBackgroundPic(dto: UserPicDTO): Observable<any> {
    return this.http.post(baseUrl + '/uploadBackgroundPic', dto, {headers: {'Content-Type': 'application/json'}});
  }


}
