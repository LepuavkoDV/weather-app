import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState} from '../../reducers/app.reducer';
import { selectTheme } from '../../selectors/app.selector';
import { selectWeather } from '../../selectors/weather.selector';
import { TTheme, ThemeTypes} from '../../types/TTheme';
import { IWeather } from '../../types/IWeather';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  cards: number[] = [1];
  theme$: Observable<TTheme>;
  Themes = ThemeTypes;
  weather$: Observable<IWeather>;

  constructor(
    private store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
    this.theme$ = this.store.select(selectTheme);
    this.weather$ = this.store.select(selectWeather);
  }
}
