import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgParticlesService } from '@tsparticles/angular';
import { Container, tsParticles } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @Output() sectionScroll = new EventEmitter<string>();
  particles: number[] = Array.from({ length: 200 }, (_, i) => i + 1);

  intervalId: ReturnType<typeof setInterval> | undefined;
  ngOnInit(): void {
    console.log('App Loaded');
  }

  emitScrollToSection(section: string) {
    this.sectionScroll.emit(section);
  }
}
