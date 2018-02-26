import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {ModalDialogComponent} from '../modal-dialog/modal-dialog.component';
import {MatDialog} from '@angular/material';

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



  constructor(public dialog: MatDialog) {
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

  onDrop(data, parent) {
    this.onDropCardItem.emit({data: data, parent: parent});
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
        this.removeListItem.emit(this.list);
      }
    });
  }



}
