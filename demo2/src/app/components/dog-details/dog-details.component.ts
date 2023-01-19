import { Component, Input } from '@angular/core';
import { Dog } from 'src/app/app.component';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.scss']
})
export class DogDetailsComponent {
  @Input('dog')
  selectedDog: Dog | null = null;
}
