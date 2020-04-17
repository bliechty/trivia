import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  google = faGoogle;
  facebook = faFacebook;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signInWithGoogle(): void {
    this.authService.loginWithGoogle();
  }

  signInWithFacebook(): void {
    this.authService.loginWithFacebook();
  }
}
