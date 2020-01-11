import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      {{ random }}
    </p>
    <button>{{ value }}</button>
  `,
  styles: []
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
  random;

  constructor() {
    setInterval(() => this.random = Math.random(),500);
  }
  
}
