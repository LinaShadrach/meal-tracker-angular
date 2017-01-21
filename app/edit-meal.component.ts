import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AllMealsComponent }from './all-meals.component';
import { FoodGroupList } from './food-group-list.model';
import { Meal } from './meal.model';
@Component({
  selector: 'edit-meal',
  template: `
  <div>
    <div *ngIf="childMealToEdit">
    <h2>{{childMealToEdit.name}}</h2>
    <h3>{{childMealToEdit.time}}</h3>
    <ul>
      <li *ngFor="let foodGroup of childMealToEdit.amounts; let i=index"> {{masterFoodGroupList[i]}}: {{foodGroup}}</li>
    </ul>
      <h3>edit meal</h3>
      <div>
        <label for="name">name: </label>
        <input [(ngModel)]=childMealToEdit.name type="text">
        <label for="time">time: </label>
        <input [(ngModel)]=childMealToEdit.time type="time">
        <br>
      </div>
      <h4>food group servings: </h4>
        <label for="fats">fats: </label>
        <input [(ngModel)]=childMealToEdit.amounts[0] type="number">
        <label for="fruits">fruits: </label>
        <input [(ngModel)]=childMealToEdit.amounts[1] type="number">
        <label for="grains">grains: </label>
        <input [(ngModel)]=childMealToEdit.amounts[2] type="number">
        <label for="protein">protein: </label>
        <input [(ngModel)]=childMealToEdit.amounts[3] type="number">
        <label for="vegetables">vegetables: </label>
        <input [(ngModel)]=childMealToEdit.amounts[4] type="number">
        <label for="sweets">sweets: </label>
        <input [(ngModel)]=childMealToEdit.amounts[5] type="number">
        <br>
        <label>processed or unprocessed?</label>
        <br>
        <input name="processed"  [(ngModel)]="childMealToEdit.processed" type="radio" [value]="true"> processed
        <input name="processed" [(ngModel)]="childMealToEdit.processed"[value]="false" type="radio"> unprocessed
        <br>
        <button (click)="doneEditingClicked();">done editing</button>
    </div>
  </div>
  `
})
export class EditMealComponent{
  @Input() childMealToEdit: Meal;
  @Output() doneEditingClickSender = new EventEmitter();
  tempFoodGroup = new FoodGroupList();
  masterFoodGroupList = this.tempFoodGroup.foodGroupList;
  doneEditingClicked() {
    this.doneEditingClickSender.emit();
  }
}
