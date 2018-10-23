import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TokenService} from '../../service/token.service';
import {UserService} from '../../service/user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Country, ParentErrorStateMatcher, PasswordValidator, PhoneValidator, UsernameValidator} from '../validators';
import {UserDTO} from '../../models/UserDTO';

export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
  public loading = false;
  userDetailsForm: FormGroup;
  accountDetailsForm: FormGroup;
  @Input() user: UserDTO;
  matching_passwords_group: FormGroup;
  country_phone_group: FormGroup;


  parentErrorStateMatcher = new ParentErrorStateMatcher();

  genders = [
    'Male',
    'Female',
    'Other'
  ];

  countries = [
    new Country('UY', 'Uruguay'),
    new Country('US', 'United States'),
    new Country('AR', 'Argentina')
  ];


  validation_messages = {
    'firstname': [
      {type: 'required', message: 'First name is required'}
    ], 'lastname': [
      {type: 'required', message: 'Last name is required'}
    ],
    'bio': [
      {type: 'maxlength', message: 'Bio cannot be more than 256 characters long'},
    ],
    'gender': [
      {type: 'required', message: 'Please select your gender'},
    ],
    'birthday': [
      {type: 'required', message: 'Please insert your birthday'},
    ],
    'phone': [
      {type: 'required', message: 'Phone is required'},
      {type: 'validCountryPhone', message: 'Phone incorrect for the country selected'}
    ]
  };

  account_validation_messages = {
    'username': [
      {type: 'required', message: 'Username is required'},
      {type: 'minlength', message: 'Username must be at least 5 characters long'},
      {type: 'maxlength', message: 'Username cannot be more than 25 characters long'},
      {type: 'pattern', message: 'Your username must contain only numbers and letters'},
      {type: 'validUsername', message: 'Your username has already been taken'}
    ],
    'email': [
      {type: 'required', message: 'Email is required'},
      {type: 'pattern', message: 'Enter a valid email'}
    ],
    'confirm_password': [
      {type: 'required', message: 'Confirm password is required'},
      {type: 'areEqual', message: 'Password mismatch'}
    ],
    'password': [
      {type: 'required', message: 'Password is required'},
      {type: 'minlength', message: 'Password must be at least 5 characters long'},
      {type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number'}
    ],
    'terms': [
      {type: 'pattern', message: 'You must accept terms and conditions'}
    ]
  };

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private tokenService: TokenService) {
  }

  ngOnInit() {
    this.loading = true;
    this.userService.getUser(this.tokenService.getUserId())
      .subscribe(value => {
          this.loading = false;
          this.user = value;
          this.user.userRole = this.tokenService.getUserRole();
          console.log(value);
        },
        error1 => {
          this.loading = false;
          console.error(error1);
        },
        () => this.createForms());

  }

  createForms() {
    // matching passwords validation
    this.matching_passwords_group = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirm_password: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    });

    // country & phone validation
    const country = new FormControl(this.countries[0], Validators.required);

    const phone = new FormControl('', {
      validators: Validators.compose([
        Validators.required,
        PhoneValidator.validCountryPhone(country)
      ])
    });

    this.country_phone_group = new FormGroup({
      country: country,
      phone: phone
    });

    // user details form validations
    this.userDetailsForm = this.fb.group({
      firstname: [this.user.firstName, Validators.required],
      lastname: [this.user.lastName, Validators.required],
      bio: ['', Validators.maxLength(256)],
      birthday: ['', Validators.required],
      gender: new FormControl(this.genders[0], Validators.required),
      country_phone: this.country_phone_group
    });


    // user links form validations
    this.accountDetailsForm = this.fb.group({
      username: new FormControl('', Validators.compose([
        UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      matching_passwords: this.matching_passwords_group,
      terms: new FormControl(false, Validators.pattern('true'))
    });

  }

  onSubmitAccountDetails(value) {
    console.log(value);
  }

  onSubmitUserDetails() {
    this.userService.updateSettings(this.user).subscribe(value1 => console.log(value1));
  }
}
