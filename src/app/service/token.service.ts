import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  helper = new JwtHelperService();
  constructor() { }
  getDecodedAccessToken(accessToken: string): string {
    return this.helper.decodeToken(accessToken);
  }
}
