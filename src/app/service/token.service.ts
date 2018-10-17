import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {TokenDetails} from '../models/TokenDetails';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  helper = new JwtHelperService();
  tokenDetails:  TokenDetails;

  getDecodedAccessToken(): TokenDetails {
    return this.helper.decodeToken(localStorage.getItem('auth'));
  }

  getUserEmail(): string {
    this.tokenDetails = this.getDecodedAccessToken();
    return this.tokenDetails.sub;
  }
  getUserRole(): string {
    this.tokenDetails = this.getDecodedAccessToken();
    return this.tokenDetails.role;
  }
  getUserId(): number {
    this.tokenDetails = this.getDecodedAccessToken();
    return this.tokenDetails.id;
  }
  tokenIsValid(): boolean {
    if (this.helper.decodeToken(localStorage.getItem('auth')) != null) {
      return true;
    } else {
      return false;
    }
  }



}
