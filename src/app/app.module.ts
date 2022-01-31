import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './service/modalService';
import { ReceiptService } from './service/receiptService';

@NgModule({
  declarations: [AppComponent, TableComponent, ModalComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [ModalService, ReceiptService],
  bootstrap: [AppComponent],
})
export class AppModule {}
