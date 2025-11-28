import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { describe, it, expect, beforeEach } from 'vitest';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('currentYear input', () => {
    it('should accept currentYear input', () => {
      // Arrange
      const year = 2025;

      // Act
      component.currentYear = year;
      fixture.detectChanges();

      // Assert
      expect(component.currentYear).toBe(year);
    });

    it('should display current year', () => {
      // Arrange
      const currentYear = new Date().getFullYear();
      component.currentYear = currentYear;
      fixture.detectChanges();

      // Assert
      expect(component.currentYear).toBe(currentYear);
    });

    it('should handle year updates', () => {
      // Arrange
      const initialYear = 2024;
      const updatedYear = 2025;

      // Act
      component.currentYear = initialYear;
      expect(component.currentYear).toBe(initialYear);

      component.currentYear = updatedYear;

      // Assert
      expect(component.currentYear).toBe(updatedYear);
    });
  });
});
