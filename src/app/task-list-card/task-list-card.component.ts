import {Component, Input, OnInit} from '@angular/core';
import {TaskListService} from '../task-list.service';
import {MatDialog} from '@angular/material';
import {ModalDialogComponent} from '../modal-dialog/modal-dialog.component';
import {CardModalComponent} from '../card-modal/card-modal.component';

@Component({
  selector: 'app-task-list-card',
  templateUrl: './task-list-card.component.html',
  styleUrls: ['./task-list-card.component.css']
})
export class TaskListCardComponent implements OnInit {

  @Input() card;


  constructor(
    private talkListService: TaskListService,
            public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalDialogComponent, {
      width: '250px',
      data: {
        headerCaption: 'Are you sure?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.talkListService.deleteCard(this.card.id);
      }
    });
  }

  openInfoModal(isEditMode): void {
    const dialogRef = this.dialog.open(CardModalComponent, {
      width: '320px',
      data: {
        isEditMode: isEditMode,
        card: Object.assign({}, this.card)
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.message === 'save' && result.card !== this.card) {
        this.card = Object.assign({}, result.card);
        this.talkListService.updateCard(this.card);
      }
    });
  }

}
