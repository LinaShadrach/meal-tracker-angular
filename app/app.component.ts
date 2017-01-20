import { Component } from '@angular/core';
import { Meal } from './meal.model';
import { FoodGroupList } from './food-group-list.model';
import { NewMealComponent} from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { AllMealsComponent} from './all-meals.component';
@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <all-meals [childMealList]="masterMealList" (clickSender)="editMeal($event)"></all-meals>
      <button (click)="showAddMealForm();">add meal</button>
      <new-meal [childNewMeal]="addMeal" (newMealSender)="addMealToList($event)"></new-meal>
      <edit-meal [childMealToEdit]="selectedMeal" (doneEditingClickSender)="doneEditing()"></edit-meal>
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
  selectedMeal =null;
  masterMealList: Meal[] = [
    new Meal("macaroni and cheese", true, [1, 0, 1, 1, 1, 0], this.currentTime)
  ];
  showAddMealForm() {
    this.addMeal = true;
  }
  editMeal(clickedMeal) {
    console.log("in edit");
      this.selectedMeal = clickedMeal;
  }
  doneEditing() {
    this.selectedMeal = null;
  }
  addMealToList(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
    this.addMeal = false;
  }
}
