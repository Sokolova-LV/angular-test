import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FieldComponent } from './field/field.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FieldComponent],
  template: `
    <div>
      <label>Password strength checker</label>
      <app-field></app-field>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
}
