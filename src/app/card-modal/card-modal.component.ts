import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css']
})
export class CardModalComponent implements OnInit {
  public title = '';
  constructor(
    public dialogRef: MatDialogRef<CardModalComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
      this.title = this.data.card.title;
    }

  // onNoClick(): void {
  //   console.log('No');
  //   this.dialogRef.close();
  // }
  // onYesClick(): void {
  //   console.log('Yes');
  //   this.dialogRef.close();
  // }

}
