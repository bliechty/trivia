import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  google = faGoogle;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signInWithGoogle(): void {
    this.authService.loginWithGoogle();
  }
}
