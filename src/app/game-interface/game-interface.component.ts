import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SendDataService } from '../services/send-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from '../interfaces/result';
import { Data } from '../interfaces/data';
import { User } from '../interfaces/user';

@Component({
	selector: 'app-game-interface',
	templateUrl: './game-interface.component.html',
	styleUrls: ['./game-interface.component.scss']
})
export class GameInterfaceComponent implements OnInit {
	delayTime: number = 2000
	selectable: boolean = true
	defaultAvatarURL: string = 'https://i0.wp.com/www.mvhsoracle.com/wp-content/uploads/2018/08/default-avatar.jpg?ssl=1'
	
	currentQuestions = {
		"question": "",
		"answers": []
	}
	users: User[] = []
	questions: Result[] = []
	score: number[] = []
	wrong: number[] = []
	count: number = 0

	constructor(
		private sendDataService: SendDataService,
		private router: Router
	){ }
	ngOnInit(): void {
		this.updateData()
		this.changeQuestion()
	}
	isWinning(userIndex) {
		let winning = false
		let highestScore = 0
		this.score.forEach((v, i) => {
			if (userIndex !== i && v > highestScore) {
				highestScore = v
			}
		})
		if (this.score[userIndex] >= highestScore) {
			winning = true
		}
		return winning
	}
	finalWinner() {
		let winners = []
		let highestScore = 0
		this.score.forEach((v, i) => {
			if (v > highestScore) {
				winners = [this.users[i]['displayName'] ? this.users[i]['displayName'] : this.users[i]['uid']]
				highestScore = v
			}
			else if (v >= highestScore) {
				winners.push(this.users[i]['displayName'] ? this.users[i]['displayName'] : this.users[i]['uid'])
				highestScore = v
			}
		})
		return `${winners.length > 1 ? 'Winners' : 'Winner'}: ${winners.toString()}`
	}
	updateData() {
		let dataObject: Data = this.sendDataService.getGameData()
		this.questions = dataObject["questions"]
		this.users = dataObject["users"]
		this.users.forEach((v) => {
			if (typeof v !== 'object') {
				this.users = []
				this.score = []
				this.wrong = []
			}
			else {
				this.score.push(0)
				this.wrong.push(0)
			}
		})
	}
	changeQuestion() {
		if (this.questions.length > 0 && this.users.length > 0) {
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
			this.updateData()
			if (this.questions.length > 0 && this.users.length > 0) {
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
		document.getElementById(correctId) ? document.getElementById(correctId).classList.add("correct") : ''
		if (this.currentQuestions["answers"][answerId] !== this.questions[this.count]["correct_answer"]) {
			console.log("Incorrect")
			this.wrong[this.count % this.users.length]++
			document.getElementById('answer' + answerId) ? document.getElementById('answer' + answerId).classList.add("incorrect") : ''
		}
		else {
			console.log("Correct")
			this.score[this.count % this.users.length]++
		}
		setTimeout(() => {
			document.getElementById(correctId) ? document.getElementById(correctId).classList.remove("correct") : ''
			document.getElementById('answer' + answerId) ? document.getElementById('answer' + answerId).classList.remove("incorrect") : ''
			if (++this.count < this.questions.length) {
				this.changeQuestion()
			}
			else {
				this.currentQuestions["question"] = ""
				this.currentQuestions["answers"] = []
				console.log(this.score)
			}
			this.selectable = true
		}, this.delayTime)

	}

}
