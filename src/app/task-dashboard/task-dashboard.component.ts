import {Component, OnDestroy} from '@angular/core';
import {TaskListService} from '../task-list.service';
import {Subscription} from 'rxjs/Subscription';
import {CardModalComponent} from '../card-modal/card-modal.component';
import {MatDialog} from '@angular/material';

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
  onRemovedList: Subscription;
  onAddCard: Subscription;
  onMoveCard: Subscription;
  openCardModal: Subscription;


  constructor(private talkListService: TaskListService,
              public dialog: MatDialog) {
    this.onDeleteCard = this.talkListService.updateListOnDeleteCard()
      .subscribe(cardId => {
        this.cards = this.cards.filter(k => k.id !== cardId);
      });

    this.onUdateCard = this.talkListService.updateListOnUpdateCard()
      .subscribe(card => {
        console.log('card updated');
      });

    this.onRemovedList = this.talkListService.updatedLists()
      .subscribe(list => {
        this.lists = this.lists.filter(i => {
          return i !== list;
        });
      });

    this.onAddCard = this.talkListService.updateListOnAddCard()
      .subscribe(card => {
        this.cards = [...this.cards, card];
      });

    this.onMoveCard = this.talkListService.updateListOnMoveCard()
      .subscribe(data => {
        this.moveCard(data.data.dragData.id, data.parent);
      });
    this.openCardModal = this.talkListService.openCardModalEvent()
      .subscribe(
        data => {
          this.openCardItemModal(data);
        }
      );

  }


  ngOnDestroy() {
    this.onDeleteCard.unsubscribe();
    this.onUdateCard.unsubscribe();
    this.onRemovedList.unsubscribe();
    this.onAddCard.unsubscribe();
    this.onMoveCard.unsubscribe();
    this.openCardModal.unsubscribe();
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

  moveCard(id, parent) {
    this.cards.find((i) => {
      return i.id === id;
    }).parent = parent;

    this.cards = [...this.cards];
  }

  openCardItemModal(data) {
    const dialogRef = this.dialog.open(CardModalComponent, {
      width: '320px',
      data: {
        isEditMode: data.isEditMode,
        card: Object.assign({}, data.card),
        lists: this.lists
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.message === 'save' && result.card !== data.card) {

        const index = this.cards.findIndex((i) => {
          return i.id === result.card.id;
        });
        this.cards[index] = Object.assign({}, result.card);
        this.cards = [...this.cards];
        this.talkListService.updateCard(data.card);

      } else if (result && result.message === 'move') {
        this.moveCard(result.card.id, result.parent);
      }

    });
  }


}
