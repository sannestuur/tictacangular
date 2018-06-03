import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { BoardComponent } from '../../components';
import { GameService } from '../../game.service';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  const gameService = jasmine.createSpyObj('GameService', ['registerMove']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent, BoardComponent ],
      providers: [
        {provide: GameService, gameService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
