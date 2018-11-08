import {Component, OnInit} from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';
import {RegistrationService} from '../../service/registration.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RegistrationDTO} from '../../models/RegistrationDTO';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserDTO} from '../../models/UserDTO';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [RegistrationService]
})
export class RegistrationComponent implements OnInit {
  http: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    private socialAuthService: AuthService
  ) {
  }
  registrationForm: FormGroup;
  registrationDTO: RegistrationDTO;
  socialPlatformProvider;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  registrate = () => {
    console.log(this.registrationForm.value);
    this.registrationDTO = this.registrationForm.value;
    this.registrationService.registrate(this.registrationDTO)
      .subscribe(() => {
          location.reload(true);
        }
      );
    console.log('message');
  }
  public signinWithGoogle () {
    const socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => { // on success
        console.log(' sign in data : ' , userData);
        // this will return user data from google. What you need is a user token which you will send it to the server
        // this.registrationDTO.email = userData.email;
        // console.log(userData);
        // this.sendToRestApiMethod(userData.idToken);
      }
    );
  }
  ngOnInit() {
    this.buildForm();
    console.log(this.registrationForm);
  }
  buildForm() {
    this.registrationForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ]
      ],
      'firstName': ['', [
        Validators.required,
      ]
      ],
      'lastName': ['', [
        Validators.required,
      ]
      ],
      'gender': ['', [
        Validators.required,
      ]
      ],
    });
  }
//   sendToRestApiMethod(token: string): void {
//     this.http.post('url to google login in your rest api', {token: token} }
//     .subscribe(onSuccess => {
//
//   // login was successful
//    save the token that you got from your REST API in your preferred location i.e. as a Cookie or LocalStorage as you do with normal login
// }, onFail => {
//   // login was unsuccessful
//   // show an error message
// };
// )
}
