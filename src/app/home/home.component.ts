import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChildren,
} from '@angular/core';

interface Project {
  title: string;
  image?: string;
  description: string;
  link?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  level: number; // 0 to 100
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  @ViewChildren('skillCard') skillCards!: QueryList<ElementRef>;
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

  skills: SkillCategory[] = [
    {
      name: 'Frontend',
      icon: 'assets/icons/frontend.png',
      level: 90, // percent
    },
    {
      name: 'Backend',
      icon: 'assets/icons/backend.png',
      level: 80,
    },
    {
      name: 'People Skills',
      icon: 'assets/icons/people.png',
      level: 75,
    },
    {
      name: 'Server',
      icon: 'assets/icons/server.png',
      level: 60,
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

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3, // triggers when about 30% visible
      },
    );

    this.skillCards.forEach((el) => observer.observe(el.nativeElement));
  }
}
