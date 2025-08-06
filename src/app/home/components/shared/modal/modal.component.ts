import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() open = false;
  @Input() customClass = '';
  @Output() close = new EventEmitter<void>();

  onClose(event?: Event) {
    event?.stopPropagation();
    this.close.emit();
  }
}
