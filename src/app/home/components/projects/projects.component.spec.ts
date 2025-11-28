import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';
import { describe, it, expect, beforeEach } from 'vitest';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { PROJECTS } from '../../constants/projects.constant';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('openModal', () => {
    it('should set selectedProject when openModal is called', () => {
      // Arrange
      const mockProject = PROJECTS[0];
      expect(component.selectedProject).toBeNull();

      // Act
      component.openModal(mockProject);

      // Assert
      expect(component.selectedProject).toBe(mockProject);
      expect(component.selectedProject?.title).toBe(mockProject.title);
    });

    it('should update selectedProject when called multiple times', () => {
      // Arrange
      const firstProject = PROJECTS[0];
      const secondProject = PROJECTS[1];

      // Act
      component.openModal(firstProject);
      expect(component.selectedProject).toBe(firstProject);

      component.openModal(secondProject);

      // Assert
      expect(component.selectedProject).toBe(secondProject);
      expect(component.selectedProject?.title).toBe(secondProject.title);
    });

    it('should handle project with image', () => {
      // Arrange
      const projectWithImage = PROJECTS.find((p) => p.image);

      // Act
      if (projectWithImage) {
        component.openModal(projectWithImage);

        // Assert
        expect(component.selectedProject?.image).toBeDefined();
      }
    });

    it('should handle project without image', () => {
      // Arrange
      const projectWithoutImage = PROJECTS.find((p) => !p.image);

      // Act
      if (projectWithoutImage) {
        component.openModal(projectWithoutImage);

        // Assert
        expect(component.selectedProject?.image).toBeUndefined();
      }
    });
  });

  describe('closeModal', () => {
    it('should set selectedProject to null when closeModal is called', () => {
      // Arrange
      const mockProject = PROJECTS[0];
      component.selectedProject = mockProject;
      expect(component.selectedProject).not.toBeNull();

      // Act
      component.closeModal();

      // Assert
      expect(component.selectedProject).toBeNull();
    });

    it('should remain null if closeModal is called when selectedProject is already null', () => {
      // Arrange
      expect(component.selectedProject).toBeNull();

      // Act
      component.closeModal();

      // Assert
      expect(component.selectedProject).toBeNull();
    });
  });

  describe('projects input', () => {
    it('should accept projects input', () => {
      // Arrange
      const mockProjects = PROJECTS;

      // Act
      component.projects = mockProjects;
      fixture.detectChanges();

      // Assert
      expect(component.projects).toBe(mockProjects);
      expect(component.projects.length).toBeGreaterThan(0);
    });

    it('should initialize with empty array by default', () => {
      // Arrange
      const newComponent = new ProjectsComponent();

      // Assert
      expect(newComponent.projects).toEqual([]);
    });

    it('should handle projects with links', () => {
      // Arrange
      const projectsWithLinks = PROJECTS.filter((p) => p.link);

      // Assert
      expect(projectsWithLinks.length).toBeGreaterThan(0);
      projectsWithLinks.forEach((project) => {
        expect(project.link).toBeDefined();
      });
    });
  });

  describe('modal workflow', () => {
    it('should open and close modal in sequence', () => {
      // Arrange
      const mockProject = PROJECTS[0];

      // Act & Assert - Initial state
      expect(component.selectedProject).toBeNull();

      // Act & Assert - Open modal
      component.openModal(mockProject);
      expect(component.selectedProject).toBe(mockProject);

      // Act & Assert - Close modal
      component.closeModal();
      expect(component.selectedProject).toBeNull();
    });

    it('should allow reopening modal after closing', () => {
      // Arrange
      const firstProject = PROJECTS[0];
      const secondProject = PROJECTS[1];

      // Act - Open, close, then reopen with different project
      component.openModal(firstProject);
      component.closeModal();
      component.openModal(secondProject);

      // Assert
      expect(component.selectedProject).toBe(secondProject);
    });
  });

  describe('project properties', () => {
    it('should have required properties for each project', () => {
      // Assert
      PROJECTS.forEach((project) => {
        expect(project.title).toBeDefined();
        expect(project.description).toBeDefined();
      });
    });

    it('should handle projects with multiline titles', () => {
      // Arrange
      const projectWithNewline = PROJECTS.find((p) => p.title.includes('\n'));

      // Assert
      if (projectWithNewline) {
        expect(projectWithNewline.title).toContain('\n');
      }
    });
  });
});
