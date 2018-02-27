import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {TaskListService} from '../task-list.service';


@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css']
})
export class CardModalComponent implements OnInit {
  public card;

  constructor(public dialogRef: MatDialogRef<CardModalComponent>,
              private taskListService: TaskListService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.card = Object.assign({}, this.data.card);
  }

  save(): void {
    this.data.card = Object.assign({}, this.card);
    this.taskListService.updateCard(this.data.card);
    this.dialogRef.close();
  }

  delete(): void {
    this.taskListService.deleteCard(this.data.card.id);
    this.dialogRef.close();
  }

  move(id, parent) {
    this.taskListService.moveCard({id: id, parent: parent});
    this.dialogRef.close();
  }

  changeBorderColor(color) {
    this.card.borderColor = color;
    this.data.card = Object.assign({}, this.card);
    this.taskListService.updateCard(this.data.card);
  }

  edit() {
    this.data.isEditMode = true;
  }

  cancel() {
    this.data.isEditMode = false;
    this.card.title = this.data.card.title;
  }

  saveTitle() {
    this.data.card.title = this.card.title;
    this.data.card = Object.assign({}, this.card);
    this.taskListService.updateCard(this.data.card);
    this.data.isEditMode = false;
  }


}
