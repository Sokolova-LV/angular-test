import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsComponent } from '../sections/sections.component';

@Component({
  selector: 'app-field',
  standalone: true,
  imports: [CommonModule, SectionsComponent],
  template: `
    <section>
      <form>
        <input [ngModel]="password" (ngModelChange)="updateStrength()" type="password" placeholder="Enter your password" />
      </form>
    </section>
    <section class="results">
      <app-sections></app-sections>
    </section>
  `,
  styleUrl: './field.component.css'
})
export class FieldComponent {
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
