import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserPicDTO} from '../models/UserPicDTO';
import {HttpClient} from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) {
  }

  uploadProfilePic(user: UserPicDTO): Observable<any> {
    console.log(user);
   debugger; return this.http.post(baseUrl + '/uploadProfilePic', user, {headers: {'Content-Type': 'application/json'}});
  }

  resetProfilePic(id: number): Observable<any> {
    return this.http.post(baseUrl + '/resetProfilePic', id, {headers: {'Content-Type': 'application/json'}});
  }

}
