import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';
import { IReceiptItem } from '../model/receiptItem';

@Injectable()
export class ReceiptService {
  private receiptItemsList: IReceiptItem[] = [];

  receiptItems: Subject<IReceiptItem[]> = new Subject();

  constructor() {}

  getItems(): Subject<IReceiptItem[]> {
    return this.receiptItems;
  }

  addItem(newItem: IReceiptItem) {
    this.receiptItemsList.push(newItem);
    this.receiptItems.next(this.receiptItemsList);
  }

  removeItem(index) {
    this.receiptItemsList.splice(index, 1);
    console.log(this.receiptItemsList);

    this.receiptItems.next(this.receiptItemsList);
  }

  updateItem(item: IReceiptItem, index: number) {
    this.receiptItemsList[index] = item;
    this.receiptItems.next(this.receiptItemsList);
  }

  editItem(index: number) {
    this.clearEdits();
    this.receiptItemsList[index].edit = true;
    this.receiptItems.next(this.receiptItemsList);
  }

  clearEdits() {
    this.receiptItemsList.forEach((item, i) => {
      this.receiptItemsList[i].edit = false;
    });
  }
}
