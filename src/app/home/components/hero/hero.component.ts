import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { NgParticlesService } from '@tsparticles/angular';
import { Container, tsParticles } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';

interface Particle {
  element: HTMLElement;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  opacity: number;
  color: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @Output() sectionScroll = new EventEmitter<string>();

  particles: number[] = Array.from({ length: 200 }, (_, i) => i + 1);
  private particleObjects: Particle[] = [];
  private animationId: number = 0;
  private isAnimating = false;

  ngOnInit(): void {
    console.log('App Loaded');
  }

  ngAfterViewInit(): void {
    // Wait longer to ensure DOM is fully rendered
    setTimeout(() => {
      this.initializeParticles();
      this.startAnimation();
    }, 300);
  }

  ngOnDestroy(): void {
    this.stopAnimation();
  }

  private initializeParticles(): void {
    const wrapElement = document.querySelector('.wrap') as HTMLElement;
    if (!wrapElement) return;

    const particles = wrapElement.querySelectorAll(
      '.tri',
    ) as NodeListOf<HTMLElement>;

    particles.forEach((particle, index) => {
      // Random initial properties for starfield effect
      const size = Math.random() * 3 + 1; // 1-4px for varied star sizes
      const brightness = Math.random() * 0.5 + 0.5; // 0.5-1.0 brightness
      const color =
        Math.random() > 0.8
          ? `hsl(${Math.random() * 60 + 180}, 100%, 100%)` // Occasional blue/cyan stars
          : `hsl(0, 0%, ${brightness * 100}%)`; // Mostly white stars

      // Set initial styles
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = color;
      particle.style.color = color; // For box-shadow currentColor
      particle.style.marginLeft = `${-size / 2}px`;
      particle.style.marginTop = `${-size / 2}px`;

      // Create particle object
      const particleObj: Particle = {
        element: particle,
        x: Math.random() * 2000 - 1000, // -1000 to 1000
        y: Math.random() * 2000 - 1000,
        z: -1500 + Math.random() * 2500, // -1500 to 1000
        vx: (Math.random() - 0.5) * 1, // Slower lateral movement
        vy: (Math.random() - 0.5) * 1,
        vz: Math.random() * 3 + 2, // Faster forward movement for starfield effect
        rotation: 0, // No rotation for stars
        rotationSpeed: 0,
        size: size,
        opacity: brightness,
        color: color,
      };

      this.particleObjects.push(particleObj);

      // Set initial transform
      this.updateParticleTransform(particleObj);
    });
  }

  private updateParticleTransform(particle: Particle): void {
    const scale = Math.max(0, Math.min(1, (particle.z + 1500) / 2500));
    particle.element.style.transform = `translate3d(${particle.x}px, ${particle.y}px, ${particle.z}px)
       rotate(${particle.rotation}deg)
       scale(${scale})`;
    particle.element.style.opacity = (particle.opacity * scale).toString();
  }

  private animate = (): void => {
    if (!this.isAnimating) return;

    this.particleObjects.forEach((particle) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.z += particle.vz;
      particle.rotation += particle.rotationSpeed;

      // Reset if too far
      if (particle.z > 1000) {
        particle.z = -1500;
        particle.x = Math.random() * 2000 - 1000;
        particle.y = Math.random() * 2000 - 1000;
        particle.opacity = Math.random();
      }

      // Boundary checks
      if (Math.abs(particle.x) > 1000) particle.vx *= -1;
      if (Math.abs(particle.y) > 1000) particle.vy *= -1;

      this.updateParticleTransform(particle);
    });

    this.animationId = requestAnimationFrame(this.animate);
  };

  private startAnimation(): void {
    this.isAnimating = true;
    this.animate();
  }

  private stopAnimation(): void {
    this.isAnimating = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  emitScrollToSection(section: string) {
    this.sectionScroll.emit(section);
  }
}
