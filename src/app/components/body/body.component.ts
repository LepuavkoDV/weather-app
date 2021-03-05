import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  cards: number[] = [1, 2, 3];
  theme: Observable<string>;

  constructor(
    private store: Store<AppState>,
  ) {
    this.theme = store.pipe(select(state => state.settings.theme));
  }

  ngOnInit(): void {}

}
