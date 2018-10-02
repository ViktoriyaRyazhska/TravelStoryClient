import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginDTO} from '../login/LoginDTO';
import {RegistrationDTO} from './RegistrationDTO';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }
  registrate(registrationDTO: RegistrationDTO): Observable<any> {
    return this.http.post('http://localhost:8080/api/registrate', registrationDTO);
  }
}
