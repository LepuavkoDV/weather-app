import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/app.reducer';
import { selectTheme } from '../../selectors/app.selector';
import { Observable } from 'rxjs';
import { theme, ThemeTypes } from '../../types/theme';
import { IWeather } from '../../types/IWeather';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() weather: IWeather;
  theme$: Observable<theme>;
  Themes = ThemeTypes;
  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.theme$ = this.store.select(selectTheme);
  }

}
