import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(): Subject<string> {
    const data = new Subject<string>();
    this.http
      .get(`https://community-open-weather-map.p.rapidapi.com/weather?q=Moscow,ru&units=metric`, {
        headers: {
          'x-rapidapi-key': 'f6ec054409msh6b81feb5aef6c24p1054b2jsn9f79e10d9358',
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        }
      })
      .subscribe(
        (res: string) => data.next(res),
        (err) => console.error(err),
      );
    return data;
  }
}
