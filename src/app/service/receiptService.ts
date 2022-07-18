import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { Subject, of, from } from 'rxjs';
import { IReceiptItem } from '../model/receiptItem';

@Injectable()
export class ReceiptService {
  private receiptItemsList: IReceiptItem[] = [];

  receiptItems: Subject<IReceiptItem[]> = new Subject();

  constructor() {}

  
  getItems(): Subject<IReceiptItem[]> {
    return this.receiptItems;
  }

  switchItems(fromIndex: number, toIndex: number) {
    moveItemInArray(this.receiptItemsList, fromIndex, toIndex);
    this.updateObservable();
  }

  updateObservable() {
    this.receiptItems.next(this.receiptItemsList);
  }

  addItem(newItem: IReceiptItem) {
    this.receiptItemsList.push(newItem);
    this.updateObservable();
  }

  removeItem(index) {
    this.receiptItemsList.splice(index, 1);
    console.log(this.receiptItemsList);

    this.updateObservable();
  }

  updateItem(item: IReceiptItem, index: number) {
    this.receiptItemsList[index] = item;
    this.updateObservable();
  }

  editItem(index: number) {
    this.clearEdits();
    this.receiptItemsList[index].edit = true;
    this.updateObservable();
  }

  clearEdits() {
    this.receiptItemsList.forEach((item, i) => {
      this.receiptItemsList[i].edit = false;
    });
  }


}
