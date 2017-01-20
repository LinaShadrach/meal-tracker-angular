import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
@Component({
  selector: 'all-meals',
  template: `
    <label>filter by processed or unprocessed.</label>
    <select (change)="onProcessChange($event.target.value)">
      <option value="allMeals">all meals</option>
      <option value="processed">processed meals</option>
      <option value="unprocessed">unprocessed meals</option>
    </select>
    <div *ngFor="let meal of childMealList | byProcess:filterByProcess">
      <h4>{{meal.name}}</h4>
      <ul>
        <li *ngFor="let foodGroup of meal.amounts"> {{foodGroup}}</li>
      </ul>
      <button (click)="editMealButtonClicked(meal)">Edit</button>
    </div>
  `
})
export class AllMealsComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  filterByProcess: string = "allMeals";
  editMealButtonClicked(mealToEdit: Meal) {
    console.log("in edit button");
    this.clickSender.emit(mealToEdit);
  }
  onProcessChange(optionFromMenu) {
    this.filterByProcess = optionFromMenu;
    console.log("changed");
  }
}
