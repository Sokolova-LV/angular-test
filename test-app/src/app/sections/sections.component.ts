import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngClass]="{'gray': strength === 'empty',
    'red': strength === 'weak',
    'yellow': strength === 'medium',
    'green': strength === 'strong'}">
    <div></div>
    <div *ngIf="strength !== 'empty'"></div>
    <div *ngIf="strength === 'strong'"></div>
    </div>
  `,
  styleUrl: './sections.component.css'
})
export class SectionsComponent {
  password: string = '';
  strength: string = '';

  updateStrength() {
    const length = this.password.length;

    if (length === 0) {
      this.strength = 'empty';
    } else if (length < 8) {
      this.strength = 'weak';
    } else if (/[a-zA-Z]/.test(this.password) && /[0-9]/.test(this.password) && /[^a-zA-Z0-9]/.test(this.password)) {
      this.strength = 'strong';
    } else {
      this.strength = 'medium';
    }
  }
}




  
