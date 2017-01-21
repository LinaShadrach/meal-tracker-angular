import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
import { FoodGroupList } from './food-group-list.model';
@Component({
  selector: 'all-meals',
  template: `
    <div class="filter">
      <label>filter by processed or unprocessed.</label>
      <select (change)="onProcessChange($event.target.value)">
        <option value="allMeals">all meals</option>
        <option value="processed">processed meals</option>
        <option value="unprocessed">unprocessed meals</option>
      </select>
    </div>
    <br><br><br><br>
    <div *ngFor="let meal of childMealList | byProcess:filterByProcess" class="mealBox">
      <ol>
        <li><h3 (click)="editMealButtonClicked(meal)">{{meal.name}}</h3><h4>eaten at {{meal.time}}</h4></li>

        <ul>
          <li *ngFor="let foodGroup of meal.amounts; let i=index"> {{masterFoodGroupList[i]}}: {{foodGroup}}</li>
        </ul>
      </ol>
    </div>
  `
})
export class AllMealsComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  filterByProcess: string = "allMeals";
  tempFoodGroup = new FoodGroupList();
  masterFoodGroupList = this.tempFoodGroup.foodGroupList;

  editMealButtonClicked(mealToEdit: Meal) {
    console.log("in edit button");
    this.clickSender.emit(mealToEdit);
  }
  onProcessChange(optionFromMenu) {
    this.filterByProcess = optionFromMenu;
    console.log("changed");
  }
}
