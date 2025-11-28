import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Stub for ModalComponent used in tests
 */
@Component({
  selector: 'app-modal',
  template: '<ng-content></ng-content>',
})
export class ModalStubComponent {
  @Input() open = false;
  @Input() customClass = '';
  @Output() close = new EventEmitter<void>();

  triggerClose() {
    this.close.emit();
  }
}
