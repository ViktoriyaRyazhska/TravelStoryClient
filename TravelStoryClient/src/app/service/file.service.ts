import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserProfilePicDto} from '../models/UserProfilePicDto';
import {HttpClient} from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) {
  }

  uploadProfilePic(user: UserProfilePicDto): Observable<any> {
    console.log(user);
    return this.http.put(baseUrl + 'uploadProfilePic', user, {headers: {'Content-Type': 'application/json'}});
  }

  resetProfilePic(id: number): Observable<any> {
    return this.http.post(baseUrl + 'resetProfilePic', id, {headers: {'Content-Type': 'application/json'}});
  }

}
