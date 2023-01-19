import { Component, EventEmitter, Output } from '@angular/core';
import { Dog, Gender } from 'src/app/app.component';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent {
  @Output()
  dogChanged: EventEmitter<Dog> = new EventEmitter();

  dogs: Dog[] = [
    { id:1, name: 'Fido', age: 12, gender: Gender.Male },
    { id:2,name: 'Garfield', age: 7, gender: Gender.Female },
    { id:3,name: 'Anders And', age: 7, gender: Gender.Male },
    { id:4,name: 'Fedtmule', age: 7, gender: Gender.Other },
  ];

  showAge: boolean = false;

  setSelectedDog(hund: Dog): void {
    this.dogChanged.emit(hund);
  }

  toggleAge(): void {
    this.showAge = !this.showAge;
  }

  trackDog(index: number, dog: Dog): number {
    return dog.id;
  }

}
