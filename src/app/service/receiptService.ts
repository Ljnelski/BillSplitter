import { Injectable } from "@angular/core";
import { IReceiptItem } from "../model/receiptItem";

@Injectable()
export class ReceiptService {
    receiptItems: IReceiptItem[] = [
        {
            itemName: "fuck",
            itemPrice: 9.99,
            itemCount: 1,
            itemBuyers: 'LJ'
        },
        {
            itemName: "fuck",
            itemPrice: 9.99,
            itemCount: 1,
            itemBuyers: 'LJ'
        },
        {
            itemName: "fuck",
            itemPrice: 9.99,
            itemCount: 1,
            itemBuyers: 'LJ'
        },
    ];

    addItem(newItem : IReceiptItem) {
        this.receiptItems.push(newItem);
    }

    removeItem(index) {
        this.receiptItems = this.receiptItems.splice(index, 1);
    }

    getItems() : IReceiptItem[] {
        return this.receiptItems
    }
}