import { Component, OnInit } from '@angular/core';
import {UIRouter} from '@uirouter/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerTitle: string;

  constructor(
    private router: UIRouter,
  ) { }

  ngOnInit() {
    this.headerTitle = this.router.globals.params.boardId ? this.router.globals.params.boardId : 'Custom title';
  }

}
