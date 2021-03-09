import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { WeatherService } from '../services/weather.service';
import { WeatherActionTypes } from '../actions/weather.actions';

@Injectable()
export class WeatherEffects {
  loadWeather$ = createEffect(() => this.actions$.pipe(
      ofType(WeatherActionTypes.load),
      mergeMap(() => this.weatherService.getWeather()
        .pipe(
          map(weather => ({ type: WeatherActionTypes.loadSuccess, weather })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService,
  ) {}
}
