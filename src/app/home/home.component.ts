import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Container, ILoadParams, tsParticles } from '@tsparticles/engine';
import { NgParticlesService } from '@tsparticles/angular';
import { loadFull } from 'tsparticles';

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
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChildren('skillCard') skillCards!: QueryList<ElementRef>;
  currentYear: number = new Date().getFullYear();
  id = 'tsparticles';
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

  particlesOptions = {
    fullScreen: {
      enable: false, // Disable full screen to keep within section
      zIndex: 0,
    },
    particles: {
      number: {
        value: 100,
      },
      color: {
        value: '#ffffff',
      },
      links: {
        enable: true,
        distance: 100,
        color: '#ffffff',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: {
          min: 2,
          max: 3,
        },
      },
    },
    background: {
      color: 'transparent',
    },
  };

  selectedProject: Project | null = null;

  animationState = 'in'; // 'in' or 'out'
  constructor(private readonly ngParticlesService: NgParticlesService) {}

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

  ngOnInit(): void {
    this.ngParticlesService.init(async () => {
      await loadFull(tsParticles);

      await tsParticles.load({
        id: 'tsparticles', // Matches the div id in HTML
        ...this.particlesOptions,
      });
    });
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }
}
