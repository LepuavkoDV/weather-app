import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/app.reducer';
import { setNewTheme } from '../../actions/app.actions';
import { selectTheme } from '../../selectors/app.selector';
import { Observable } from 'rxjs';
import { theme, ThemeTypes } from '../../types/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  theme$: Observable<theme>;
  Themes = ThemeTypes;
  constructor(
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.theme$ = this.store.select(selectTheme);
  }

  toggleTheme($event: MatSlideToggleChange): void {
    const newTheme = $event.checked ? ThemeTypes.dark : ThemeTypes.light;
    this.store.dispatch(setNewTheme({ newTheme }));
  }

}
