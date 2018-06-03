import { Component, OnInit } from '@angular/core';
import { GameService } from '../../game.service';
import { Player, ChoosePlayersModel } from '../../tic-tac-toe.models';

@Component({
  selector: 'ih-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  currentPlayer: Player;
  // players: ChoosePlayersModel;

  constructor(private service: GameService) { }

  ngOnInit() {
    console.log('These are the players', this.players);
  }

  makeMove(cell: number) {
    this.service.registerMove(cell, this.currentPlayer);
  }
}
