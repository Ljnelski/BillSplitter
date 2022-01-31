import { Injectable } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Injectable()
export class ModalService {
    private modal: ModalComponent;

    add(modal: ModalComponent) {
        this.modal = modal;
    }

    open() {
        this.modal.open();
    }

    close() {
        this.modal.close();
    }

    remove() {
        this.modal = null;
    }
}