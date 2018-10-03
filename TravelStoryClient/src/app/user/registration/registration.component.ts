import { Component, OnInit } from '@angular/core';
import {ResponseToken} from '../login/ResponseToken';
import {RegistrationService} from './registration.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RegistrationDTO} from './RegistrationDTO';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [RegistrationService]
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  registrationDTO: RegistrationDTO;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private registrationService: RegistrationService,
  ) { }

  ngOnInit() {
    this.buildForm();
    console.log(this.registrationForm);
  }

  registrate = () => {
    console.log(this.registrationForm.value);
    this.registrationDTO = this.registrationForm.value;
    this.registrationService.registrate(this.registrationDTO)
      .subscribe(() => {
          this.router.navigate(['/feed']);
        }
      );
    console.log('message');
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
}}
