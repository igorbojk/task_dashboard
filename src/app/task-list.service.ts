import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class TaskListService {

  private onDeleteCard = new Subject<any>();

  private onCardUpdated = new Subject<any>();

  private onListRemoved = new Subject<any>();

  private onAddCard = new Subject<any>();

  private onDropCard = new Subject<any>();

  private onOpenCardModal = new Subject<any>();

  constructor() {
  }

  removeList(list) {
    this.onListRemoved.next(list);
  }

  updatedLists(): Observable<any> {
    return this.onListRemoved.asObservable();
  }

  addCard(card) {
    this.onAddCard.next(card);
  }

  updateListOnAddCard(): Observable<any> {
    return this.onAddCard.asObservable();
  }

  moveCard(data) {
    this.onDropCard.next(data);
  }

  updateListOnMoveCard() {
    return this.onDropCard.asObservable();
  }

  deleteCard(cardId) {
    this.onDeleteCard.next(cardId);
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

  openCardModal(data) {
    this.onOpenCardModal.next(data);
  }

  openCardModalEvent(): Observable<any> {
    return this.onOpenCardModal.asObservable();
  }

}
