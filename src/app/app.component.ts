import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'trivia';

  loggedIn: boolean;
  firstName: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.loggedInChange.subscribe(bool => {
      this.loggedIn = bool;
    });

    this.authService.firstNameChange.subscribe(firstName => {
      this.firstName = firstName;
    });
  }

  logout() {
    this.authService.logout();
  }
}
