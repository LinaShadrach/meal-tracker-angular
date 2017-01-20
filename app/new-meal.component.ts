import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
import { FoodGroupList } from './food-group-list.model';
@Component({
  selector: 'new-meal',
  template: `
    <div>
      <div *ngIf="childNewMeal">
        <h3>add meal</h3>
        <div>
          <label for="name">name: </label>
          <input #newName type="text">
          <label for="time">time: </label>
          <input #newTime type="time">
          <br>
        </div>
        <h4>Food Group Servings: </h4>
        <label for="fats">fats: </label>
        <input #fats type="number">
        <label for="fruits">fruits: </label>
        <input #fruits type="number">
        <label for="grains">grains: </label>
        <input #grains type="number">
        <label for="protein">protein: </label>
        <input #protein type="number">
        <label for="vegetables">vegetables: </label>
        <input #vegetables type="number">
        <label for="sweets">sweets: </label>
        <input #sweets type="number">
        <div>
          <label>processed or unprocessed?</label>
          <br>
          <input name="processed" (change)="updateProcessed(true);" type="radio"> processed
          <input name="processed" (change)="updateProcessed(false);" type="radio"> unprocessed
        </div>
        <button (click)="submitForm(newName.value, [fats.value, fruits.value, grains.value, protein.value, vegetables.value, sweets.value], newTime.value); newName.value=''; newTime.value='';">add</button>
      </div>
    </div>
  `
})
export class NewMealComponent{
  @Input() childNewMeal: Meal;
  @Output() newMealSender = new EventEmitter();
  processed = null;
  updateProcessed(processed: boolean){
    this.processed = processed;
  }
  submitForm(name: string, foodGroups: number[], time){
    var newMeal: Meal = new Meal(name, this.processed, foodGroups, time);
    this.newMealSender.emit(newMeal);
  }

}
