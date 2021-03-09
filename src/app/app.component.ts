import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './reducers/app.reducer';
import { WeatherActionTypes } from './actions/weather.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';

  constructor(
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.store.dispatch({ type: WeatherActionTypes.load });
  }
}
