import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { CustomErrorStateMatcher } from '../shared/models/error-matcher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  emailFormControl: FormControl;
  passwordFormControl: FormControl;
  matcher = new CustomErrorStateMatcher();
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.createFormControls();
    this.loginForm = new FormGroup({
      email: this.emailFormControl,
      pwd: this.passwordFormControl,
    });

    this.authService.authentication.subscribe((data) => {
      data
        ? this.router.navigate(['/mortgage'])
        : this.router.navigate(['/login']);
    });
  }

  createFormControls() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.passwordFormControl = new FormControl('', [Validators.required]);
  }
  onAuthentication() {
    this.authService.authenticate(this.loginForm.value);
  }
}
