import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserPicDTO} from '../models/UserPicDTO';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';

const baseUrl = environment.apiUrl + '/api';
const options = {headers: {'Content-Type': 'application/json'}};

@Injectable({
  providedIn: 'root'
})
export class FileService {

  public task: AngularFireUploadTask;

  constructor(private http: HttpClient,
              private storage: AngularFireStorage) {
  }

  public uploadProfilePic(dto: UserPicDTO): Observable<any> {
    return this.http.post(baseUrl + '/uploadProfilePic', dto, options);
  }

  public resetProfilePic(id: number): Observable<any> {
    return this.http.post(baseUrl + '/resetProfilePic', id, options);
  }

  public resetBackgroundPic(id: number): Observable<any> {
    return this.http.post(baseUrl + '/resetBackgroundPic', id, options);
  }

  public uploadBackgroundPic(dto: UserPicDTO): Observable<any> {
    return this.http.post(baseUrl + '/uploadBackgroundPic', dto, options);
  }

}
