import { TestBed, inject } from '@angular/core/testing';

import { GameService } from './game.service';
import { Player } from './tic-tac-toe.models';

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService]
    });
  });

  it('should be created', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));

  it('should not win', inject([GameService], (service: GameService) => {
    const player: Player = {
      name: 'testNoWin',
      nrOfWins: 0
    };

    service.registerMove(1, player);
    service.registerMove(3, player);
    service.registerMove(4, player);
    service.registerMove(5, player);
    service.registerMove(8, player);

    expect(service.checkWin(player)).toBe(false);
  }));

  it('should win horizontally', inject([GameService], (service: GameService) => {
    const player: Player = {
      name: 'testHorizontally',
      nrOfWins: 0
    };

    service.registerMove(4, player);
    service.registerMove(5, player);
    service.registerMove(6, player);

    expect(service.checkWin(player)).toBe(true);
  }));

  it('should win vertically', inject([GameService], (service: GameService) => {
    const player: Player = {
      name: 'testVertically',
      nrOfWins: 0
    };

    service.registerMove(1, player);
    service.registerMove(4, player);
    service.registerMove(7, player);

    expect(service.checkWin(player)).toBe(true);
  }));

  it('should win diagonally', inject([GameService], (service: GameService) => {
    const player: Player = {
      name: 'testVertically',
      nrOfWins: 0
    };

    service.registerMove(1, player);
    service.registerMove(5, player);
    service.registerMove(9, player);

    expect(service.checkWin(player)).toBe(true);
  }));
});
