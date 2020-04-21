import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  google = faGoogle;
  facebook = faFacebook;

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [''],
      password: ['']
    });

    this.authService.loggedInChange.subscribe(bool => {
      if (bool) {
        this.router.navigate(['set-up']);
      }
    });
  }

  signInWithGoogle(): void {
    this.authService.loginWithGoogle();
  }

  signInWithFacebook(): void {
    this.authService.loginWithFacebook();
  }

  signup(): void {
    this.authService.signup(this.form.value.email, this.form.value.password);
  }

  signin(): void {
    this.authService.signin(this.form.value.email, this.form.value.password);
  }
}
