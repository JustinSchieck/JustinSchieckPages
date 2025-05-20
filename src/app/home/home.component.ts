import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ViewportScroller } from '@angular/common';

import { Container, ILoadParams, tsParticles } from '@tsparticles/engine';
import { NgParticlesService } from '@tsparticles/angular';
import { loadFull } from 'tsparticles';

interface Project {
  title: string;
  image?: string;
  description: string;
  link?: string;
}

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
      image: 'assets/projects/tasklist.png',
      description:
        'A task-tracking app designed with focus and productivity in mind and utilization for those with memory issues or disablilties. Built with Angular, Tailwind, and using localStorage. Future plans are to add database connections to the app allowing for user authentication, multiple task lists as well as long term task storage',
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

  // Extended skill categories with detailed information
  skills: SkillCategory[] = [
    {
      name: 'Frontend',
      icon: 'assets/icons/frontend_purple.svg',
      level: 95,
      description:
        'I specialize in building responsive, accessible, and performant user interfaces. My approach combines clean, semantic HTML, modern CSS techniques, and JavaScript frameworks to create engaging experiences that work across all devices.',
      techStack: [
        {
          name: 'TypeScript',
          icon: 'assets/tech-icons/typescript.svg',
          proficiency: 85,
        },
        {
          name: 'React',
          icon: 'assets/tech-icons/react.svg',
          proficiency: 95,
        },
        {
          name: 'Angular',
          icon: 'assets/tech-icons/angular.svg',
          proficiency: 90,
        },
        {
          name: 'CSS/SCSS',
          icon: 'assets/tech-icons/css.svg',
          proficiency: 90,
        },
        {
          name: 'Tailwind',
          icon: 'assets/tech-icons/tailwind.svg',
          proficiency: 85,
        },
        {
          name: 'Redux',
          icon: 'assets/tech-icons/redux.svg',
          proficiency: 80,
        },
        {
          name: 'Jest',
          icon: 'assets/tech-icons/jest.svg',
          proficiency: 75,
        },
        {
          name: 'Vitest',
          icon: 'assets/tech-icons/webpack.svg',
          proficiency: 70,
        },
      ],
    },
    {
      name: 'Backend',
      icon: 'assets/icons/backend_purple.svg',
      level: 60,
      description:
        'I build robust, scalable backend systems with a focus on clean architecture, API design, and efficient data handling. My experience spans from RESTful services to real-time applications.',
      techStack: [
        {
          name: 'Node.js',
          icon: 'assets/tech-icons/nodejs.svg',
          proficiency: 85,
        },
        {
          name: 'Express',
          icon: 'assets/tech-icons/express.svg',
          proficiency: 80,
        },

        {
          name: 'PostgreSQL',
          icon: 'assets/tech-icons/postgresql.svg',
          proficiency: 70,
        },
        {
          name: 'GraphQL',
          icon: 'assets/tech-icons/graphql.svg',
          proficiency: 65,
        },
        {
          name: 'REST API',
          icon: 'assets/tech-icons/api.svg',
          proficiency: 90,
        },
        {
          name: 'Python',
          icon: 'assets/tech-icons/python.svg',
          proficiency: 60,
        },
        {
          name: 'Java',
          icon: 'assets/tech-icons/java.svg',
          proficiency: 50,
        },
      ],
    },
    {
      name: 'Server',
      icon: 'assets/icons/server_purple.svg',
      level: 40,
      description:
        'I have experience with cloud infrastructure, deployment pipelines, and server management. I focus on creating reliable, secure, and efficient hosting environments for web applications.',
      techStack: [
        {
          name: 'AWS',
          icon: 'assets/tech-icons/aws.svg',
          proficiency: 65,
        },
        {
          name: 'Docker',
          icon: 'assets/tech-icons/docker.svg',
          proficiency: 60,
        },
        {
          name: 'Kubernetes',
          icon: 'assets/tech-icons/kubernetes.svg',
          proficiency: 40,
        },
        {
          name: 'MongoDB',
          icon: 'assets/tech-icons/mongodb.svg',
          proficiency: 75,
        },
        {
          name: 'CI/CD',
          icon: 'assets/tech-icons/cicd.svg',
          proficiency: 70,
        },
        {
          name: 'Linux',
          icon: 'assets/tech-icons/linux.svg',
          proficiency: 60,
        },
        {
          name: 'Terraform',
          icon: 'assets/tech-icons/terraform.svg',
          proficiency: 35,
        },
        {
          name: 'Monitoring',
          icon: 'assets/tech-icons/monitoring.svg',
          proficiency: 50,
        },
      ],
    },
    {
      name: 'Soft Skills',
      icon: 'assets/icons/softskills_purple.svg',
      level: 90,
      description:
        'Beyond technical abilities, I bring strong communication, collaboration, and problem-solving skills to every team. I believe that great software is built by people who work well together.',
      techStack: [
        {
          name: 'Communication',
          icon: 'assets/tech-icons/communication.svg',
          proficiency: 95,
        },
        {
          name: 'Teamwork',
          icon: 'assets/tech-icons/teamwork.svg',
          proficiency: 90,
        },
        {
          name: 'Problem Solving',
          icon: 'assets/tech-icons/problem-solving.svg',
          proficiency: 95,
        },
        {
          name: 'Agile/Scrum',
          icon: 'assets/tech-icons/agile.svg',
          proficiency: 85,
        },
        {
          name: 'Leadership',
          icon: 'assets/tech-icons/leadership.svg',
          proficiency: 80,
        },
        {
          name: 'Mentoring',
          icon: 'assets/tech-icons/mentoring.svg',
          proficiency: 85,
        },
        {
          name: 'Time Management',
          icon: 'assets/tech-icons/time-management.svg',
          proficiency: 80,
        },
        {
          name: 'Adaptability',
          icon: 'assets/tech-icons/adaptability.svg',
          proficiency: 90,
        },
      ],
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

  // Modal control properties
  selectedSkill: SkillCategory | null = null;
  skillAnimationState: 'in' | 'out' = 'in';
  constructor(
    private readonly ngParticlesService: NgParticlesService,
    private viewportScroller: ViewportScroller,
  ) {}

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

  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  /***Modal functions for About Section */

  // Modal methods
  openSkillModal(skill: SkillCategory): void {
    this.selectedSkill = skill;
    this.skillAnimationState = 'in';
    document.body.classList.add('overflow-hidden'); // Prevent scrolling when modal is open
  }

  closeSkillModal(): void {
    this.skillAnimationState = 'out';
    setTimeout(() => {
      this.selectedSkill = null;
      document.body.classList.remove('overflow-hidden');
    }, 300); // Match this to your animation duration
  }
}
