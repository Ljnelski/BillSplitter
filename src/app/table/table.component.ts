import { Component, OnInit } from '@angular/core';
import { IReceiptItem } from '../model/receiptItem';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  recepitItem: IReceiptItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
