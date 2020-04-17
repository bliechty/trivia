import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  data;

  constructor() { }

  sendGameData(game: any[]) {
    this.data=game
  }

  // clearGameData() {
  //   this.subject.next()
  // }

  getGameData() {
    return this.data
  }
}
