import { Component, ElementRef, ViewChild, ViewRef } from '@angular/core';

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other'
}
export type Dog = { id:number, name: string, age: number, gender: Gender };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // DogGender = Gender;

  dateNow: Date = new Date();

  @ViewChild('ingenHundValgt')
  ingenHund?: ElementRef<HTMLElement>;

  selectedDog: Dog | null = null;


  constructor() {}


}
