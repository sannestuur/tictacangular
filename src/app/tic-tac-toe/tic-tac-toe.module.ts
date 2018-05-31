import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BoardComponent } from './components';
import { ChoosePlayersComponent, GameComponent, SplashScreenComponent, WinnerComponent } from './containers';
import { GameService } from './game.service';
import { TicTacToeRoutingModule } from './tic-tac-toe-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TicTacToeRoutingModule
  ],
  declarations: [
    BoardComponent,
    ChoosePlayersComponent,
    GameComponent,
    SplashScreenComponent,
    WinnerComponent,
  ],
  providers: [
    GameService
  ]
})
export class TicTacToeModule { }
