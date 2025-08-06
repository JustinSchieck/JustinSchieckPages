import { Component, Input, Output, EventEmitter } from '@angular/core';

interface SkillCategory {
  name: string;
  icon: string;
  level: number;
  techStack?: TechItem[];
  description?: string;
}

interface TechItem {
  name: string;
  icon: string;
  proficiency?: number;
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  @Input() skillCategories: SkillCategory[] = [];

  selectedSkill: SkillCategory | null = null;

  openSkillModal(skill: SkillCategory) {
    this.selectedSkill = skill;
  }

  closeSkillModal() {
    this.selectedSkill = null;
  }
}
