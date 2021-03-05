import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ISettings } from '../../shared/types/ISettings';
import { AppState } from '../../state/app.state';
import { selectSettings } from '../../state/app.selector';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  cards: number[] = [1, 2, 3];
  settings$: Observable<ISettings> = this.store.select(selectSettings);

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    console.log(this.settings$);
    console.log(this.store);
  }

}
