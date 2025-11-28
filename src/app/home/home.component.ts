import {
  Component,
  AfterViewInit,
  QueryList,
  ElementRef,
  ViewChildren,
  HostListener,
} from '@angular/core';
import {
  SKILL_CATEGORIES,
  SkillCategory,
  TechItem,
} from './constants/skill-categories.constant';
import { PROJECTS, Project } from './constants/projects.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChildren('skillCard') skillCards!: QueryList<ElementRef>;
  currentYear: number = new Date().getFullYear();

  // About section
  skillCategories: SkillCategory[] = SKILL_CATEGORIES;

  // Projects section
  projects: Project[] = PROJECTS;

  // Scroll to section handler
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Projects section modal handlers (still needed for ProjectsComponent)
  selectedProject: Project | null = null;
  openModal(project: Project) {
    this.selectedProject = project;
  }
  closeModal() {
    this.selectedProject = null;
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.selectedProject) {
      this.closeModal();
    }
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
  }
}
