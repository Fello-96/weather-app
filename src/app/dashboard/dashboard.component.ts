import { Component, OnInit } from '@angular/core';
import { DashboardTransferService } from 'src/services/dashboard-transfer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashTransferedArray: any[] = []
  constructor(private dataTransfer: DashboardTransferService) { }

  ngOnInit(): void {
    
    this.dashTransferedArray= this.dataTransfer.dashGet() 
    

  }

  

}
