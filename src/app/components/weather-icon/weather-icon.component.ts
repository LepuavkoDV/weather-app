import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss']
})

export class WeatherIconComponent implements OnInit {
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }

  getImageUrl(): string {
    return `http://openweathermap.org/img/wn/${this.icon}@2x.png`;
  }

}
