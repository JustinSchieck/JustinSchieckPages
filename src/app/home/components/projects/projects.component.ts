import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  @Input() projects: any[] = [];
  @Input() selectedProject: any;
  @Output() openModal = new EventEmitter<any>();
  @Output() closeModal = new EventEmitter<void>();
}
