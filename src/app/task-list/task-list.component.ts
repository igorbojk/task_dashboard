import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() list;

  @Input() cards;

  @Output() removeListItem: EventEmitter<any> = new EventEmitter();
  @Output() addCardItem: EventEmitter<any> = new EventEmitter();
  @Output() onDropCardItem: EventEmitter<any> = new EventEmitter();

  public newCardTitle = '';

  public createdCard = false;



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
      parent: parent.name,
      id: '_' + Math.random().toString(36).substr(2, 9)
    };
    this.cancelAddingCard();
    this.addCardItem.emit(card);
  }

  cancelAddingCard() {
    this.newCardTitle = '';
    this.createdCard = false;
  }

  removeList() {
    this.removeListItem.emit(this.list);
  }

  onDrop(data, parent) {
    this.onDropCardItem.emit({data: data, parent: parent});
  }



}
