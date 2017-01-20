import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
@Component({
  selector: 'new-meal',
  template: `<div>
      <div *ngIf="childNewMeal">
        <h3>add meal</h3>
          <label for="name">name: </label>
          <input #newName type="text">
          <label for="author">time: </label>
          <input #newTime type="time">
          <br>
          <button (click)="submitForm(newName.value, newTime.value); newName.value=''; newTime.value='';">add</button>
      </div>
    </div>`
})
export class NewMealComponent{
  @Input() childNewMeal: Meal;
  @Output() newMealSender = new EventEmitter();
  submitForm(name: string, time){
    var newMeal: Meal = new Meal(name, [1,1,1,1], time);
    this.newMealSender.emit(newMeal);
  }
}
