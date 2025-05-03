import { Component, HostListener } from '@angular/core';

interface Project {
  title: string;
  image?: string;
  description: string;
  link?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  projects: Project[] = [
    {
      title: 'NeuroSpark Task App',
      image: 'assets/projects/project-placeholder.png',
      description:
        'A task-tracking app designed with focus and productivity in mind. Built with Angular, Tailwind, and localStorage.',
      link: 'https://your-app-link.com',
    },
    {
      title: 'Markdown Blog Engine',
      description:
        'A personal blog platform powered by markdown and Node.js, perfect for dev journals and writing.',
    },
    {
      title: 'Weather Widget',
      description:
        'A clean, responsive weather dashboard that uses OpenWeatherMap API and reactive forms.',
      link: 'https://your-app-link.com',
    },
  ];

  selectedProject: Project | null = null;

  animationState = 'in'; // 'in' or 'out'

  openModal(project: Project) {
    this.selectedProject = project;
    this.animationState = 'in';
  }

  closeModal() {
    this.animationState = 'out';

    setTimeout(() => {
      this.selectedProject = null;
    }, 200); // Matches fade-out duration
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent): void {
    this.closeModal();
  }
}
