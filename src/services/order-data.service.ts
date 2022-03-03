import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {

  constructor() { }

  //ascending ordering using built-in JS method sort that order element based on their ASCII value
  //sort method take a callback function that compares 2 arguments and returning positve and negative value 
  orderAZ(input: any[]){
    return input.sort((a, b) => (a.name > b.name) ? 1 : -1 )
     
  }

  //do the same thing of method orderAZ but with the built-in JS method reverse() we get the descending order
  orderZA(input: any[]){
    return  input.sort((a, b) => (a.name > b.name) ? 1 : -1).reverse()
    
  }

  // sorting temperature from max to min
  orderHottest(input: any[]){
    return input.sort((a,b) => (a.main.temp_max < b.main.temp_max) ? 1 : -1)
  }

  //sorting temperature from min to max just reversing the function ^ above ^
  orderColdest(input: any[]){
    return input.sort((a,b) => (a.main.temp_max < b.main.temp_max) ? 1 : -1).reverse()
  }
}
