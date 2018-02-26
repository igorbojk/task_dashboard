import {Component, OnDestroy} from '@angular/core';
import {TaskListService} from '../task-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.css']
})
export class TaskDashboardComponent implements OnDestroy {

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

  onDeleteCard: Subscription;
  onUdateCard: Subscription;


  constructor(private talkListService: TaskListService) {
    this.onDeleteCard = this.talkListService.updateListOnDeleteCard().subscribe(cardId => {
      this.cards = this.cards.filter(k => k.id !== cardId);
    });

    this.onUdateCard = this.talkListService.updateListOnUpdateCard().subscribe(card => {
      console.log('card updated');
    });
  }


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.onDeleteCard.unsubscribe();
    this.onUdateCard.unsubscribe();
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
