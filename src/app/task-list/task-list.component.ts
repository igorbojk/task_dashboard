import {Component, Input, OnInit} from '@angular/core';
import {ModalDialogComponent} from '../modal-dialog/modal-dialog.component';
import {MatDialog} from '@angular/material';
import {TaskListService} from '../task-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() list;

  @Input() cards;


  public newCardTitle = '';

  public createdCard = false;



  constructor(
    public dialog: MatDialog,
    private taskListService: TaskListService) {
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
    this.taskListService.addCard(card);
  }

  cancelAddingCard() {
    this.newCardTitle = '';
    this.createdCard = false;
  }

  onDrop(data, parent) {
    this.taskListService.moveCard({data: data, parent: parent});
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
        this.taskListService.removeList(this.list);
      }
    });
  }



}
