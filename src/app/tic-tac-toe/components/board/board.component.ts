import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ih-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Output() makeMove = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  move(cell: number) {
    this.makeMove.emit(cell);
  }
}
