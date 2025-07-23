import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  @Input() skillCategories: any[] = [];
  @Input() selectedSkill: any;
  @Input() skillAnimationState: string = '';
  @Output() openSkillModal = new EventEmitter<any>();
  @Output() closeSkillModal = new EventEmitter<void>();
}
