import { Component, OnInit } from '@angular/core';
import { GameService } from '../../game.service';
import { Player } from '../../tic-tac-toe.models';

@Component({
  selector: 'ih-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  currentPlayer: Player;

  constructor(private service: GameService) { }

  ngOnInit() {
  }

  makeMove(cell: number) {
    this.service.registerMove(cell, this.currentPlayer);
  }
}
