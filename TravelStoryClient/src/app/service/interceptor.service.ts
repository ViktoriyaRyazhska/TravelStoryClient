import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {LoginService} from './login.service';

@Injectable()
export class InterceptorService {
  constructor(private authService: LoginService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('asd1');
    if (request.url.startsWith('http://qctravelstory-env-1.us-east-2.elasticbeanstalk.com') && this.authService.getToken()) {
      console.log('asd');
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`
        }
      });
    }
    return next.handle(request);
  }
}
