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

  currentYear: number = new Date().getFullYear();
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
      icon: 'assets/icons/frontend_purple.svg',
      level: 95, // percent
    },
    {
      name: 'Backend',
      icon: 'assets/icons/backend_purple.svg',
      level: 60,
    },
    {
      name: 'Server',
      icon: 'assets/icons/server_purple.svg',
      level: 40,
    },
    {
      name: 'People Skills',
      icon: 'assets/icons/softskills_purple.svg',
      level: 90,
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
    // Scroll spy: highlight navbar links
    const sectionIds = ['hero', 'about', 'projects', 'contact'];

    // Two seperate observers means no clashing on the page elements
    const scrollSpyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id');
          const link = document.querySelector(`.nav-link[href="#${id}"]`);

          if (entry.isIntersecting && link) {
            document.querySelectorAll('.nav-link').forEach((el) => {
              el.classList.remove('text-blue-400');
            });
            link.classList.add('text-blue-400');
          }
        });
      },
      {
        rootMargin: '-50% 0px -49% 0px',
        threshold: 0.01,
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) scrollSpyObserver.observe(el);
    });

    // Skills animation on scroll
    const skillObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
      },
    );

    this.skillCards.forEach((el) => skillObserver.observe(el.nativeElement));
  }
}
