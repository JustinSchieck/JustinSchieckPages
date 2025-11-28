import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('emitScrollToSection', () => {
    it('should emit sectionScroll event with correct section id', () => {
      // Arrange
      const sectionId = 'about';
      const emitSpy = vi.spyOn(component.sectionScroll, 'emit');

      // Act
      component.emitScrollToSection(sectionId);

      // Assert
      expect(emitSpy).toHaveBeenCalledWith(sectionId);
      expect(emitSpy).toHaveBeenCalledTimes(1);
    });

    it('should emit sectionScroll event for projects section', () => {
      // Arrange
      const sectionId = 'projects';
      const emitSpy = vi.spyOn(component.sectionScroll, 'emit');

      // Act
      component.emitScrollToSection(sectionId);

      // Assert
      expect(emitSpy).toHaveBeenCalledWith(sectionId);
    });

    it('should emit multiple times for different sections', () => {
      // Arrange
      const emitSpy = vi.spyOn(component.sectionScroll, 'emit');

      // Act
      component.emitScrollToSection('about');
      component.emitScrollToSection('projects');
      component.emitScrollToSection('contact');

      // Assert
      expect(emitSpy).toHaveBeenCalledTimes(3);
      expect(emitSpy).toHaveBeenNthCalledWith(1, 'about');
      expect(emitSpy).toHaveBeenNthCalledWith(2, 'projects');
      expect(emitSpy).toHaveBeenNthCalledWith(3, 'contact');
    });
  });

  describe('sectionScroll output', () => {
    it('should have sectionScroll output property', () => {
      // Assert
      expect(component.sectionScroll).toBeDefined();
    });

    it('should be an EventEmitter', () => {
      // Assert
      expect(component.sectionScroll.emit).toBeDefined();
      expect(typeof component.sectionScroll.emit).toBe('function');
    });
  });
});
