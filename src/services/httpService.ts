import { Injectable } from "@angular/core";
import {HttpClient, HttpClientModule} from '@angular/common/http'

@Injectable({providedIn: 'root'})
export class HttpService{
    constructor(private http:HttpClient){}

    key: string = 'c8f5bb5128dc1d5b9590cfc578b5b7f8'

    getWeather(input: string){
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&lang=en&appid=${this.key}`)
    }
}

