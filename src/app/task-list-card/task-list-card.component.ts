import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-list-card',
  templateUrl: './task-list-card.component.html',
  styleUrls: ['./task-list-card.component.css']
})
export class TaskListCardComponent implements OnInit {

  @Input() card;

  public cardEditing = false;

  constructor() { }

  ngOnInit() {
  }

  startEditCard() {
    this.cardEditing = true;
  }

  saveCard() {
    this.cardEditing = false;
  }

}
