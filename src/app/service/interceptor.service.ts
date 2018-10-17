import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {LoginService} from './login.service';
import {TokenService} from './token.service';
import {Router} from '@angular/router';

@Injectable()
export class InterceptorService {
  constructor(private authService: LoginService,
              private token: TokenService,
              private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('qqqqqqqqqqqqqqqq');
    if (request.url.startsWith('http://qctravelstory-env-1.us-east-2.elasticbeanstalk.com') && this.authService.getToken()) {
      console.log('mmmmm');
        {
          request = request.clone({
            setHeaders: {Authorization: `Bearer ${this.authService.getToken()}`}
          });
        }
      } else {
        this.router.navigate(['/login']);
    }
    return next.handle(request);
  }
}
