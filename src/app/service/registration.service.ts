import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginDTO} from '../models/LoginDTO';
import {RegistrationDTO} from '../models/RegistrationDTO';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) {
  }

  registrate(registrationDTO: RegistrationDTO): Observable<any> {
    return this.http.post(environment.apiUrl + '/api/registrate', registrationDTO);
  }
}
