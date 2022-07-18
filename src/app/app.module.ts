import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './service/modalService';
import { ReceiptService } from './service/receiptService';
import { ResultsComponent } from './results/results.component';
import { TestComponent } from './test/test.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ModalComponent,
    ResultsComponent,
    TestComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, BrowserAnimationsModule, DragDropModule],
  providers: [ModalService, ReceiptService],
  bootstrap: [AppComponent],
})
export class AppModule {}
