import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import {LoginDTO} from '../../models/LoginDTO';
import {LoginService} from '../../service/login.service';
import {ResponseToken} from '../../models/ResponseToken';
import {CookieService} from 'ngx-cookie-service';
import {MyAuthService} from '../../service/my-auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService, MyAuthService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginDTO: LoginDTO;
  error: boolean;
  email: string;
  formErrors = {
    'email': '',
    'password': ''
  };
  validationMessages = {
    'email': {
      'required': 'Please enter your email',
      'email': 'please enter your vaild email'
    },
    'password': {
      'required': 'please enter your password',
      'pattern': 'The password must contain numbers and letters',
      'minlength': 'Please enter more than 4 characters',
      'maxlength': 'Please enter less than 25 characters',
    }
  };

  constructor(private router: Router,
              private fb: FormBuilder,
              private loginService: LoginService,
              private cookie: CookieService, ) {
  }

  ngOnInit() {
    this.interactiveFunction();
    this.buildForm();
  }
  login = () => {
    this.loginDTO = this.loginForm.value;
    this.loginService.signIn(this.loginDTO)
      .subscribe((response: ResponseToken) => {
          this.cookie.set('auth', response.accessToken);
        localStorage.setItem('auth', response.accessToken);
          this.error = false;
          this.router.navigate(['/feed']);
        }, error2 => {
          this.error = true;
        }
      );
    console.log('message');
  }

  buildForm() {
    this.loginForm = this.fb.group({
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
    });

    this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    // if (!this.userForm) {
    //   return;
    // }
    // const form = this.userForm;
    // for (const field in this.formErrors) {
    //   if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
    //     this.formErrors[field] = '';
    //     const control = form.get(field);
    //     if (control && control.dirty && !control.valid) {
    //       const messages = this.validationMessages[field];
    //       for (const key in control.errors) {
    //         if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
    //           this.formErrors[field] += messages[key] + ' ';
    //         }
    //       }
    //     }
    //   }
    // }
  }

  interactiveFunction() {
    // Variables
    const signupButton = document.getElementById('signup-button'),
      loginButton = document.getElementById('login-button'),
      signupButtonMb = document.getElementById('signup-button-mb'),
      forgetButton = document.getElementById('forget-button'),
      userForms = document.getElementById('user_options-forms');

// Add event listener to the "Sign Up" button
    signupButton.addEventListener('click', () => {
      userForms.classList.remove('show-forgotPass');
      userForms.classList.remove('bounceRight');
      userForms.classList.add('bounceLeft');
    }, false);

// Add event listener to the "Login" button
    loginButton.addEventListener('click', () => {
      userForms.classList.remove('show-forgotPass');
      userForms.classList.remove('bounceLeft');
      userForms.classList.add('bounceRight');
    }, false);

// Add event listener to the "Forget Password" button
    forgetButton.addEventListener('click', () => {
      userForms.classList.add('show-forgotPass');
      // userForms.classList.add('bounceRight');
      // userForms.classList.remove('bounceLeft');
      userForms.classList.remove('show-login');
      userForms.classList.remove('show-signup');
    }, false);

// Add event listener to the "Signup" button mobile
    signupButtonMb.addEventListener('click', () => {
      userForms.classList.remove('show-forgotPass');
      userForms.classList.remove('show-login');
      userForms.classList.add('show-signup');
    }, false);
  }
  onSubmit(form: NgForm){
    this.email = form.value.email;
    this.loginService.forgotPass(this.email).subscribe();
  }
}

