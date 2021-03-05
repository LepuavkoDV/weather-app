import { Component, OnInit, Input } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Store } from '@ngrx/store';
import { setTheme } from '../../state/app.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
  }

  toggleTheme($event: MatSlideToggleChange): void {
    const theme = $event.checked ? 'dark' : 'light';
    this.store.dispatch(setTheme({ theme }));
  }

}
