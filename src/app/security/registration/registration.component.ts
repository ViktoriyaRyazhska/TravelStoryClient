import {Component, OnInit} from '@angular/core';
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
    private registrationService: RegistrationService
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
}
