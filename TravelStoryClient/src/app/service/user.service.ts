import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../messenger/model/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {
  }

  getUser(id: number): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/user/' + 1);
  }
}
