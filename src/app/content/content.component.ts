import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public lists = [
    'test'
  ];



  public newListTitle = '';


  constructor() {
  }

  ngOnInit() {
  }

  addList(value) {
    this.lists.push(this.newListTitle);
    this.newListTitle = '';
  }

  removeList(list) {
    this.lists = this.lists.filter(i => {
      return i !== list;
    });
  }



}
