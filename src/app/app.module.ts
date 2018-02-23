import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule, MatMenuModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import {FormsModule} from '@angular/forms';
import {TaskCardFilterPipe} from './task-card-filter.pipe';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDashboardComponent } from './task-dashboard/task-dashboard.component';
import {DndModule} from 'ng2-dnd';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    TaskCardFilterPipe,
    TaskListComponent,
    TaskDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatMenuModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
