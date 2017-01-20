import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';
@Pipe({
  name: "byProcess",
  pure: false
})
export class ByProcessPipe implements PipeTransform {
  transform(input: Meal[], desiredProcess){
    var output: Meal[] = [];
    if(desiredProcess === "processed") {
      for(var i=0; i<input.length; i++) {
        if(input[i].processed===true) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredProcess === "unprocessed") {
      for(var i=0; i<input.length; i++){
        if(input[i].processed===false) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }

  }
}
