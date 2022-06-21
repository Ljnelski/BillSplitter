import { Component, OnInit } from '@angular/core';
import { ReceiptService } from '../service/receiptService';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  constructor(private receiptService: ReceiptService) {}
  resultData: { [key: string]: number } = {};
  total = 0;

  ngOnInit(): void {
    this.receiptService.receiptItems.subscribe((items) => {
      if (items.length < 1) return;
      this.resultData = {};
      this.total = 0;
      items.forEach((item) => {
        let buyers = [...item.itemBuyers];
        buyers.forEach((char) => {
          if (!this.resultData[char]) {
            console.log('awdawdaw');
            this.resultData[char] = 0;
          }
          if (item.itemTaxed) {
            this.resultData[char] +=
              (<number>item.itemCount * item.itemPrice * 1.13) / buyers.length;
          } else {
            this.resultData[char] +=
              (<number>item.itemCount * item.itemPrice) / buyers.length;
          }
        });
        if (item.itemTaxed) {
          this.total += item.itemPrice * item.itemCount * 1.13;
        } else {
          this.total += item.itemPrice * item.itemCount;
        }
      });
      console.log(this.resultData);
    });
  }
}
