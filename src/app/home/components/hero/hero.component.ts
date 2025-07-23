import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @Input() id: string = 'tsparticles';
  @Input() particlesOptions: any;
  @Input() particlesLoaded: (event: any) => void = () => {};
}
