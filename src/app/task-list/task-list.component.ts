import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() list;

  @Output() removeListItem: EventEmitter<any> = new EventEmitter();

  public newCardTitle = '';

  public createdCard = false;

  public cards = [];

  constructor() {
  }

  ngOnInit() {
  }

  startCreateCard() {
    this.createdCard = true;
  }

  addCard(parent) {
    const card = {
      title: this.newCardTitle,
      parent: parent
    };
    this.cards = [...this.cards, card];
    this.cancelAddingCard();
  }

  cancelAddingCard() {
    this.newCardTitle = '';
    this.createdCard = false;
  }

  removeList() {
    this.removeListItem.emit(this.list);
  }

}
