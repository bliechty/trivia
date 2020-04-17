import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { TriviaService } from '../services/trivia.service';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import { sameAmountValidator } from './same-amount.directive';
import { SendDataService } from '../services/send-data.service';
import { MatDialog } from '@angular/material/dialog';
import { PlayerDialogComponent } from './player-dialog/player-dialog.component';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {
  categories$: Observable<Category[]>

  game = { amount: 1, questionNum: 10, category: "any", difficulty: 'any', type: 'any' }
  playerAmount = [1, 2, 3]

  setUpForm: FormGroup;
  selected = 'any';


  constructor(
    private triviaService: TriviaService,
    private sendDataService: SendDataService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.setUpForm = new FormGroup({
      'amount': new FormControl(this.game.amount),
      'questionNum': new FormControl(this.game.questionNum, [
        Validators.required,
        Validators.max(50),
        Validators.min(1),
        sameAmountValidator
      ]),
      'category': new FormControl(this.game.category),
      'difficulty': new FormControl(this.game.difficulty),
      'type': new FormControl(this.game.type)
    }, { validators: sameAmountValidator })

    this.getCategories()
  }

  get questionNum() { return this.setUpForm.get('questionNum') }

  getCategories() {
    this.categories$ = this.triviaService.getCategoriesObservable();
  }

  chooseUser() {
    console.log(this.setUpForm.value.amount)
    if (Number(this.setUpForm.value.amount) > 1) {
      const dialogRef = this.dialog.open(PlayerDialogComponent, {
        width: '600px',
        data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      })
    }
  }

  sendData() {
    this.sendDataService.sendGameData(this.setUpForm.value)
  }

  submitForm() {
    console.log(this.setUpForm.value)
    this.sendData()
  }

}
