import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.scss',
})
export class DatabindingComponent {
  string = 'This is a string';
  number = 10;
  attachClass = false;
  backgroundColor = 'lightblue';

  firstName = 'John';
  lastName = 'Doe';

  constructor() {
    setTimeout(() => {
      this.string = 'The number changed →';
      this.number += 5;
      this.attachClass = true;
    }, 3000);
  }
}
