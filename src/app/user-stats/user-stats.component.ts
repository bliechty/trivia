import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { TriviaService } from '../services/trivia.service';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss']
})
export class UserStatsComponent implements OnInit {

  public player$: Observable<User>;

  constructor(private db: AngularFirestore) {
    this.player$ = this.db.doc<User>('').valueChanges();
   }

  ngOnInit(): void {
  }

}
