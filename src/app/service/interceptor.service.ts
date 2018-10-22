import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {LoginService} from './login.service';
import {TokenService} from './token.service';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment.prod';

@Injectable()
export class InterceptorService {
  constructor(private authService: LoginService,
              private token: TokenService,
              private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.startsWith(environment.apiUrl) && this.authService.getToken()) {
        {
          request = request.clone({
            setHeaders: {Authorization: `Bearer ${this.authService.getToken()}`}
          });
        }
      } else {
        // this.router.navigate(['/login']);
    }
    return next.handle(request);
  }
}
