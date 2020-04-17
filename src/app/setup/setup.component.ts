import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { TriviaService } from '../services/trivia.service';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../interfaces/category';
import { sameAmountValidator } from './same-amount.directive';
import { SendDataService } from '../services/send-data.service';
import { MatDialog } from '@angular/material/dialog';
import { PlayerDialogComponent } from './player-dialog/player-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from '../interfaces/result';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {
  categories: Category[];
  questions: Array<Result>;

  categoriesSubscription: Subscription;

  game = { amount: 1, questionNum: 10, category: "any", difficulty: null, type: null };
  playerAmount = [1, 2, 3];

  setUpForm: FormGroup;
  selected = 'any';

  constructor(
    private triviaService: TriviaService,
    private sendDataService: SendDataService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categories = this.route.snapshot.data.categories
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

  ngOnDestroy() {
    this.categoriesSubscription.unsubscribe();
  }

  get questionNum() { return this.setUpForm.get('questionNum') }

  getCategories() {
    this.categoriesSubscription = this.triviaService.getCategoriesObservable()
      .subscribe(categories => this.categories = categories);
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
      });
    }
  }

  sendData(dataArray) {
    this.sendDataService.sendGameData(dataArray);
  }

  submitForm() {
    if(this.setUpForm.value.category === "any"){
      this.setUpForm.value.category = null
    }
    this.triviaService.getQuestionsObservable(
      this.setUpForm.value.questionNum,
      this.setUpForm.value.category,
      this.setUpForm.value.difficulty,
      this.setUpForm.value.type
      ).subscribe(questions => {
        this.questions = questions
        if(this.questions !== []) {
          this.router.navigate(['/game'])
          this.sendData(this.questions)
        }
        else {
          console.log('error')
        }
      });
    
  }

}
