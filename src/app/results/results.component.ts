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

  ngOnInit(): void {
    this.receiptService.receiptItems.subscribe((items) => {
      this.resultData = {}
      items.forEach((item) => {
        let buyers = [...item.itemBuyers];
        buyers.forEach((char) => {
          console.log(item.itemPrice)
          console.log(buyers.length)
          console.log('price',item.itemPrice / buyers.length)
          if(!this.resultData[char]) {
            console.log('awdawdaw')
            this.resultData[char] = 0
          }
          this.resultData[char] += <number>item.itemPrice / buyers.length;
        });
      });
    console.log(this.resultData);      
    });
  }
}
