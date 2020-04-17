import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SendDataService } from '../services/send-data.service';

@Component({
	selector: 'app-game-interface',
	templateUrl: './game-interface.component.html',
	styleUrls: ['./game-interface.component.scss']
})
export class GameInterfaceComponent implements OnInit {
	subscription: Subscription;

	currentQuestions = {
		"question": "",
		"answers": []
	}
	users: string[] = [""]
	questions: any[] = [{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?","correct_answer":"Demolition","incorrect_answers":["The Dream Team","The Bushwhackers","The British Bulldogs"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?","correct_answer":"Key","incorrect_answers":["Sword","Pen","Cellphone"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"On a dartboard, what number is directly opposite No. 1?","correct_answer":"19","incorrect_answers":["20","12","15"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Who is depicted on the US hundred dollar bill?","correct_answer":"Benjamin Franklin","incorrect_answers":["George Washington","Abraham Lincoln","Thomas Jefferson"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"The New York Times slogan is, &ldquo;All the News That&rsquo;s Fit to&hellip;&rdquo;","correct_answer":"Print","incorrect_answers":["Digest","Look","Read"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What is Tasmania?","correct_answer":"An Australian State","incorrect_answers":["A flavor of Ben and Jerry&#039;s ice-cream","A Psychological Disorder","The Name of a Warner Brothers Cartoon Character"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Terry Gilliam was an animator that worked with which British comedy group?","correct_answer":"Monty Python","incorrect_answers":["The Goodies&lrm;","The League of Gentlemen&lrm;","The Penny Dreadfuls"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"If you are caught &quot;Goldbricking&quot;, what are you doing wrong?","correct_answer":"Slacking","incorrect_answers":["Smoking","Stealing","Cheating"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"How many furlongs are there in a mile?","correct_answer":"Eight","incorrect_answers":["Two","Four","Six"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"When one is &quot;envious&quot;, they are said to be what color?","correct_answer":"Green","incorrect_answers":["Red","Blue","Yellow"]}]
	count: number = 0

	constructor(private sendDataService: SendDataService) {
		/*
		this.subscription = this.sendDataService.getGameData().subscribe(newData => {
			if (newData) {
				this.data = newData;
			} else {
				this.data = [];
			}
			console.log(this.data)
		});
		*/
		this.changeQuestion()
	}
	ngOnInit(): void {
	}
	changeQuestion() {
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
