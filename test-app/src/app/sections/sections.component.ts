import { Component, Input, OnChanges } from '@angular/core';
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
export class SectionsComponent
  implements OnChanges {
  @Input() strength: string = '';

  ngOnChanges() {
  }
}




  
