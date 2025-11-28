import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { describe, it, expect, beforeEach } from 'vitest';
import { ModalStubComponent } from '../shared/stubs/modal.stub';
import { SKILL_CATEGORIES } from '../../constants/skill-categories.constant';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent, ModalStubComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('openSkillModal', () => {
    it('should set selectedSkill when openSkillModal is called', () => {
      // Arrange
      const mockSkill = SKILL_CATEGORIES[0];
      expect(component.selectedSkill).toBeNull();

      // Act
      component.openSkillModal(mockSkill);

      // Assert
      expect(component.selectedSkill).toBe(mockSkill);
      expect(component.selectedSkill?.name).toBe(mockSkill.name);
    });

    it('should update selectedSkill when called multiple times', () => {
      // Arrange
      const firstSkill = SKILL_CATEGORIES[0];
      const secondSkill = SKILL_CATEGORIES[1];

      // Act
      component.openSkillModal(firstSkill);
      expect(component.selectedSkill).toBe(firstSkill);

      component.openSkillModal(secondSkill);

      // Assert
      expect(component.selectedSkill).toBe(secondSkill);
      expect(component.selectedSkill?.name).toBe(secondSkill.name);
    });

    it('should handle skill with techStack', () => {
      // Arrange
      const skillWithTechStack = SKILL_CATEGORIES[0];

      // Act
      component.openSkillModal(skillWithTechStack);

      // Assert
      expect(component.selectedSkill?.techStack).toBeDefined();
      expect(component.selectedSkill?.techStack?.length).toBeGreaterThan(0);
    });
  });

  describe('closeSkillModal', () => {
    it('should set selectedSkill to null when closeSkillModal is called', () => {
      // Arrange
      const mockSkill = SKILL_CATEGORIES[0];
      component.selectedSkill = mockSkill;
      expect(component.selectedSkill).not.toBeNull();

      // Act
      component.closeSkillModal();

      // Assert
      expect(component.selectedSkill).toBeNull();
    });

    it('should remain null if closeSkillModal is called when selectedSkill is already null', () => {
      // Arrange
      expect(component.selectedSkill).toBeNull();

      // Act
      component.closeSkillModal();

      // Assert
      expect(component.selectedSkill).toBeNull();
    });
  });

  describe('skillCategories input', () => {
    it('should accept skillCategories input', () => {
      // Arrange
      const mockCategories = SKILL_CATEGORIES;

      // Act
      component.skillCategories = mockCategories;
      fixture.detectChanges();

      // Assert
      expect(component.skillCategories).toBe(mockCategories);
      expect(component.skillCategories.length).toBeGreaterThan(0);
    });

    it('should initialize with empty array by default', () => {
      // Assert
      expect(component.skillCategories).toEqual([]);
    });
  });

  describe('modal workflow', () => {
    it('should open and close modal in sequence', () => {
      // Arrange
      const mockSkill = SKILL_CATEGORIES[2];

      // Act & Assert - Initial state
      expect(component.selectedSkill).toBeNull();

      // Act & Assert - Open modal
      component.openSkillModal(mockSkill);
      expect(component.selectedSkill).toBe(mockSkill);

      // Act & Assert - Close modal
      component.closeSkillModal();
      expect(component.selectedSkill).toBeNull();
    });

    it('should allow reopening modal after closing', () => {
      // Arrange
      const firstSkill = SKILL_CATEGORIES[0];
      const secondSkill = SKILL_CATEGORIES[1];

      // Act - Open, close, then reopen with different skill
      component.openSkillModal(firstSkill);
      component.closeSkillModal();
      component.openSkillModal(secondSkill);

      // Assert
      expect(component.selectedSkill).toBe(secondSkill);
    });
  });
});
