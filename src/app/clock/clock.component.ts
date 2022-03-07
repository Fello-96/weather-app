import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  loaded: boolean = true
  timeCharged: boolean = false
  timeDisplayer: string = ''
  dateTime: any
  interval:any 

  constructor() { }

  ngOnInit(): void {
    this.clockTime()
  }

  ngOnDestroy(){
    clearInterval(this.interval)
    
  }

  clockTime(){
    this.interval = setInterval( () => {
      this.dateTime = new Date
      this.loaded = false
      this.timeCharged = true
    }, 1000)
    
  }
  
  
}
