import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {TokenDetails} from '../models/TokenDetails';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private helper = new JwtHelperService();
  private tokenDetails: TokenDetails;

  public getDecodedAccessToken(): TokenDetails {
    return this.helper.decodeToken(localStorage.getItem('auth'));
  }

  public getUserEmail(): string {
    this.tokenDetails = this.getDecodedAccessToken();
    return this.tokenDetails.sub;
  }

  public getUserRole(): string {
    this.tokenDetails = this.getDecodedAccessToken();
    return this.tokenDetails.role;
  }

  public getUserId(): number {
    this.tokenDetails = this.getDecodedAccessToken();
    return this.tokenDetails.id;
  }

  public tokenIsValid(): boolean {
    if (this.helper.decodeToken(localStorage.getItem('auth')) != null) {
      return true;
    } else {
      return false;
    }
  }

  public clearAccessToken() {
    localStorage.removeItem('auth');
  }


  checkTokenAvailable(): boolean {
    if (this.getUserId() !== null) {
      return true;
    }
  }
}
