import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/core';
import { AppComponent }   from './app.component';
import { NewMealComponent } from './new-meal.component';
import { AllMealsComponent } from './all-meals.component';
import { EditMealComponent } from './edit-meal.component';
import { ByFoodGroupPipe } from './by-food-group.pipe';

@NgModule({
  imports: [ BrowserModule,
              FormsModule ],
  declarations: [ AppComponent,
                  AllMealsComponent,
                  EditMealComponent,
                  NewMealComponent,
                  ByFoodGroupPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
