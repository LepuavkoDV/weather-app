import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(): Subject<string> {
    const data = new Subject<string>();
    this.http
      .get(`https://community-open-weather-map.p.rapidapi.com/weather?q=Kiev,ua&units=metric`, {
        headers: {
          'x-rapidapi-key': environment.xRapidapiKey,
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
