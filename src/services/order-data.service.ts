import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {



  constructor() { }


  orderAZ(input: any[]){
    input.sort((a, b) => (a.name > b.name) ? 1 : -1)
    return input
  }


  orderZA(input: any[]){
    input.sort((a, b) => (a.name > b.name) ? 1 : -1).reverse()
    return input
  }
}
