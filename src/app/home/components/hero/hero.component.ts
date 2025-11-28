import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @Output() sectionScroll = new EventEmitter<string>();

  constructor() {}

  emitScrollToSection(section: string) {
    this.sectionScroll.emit(section);
  }
}
