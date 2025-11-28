import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onClose', () => {
    it('should emit close event when onClose is called', () => {
      // Arrange
      const emitSpy = vi.spyOn(component.close, 'emit');

      // Act
      component.onClose();

      // Assert
      expect(emitSpy).toHaveBeenCalled();
      expect(emitSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('close output', () => {
    it('should have close output property', () => {
      // Assert
      expect(component.close).toBeDefined();
    });

    it('should be an EventEmitter', () => {
      // Assert
      expect(component.close.emit).toBeDefined();
      expect(typeof component.close.emit).toBe('function');
    });
  });
});
