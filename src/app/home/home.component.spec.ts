import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ModalStubComponent } from './components/shared/stubs/modal.stub';

const IntersectionObserverMock = vi.fn(
  class {
    disconnect = vi.fn();
    observe = vi.fn();
    takeRecords = vi.fn();
    unobserve = vi.fn();
  },
);
vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, ModalStubComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA], // Allow custom elements like app-header, app-hero, etc.
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('scrollToSection', () => {
    it('should scroll to element when it exists', () => {
      // Arrange
      const mockElement = document.createElement('div');
      mockElement.id = 'test-section';
      mockElement.scrollIntoView = vi.fn();
      document.body.appendChild(mockElement);

      // Act
      component.scrollToSection('test-section');

      // Assert
      expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
        behavior: 'smooth',
        block: 'start',
      });

      // Cleanup
      document.body.removeChild(mockElement);
    });

    it('should handle non-existent element gracefully', () => {
      // Act & Assert - should not throw error
      expect(() => component.scrollToSection('non-existent')).not.toThrow();
    });
  });

  describe('modal handlers', () => {
    it('should open modal with selected project', () => {
      // Arrange
      const mockProject = component.projects[0];
      expect(component.selectedProject).toBeNull();

      // Act
      component.openModal(mockProject);

      // Assert
      expect(component.selectedProject).toBe(mockProject);
    });

    it('should close modal and reset selectedProject', () => {
      // Arrange
      const mockProject = component.projects[0];
      component.selectedProject = mockProject;

      // Act
      component.closeModal();

      // Assert
      expect(component.selectedProject).toBeNull();
    });
  });

  describe('onEscape', () => {
    it('should close modal when escape is pressed and modal is open', () => {
      // Arrange
      const mockProject = component.projects[0];
      component.selectedProject = mockProject;
      expect(component.selectedProject).not.toBeNull();

      // Act
      component.onEscape();

      // Assert
      expect(component.selectedProject).toBeNull();
    });

    it('should do nothing when escape is pressed and modal is closed', () => {
      // Arrange
      expect(component.selectedProject).toBeNull();

      // Act
      component.onEscape();

      // Assert
      expect(component.selectedProject).toBeNull();
    });
  });

  describe('data initialization', () => {
    it('should initialize with skillCategories', () => {
      expect(component.skillCategories).toBeDefined();
      expect(component.skillCategories.length).toBeGreaterThan(0);
    });

    it('should initialize with projects', () => {
      expect(component.projects).toBeDefined();
      expect(component.projects.length).toBeGreaterThan(0);
    });

    it('should set currentYear to current year', () => {
      const currentYear = new Date().getFullYear();
      expect(component.currentYear).toBe(currentYear);
    });
  });

  describe('ngAfterViewInit', () => {
    it('should set up IntersectionObserver for scroll spy', () => {
      // Arrange
      const sectionIds = ['hero', 'about', 'projects', 'contact'];

      // Act
      component.ngAfterViewInit();

      // Assert
      expect(IntersectionObserverMock).toHaveBeenCalled();
    });
  });
});
