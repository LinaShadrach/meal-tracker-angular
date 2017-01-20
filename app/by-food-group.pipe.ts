import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';
@Pipe({
  name: "by-food-group",
  pure: false
})
export class ByFoodGroupPipe implements PipeTransform {
  transform(){
    
  }
}
