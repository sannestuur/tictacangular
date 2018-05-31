import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChoosePlayersModel } from '../../tic-tac-toe.models';
import { Router } from '@angular/router';

@Component({
  selector: 'ih-choose-players',
  templateUrl: './choose-players.component.html',
  styleUrls: ['./choose-players.component.scss']
})
export class ChoosePlayersComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
    /*, private gameService: GameService*/) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      player1: ['', [Validators.required]],
      player2: ['', [Validators.required]]
    });
  }

  submit(value: ChoosePlayersModel) {
    console.log('Choose players from submitted with', value);
    this.router.navigate(['game']);
  }

}
