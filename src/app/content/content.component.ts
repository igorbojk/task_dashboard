import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public lists = [];

  public newCardTitle = '';

  constructor() {
  }

  ngOnInit() {
  }

  addList(value) {
    this.lists.push(this.newCardTitle);
    this.newCardTitle = '';
  }
}
