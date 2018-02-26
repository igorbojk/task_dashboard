import {Component, Input, OnInit} from '@angular/core';
import {TaskListService} from '../task-list.service';
import {MatDialog} from '@angular/material';
import {ModalDialogComponent} from '../modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-task-list-card',
  templateUrl: './task-list-card.component.html',
  styleUrls: ['./task-list-card.component.css']
})
export class TaskListCardComponent implements OnInit {

  @Input() card;

  public cardEditing = false;
  public editingCard = {};

  constructor(
    private talkListService: TaskListService,
            public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  startEditCard() {
    this.cardEditing = true;
    this.editingCard = Object.assign({}, this.card);
  }

  saveCard() {
    this.card = Object.assign({}, this.editingCard);
    this.talkListService.updateCard(this.card);
    this.cardEditing = false;
  }

  cancelEdit() {
    this.editingCard = {};
    this.cardEditing = false;
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

}
