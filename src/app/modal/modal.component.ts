import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';
import { ModalService } from '../service/modalService';
import { ReceiptService } from '../service/receiptService';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
  private element: any;
  newItemForm: FormGroup;

  constructor(
    private modalService: ModalService,
    private el: ElementRef,
    private _fb: FormBuilder,
    private receiptService: ReceiptService
  ) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    document.body.appendChild(this.element);

    this.element.addEventListener('click', (el) => {
      if (el.target.className === 'modal') {
        this.close();
      }
    });

    this.newItemForm = this._fb.group({
      name: this._fb.control(''),
      price: this._fb.control(0),
      count: this._fb.control(1),
      buyers: this._fb.control(''),
      taxed: this._fb.control(true),
    });

    this.newItemForm
    .get('buyers')
    .valueChanges.pipe(distinctUntilChanged())
    .subscribe((changes) => this.buyerValidation(changes));

    this.modalService.add(this);
    this.close();
  }

  ngOnDestroy(): void {
    this.element.remove();
    this.modalService.remove();
  }

  buyerValidation(value) {
    let trimmedValue = value
      .split('')
      .filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');

    trimmedValue = trimmedValue.toUpperCase();
    this.newItemForm.get('buyers').setValue(trimmedValue);
  }

  addItem() {
    console.log('Added item:', {
      itemName: this.newItemForm.get('name').value,
      itemPrice: this.newItemForm.get('price').value,
      itemCount: this.newItemForm.get('count').value,
      itemBuyers: this.newItemForm.get('buyers').value,
      itemTaxed: this.newItemForm.get('taxed').value,
      edit: false,
    });
    this.receiptService.addItem({
      itemName: this.newItemForm.get('name').value,
      itemPrice: this.newItemForm.get('price').value,
      itemCount: this.newItemForm.get('count').value,
      itemBuyers: this.newItemForm.get('buyers').value,
      itemTaxed: this.newItemForm.get('taxed').value,
      edit: false,
    });

    this.close();
  }

  open() {
    this.newItemForm.setValue({
      name: '',
      price: 0,
      count: 1,
      buyers: '',
      taxed: true,
    });
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  close() {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}
