import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { NewMealComponent } from './new-meal.component';
import { AllMealsComponent } from './all-meals.component';
import { EditMealComponent } from './edit-meal.component';
import { ByFoodGroupPipe } from './by-food-group.pipe';
import { ByProcessPipe } from './by-process.pipe';

@NgModule({
  imports: [ BrowserModule,
              FormsModule ],
  declarations: [ AppComponent,
                  AllMealsComponent,
                  EditMealComponent,
                  NewMealComponent,
                  ByFoodGroupPipe,
                  ByProcessPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
