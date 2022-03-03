import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardTransferService {

  dashBoardArr: {}[] = []
  

  dashAdd(obj:{}){
    this.dashBoardArr.push(obj)
    return this.dashBoardArr
  }

  dashGet(){
    return this.dashBoardArr
  }
}
