import {Component, OnInit} from '@angular/core';
import {FormDangKy} from './form-dang-ky';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidateUtils} from './validate-utils';


@Component({
  selector: 'app-form-dang-ky',
  templateUrl: './form-dang-ky.component.html',
  styleUrls: ['./form-dang-ky.component.css']
})
export class FormDangKyComponent implements OnInit {
  registerFrom: FormGroup;
  validateUtils = new ValidateUtils();

  constructor() {
  }

  ngOnInit(): void {
    this.registerFrom = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pwGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      }, this.validateUtils.checkPass),
      country: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, this.validateUtils.check18]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
    });
  }

  onSubmit() {
    console.log(this.registerFrom);
  }

}
