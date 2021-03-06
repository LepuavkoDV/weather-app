import { Component, OnInit, Input } from '@angular/core';
import { weather } from '../../types/weather';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss']
})

export class WeatherIconComponent implements OnInit {
  @Input() weather: weather;
  imagePath = 'assets/images/';
  imageExt = 'png';
  imageSuffix = '_icon';

  constructor() { }

  ngOnInit(): void {
  }

  getImageUrl(): string {
    return `${this.imagePath}${this.weather.toLowerCase()}${this.imageSuffix}.${this.imageExt}`;
  }

}
