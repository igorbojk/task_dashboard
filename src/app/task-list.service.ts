import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class TaskListService {

  private onDeleteCard = new Subject<any>();

  private onCardUpdated = new Subject<any>();

  constructor() {
  }

  deleteCard(cardId) {
    this.onDeleteCard.next( cardId );
  }

  updateListOnDeleteCard(): Observable<any> {
    return this.onDeleteCard.asObservable();
  }

  updateCard(card) {
    this.onCardUpdated.next(card);
  }

  updateListOnUpdateCard(): Observable<any> {
    return this.onCardUpdated.asObservable();
  }

}
