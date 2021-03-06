import { Component, OnInit } from '@angular/core';
import { weather, Weathers } from '../../types/weather';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/app.reducer';
import { selectTheme } from '../../selectors/app.selector';
import { Observable } from 'rxjs';
import { theme, Themes } from '../../types/theme';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  weather: weather = Weathers.sunny;
  theme$: Observable<theme>;
  Themes = Themes;
  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.theme$ = this.store.select(selectTheme);
  }

}
