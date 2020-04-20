import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { TriviaService } from 'src/app/services/trivia.service';

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.scss']
})
export class PlayerDialogComponent implements OnInit {
  players;
  playersPlaying = [];
  nextPlayer = false;

  constructor(
    public dialogRef: MatDialogRef<PlayerDialogComponent>,
    private authService: AuthService,
    private triviaService: TriviaService,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
    console.log(this.data.amount)
    this.triviaService.getAllUsersObservable()
      .subscribe(players => {
        let filtered = players.filter(player => player.uid !== this.authService.user.uid)

        this.players = filtered
      })
  }

  playerClicked(player) {
    if (Number(this.data.amount) <= 2) {
      this.dialogRef.close(player);
    } else {
      let filtered= this.players.filter(chosenPlayer => chosenPlayer.uid !== player.uid)
      // this.players = filtered
      console.log("make the players already chosen to be disabled")
      this.nextPlayer = true
      this.playersPlaying.push(player)
      console.log("need to make it so you can add more than one player")
      // this.dialogRef.close(this.playersPlaying)

    }
  }

  onCancel() {
    this.dialogRef.close("canceled")
  }

}
