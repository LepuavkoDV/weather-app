import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ISettings } from '../../shared/types/ISettings';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  cards: number[] = [1, 2, 3];
  settings$: Observable<ISettings>;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    // this.settings$ = this.store.select()
  }

}
