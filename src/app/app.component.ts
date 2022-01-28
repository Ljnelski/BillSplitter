import { Component } from '@angular/core';
import { ModalService } from './service/modalService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BillSplitter';

  constructor(private modalService: ModalService) {}

  openModal() {
    this.modalService.open();
  }


}
