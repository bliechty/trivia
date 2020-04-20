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
	delayTime: number = 2000
	selectable: boolean = true
	
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
		let dataObject = this.sendDataService.getGameData()
		this.questions = dataObject["questions"]
		this.changeQuestion()
	}
	ngOnInit(): void {
	}
	changeQuestion() {
		if (this.questions.length > 0) {
			this.currentQuestions["question"] = this.questions[this.count]["question"]
			this.currentQuestions["answers"] = this.questions[this.count]["incorrect_answers"].concat(this.questions[this.count]["correct_answer"])
			if (this.currentQuestions["answers"].length > 2) {
				// Randomize the questions
				for (let i = this.currentQuestions["answers"].length - 1; i > 0; i--) {
					let j = Math.floor(Math.random() * (i + 1))
					let temp = this.currentQuestions["answers"][i]
					this.currentQuestions["answers"][i] = this.currentQuestions["answers"][j]
					this.currentQuestions["answers"][j] = temp
				}
			}
			else if (this.currentQuestions["answers"][0] === "False") {
				// Make "True" always be on top.
				let temp = this.currentQuestions["answers"][0]
				this.currentQuestions["answers"][0] = this.currentQuestions["answers"][1]
				this.currentQuestions["answers"][1] = temp
			}
		}
		else {
			let dataObject = this.sendDataService.getGameData()
			this.questions = dataObject["questions"]
			if (this.questions.length > 0) {
				this.changeQuestion()
			}
			else {
				this.router.navigate(['/set-up'])
			}
		}
	}
	selectAnswer(answerId) {
		if (this.count >= this.questions.length) return
		this.selectable = false
		let correctId = ""
		this.currentQuestions["answers"].forEach((v, i) => {
			if (v === this.questions[this.count]["correct_answer"]) {
				correctId = "answer" + i
			}
		})
		document.getElementById(correctId).classList.add("correct")
		if (this.currentQuestions["answers"][answerId] !== this.questions[this.count++]["correct_answer"]) {
			console.log("WRONG BRUH")
			document.getElementById('answer' + answerId).classList.add("incorrect")
		}
		else {
			console.log("CORRECT BRUH")
		}
		setTimeout(() => {
			document.getElementById(correctId).classList.remove("correct")
			document.getElementById('answer' + answerId).classList.remove("incorrect")
			if (this.count < this.questions.length) {
				this.changeQuestion()
			}
			else {
				this.currentQuestions["question"] = "done"
				this.currentQuestions["answers"] = ["done"]
			}
			this.selectable = true
		}, this.delayTime)

	}

}
