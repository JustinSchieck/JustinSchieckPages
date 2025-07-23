import {
  Component,
  OnInit,
  AfterViewInit,
  QueryList,
  ElementRef,
  ViewChildren,
  HostListener,
} from '@angular/core';

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
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChildren('skillCard') skillCards!: QueryList<ElementRef>;
  currentYear: number = new Date().getFullYear();

  // Hero section
  id = 'tsparticles';
  particlesOptions: any = {}; // Set your particles options here
  particlesLoaded = (event: any) => {};

  // About section
  skillCategories: SkillCategory[] = []; // Populate with your skills
  selectedSkill: SkillCategory | null = null;
  skillAnimationState: string = '';

  // Projects section
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
  selectedProject: Project | null = null;

  // Scroll to section handler
  scrollToSection(section: string) {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // About section modal handlers
  openSkillModal(skill: SkillCategory) {
    this.selectedSkill = skill;
    this.skillAnimationState = 'in';
  }

  closeSkillModal() {
    this.skillAnimationState = 'out';
    setTimeout(() => {
      this.selectedSkill = null;
      this.skillAnimationState = '';
    }, 200); // Match your fade-out animation duration
  }

  // Projects section modal handlers
  openModal(project: Project) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: KeyboardEvent) {
    if (this.selectedSkill) {
      this.closeSkillModal();
    }
    if (this.selectedProject) {
      this.closeModal();
    }
  }

  ngOnInit(): void {
    // Initialize skillCategories, particlesOptions, etc.
  }

  ngAfterViewInit(): void {}
}
