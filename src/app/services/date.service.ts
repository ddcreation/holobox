import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  public currentDate$: BehaviorSubject<Date>;

  private _timer: Date = new Date();

  constructor() {
    this.currentDate$ = new BehaviorSubject(this._timer);
    setInterval(() => this.currentDate$.next(new Date()), 1000);
  }
}
