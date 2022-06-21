import { Component } from '@angular/core';
import { ModalService } from './service/modalService';
import { ReceiptService } from './service/receiptService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BillSplitter';

  constructor(
    private modalService: ModalService,
    public receiptService: ReceiptService
  ) {}

  openModal() {
    this.modalService.open();
  }

  addRecieptItem() {
    this.receiptService.addItem({
      itemName: '',
      itemPrice: 0.0,
      itemCount: 1,
      itemBuyers: '',
      itemTaxed: true,
      edit: false,
    });
  }
}
