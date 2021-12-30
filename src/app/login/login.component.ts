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
  constructor(private router: Router, private authService: AuthService) {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.passwordFormControl = new FormControl('', [Validators.required]);
    this.loginForm = new FormGroup({
      email: this.emailFormControl,
      pwd: this.passwordFormControl,
    });
  }

  ngOnInit() {
    this.authService.authentication.subscribe((data) => {
      data
        ? this.router.navigate(['/mortgage'])
        : this.router.navigate(['/login']);
    });
  }

  onAuthentication() {
    this.authService.authenticate(this.loginForm.value);
  }
}
