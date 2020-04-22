import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { User } from '../interfaces/user';
import { TriviaService } from '../services/trivia.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss']
})
export class UserStatsComponent implements OnInit {
  player: User;

  worstCategories: string[];
  bestCategories: string[];

  currentUserSubscription: Subscription;

  defaultAvatarURL: string = 'https://i0.wp.com/www.mvhsoracle.com/wp-content/uploads/2018/08/default-avatar.jpg?ssl=1';

  constructor(
    private triviaService: TriviaService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.userIdChange.subscribe(id => {
      if (id !== '') {
        this.currentUserSubscription = this.triviaService.getCurrentUserObservable(id).subscribe(user => {
          let cH;
          let cL;
          let cHR: string[] = [];
          let cLR: string[] = [];

          for (let cA of user.categoryAnswers) {
            const ratio = (cA.answeredCorrectly / cA.answeredIncorrectly).toFixed(1);
            if (!cH && !cL) {
              cH = cL = ratio;
            }

            if (cH === ratio) {
              cHR.push(cA.category);
            } else if (cH < ratio) {
              cH = ratio;
              cHR = [cA.category];
            }

            if (cL === ratio) {
              cLR.push(cA.category);
            } else if (cL > ratio) {
              cL = ratio;
              cLR = [cA.category];
            }
          }

          if (user.categoryAnswers.length !== 0) {
            this.bestCategories = cHR;
            this.worstCategories = cLR;
          }

          this.player = user;
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }

  getDefaultUsername(email: string): string {
    return email.replace(/@.+/, '');
  }
}
