import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from '../service/modalService';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef,) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    document.body.appendChild(this.element);

    this.element.addEventListener('click', (el) => {
      if (el.target.className === 'modal') {
        this.close();
      }
    });

    this.modalService.add(this);

    this.close();
  }

  ngOnDestroy(): void {
    this.element.remove();
    this.modalService.remove();
  }

  open() {
    this.element.style.display = 'block';
    console.log(this.element.style.display);
    document.body.classList.add('modal-open');
  }

  close() {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}
