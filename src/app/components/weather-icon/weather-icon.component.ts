import { Component, OnInit, Input } from '@angular/core';
import { weather } from '../../shared/types/weather';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss']
})

export class WeatherIconComponent implements OnInit {
  @Input() type: weather;
  imagePath = 'assets/images/';
  imageExt = 'png';
  constructor() { }

  ngOnInit(): void {
  }

  getImageUrl(): string {
    return `${this.imagePath}${this.type}_icon.${this.imageExt}`;
  }

}
