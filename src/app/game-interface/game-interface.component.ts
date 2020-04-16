import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SendDataService } from '../services/send-data.service';

@Component({
	selector: 'app-game-interface',
	templateUrl: './game-interface.component.html',
	styleUrls: ['./game-interface.component.scss']
})
export class GameInterfaceComponent implements OnInit {
	answers: string[] = ["a", "b", "c", "d"]

	data: any[] = [];
	subscription: Subscription;

	constructor(private sendDataService: SendDataService) {
		this.subscription = this.sendDataService.getGameData().subscribe(newData => {
			if (newData) {
				this.data = newData;
			} else {
				this.data = [];
			}
			console.log(this.data)
		});
	}
	ngOnInit(): void {
	}

}
