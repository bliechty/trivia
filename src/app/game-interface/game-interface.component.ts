import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SendDataService } from '../services/send-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from '../interfaces/result';

@Component({
	selector: 'app-game-interface',
	templateUrl: './game-interface.component.html',
	styleUrls: ['./game-interface.component.scss']
})
export class GameInterfaceComponent implements OnInit {
	currentQuestions = {
		"question": "",
		"answers": []
	}
	users: string[] = []
	questions: Result[] = []
	count: number = 0

	constructor(
		private sendDataService: SendDataService,
		private router: Router
	){
		this.questions = this.sendDataService.getGameData()
		this.changeQuestion()
	}
	ngOnInit(): void {
	}
	changeQuestion() {
		if (this.questions.length > 0) {
			this.currentQuestions["question"] = this.questions[this.count]["question"]
			this.currentQuestions["answers"] = this.questions[this.count]["incorrect_answers"]
			this.currentQuestions["answers"].push(this.questions[this.count]["correct_answer"])
			let j
			for (let i = this.currentQuestions["answers"].length - 1; i > 0; i--) {
				j = Math.floor(Math.random() * (i + 1))
				let temp = this.currentQuestions["answers"][i]
				this.currentQuestions["answers"][i] = this.currentQuestions["answers"][j]
				this.currentQuestions["answers"][j] = temp
			}
		}
		else {
			this.questions = this.sendDataService.getGameData()
			if (this.questions.length > 0) {
				this.changeQuestion()
			}
			else {
				this.router.navigate(['/set-up'])
			}
		}
	}
	selectAnswer(answer) {
		if (this.questions[this.count++]["correct_answer"] === answer) {
			console.log("CORRECT BRUH")
		}
		else {
			console.log("WRONG BRUH")
		}
		if (this.count < this.questions.length) {
			this.changeQuestion()
		}
		else {
			this.currentQuestions["question"] = "done"
			this.currentQuestions["answers"] = ["done"]
		}
		
	}

}
