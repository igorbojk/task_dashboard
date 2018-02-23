import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.css']
})
export class TaskDashboardComponent implements OnInit {

  public lists = [
    {
      name: 'test'
    },
    {
      name: 'everest'
    }
  ];

  public cards = [];

  public newListTitle = '';
  public validationError = false;

  constructor() {
  }

  ngOnInit() {
  }

  checkValidation() {
    if (this.lists.find(i => i.name === this.newListTitle)) {
      this.validationError = true;
      return;
    }
    this.validationError = false;
  }

  addList() {
    if (this.validationError) {
      return;
    }
    const list = {
      name: this.newListTitle
    };
    this.lists.push(list);
    this.newListTitle = '';
  }

  removeList(list) {
    this.lists = this.lists.filter(i => {
      return i !== list;
    });
  }

  addCard(item) {
    this.cards = [...this.cards, item];
  }

  onDropCard(data) {
    this.cards.find((i) => {
      return i.id === data.data.dragData.id;
    }).parent = data.parent;

    this.cards = [...this.cards];

  }
}
