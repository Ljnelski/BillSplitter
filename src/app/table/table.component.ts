import { Component, OnInit } from '@angular/core';
import { IReceiptItem } from '../model/receiptItem';
import { ReceiptService } from '../service/receiptService';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(public receiptService: ReceiptService) {}

  ngOnInit(): void {

  }
}
