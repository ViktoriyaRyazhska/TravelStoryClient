import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserProfilePicDto} from '../models/UserProfilePicDto';
import {HttpClient} from '@angular/common/http';

const uploadProfilePicUrl = 'http://localhost:8080/api/uploadProfilePic';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) {
  }

  uploadProfilePic(user: UserProfilePicDto): Observable<any> {
    console.log(user);
    return this.http.put(uploadProfilePicUrl, user, {headers: {'Content-Type': 'application/json'}});
  }

}
