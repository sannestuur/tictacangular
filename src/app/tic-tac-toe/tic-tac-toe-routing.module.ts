import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoosePlayersComponent, GameComponent, WinnerComponent } from './containers';

const routes: Routes = [
  {
    path: 'choose-players',
    component: ChoosePlayersComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'winner',
    component: WinnerComponent
  },
  {
    path: '',
    redirectTo: 'choose-players'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicTacToeRoutingModule { }
