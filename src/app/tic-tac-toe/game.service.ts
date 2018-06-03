import { Injectable } from '@angular/core';
import { Player } from './tic-tac-toe.models';

const winRanges = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [1, 5, 9]
];

/**
 * Game service
 */
@Injectable()
export class GameService {

  constructor() { }

  private board = new Map<number, Player>();

  /**
   * Register a move made by the user
   */
  registerMove(cell: number, player: Player) {
    if (!player) {
      throw Error('Player must be set');
    }
    if (this.board.has(cell)) {
      throw new Error(`Position ${cell} has already been taken by player ${player.name}`);
    }
    this.board.set(cell, player);
  }

  /**
   * Checks if the player has won. Returns `true` when won, otherwise `false`
   */
  checkWin(player: Player): boolean {
    const playerCells: number[] = [];
    this.board.forEach((value, cell) => {
      if (player === value) {
        playerCells.push(cell);
      }
    });

    playerCells.sort();

    const win = winRanges.map<boolean>(range => {
      return range.every(key => playerCells.includes(key));
    }).some(bool => bool);

    return win;
  }

  clearBoard() {
    this.board.clear();
  }

  movesLeft(): boolean {
    return this.board.size >= 9;
  }
}
