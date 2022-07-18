import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { distinctUntilChanged, take } from 'rxjs';;
import { IReceiptItem } from '../model/receiptItem';
import { ReceiptService } from '../service/receiptService';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  recieptItemForm: FormGroup;

  constructor(
    public receiptService: ReceiptService,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.recieptItemForm = this._fb.group({});
    this.recieptItemForm = this._fb.group({
      name: this._fb.control(null),
      price: this._fb.control(null),
      count: this._fb.control(null),
      buyers: this._fb.control(null),
      taxed: this._fb.control(null),
    });

    this.recieptItemForm
      .get('buyers')
      .valueChanges.pipe(distinctUntilChanged())
      .subscribe((changes) => this.buyerValidation(changes));

    this.receiptService.receiptItems.subscribe((receiptItems) => {
      let editedItem = receiptItems.filter((item) => item.edit)[0];

      if (editedItem) {
        console.log('editing Item');
        this.recieptItemForm.setValue({
          name: editedItem.itemName,
          price: editedItem.itemPrice,
          count: editedItem.itemCount,
          buyers: editedItem.itemBuyers,
          taxed: editedItem.itemTaxed,
        });
      }
    });
  }

  editItem(index: number) {
    this.receiptService.editItem(index);
  }

  saveItem(index: number) {
    let newItem: IReceiptItem = {
      itemName: this.recieptItemForm.get('name').value,
      itemPrice: this.recieptItemForm.get('price').value,
      itemCount: this.recieptItemForm.get('count').value,
      itemBuyers: this.recieptItemForm.get('buyers').value,
      itemTaxed: this.recieptItemForm.get('taxed').value,
      edit: false,
    };
    this.receiptService.updateItem(newItem, index);
  }

  deleteItem(index: number) {
    this.receiptService.removeItem(index);
  }

  buyerValidation(value) {
    let trimmedValue = value
      .split('')
      .filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');

    trimmedValue = trimmedValue.toUpperCase();
    this.recieptItemForm.get('buyers').setValue(trimmedValue);
  }

  dropItem(event: CdkDragDrop<string[]>) {
    this.receiptService.switchItems(event.previousIndex, event.currentIndex);
  }

  mouseEnter() {
    console.log("EnterSpot");
  }

  mouseLeave() {
    console.log("LeaveSpot");
  }
}
