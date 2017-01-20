import { Component } from '@angular/core';
import { Meal } from './meal.model';
import { NewMealComponent} from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { AllMealsComponent} from './all-meals.component';
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <ol>
      <li *ngFor="let meal of masterMealList">{{meal.name}}</li>
    </ol>
    <button (click)="showAddMealForm();">add meal</button>
    <new-meal [childNewMeal]="addMeal" (newMealSender)="addMealToList($event)"></new-meal>
    <h4>{{currentTime}}</h4>
</div>

  `
})
export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  addMeal = null;
  allMealsShow = true;
  masterMealList: Meal[] = [
    new Meal("macaroni and cheese", [1, 1, 1, 0], this.currentTime)
  ];
  showAddMealForm() {
    this.addMeal = true;
  }

  addMealToList(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
    console.log(newMealFromChild.time);
    this.addMeal = false;

  }
}
