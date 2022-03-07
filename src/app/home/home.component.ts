import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DashboardTransferService } from 'src/services/dashboard-transfer.service';
import { HttpService } from 'src/services/httpService';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // form value
  cityForm = new FormGroup(
    {
      city: new FormControl('')
    })
  
  // weather http request handler
  cityData: any
  cardArray: any[] = []
  showError: boolean = false
  disabled: boolean = false

constructor(private http: HttpService, private transferData: DashboardTransferService) { }

ngOnInit(): void {
    
}

  // onSubmit http request is triggered
  onSubmit(){
   
    this.http.getWeather(this.cityForm.value.city).subscribe({
      next: (data) => {
        this.cityData = data
        this.cityData.disabled = false
        this.cardArray.push(this.cityData)
        this.showError = false
      },
      error: (err) => this.showError = true
    })
    this.cityForm.reset()
  }

  //onClick passing array data with index while the add button become disabled
  onClick(index: number){
      this.transferData.dashAdd(this.cardArray[index])
      this.cardArray[index].disabled = true
  }



}
