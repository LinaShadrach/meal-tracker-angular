import { Component } from '@angular/core';
import { Meal } from './meal.model';
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      <h1>Meal Tracker</h1>
      <h3>{{meal}}</h3>
      <h4>{{currentTime}}</h4>
  </div>
  `
})
export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  meal = new Meal("macaroni and cheese", [1, 1, 1, 0], this.currentTime);
}
