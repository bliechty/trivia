import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  private subject = new Subject<any>();

  constructor() { }

  sendGameData(game: any[]) {
    this.subject.next({game})
  }

  clearGameData() {
    this.subject.next()
  }

  getGameData(): Observable<any> {
    return this.subject.asObservable()
  }
}
