import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-dang-nhap',
  templateUrl: './form-dang-nhap.component.html',
  styleUrls: ['./form-dang-nhap.component.css']
})
export class FormDangNhapComponent implements OnInit {
  loginForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

}
