import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
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
    this.receiptService.receiptItems.subscribe((receiptItems) => {
      this.recieptItemForm = this._fb.group({})
      receiptItems.forEach((item) => {
        if (item.edit) {
          this.recieptItemForm = this._fb.group({
            name: this._fb.control(item.itemName),
            price: this._fb.control(item.itemPrice),
            count: this._fb.control(item.itemCount),
            buyers: this._fb.control(item.itemBuyers),
          });
        }
      });
    })   
  }

  editItem(index: number) {
    this.receiptService.editItem(index)
  }

  saveItem(index : number) {
    let newItem : IReceiptItem = {
      itemName: this.recieptItemForm.get('name').value,
      itemPrice: this.recieptItemForm.get('price').value,
      itemCount: this.recieptItemForm.get('count').value,
      itemBuyers: this.recieptItemForm.get('buyers').value,
      edit: false
    };
    console.log(newItem);
    this.receiptService.updateItem(newItem, index);
  }

  deleteItem(index: number) {
    this.receiptService.removeItem(index)
  }

  buyerValidation(newKey) {
    console.log('Called')
    console.log(newKey)
  }
}
