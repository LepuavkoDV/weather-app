import { Component, OnInit } from '@angular/core';
import { weather } from '../../types/weather';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  weather: weather = 'sunny';
  constructor() { }

  ngOnInit(): void {
  }

}
