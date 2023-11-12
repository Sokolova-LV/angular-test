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
        <input [(ngModel)]="password" (ngModelChange)="updateStrength()" type="password" placeholder="Enter your password" />
      </form>
    </section>
    <section class="results">
      <app-sections></app-sections>
    </section>
  `,
  styleUrl: './field.component.css'
})
export class FieldComponent {
  
}
