import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-tab',
  templateUrl: './filter-tab.component.html',
  styleUrls: ['./filter-tab.component.css']
})
export class FilterTabComponent implements OnInit {

  //material field
  panelOpenState = false;

  //array from dashboard
  @Input() orderedArray: any[] = []
  @Input() indexReceived: any

  
  constructor() { }

  ngOnInit(): void {
    
    
  }




}
