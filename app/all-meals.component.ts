import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
@Component({
  selector: 'all-meals',
  template: `
    <label>filter by processed or unprocessed.</label>
    <select>
      <option value="allMeals">all meals</option>
      <option value="processedMeals">processed meals</option>
      <option value="unprocessedMeals">unprocessed meals</option>
    </select>
    <div *ngFor="let meal of childMealList">
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
  // filterByProcessed: string = "allMeals";
  editMealButtonClicked(mealToEdit: Meal) {
    console.log("in edit button");
    this.clickSender.emit(mealToEdit);
  }
  // onProcessedChange(optionFromMenu) {
  //   this.filterByFictioness = optionFromMenu;
  // }
}
