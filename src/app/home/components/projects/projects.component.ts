import { Component, Input } from '@angular/core';

interface Project {
  title: string;
  image?: string;
  description: string;
  link?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  @Input() projects: Project[] = [];

  selectedProject: Project | null = null;

  openModal(project: Project) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }
}
