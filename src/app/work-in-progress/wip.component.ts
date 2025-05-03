import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-wip',
  templateUrl: './wip.component.html',
  styleUrl: './wip.component.scss'
})
export class WipComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const canvas: HTMLCanvasElement = this.el.nativeElement.querySelector('#circuit-bg');
    const context = canvas.getContext('2d')!;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const points = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3
    }));

    function draw() {
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < points.length; i++) {
        let point = points[i];

        // Move point
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;

        // Draw node
        context.beginPath();
        context.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
        context.fillStyle = 'rgba(255,255,255,0.6)';
        context.fill();

        // Draw lines
        for (let j = i + 1; j < points.length; j++) {
          let p2 = points[j];
          let distribution = Math.hypot(point.x - p2.x, point.y - p2.y);
          if (distribution < 100) {
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(p2.x, p2.y);
            context.strokeStyle = 'rgba(255,255,255,' + (1 - distribution / 100) * 0.3 + ')';
            context.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    }

    draw();
    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }
}
