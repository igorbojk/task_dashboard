import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
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
import { TaskListCardComponent } from './task-list-card/task-list-card.component';
import {TaskListService} from './task-list.service';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    TaskCardFilterPipe,
    TaskListComponent,
    TaskDashboardComponent,
    TaskListCardComponent,
    ModalDialogComponent
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
    DndModule.forRoot(),
    MatDialogModule
  ],
  providers: [
    TaskListService
  ],
  entryComponents: [
    ModalDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
