export class Meal {
  public time= new Date();
  constructor(public name: string, public amounts: number[], time){
    this.time = time;
  }
}
