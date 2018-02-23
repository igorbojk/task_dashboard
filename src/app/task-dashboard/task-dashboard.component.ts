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

  public cards = [
    {
      title: 'test 1',
      parent: 'test',
      id: '_h8dug86l8'
    },
    {
      title: 'test 2',
      parent: 'test',
      id: '_2b8b7mi30'
    },
    {
      title: 'everest 1',
      parent: 'everest',
      id: '_2b8b7mi80'
    },
    {
      title: 'everest 2',
      parent: 'everest',
      id: '_2b8b7mi20'
    },
    {
      title: 'everest 3',
      parent: 'everest',
      id: '_2b8b7mi31'
    }
  ];

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
